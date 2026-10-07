/// <reference types="vite/client" />

// Tells TypeScript which environment variables exist in `import.meta.env`.
interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
