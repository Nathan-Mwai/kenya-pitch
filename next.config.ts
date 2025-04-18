import type {NextConfig} from "next";

const nextConfig: NextConfig = {

    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "*",
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        ppr: "incremental",
    },
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: 'bottom-right'
    }
};

export default nextConfig;
