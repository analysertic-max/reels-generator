import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout title="سياسة الخصوصية" description="سياسة الخصوصية الخاصة بـ Reels Generator">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">سياسة الخصوصية</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">1. مقدمة</h2>
            <p>
              في <strong>Reels Generator</strong>، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
              توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك عند استخدام موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">2. المعلومات التي نجمعها</h2>
            <ul className="list-disc mr-6 space-y-1">
              <li>المحتوى الذي تدخله (روابط Reels، نصوص المنشورات).</li>
              <li>معلومات تقنية (نوع المتصفح، عنوان IP، الوقت).</li>
              <li>ملفات تعريف الارتباط (Cookies) لتحسين التجربة.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">3. كيف نستخدم معلوماتك</h2>
            <ul className="list-disc mr-6 space-y-1">
              <li>توليد المنشورات والصور المطلوبة.</li>
              <li>تحسين خدماتنا وتجربة المستخدم.</li>
              <li>عرض إعلانات ملائمة (عبر Google AdSense).</li>
              <li>الرد على استفساراتك.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">4. مشاركة البيانات</h2>
            <p>
              <strong>لا نبيع بياناتك</strong> لأي طرف ثالث. قد نشارك معلومات مجهولة الهوية فقط مع:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>مزودي خدمات الذكاء الاصطناعي (لتوليد المحتوى).</li>
              <li>Google AdSense (لعرض الإعلانات).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">5. ملفات تعريف الارتباط</h2>
            <p>
              نستخدم Cookies لتذكّر تفضيلاتك وتحسين أداء الموقع. يمكنك تعطيلها من إعدادات المتصفح،
              لكن قد يؤثر ذلك على بعض الميزات.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">6. إعلانات Google AdSense</h2>
            <p>
              نستخدم <strong>Google AdSense</strong> لعرض الإعلانات. قد تستخدم Google ملفات تعريف الارتباط
              لعرض إعلانات مخصصة بناءً على زياراتك السابقة. يمكنك إلغاء التخصيص من:
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mr-1"
              >
                إعدادات إعلانات Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">7. أمان البيانات</h2>
            <p>
              نتخذ إجراءات أمنية معقولة لحماية بياناتك من الوصول غير المصرح به.
              لكن لا يمكن ضمان أمان 100% على الإنترنت.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">8. حقوقك</h2>
            <ul className="list-disc mr-6 space-y-1">
              <li>حق الوصول إلى بياناتك.</li>
              <li>حق تصحيح البيانات الخاطئة.</li>
              <li>حق حذف بياناتك.</li>
              <li>حق الاعتراض على المعالجة.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">9. التغييرات على السياسة</h2>
            <p>
              قد نحدّث هذه السياسة من وقت لآخر. سننشر التغييرات على هذه الصفحة مع تاريخ آخر تحديث.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">10. اتصل بنا</h2>
            <p>
              لأي سؤال حول هذه السياسة، راسلنا عبر صفحة{' '}
              <a href="/contact" className="text-blue-600 hover:underline">اتصل بنا</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}