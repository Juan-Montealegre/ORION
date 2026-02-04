declare module '*.css';
declare module '*.css';

declare interface ImportMetaEnv {
	readonly VITE_GEMINI_API_KEY: string;
	// otras variables VITE_ que uses
}

declare interface ImportMeta {
	readonly env: ImportMetaEnv;
}
