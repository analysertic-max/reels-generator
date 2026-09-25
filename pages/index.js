import { useState } from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

export default function Home() {
  const [url, setUrl] = useState('');
  const [reelData, setReelData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('');
  const [error, setError] = useState('');

  const [options, setOptions] = useState({
    language: 'العربية الفصحى',
    tone: 'ودي وتفاعلي',
    count: 5,
  });

  const handleExtract = async () => {
    if (!url) return;
    setLoading(true);
    setError('');
    setStep('جاري استخراج بيانات الريل...');

    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();

      if (data.success) {
        setReelData(data.data);
        setStep('تم الاستخراج ✅ عدّل البيانات إن أردت');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('فشل الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!reelData) return;
    setLoading(true);
    setError('');
    setStep('جاري توليد المنشورات بالذكاء الاصطناعي...');
    setPosts([]);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reelData, options }),
      });
      const data = await res.json();

      if (data.success) {
        setPosts(data.posts);
        setStep(`تم توليد ${data.posts.length} منشورات ✅`);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('فشل في التوليد');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Hero Section */}
        <section className="text-center mb-12">
  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
    ✨ مدعوم بالذكاء الاصطناعي
  </div>
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
    🎬 مولد منشورات من Reels
  </h1>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
    حوّل أي Reel أو فيديو قصير إلى <strong>منشورات تفاعلية جاهزة</strong> للنشر
    في مجموعات فيسبوك. زيادة التفاعل والمتابعين بضغطة زر، مع إمكانية توليد صور احترافية.
  </p>
  
  {/* صورة Hero */}
  <div className="max-w-3xl mx-auto mb-8">
    <img
      src="/images/hero.jpg"
      alt="مولد منشورات من Reels - واجهة الأداة"
      className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
      loading="eager"
    />
  </div>
</section>

        {/* Features Bar */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-800 mb-1">سريع</h3>
            <p className="text-sm text-gray-600">منشورات جاهزة في ثوانٍ</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-bold text-gray-800 mb-1">صور احترافية</h3>
            <p className="text-sm text-gray-600">6 أنماط مختلفة للصور</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-gray-800 mb-1">يدعم العربية</h3>
            <p className="text-sm text-gray-600">نصوص عربية بخط جميل</p>
          </div>
        </section>

        {/* AdSense Banner Top */}
        <div className="mb-8 text-center bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* Input Section */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">📝 ابدأ الآن</h2>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            رابط الريل
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.facebook.com/reel/..."
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleExtract}
              disabled={loading || !url}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium disabled:opacity-50 transition"
            >
              استخراج
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 إن لم يعمل الاستخراج، يمكنك كتابة الوصف يدوياً في الخطوة التالية.
          </p>
        </section>

        {/* Reel Data Section */}
        {reelData && (
          <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">📄 بيانات الريل</h2>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">العنوان</label>
                <input
                  type="text"
                  value={reelData.title}
                  onChange={(e) => setReelData({ ...reelData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">الوصف</label>
                <textarea
                  value={reelData.description}
                  onChange={(e) => setReelData({ ...reelData, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="text-sm font-medium text-gray-600">اللغة</label>
                <select
                  value={options.language}
                  onChange={(e) => setOptions({ ...options, language: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                >
                  <option>العربية الفصحى</option>
                  <option>الدارجة المغاربية</option>
                  <option>اللهجة المصرية</option>
                  <option>English</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">النبرة</label>
                <select
                  value={options.tone}
                  onChange={(e) => setOptions({ ...options, tone: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                >
                  <option>ودي وتفاعلي</option>
                  <option>احترافي ورسمي</option>
                  <option>مضحك وخفيف</option>
                  <option>تحفيزي</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">عدد المنشورات</label>
                <select
                  value={options.count}
                  onChange={(e) => setOptions({ ...options, count: parseInt(e.target.value) })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                >
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={7}>7</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-bold text-lg disabled:opacity-50 transition"
            >
              {loading ? '⏳ جاري التوليد...' : '✨ ولّد المنشورات'}
            </button>
          </section>
        )}

        {/* Status */}
        {step && (
          <div className="text-center text-gray-600 mb-4 font-medium">{step}</div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            ⚠️ {error}
          </div>
        )}

        {/* AdSense Banner Middle */}
        {posts.length === 0 && (
          <div className="my-8 text-center bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
            <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
          </div>
        )}

        {/* Results */}
        {posts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              ✅ المنشورات الجاهزة ({posts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((post, i) => (
                <PostCard key={i} post={post} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* SEO Content Section */}
        <section className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            كيف يساعدك Reels Generator في زيادة تفاعلك؟
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Reels Generator</strong> هو أداة مجانية متطورة تستخدم أحدث تقنيات الذكاء الاصطناعي
              لتحويل مقاطع الفيديو القصيرة (Reels) إلى منشورات نصية تفاعلية جاهزة للنشر في مجموعات فيسبوك،
              صفحاتك الشخصية، أو أي منصة تواصل اجتماعي أخرى.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6">لماذا تحتاج هذه الأداة؟</h3>
            <p>
              يعاني الكثير من أصحاب الصفحات والمجموعات من صعوبة كتابة محتوى تفاعلي يومياً.
              مع <strong>Reels Generator</strong>، لا تحتاج لخبرة في كتابة الكوبي أو التسويق.
              ما عليك سوى وضع رابط الريل، وستحصل على 5-10 منشورات مختلفة جاهزة للنشر مباشرة.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6">مميزات الأداة</h3>
            <ul className="list-disc mr-6 space-y-2">
              <li><strong>توليد منشورات متعددة:</strong> 3-10 نسخ بأسلوب مختلف لكل ريل.</li>
              <li><strong>أنماط صور متنوعة:</strong> واقعي، فني، إسلامي، كرتوني، بسيط، وتحفيزي.</li>
              <li><strong>دعم كامل للعربية:</strong> نصوص بخط Cairo الجميل فوق الصور.</li>
              <li><strong>نبرات متعددة:</strong> رسمي، فكاهي، تحفيزي، أو ودي.</li>
              <li><strong>تحميل مباشر:</strong> احفظ الصور والمنشورات بضغطة زر.</li>
              <li><strong>مجاني 100%:</strong> بدون تسجيل، بدون بطاقة بنكية.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mt-6">كيف تستخدم الأداة؟</h3>
            <ol className="list-decimal mr-6 space-y-2">
              <li>انسخ رابط الريل من فيسبوك أو انستغرام.</li>
              <li>الصقه في الأداة واضغط "استخراج".</li>
              <li>اختر اللغة، النبرة، وعدد المنشورات.</li>
              <li>اضغط "ولّد المنشورات" وانتظر ثوانٍ.</li>
              <li>اختر الصور (نمط + نص عربي) وانشر!</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-800 mt-6">نصائح لزيادة التفاعل</h3>
            <p>
              للحصول على أفضل نتائج، انشر منشوراتك في <strong>أوقات الذروة</strong> (8-10 مساءً بتوقيت جمهورك)،
              واستخدم <strong>صوراً جذابة</strong>، وأضف <strong>سؤالاً تفاعلياً</strong> في نهاية كل منشور.
              جرب أيضاً استخدام أكثر من نمط صورة لترى أيهم يحصل على تفاعل أعلى.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6">هل الأداة مجانية فعلاً؟</h3>
            <p>
              نعم! الأداة مجانية بالكامل. نحن نعتمد على إعلانات Google AdSense لتغطية تكاليف التشغيل
              واستخدام الذكاء الاصطناعي. إذا أعجبتك الأداة، ادعمنا بمشاركتها مع أصدقائك.
            </p>
          </div>
        </section>

        {/* AdSense Banner Bottom */}
        <div className="my-8 text-center bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

      </div>
    </Layout>
  );
}