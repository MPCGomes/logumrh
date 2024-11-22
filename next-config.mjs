import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles')],
    },
    webpack: (config) => {
        process.env.SASS_SUPPRESS_LEGACY_JS_API_DEPRECATION = 'true';
        return config;
    },
};

export default nextConfig;
