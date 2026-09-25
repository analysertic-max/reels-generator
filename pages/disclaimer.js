import Layout from '../components/Layout';

export default function Disclaimer() {
  return (
    <Layout title="إخلاء المسؤولية" description="إخلاء مسؤولية Reels Generator">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">إخلاء المسؤولية</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">1. استخدام الأدوات</h2>
            <p>
              <strong>Reels Generator</strong> أداة مساعدة لإنشاء المحتوى. أنت المسؤول الوحيد عن
              المحتوى الذي تنشره، وعن مدى توافقه مع سياسات فيسبوك والمنصات الأخرى.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">2. دقة المعلومات</h2>
            <p>
              نبذل جهدنا لتقديم محتوى دقيق، لكننا لا نضمن خلو النتائج من الأخطاء.
              راجع دائماً المحتوى المولّد قبل النشر.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">3. حقوق الملكية</h2>
            <p>
              تأكد من أنك تملك حقوق استخدام أي محتوى (فيديو، صورة، نص) تستخدمه مع الأداة.
              نحن لا نتحمل مسؤولية انتهاك حقوق طرف ثالث.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">4. الروابط الخارجية</h2>
            <p>
              قد يحتوي موقعنا على روابط لمواقع خارجية. لا نتحكم في محتواها ولا نتحمل مسؤوليته.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">5. التوفر</h2>
            <p>
              نسعى لتوفير الخدمة 24/7، لكن قد تحدث انقطاعات لأسباب تقنية خارجة عن إرادتنا.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}