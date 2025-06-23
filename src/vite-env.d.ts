interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
  readonly VITE_BACKEND_URL: string; // ✅ Add this line
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
