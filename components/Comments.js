import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';

export default function Comments({ title, identifier }) {
  const router = useRouter();
  const siteUrl = 'https://sifou.k04-generatorcd.vercel.app';
  const fullUrl = `${siteUrl}${router.asPath}`;

  const disqusConfig = {
    url: fullUrl,
    identifier: identifier,
    title: title,
    language: 'ar',
  };

  return (
    <section className="mt-16 bg-white rounded-3xl shadow-xl p-6 md:p-10">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl">
          💬
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">التعليقات</h2>
          <p className="text-sm text-gray-500">شاركنا رأيك في هذا المقال</p>
        </div>
      </div>

      <DiscussionEmbed
        shortname="reels-generator"
        config={disqusConfig}
      />
    </section>
  );
}