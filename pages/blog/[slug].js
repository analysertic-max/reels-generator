import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const articlesData = {
  'how-to-increase-facebook-engagement': {
    title: 'كيف تزيد تفاعل صفحتك على فيسبوك في 2026؟',
    date: '2026-09-20',
    image: '/images/blog-engagement.jpg',
    category: 'تسويق',
    readTime: '5 دقائق',
    content: `
فيسبوك لا يزال أكبر منصة تواصل اجتماعي في العالم العربي، لكن المنافسة على التفاعل أصبحت أصعب من أي وقت مضى.

## 1. انشر في الوقت المناسب

أفضل أوقات النشر على فيسبوك هي **8-10 مساءً** بتوقيت جمهورك. هذا عندما يكون الناس مسترخين ويتصفحون.

## 2. ابدأ بسؤال

المنشورات التي تبدأ بسؤال تحصل على تفاعل أعلى بـ 3 أضعاف. جرب: "ما رأيكم في...؟" أو "هل توافقون أن...؟"

## 3. استخدم الصور

المنشورات بالصور تحصل على تفاعل أعلى بنسبة **2.3 مرة**. استخدم Reels Generator لتوليد صور احترافية بضغطة زر.

## 4. تفاعل مع التعليقات

ردّ على أول 10 تعليقات خلال الساعة الأولى. هذا يخبر فيسبوك أن منشورك يستحق الظهور.

## 5. انشر باستمرار

الانتظام أهم من الكمية. 3 منشورات يومياً أفضل من 20 دفعة واحدة.

## خلاصة

زيادة التفاعل ليس سحراً، بل مزيج من **التوقيت، المحتوى، والاستمرارية**. استخدم أدوات مثل Reels Generator لتوفير الوقت والتركيز على ما يهم.
    `,
  },
  'best-times-to-post-on-facebook': {
    title: 'أفضل أوقات النشر على فيسبوك حسب المنطقة العربية',
    date: '2026-09-15',
    image: '/images/blog-timing.jpg',
    category: 'نصائح',
    readTime: '7 دقائق',
    content: `
تختلف أوقات الذروة على فيسبوك بين الدول العربية. إليك دليلنا الشامل:

## مصر
- **الصباح**: 8-10 صباحاً
- **الذروة**: 8-11 مساءً
- **الأفضل**: 9 مساءً

## السعودية
- **الصباح**: 7-9 صباحاً
- **الذروة**: 9-12 مساءً (بعد صلاة العشاء)
- **الأفضل**: 10 مساءً

## المغرب
- **الصباح**: 9-11 صباحاً
- **الذروة**: 8-10 مساءً
- **الأفضل**: 9 مساءً

## الجزائر
- **الصباح**: 8-10 صباحاً
- **الذروة**: 9-11 مساءً
- **الأفضل**: 10 مساءً

## نصائح عامة
- **جرب أوقاتاً مختلفة** أسبوعياً لتعرف الأفضل لجمهورك.
- استخدم **Facebook Insights** لمعرفة أوقات نشاط متابعيك.
- **الجمعة والسبت** عادة أوقات تفاعل عالية.

## خلاصة
لا يوجد وقت "سحري" لكل الصفحات. **جرب، قِس، وكرر**.
    `,
  },
  'ai-content-creation-tips': {
    title: '5 نصائح لاستخدام الذكاء الاصطناعي في إنشاء المحتوى',
    date: '2026-09-10',
    image: '/images/blog-ai.jpg',
    category: 'ذكاء اصطناعي',
    readTime: '6 دقائق',
    content: `
الذكاء الاصطناعي غيّر طريقة إنشاء المحتوى. لكن استخدامه بذكاء يحتاج مهارة.

## 1. لا تعتمد عليه 100%

استخدم AI للمسودة الأولى، ثم أضف لمستك الشخصية.

## 2. دربه على أسلوبك

أعطه أمثلة من منشوراتك الناجحة، واطلب منه محاكاة الأسلوب.

## 3. راجع دائماً

AI قد يخطئ. راجع النص قبل النشر، خصوصاً الحقائق والأرقام.

## 4. استخدم الصور

AI لا يكتب نصاً فقط. استخدمه لتوليد صور احترافية ترفع التفاعل.

## 5. جرب أدوات متعددة

كل أداة لها نقاط قوة. **Reels Generator** ممتازة للمحتوى العربي، وChatGPT للإنجليزي.

## خلاصة

AI مساعدك، ليس بديلك. استخدمه لتوفير الوقت، وأنت أضف الإبداع.
    `,
  },
};

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;
  const article = articlesData[slug];

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
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">${line.slice(3)}</h2>`;
      }
      if (line.startsWith('- ')) {
        return `<li class="mr-6 text-gray-700 mb-1">${line.slice(2)}</li>`;
      }
      if (line.trim() === '') return '';
      return `<p class="text-gray-700 leading-relaxed mb-4">${line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`;
    })
    .join('\n');

  // مقالات ذات صلة (تجاهل الحالي)
  const relatedArticles = Object.entries(articlesData)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <Layout title={article.title} description={article.content.substring(0, 155)}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedArticles.map(([key, art]) => (
              <Link
                key={key}
                href={`/blog/${key}`}
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
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
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