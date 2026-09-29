import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/xaenvdzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'رسالة جديدة من موقع نبض التقنية',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'حدث خطأ. حاول مرة أخرى.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('فشل الاتصال بالخادم. تحقق من الإنترنت.');
      setStatus('error');
    }
  };

  return (
    <Layout
      title="اتصل بنا"
      description="تواصل مع فريق نبض التقنية - أسئلة، اقتراحات، أو إبلاغ عن مشكلة"
    >
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Hero */}
        <section className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl min-h-[350px]">
          <img
            src="/images/contact-hero.jpg"
            alt="اتصل بنا"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/80 to-pink-900/85"></div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl"></div>

          <div className="relative px-6 py-16 text-center text-white">
            <div className="text-6xl mb-4 drop-shadow-2xl">📧</div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-2xl">
              اتصل بنا
            </h1>
            <p className="text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
              نسعد بتواصلك معنا. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-green-400">✓</span>
                <span>رد سريع</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-green-400">✓</span>
                <span>خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-green-400">✓</span>
                <span>دعم عربي</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Info Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
                💬 نسعد بتواصلك
              </h2>
              <p className="text-gray-700 leading-relaxed">
                هل لديك سؤال، اقتراح، أو ملاحظة حول محتوانا أو أدواتنا؟ نحن هنا لمساعدتك.
                سنجيبك خلال <strong className="text-indigo-600">24 ساعة</strong> في أيام العمل.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-r-4 border-blue-500 hover:shadow-md transition">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-bold text-gray-800">البريد الإلكتروني</p>
                  <p className="text-sm text-gray-600">contact@nabd-tech.app</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-r-4 border-purple-500 hover:shadow-md transition">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold text-gray-800">اقتراحات</p>
                  <p className="text-sm text-gray-600">نرحب بأفكارك لتطوير الموقع</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-r-4 border-red-500 hover:shadow-md transition">
                <span className="text-2xl">🐛</span>
                <div>
                  <p className="font-bold text-gray-800">الإبلاغ عن مشكلة</p>
                  <p className="text-sm text-gray-600">ساعدنا في تحسين الخدمة</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-r-4 border-green-500 hover:shadow-md transition">
                <span className="text-2xl">🤝</span>
                <div>
                  <p className="font-bold text-gray-800">شراكات</p>
                  <p className="text-sm text-gray-600">للتعاون التجاري والإعلاني</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-800 mb-3">تابعنا على:</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61593629871213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center hover:scale-110 transition shadow-md"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@haner41ha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition shadow-md"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nabd_tec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition shadow-md text-white"
                  style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-4xl shadow-lg">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">تم الإرسال بنجاح!</h3>
                <p className="text-gray-600 mb-6">
                  شكراً لتواصلك. سنرد عليك في أقرب وقت ممكن.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg transition"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
                  ✍️ أرسل رسالة
                </h2>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="اسمك الكامل"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border-r-4 border-red-500 text-red-700 p-3 rounded-xl text-sm">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 transition shadow-lg hover:shadow-xl"
                >
                  {status === 'sending' ? '⏳ جاري الإرسال...' : '📤 إرسال الرسالة'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  🔒 معلوماتك محفوظة ولن تتم مشاركتها مع أي طرف ثالث.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
}