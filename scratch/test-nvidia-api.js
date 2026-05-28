const fs = require("fs");
const path = require("path");

// Manually parse .env.local
try {
  const envContent = fs.readFileSync(path.join(__dirname, "..", ".env.local"), "utf8");
  envContent.split("\n").forEach(line => {
    const match = line.match(/^\s*([\w.\-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value.trim();
    }
  });
} catch (err) {
  console.error("Failed to load .env.local file:", err.message);
}

const textKey = process.env.NVIDIA_TEXT_API_KEY;
const imageKey = process.env.NVIDIA_IMAGE_API_KEY;

console.log("Text API Key loaded: ", textKey ? textKey.slice(0, 15) + "..." : "MISSING");
console.log("Image API Key loaded:", imageKey ? imageKey.slice(0, 15) + "..." : "MISSING");

async function testTextApi() {
  if (!textKey) return console.log("Skipping Text API test: no key.");
  console.log("\n--- Testing LLaMA 3.3 Text API ---");
  try {
    const res = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${textKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta/llama-3.3-70b-instruct",
        messages: [{ role: "user", content: "Hello! Tell me in 5 words that you are online." }],
        temperature: 0.7,
        max_tokens: 50,
      }),
    });
    
    console.log("Text API HTTP Status:", res.status, res.statusText);
    const data = await res.json();
    if (res.ok) {
      console.log("Success! Response reply:", data.choices?.[0]?.message?.content);
    } else {
      console.error("Text API Error Response:", data);
    }
  } catch (err) {
    console.error("Text API Fetch Exception:", err.message);
  }
}

async function testImageApi() {
  if (!imageKey) return console.log("Skipping Image API test: no key.");
  console.log("\n--- Testing FLUX.1-dev Image API ---");
  try {
    const res = await fetch("https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.1-dev", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${imageKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        prompt: "A simple small green circle",
        width: 1024,
        height: 1024,
      }),
    });
    
    console.log("Image API HTTP Status:", res.status, res.statusText);
    const data = await res.json();
    if (res.ok) {
      console.log("Success! Image base64 returned (first 50 chars):", data.artifacts?.[0]?.base64?.slice(0, 50) + "...");
    } else {
      console.error("Image API Error Response:", data);
    }
  } catch (err) {
    console.error("Image API Fetch Exception:", err.message);
  }
}

async function run() {
  await testTextApi();
  await testImageApi();
}

run();
