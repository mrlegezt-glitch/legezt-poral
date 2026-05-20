// Client-safe IndexedDB utility for Editor Studio draft recovery
const DB_NAME = "EditorStudioDrafts";
const DB_VERSION = 1;
const STORE_NAME = "drafts";

function getDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB is not supported on this platform"));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

export interface DraftMetadata {
  title: string;
  description: string;
  category: string;
  targetYear: string;
  targetBranch: string;
  targetBatch: string;
  isPublic: boolean;
  useWatermark: boolean;
  watermarkText: string;
  activeImageId: string | null;
  updatedAt: number;
}

export interface DraftData {
  images: any[];
  metadata: DraftMetadata;
}

/**
 * Saves the current workspace progress to IndexedDB
 */
export async function saveDraft(images: any[], metadata: Omit<DraftMetadata, "updatedAt">): Promise<void> {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);

      const draft: DraftData = {
        images,
        metadata: {
          ...metadata,
          updatedAt: Date.now()
        }
      };

      const request = store.put(draft, "current_draft");

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error("[IndexedDB Save Error]:", err);
  }
}

/**
 * Loads the saved draft workspace from IndexedDB
 */
export async function loadDraft(): Promise<DraftData | null> {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get("current_draft");

      request.onsuccess = () => {
        resolve(request.result || null);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error("[IndexedDB Load Error]:", err);
    return null;
  }
}

/**
 * Deletes any existing draft progress to start fresh
 */
export async function clearDraft(): Promise<void> {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete("current_draft");

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error("[IndexedDB Clear Error]:", err);
  }
}
