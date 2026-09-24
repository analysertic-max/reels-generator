import { useState } from 'react';
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

  // الخطوة 1: استخراج البيانات
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

  // الخطوة 2: توليد المنشورات
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            🎬 مولد منشورات من Reels
          </h1>
          <p className="text-gray-600">
            حول أي Reel إلى منشورات جاهزة للنشر في مجموعات فيسبوك
            
          
          </p>
          <p className="text-gray-600">
            devlopped by khellas seif eddine
          
          </p>
          <p className="text-gray-600">
            تم تطويره من طرف المهندس خلاص سيف الدين
          
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            رابط الريل
          </label>
          <div className="flex gap-2">
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium disabled:opacity-50"
            >
              استخراج
            </button>
          </div>
        </div>

        {/* Reel Data */}
        {reelData && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
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

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="text-sm font-medium text-gray-600">اللغة</label>
                <select
                  value={options.language}
                  onChange={(e) => setOptions({ ...options, language: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                >
                  <option>العربية الفصحى</option>
                  <option>الدارجة </option>
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
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-bold text-lg disabled:opacity-50"
            >
              {loading ? '⏳ جاري التوليد...' : '✨ ولّد المنشورات'}
            </button>
          </div>
        )}

        {/* Status */}
        {step && (
          <div className="text-center text-gray-600 mb-4">{step}</div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            ⚠️ {error}
          </div>
        )}

        {/* Results */}
        {posts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              ✅ المنشورات الجاهزة ({posts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((post, i) => (
                <PostCard key={i} post={post} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}