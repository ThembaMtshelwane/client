/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    // Add other environment variables if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  