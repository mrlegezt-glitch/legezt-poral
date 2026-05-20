import { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } from "@azure/storage-blob";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME || "";
const containerName = process.env.AZURE_STORAGE_CONTAINER || "portal-files";

// Extract account key from connection string
function getAccountKey(): string {
  if (!connectionString) return "";
  const match = connectionString.match(/AccountKey=([^;]+)/);
  return match ? match[1] : "";
}

// Lazy initialization of Clients
let _blobServiceClient: any = null;
let _containerClient: any = null;

function getBlobServiceClient() {
  if (!_blobServiceClient && connectionString) {
    _blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  }
  return _blobServiceClient;
}

function getContainerClient() {
  if (!_containerClient) {
    const srv = getBlobServiceClient();
    if (srv) {
      _containerClient = srv.getContainerClient(containerName);
    }
  }
  return _containerClient;
}

/**
 * Upload a file buffer to Azure Blob Storage
 * Returns the blob URL (without SAS — private)
 */
export async function uploadToBlob(
  buffer: Buffer,
  fileName: string,
  folder: "profiles" | "documents" | "messages" | "assignments",
  mimeType: string
): Promise<string> {
  const container = getContainerClient();
  if (!container) throw new Error("Azure storage is not configured");

  const blobName = `${folder}/${Date.now()}-${fileName.replace(/\s+/g, "_")}`;
  const blockBlobClient = container.getBlockBlobClient(blobName);

  await blockBlobClient.uploadData(buffer, {
    blobHTTPHeaders: { blobContentType: mimeType },
  });

  return blobName;
}

const ADMIN_SERVER_BASE = "https://admin.mrlegezt.me";

/**
 * Generate a download URL for a stored file.
 * Handles 3 cases:
 *   1. Already a full https:// URL (admin server or external) → return as-is
 *   2. /uploads/... path → prepend admin server base URL
 *   3. Azure blob path (documents/...) → generate SAS token
 */
export function generateSasUrl(fileUrl: string, expiryMinutes = 60): string {
  if (!fileUrl) return "";

  // Case 1: Already a full URL (e.g. from admin backend or previous migration)
  if (fileUrl.startsWith("https://") || fileUrl.startsWith("http://")) {
    return fileUrl;
  }

  // Case 2: Relative upload path from Express backend (e.g. /uploads/12345-file.pdf)
  if (fileUrl.startsWith("/uploads/") || fileUrl.startsWith("uploads/")) {
    const cleanPath = fileUrl.startsWith("/") ? fileUrl : `/${fileUrl}`;
    return `${ADMIN_SERVER_BASE}${cleanPath}`;
  }

  // Case 3: Azure Blob Storage path — generate SAS token
  const accountKey = getAccountKey();
  if (!accountKey || !accountName) {
    return ""; // Silent fallback during build/CI environment
  }
  const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

  const expiresOn = new Date();
  expiresOn.setMinutes(expiresOn.getMinutes() + expiryMinutes);

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName,
      blobName: fileUrl,
      permissions: BlobSASPermissions.parse("r"),
      expiresOn,
    },
    sharedKeyCredential
  ).toString();

  return `https://${accountName}.blob.core.windows.net/${containerName}/${fileUrl}?${sasToken}`;
}

/**
 * Delete a blob from Azure Storage
 */
export async function deleteBlob(blobName: string): Promise<void> {
  const container = getContainerClient();
  if (!container) return; // Silent skip during build/CI environment

  const blockBlobClient = container.getBlockBlobClient(blobName);
  await blockBlobClient.deleteIfExists();
}
