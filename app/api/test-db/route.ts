import { NextRequest, NextResponse } from "next/server";
import net from "net";
import tls from "tls";

export async function GET(req: NextRequest) {
  const host = "ac-chsjvk2-shard-00-00.3lhyxop.mongodb.net";
  const port = 27017;
  const results: any = {};

  // 1. Test raw TCP connection
  try {
    results.tcp = await new Promise((resolve) => {
      const socket = new net.Socket();
      socket.setTimeout(5000);
      socket.on("connect", () => {
        socket.destroy();
        resolve({ success: true, message: "TCP port is open" });
      });
      socket.on("timeout", () => {
        socket.destroy();
        resolve({ success: false, message: "TCP connection timed out" });
      });
      socket.on("error", (err) => {
        socket.destroy();
        resolve({ success: false, message: err.message });
      });
      socket.connect(port, host);
    });
  } catch (err: any) {
    results.tcp = { success: false, error: err.message };
  }

  // 2. Test TLS handshake
  try {
    results.tls = await new Promise((resolve) => {
      const socket = tls.connect({
        host,
        port,
        servername: host,
        rejectUnauthorized: false, // Let's check if it succeeds when ignoring auth
        timeout: 5000
      }, () => {
        const authorized = socket.authorized;
        const authorizationError = socket.authorizationError;
        const cipher = socket.getCipher();
        const protocol = socket.getProtocol();
        socket.destroy();
        resolve({ success: true, authorized, authorizationError, cipher, protocol });
      });

      socket.on("timeout", () => {
        socket.destroy();
        resolve({ success: false, message: "TLS handshake timed out" });
      });

      socket.on("error", (err) => {
        socket.destroy();
        resolve({ success: false, message: err.message, stack: err.stack });
      });
    });
  } catch (err: any) {
    results.tls = { success: false, error: err.message };
  }

  return NextResponse.json(results);
}
