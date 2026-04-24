export const APP_URL = import.meta.env.VITE_APP_URL;
export const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
export const REGISTER_URL = import.meta.env.VITE_REGISTER_URL;
export const TERMS_URL = import.meta.env.VITE_TERMS_URL;
export const PRIVACY_URL = import.meta.env.VITE_PRIVACY_URL;
export const LGPD_URL = import.meta.env.VITE_LGPD_URL;
export const INTEGRATIONS_URL = import.meta.env.VITE_INTEGRATIONS_URL;
export const CHANGELOG_URL = import.meta.env.VITE_CHANGELOG_URL;
export const CAREERS_URL = import.meta.env.VITE_CAREERS_URL;
export const BLOG_URL = import.meta.env.VITE_BLOG_URL;
export const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;
export const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL;
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
export const COMPANY_CNPJ = import.meta.env.VITE_COMPANY_CNPJ;
export const COMPANY_ADDRESS_LINE1 = import.meta.env.VITE_COMPANY_ADDRESS_LINE1;
export const COMPANY_ADDRESS_LINE2 = import.meta.env.VITE_COMPANY_ADDRESS_LINE2;
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL;
export const YOUTUBE_URL = import.meta.env.VITE_YOUTUBE_URL;

export const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;

export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
