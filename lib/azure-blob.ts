import { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } from "@azure/storage-blob";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!;
const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const containerName = process.env.AZURE_STORAGE_CONTAINER || "portal-files";

// Extract account key from connection string
function getAccountKey(): string {
  const match = connectionString.match(/AccountKey=([^;]+)/);
  return match ? match[1] : "";
}

export const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
export const containerClient = blobServiceClient.getContainerClient(containerName);

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
  const blobName = `${folder}/${Date.now()}-${fileName.replace(/\s+/g, "_")}`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  await blockBlobClient.uploadData(buffer, {
    blobHTTPHeaders: { blobContentType: mimeType },
  });

  return blobName; // Store relative path, generate SAS URLs on demand
}

/**
 * Generate a short-lived SAS URL for a blob (read access, 1 hour)
 * Greedy approach: only generate when needed, not in advance
 */
export function generateSasUrl(blobName: string, expiryMinutes = 60): string {
  const accountKey = getAccountKey();
  const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

  const expiresOn = new Date();
  expiresOn.setMinutes(expiresOn.getMinutes() + expiryMinutes);

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName,
      blobName,
      permissions: BlobSASPermissions.parse("r"),
      expiresOn,
    },
    sharedKeyCredential
  ).toString();

  return `https://${accountName}.blob.core.windows.net/${containerName}/${blobName}?${sasToken}`;
}

/**
 * Delete a blob from Azure Storage
 */
export async function deleteBlob(blobName: string): Promise<void> {
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.deleteIfExists();
}
