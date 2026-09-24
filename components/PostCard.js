import { useState } from 'react';

export default function PostCard({ post, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(post.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-r-4 border-blue-500">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {post.type}
        </span>
        <span className="text-xs text-gray-400">#{index + 1}</span>
      </div>
      
      <p className="text-gray-800 whitespace-pre-wrap mb-4 leading-relaxed">
        {post.content}
      </p>
      
      <button
        onClick={handleCopy}
        className={`w-full py-2 rounded-md text-sm font-medium transition ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        {copied ? '✅ تم النسخ!' : '📋 نسخ المنشور'}
      </button>
    </div>
  );
}