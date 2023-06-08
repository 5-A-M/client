import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import { compression } from 'vite-plugin-compression2';

export default defineConfig(({ mode }) => ({
	plugins: [
		react(), 
		eslint(), 
		svgr({ svgrOptions: { icon: true } }),
		compression({ include: /\.(js|css|html|svg|json)(\?.*)?$/i, threshold: 1024 })
	],
	esbuild: {
		pure: mode === 'production' ? ['console.log'] : [],
	},
}));
