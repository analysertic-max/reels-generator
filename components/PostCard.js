import { useState } from 'react';
import { IMAGE_STYLES, DEFAULT_STYLE } from '../lib/imageStyles';

export default function PostCard({ post, index }) {
  const [copied, setCopied] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(DEFAULT_STYLE);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(post.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('فشل في نسخ النص');
    }
  };

  const generateImage = async () => {
    setLoadingImage(true);
    setError('');
    setImageUrl(null);

    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postContent: post.content,
          style: selectedStyle,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setImageUrl(data.imageUrl);
      } else {
        setError(data.error || 'فشل في توليد الصورة');
      }
    } catch (err) {
      setError('خطأ في الاتصال بالخادم');
      console.error(err);
    } finally {
      setLoadingImage(false);
    }
  };

  const downloadImage = async () => {
    if (!imageUrl) return;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `post-${index + 1}-${selectedStyle}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('فشل في تحميل الصورة');
    }
  };

  // ✅ إصلاح: ربط التسمية بالحقل
  const selectId = `style-select-${index}`;

  return (
    <article
      className="bg-white rounded-lg shadow-md p-5 border-r-4 border-blue-500"
      aria-labelledby={`post-title-${index}`}
    >
      {/* رأس المنشور */}
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          aria-label={`نوع المنشور: ${post.type}`}
        >
          {post.type}
        </span>
        <span className="text-xs text-gray-400" aria-label={`رقم المنشور ${index + 1}`}>
          #{index + 1}
        </span>
      </div>

      {/* نص المنشور */}
      <p
        id={`post-title-${index}`}
        className="text-gray-800 whitespace-pre-wrap mb-4 leading-relaxed"
      >
        {post.content}
      </p>

      {/* اختيار النمط */}
      <div className="mb-3">
        <label
          htmlFor={selectId}
          className="text-xs font-medium text-gray-600 block mb-1"
        >
          نمط الصورة:
        </label>
        <select
          id={selectId}
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          disabled={loadingImage}
          aria-describedby={loadingImage ? `loading-${index}` : undefined}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
        >
          {Object.entries(IMAGE_STYLES).map(([key, style]) => (
            <option key={key} value={key}>
              {style.label} — {style.description}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ إصلاح: عرض حالة التحميل لقارئات الشاشة */}
      {loadingImage && (
        <p id={`loading-${index}`} className="sr-only" role="status">
          جارٍ توليد الصورة، يرجى الانتظار
        </p>
      )}

      {/* الصورة المولدة */}
      {imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
          <img
            src={imageUrl}
            alt={`صورة مولدة للمنشور ${index + 1} بنمط ${IMAGE_STYLES[selectedStyle]?.label || ''}`}
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
          />
          <div className="flex gap-2 p-2 bg-gray-50">
            <button
              onClick={downloadImage}
              aria-label="تحميل الصورة المولدة"
              className="flex-1 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              ⬇️ تحميل الصورة
            </button>
            <button
              onClick={() => setImageUrl(null)}
              aria-label="حذف الصورة المولدة"
              className="flex-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              🗑️ حذف الصورة
            </button>
          </div>
        </div>
      )}

      {/* عرض الخطأ */}
      {error && (
        <div
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700"
          role="alert"
          aria-live="polite"
        >
          ⚠️ {error}
        </div>
      )}

      {/* الأزرار */}
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          aria-label={copied ? 'تم نسخ المنشور' : 'نسخ المنشور'}
          className={`flex-1 py-2 rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            copied
              ? 'bg-green-500 text-white focus:ring-green-400'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-400'
          }`}
        >
          {copied ? '✅ تم النسخ!' : '📋 نسخ المنشور'}
        </button>

        <button
          onClick={generateImage}
          disabled={loadingImage || !!imageUrl}
          aria-label={
            loadingImage
              ? 'جارٍ توليد الصورة'
              : imageUrl
              ? 'تم توليد الصورة'
              : 'توليد صورة للمنشور'
          }
          className={`flex-1 py-2 rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            imageUrl
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-400'
          } disabled:opacity-60`}
        >
          {loadingImage
            ? '⏳ جاري التوليد...'
            : imageUrl
            ? '✅ تم التوليد'
            : '🎨 توليد صورة'}
        </button>
      </div>
    </article>
  );
}