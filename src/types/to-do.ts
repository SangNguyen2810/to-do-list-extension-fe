export type Task = {
	id: number,
	title: string,
	description: string,
	completed: boolean,
	tag?: Tag
}

export type Tag = {
	id: number,
	title: string,
	color?: string,
}

interface GoogleAccounts {
	id: {
		initialize: (options: { client_id: string; callback: (response: GoogleCredentialResponse) => void }) => void;
		renderButton: (element: HTMLElement | null, options: { theme: string; size: string }) => void;
	};
}

interface GoogleCredentialResponse {
	credential: string;
}

interface Window {
	google: GoogleAccounts;
}