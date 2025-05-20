// API key = standard_1181e302e58829eb4301c1e8ef12dcd66592d8a56b07c21fcd19f6d59338cc03718c1f108ab64998172bd7fd9f7f31757a1398a3d248761a21e7545034d4820f1398a220a10253d333ef95f930e71b28140b5b8d165b5720891ed47db0b58a66dfccafb26a7f074c179285e182325ca020452296c19d80be19d3d29003e89df2

import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
  api: import.meta.env.VITE_APPWRITE_API_KEY,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);
// client.setApiKey(appwriteConfig.api);
// client.setLocale('en-US');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
// client.setSelfSigned(appwriteConfig.api);