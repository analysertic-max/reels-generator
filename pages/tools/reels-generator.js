import { useState } from 'react';
import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import FeatureCard from '../../components/FeatureCard';

export default function ReelsGenerator() {
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
    <Layout
      title="مولد منشورات Reels"
      description="حوّل أي Reel إلى منشورات تفاعلية جاهزة للنشر في مجموعات فيسبوك"
    >
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* ===== Hero Section ===== */}
        <section className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl min-h-[400px]">
          <img
            src="/images/hero-bg.jpg"
            alt="مولد منشورات Reels"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
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

          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300/10 rounded-full filter blur-3xl"></div>

          <div className="relative h-full flex items-center justify-center px-6 py-16">
            <div className="text-center text-white max-w-3xl mx-auto">
              <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-white/40">
                🎬 أداة مجانية 100%
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
                مولد منشورات من Reels
              </h1>

              <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                حوّل أي Reel إلى منشورات تفاعلية جاهزة للنشر في مجموعات فيسبوك مع صور احترافية بنص عربي جميل.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <span className="text-green-400">✓</span>
                  <span>مجاني</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <span className="text-green-400">✓</span>
                  <span>بدون تسجيل</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <span className="text-green-400">✓</span>
                  <span>يدعم العربية</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Features Cards ===== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <FeatureCard
            icon="⚡"
            title="سريع جداً"
            description="منشورات جاهزة في ثوانٍ بضغطة زر، دون انتظار."
            image="/images/speed.jpg"
            gradient="bg-gradient-to-br from-indigo-500 to-blue-600"
          />
          <FeatureCard
            icon="🎨"
            title="صور احترافية"
            description="6 أنماط مختلفة للصور مع نص عربي بخط جميل."
            image="/images/feature-2.jpg"
            gradient="bg-gradient-to-br from-purple-500 to-pink-600"
          />
          <FeatureCard
            icon="🌍"
            title="يدعم العربية"
            description="نصوص عربية واضحة بخط Cairo الجميل على الصور."
            image="/images/feature-3.jpg"
            gradient="bg-gradient-to-br from-pink-500 to-orange-500"
          />
        </section>

        {/* ===== AdSense Banner Top ===== */}
        <div className="mb-8 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* ===== Input Section ===== */}
        <section id="start" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6 border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
            📝 ابدأ الآن
          </h2>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            رابط الريل
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.facebook.com/reel/..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              onClick={handleExtract}
              disabled={loading || !url}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50 transition shadow-md hover:shadow-lg"
            >
              استخراج
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            💡 إن لم يعمل الاستخراج، يمكنك كتابة الوصف يدوياً في الخطوة التالية.
          </p>
        </section>

        {/* ===== Reel Data Section ===== */}
        {reelData && (
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              📄 بيانات الريل
            </h2>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">العنوان</label>
                <input
                  type="text"
                  value={reelData.title}
                  onChange={(e) => setReelData({ ...reelData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">الوصف</label>
                <textarea
                  value={reelData.description}
                  onChange={(e) => setReelData({ ...reelData, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="text-sm font-medium text-gray-600">اللغة</label>
                <select
                  value={options.language}
                  onChange={(e) => setOptions({ ...options, language: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-500"
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
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-500"
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
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-500"
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
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 transition shadow-lg hover:shadow-xl"
            >
              {loading ? '⏳ جاري التوليد...' : '✨ ولّد المنشورات'}
            </button>
          </section>
        )}

        {/* ===== Status ===== */}
        {step && (
          <div className="text-center text-gray-700 mb-4 font-medium bg-white/60 backdrop-blur-sm rounded-xl py-3 px-4 shadow-sm">
            {step}
          </div>
        )}
        {error && (
          <div className="bg-red-50 border-r-4 border-red-500 text-red-700 p-4 rounded-xl mb-4 shadow-sm">
            ⚠️ {error}
          </div>
        )}

        {/* ===== AdSense Banner Middle ===== */}
        {posts.length === 0 && (
          <div className="my-8 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
            <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
          </div>
        )}

        {/* ===== Results ===== */}
        {posts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              ✅ المنشورات الجاهزة ({posts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {posts.map((post, i) => (
                <PostCard key={i} post={post} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* ===== SEO Content ===== */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
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
          </div>
        </section>

        {/* ===== AdSense Banner Bottom ===== */}
        <div className="my-8 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

      </div>
    </Layout>
  );
}