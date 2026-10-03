import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ تحسين الصور
  images: {
    // ✅ استخدام صيغ حديثة وفعالة
    formats: ['image/avif', 'image/webp'],
    
    // ✅ السماح بالصور من مصادر خارجية (مثل API توليد الصور)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // يمكنك تحديد نطاقات معينة لاحقاً
      },
    ],
    
    // ✅ أحجام الصور المحسّنة
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // ✅ تقليل جودة الصور قليلاً لتسريع التحميل
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 يوماً
  },

  // ✅ ضغط أفضل
  compress: true,

  // ✅ إزالة console.log في الإنتاج
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // ✅ تحسين الأداء
  reactStrictMode: true,

  // ✅ تحسين الاستيراد
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
};

export default nextConfig;