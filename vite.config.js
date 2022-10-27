import { resolve } from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
	plugins: [
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				trending: resolve(__dirname, 'trending.html'),
				actors: resolve(__dirname, 'actors.html'),
			},
		},
	},
});
