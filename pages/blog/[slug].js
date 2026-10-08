import Layout from '../../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { blogArticles, blogArticlesList } from '../../lib/blogData';
import Comments from '../../components/Comments';



const SITE_URL = 'https://sifouk04-generatorcd.vercel.app';

export default function ArticlePage({ article, relatedArticles }) {
  const htmlContent = article.content
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">${line.slice(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b-2 border-indigo-100">${line.slice(3)}</h2>`;
      }
      if (line.startsWith('- ')) {
        return `<li class="mr-6 text-gray-700 mb-2 leading-relaxed">${line.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong class="text-indigo-600">$1</strong>')}</li>`;
      }
      if (line.trim() === '') return '';
      return `<p class="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">${line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-indigo-600">$1</strong>')}</p>`;
    })
    .join('\n');

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": `${SITE_URL}${article.image}`,
    "datePublished": `${article.date}T00:00:00+00:00`,
    "dateModified": `${article.date}T00:00:00+00:00`,
    "author": {
      "@type": "Organization",
      "name": "نبض التقنية",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "نبض التقنية",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`
    },
    "articleSection": article.category,
    "inLanguage": "ar"
  };

    const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "الأخبار",
        "item": `${SITE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.category,
        "item": `${SITE_URL}/blog?category=${encodeURIComponent(article.category)}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": article.title,
        "item": `${SITE_URL}/blog/${article.slug}`
      }
    ]
  };

  return (
    <>
    <Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
  />
</Head>

      <Layout title={article.title} description={article.excerpt}>
        <div className="max-w-4xl mx-auto px-4 py-12">

        {/* ===== Breadcrumbs محسّنة ===== */}
<nav aria-label="Breadcrumb" className="mb-6">
  <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
    <li>
      <Link href="/" className="hover:text-indigo-600 transition inline-flex items-center gap-1">
        <span>🏠</span>
        <span>الرئيسية</span>
      </Link>
    </li>
    <li aria-hidden="true" className="text-gray-400">›</li>
    <li>
      <Link href="/blog" className="hover:text-indigo-600 transition inline-flex items-center gap-1">
        <span>📰</span>
        <span>الأخبار</span>
      </Link>
    </li>
    <li aria-hidden="true" className="text-gray-400">›</li>
    <li>
      <Link
        href={`/blog?category=${encodeURIComponent(article.category)}`}
        className="hover:text-indigo-600 transition inline-flex items-center gap-1"
      >
        <span>🏷️</span>
        <span>{article.category}</span>
      </Link>
    </li>
    <li aria-hidden="true" className="text-gray-400">›</li>
    <li>
      <span
        className="text-gray-800 font-medium line-clamp-1 max-w-[200px] md:max-w-md"
        aria-current="page"
      >
        {article.title}
      </span>
    </li>
  </ol>
</nav>

          <article className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="relative w-full bg-gray-900 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto block"
                loading="eager"
              />
            </div>

            <div className="px-6 md:px-10 pt-8 pb-4">
              <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
                {article.title}
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                {article.excerpt}
              </p>
            </div>

            <div className="px-6 md:px-10 pt-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 pb-6 border-b">
                <span className="flex items-center gap-1">📅 {article.date}</span>
                <span className="flex items-center gap-1">⏱️ {article.readTime}</span>
              </div>
            </div>

            <div className="px-6 md:px-10 py-8">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

              <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl min-h-[350px]">
                <img
                  src="/images/cta-bg.jpg"
                  alt="جرب Reels Generator"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
                  }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.88) 0%, rgba(88, 28, 135, 0.82) 50%, rgba(131, 24, 67, 0.88) 100%)'
                  }}
                ></div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full filter blur-3xl"></div>

                <div className="relative p-8 md:p-12 text-white text-center">
                  <div className="text-6xl mb-4 drop-shadow-2xl">🚀</div>

                  <h3 className="font-extrabold text-2xl md:text-3xl mb-3 drop-shadow-lg">
                    جرب Reels Generator الآن
                  </h3>

                  <p className="text-white/95 text-base mb-8 max-w-md mx-auto leading-relaxed font-medium drop-shadow-lg">
                    حوّل أي Reel إلى 10 منشورات جاهزة مع صور احترافية بضغطة زر.
                  </p>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-extrabold text-xl shadow-2xl hover:scale-110 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                      color: '#1f2937',
                      boxShadow: '0 15px 40px rgba(251, 191, 36, 0.6)',
                    }}
                  >
                    <span>🚀</span>
                    <span>ابدأ مجاناً الآن</span>
                  </Link>

                  <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs">
                    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-green-400">✓</span>
                      <span className="text-white/90">مجاني 100%</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-green-400">✓</span>
                      <span className="text-white/90">بدون تسجيل</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-green-400">✓</span>
                      <span className="text-white/90">بدون بطاقة</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <Comments title={article.title} identifier={article.slug} />

          <section className="mt-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
      <span className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
      <span>📖</span>
      <span>مقالات ذات صلة</span>
    </h2>
    <Link
      href="/blog"
      className="hidden md:inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition"
    >
      <span>عرض الكل</span>
      <span>←</span>
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {relatedArticles.map((art) => (
      <Link
        key={art.slug}
        href={`/blog/${art.slug}`}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1 duration-300 flex flex-col border border-gray-100"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
          <img
            src={art.image}
            alt={art.title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <span className="absolute top-2 right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
            {art.category}
          </span>
          <span className="absolute bottom-2 left-2 text-white text-[10px] font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            ⏱️ {art.readTime}
          </span>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-gray-800 group-hover:text-indigo-600 transition line-clamp-2 text-sm leading-snug min-h-[40px]">
            {art.title}
          </h3>
          <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
            <span>📅</span>
            <span>{art.date}</span>
          </p>
        </div>
      </Link>
    ))}
  </div>

  <div className="mt-6 text-center md:hidden">
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full text-sm shadow-lg hover:shadow-xl transition"
    >
      <span>عرض كل المقالات</span>
      <span>←</span>
    </Link>
  </div>
</section>

        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogArticlesList.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = blogArticles[params.slug];

  if (!article) {
    return {
      notFound: true,
    };
  }

  const relatedArticles = blogArticlesList
  .filter((a) => a.slug !== params.slug)
  .slice(0, 6);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
}