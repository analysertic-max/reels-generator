import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout title="الشروط والأحكام" description="شروط استخدام Reels Generator">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الشروط والأحكام</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">1. قبول الشروط</h2>
            <p>
              باستخدامك <strong>Reels Generator</strong>، فإنك توافق على هذه الشروط.
              إذا لم توافق، يرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">2. وصف الخدمة</h2>
            <p>
              نقدم أداة مجانية لتوليد منشورات من فيديوهات Reels باستخدام الذكاء الاصطناعي.
              الخدمة متاحة "كما هي" وقد تتوقف أو تتغير في أي وقت.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">3. استخدام مقبول</h2>
            <p>توافق على عدم استخدام الموقع من أجل:</p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>نشر محتوى مسيء أو غير قانوني.</li>
              <li>انتهاك حقوق الملكية الفكرية.</li>
              <li>محاولة اختراق الموقع أو تعطيله.</li>
              <li>استخدام روبوتات أو أدوات آلية لجمع البيانات.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">4. الملكية الفكرية</h2>
            <p>
              المحتوى الذي تولّده يخصك. لكن الموقع وتصميمه وشعاره تخصنا.
              لا يجوز نسخ أو استخدام علاماتنا التجارية دون إذن.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">5. حدود المسؤولية</h2>
            <p>
              لا نتحمل مسؤولية أي خسارة أو ضرر ناتج عن استخدام الموقع أو الاعتماد على المحتوى المولّد.
              راجع المحتوى قبل النشر دائماً.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">6. التعديلات</h2>
            <p>
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت.
              استمرارك في استخدام الموقع يعني قبولك للتعديلات.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">7. القانون المطبق</h2>
            <p>
              تخضع هذه الشروط للقوانين المعمول بها في بلد تشغيل الموقع.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}