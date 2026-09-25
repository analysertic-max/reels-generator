import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { blogArticles, blogArticlesList } from '../../lib/blogData';

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;
  const article = blogArticles[slug];

  if (!article) {
    return (
      <Layout title="المقال غير موجود">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-gray-600">المقال الذي تبحث عنه غير موجود.</p>
          <Link href="/blog" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md">
            العودة للمدونة
          </Link>
        </div>
      </Layout>
    );
  }

  // تحويل markdown بسيط إلى HTML
  const htmlContent = article.content
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">${line.slice(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">${line.slice(3)}</h2>`;
      }
      if (line.startsWith('- ')) {
        return `<li class="mr-6 text-gray-700 mb-1">${line.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>`;
      }
      if (line.trim() === '') return '';
      return `<p class="text-gray-700 leading-relaxed mb-4">${line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`;
    })
    .join('\n');

  // مقالات ذات صلة (نفس الفئة أو عشوائية)
  const relatedArticles = blogArticlesList
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <Layout title={article.title} description={article.excerpt}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* صورة المقال */}
          <div className="relative h-64 md:h-80 bg-gray-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </div>
          </div>

          {/* محتوى المقال */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 pb-4 border-b">
              <span>📅 {article.date}</span>
              <span>⏱️ {article.readTime}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

            {/* CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">🚀 جرب Reels Generator الآن</h3>
              <p className="text-blue-100 text-sm mb-4">
                حوّل أي Reel إلى 10 منشورات جاهزة مع صور احترافية بضغطة زر.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition"
              >
                ابدأ مجاناً
              </Link>
            </div>
          </div>
        </article>

        {/* مقالات ذات صلة */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 اقرأ أيضاً</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((art) => (
              <Link
                key={art.slug}
                href={`/blog/${art.slug}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="h-32 overflow-hidden bg-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition line-clamp-2 text-sm">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">{art.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}