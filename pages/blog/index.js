import Layout from '../../components/Layout';
import Link from 'next/link';
import { blogArticlesList } from '../../lib/blogData';

export default function BlogIndex() {
  return (
    <Layout title="المدونة" description="مقالات ونصائح حول التسويق عبر فيسبوك والذكاء الاصطناعي">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">📚 المدونة</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {blogArticlesList.length} مقال لمساعدتك في التسويق عبر السوشيال ميديا وزيادة التفاعل.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticlesList.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition line-clamp-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                  <span>📅 {article.date}</span>
                  <span>⏱️ {article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">💌 اشترك في النشرة البريدية</h3>
          <p className="text-blue-100 mb-4">مقالات جديدة ونصائح حصرية كل أسبوع</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-4 py-2 rounded-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}