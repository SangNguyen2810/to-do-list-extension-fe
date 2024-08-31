// src/types/google.d.ts

interface GoogleId {
  initialize: (options: { client_id: string; callback: (response: GoogleCredentialResponse) => void }) => void;
  renderButton: (element: HTMLElement | null, options: { theme: string; size: string }) => void;
}

interface GoogleAccounts {
  id: GoogleId;
}

interface GoogleCredentialResponse {
  credential: string;
}

interface Window {
  google: GoogleAccounts;
}