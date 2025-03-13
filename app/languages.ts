export const LANGUAGES = ["it", "en", "es", "fr", "pt", "de", "nl", "pl"] as const;
export type Language = (typeof LANGUAGES)[number];