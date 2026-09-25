import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن ربط نموذج إرسال حقيقي (Formspree, EmailJS, إلخ)
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Layout title="اتصل بنا" description="تواصل مع فريق Reels Generator">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">اتصل بنا</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info */}
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">💬 نسعد بتواصلك</h2>
              <p className="text-gray-700 leading-relaxed">
                هل لديك سؤال، اقتراح، أو ملاحظة؟ نحن هنا لمساعدتك.
                سنجيبك خلال 24 ساعة في أيام العمل.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-800">البريد الإلكتروني</p>
                  <p className="text-sm text-gray-600">contact@reels-generator.app</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-semibold text-gray-800">اقتراحات</p>
                  <p className="text-sm text-gray-600">نرحب بأفكارك لتطوير الأداة</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🐛</span>
                <div>
                  <p className="font-semibold text-gray-800">الإبلاغ عن مشكلة</p>
                  <p className="text-sm text-gray-600">ساعدنا في تحسين الخدمة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">تم الإرسال!</h3>
                <p className="text-gray-600">سنتواصل معك قريباً.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
                >
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}