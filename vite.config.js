import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		port: 7000,
		host: true
	},
	plugins: [sveltekit()],

	vite: {
		ssr: {
			noExternal: []
		}
	}
};

export default config;
