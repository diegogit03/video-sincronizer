import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './@')
        }
    },
    css: {
        postcss: {
          plugins: [tailwind(), autoprefixer()],
        },
      },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
