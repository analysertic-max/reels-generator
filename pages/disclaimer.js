import Layout from '../components/Layout';

export default function Disclaimer() {
  return (
    <Layout
      title="إخلاء المسؤولية"
      description="إخلاء المسؤولية الخاصة بمدونة نبض التقنية ومحتواها وأدواتها"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <section className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

          <div className="relative px-6 py-12 text-center text-white">
            <div className="text-5xl mb-3">⚠️</div>
            <h1 className="text-3xl md:text-5xl font-black mb-3 drop-shadow-2xl">
              إخلاء المسؤولية
            </h1>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto">
              يرجى قراءة إخلاء المسؤولية بعناية قبل استخدام موقع نبض التقنية.
            </p>
            <p className="text-sm text-white/70 mt-4">
              آخر تحديث: {new Date().toLocaleDateString('ar-EG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8 text-gray-700 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              1. مقدمة
            </h2>
            <p>
              المعلومات والمحتوى المنشور على موقع <strong className="text-indigo-600">نبض التقنية</strong>
              يُقدَّم لأغراض <strong>تعليمية وإعلامية عامة</strong> فقط.
              نبذل قصارى جهدنا لتقديم معلومات دقيقة ومحدّثة، لكننا لا نقدم أي ضمانات صريحة أو ضمنية
              بشأن دقة أو اكتمال أو ملاءمة هذا المحتوى لأي غرض معين.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              2. استخدام الأدوات المجانية
            </h2>
            <p className="mb-3">
              أدواتنا المجانية (مولد المنشورات، مولد الصور، وغيرها) هي أدوات مساعدة لإنشاء المحتوى.
              باستخدامك لها، فإنك تقرّ وتوافق على أنك <strong>المسؤول الوحيد</strong> عن:
            </p>
            <ul className="list-disc mr-6 space-y-1">
              <li>المحتوى الذي تنشره باستخدام هذه الأدوات.</li>
              <li>مدى توافق المحتوى مع سياسات فيسبوك، انستغرام، والمنصات الأخرى.</li>
              <li>دقة وملاءمة النتائج لأغراضك.</li>
              <li>مراجعة المحتوى قبل النشر.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              3. دقة المعلومات
            </h2>
            <p>
              على الرغم من أننا نتحقق من المعلومات قبل نشرها، فإن المحتوى التقني يتغير بسرعة.
              لا نضمن أن تكون كل المعلومات محدّثة أو خالية من الأخطاء.
            </p>
            <p className="mt-3">
              <strong className="text-amber-600">ننصحك دائماً بالتحقق من المعلومات من مصادر متعددة</strong>
              قبل اتخاذ أي قرار مهم (مثل شراء جهاز أو تطبيق).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              4. المحتوى المولّد بالذكاء الاصطناعي
            </h2>
            <p>
              بعض المحتوى أو الصور على الموقع قد يتم توليده جزئياً باستخدام أدوات الذكاء الاصطناعي.
              نحن نراجع هذا المحتوى قبل نشره، لكن AI قد يخطئ أحياناً في الحقائق أو السياق.
            </p>
            <p className="mt-3">
              <strong>لا نتحمل مسؤولية أي قرار يُتخذ بناءً على محتوى مولّد بالذكاء الاصطناعي</strong>
              دون التحقق منه.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              5. حقوق الملكية الفكرية
            </h2>
            <p>
              تأكد من أنك تملك حقوق استخدام أي محتوى (فيديو، صورة، نص) تستخدمه مع أدواتنا.
              استخدامك لمحتوى لا تملك حقوقه قد يعرّضك للمساءلة القانونية.
            </p>
            <p className="mt-3">
              <strong className="text-red-600">نحن لا نتحمل أي مسؤولية</strong> عن انتهاك حقوق
              طرف ثالث من قبل مستخدمي الموقع أو أدواتنا.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              6. الروابط الخارجية
            </h2>
            <p>
              قد يحتوي موقعنا على روابط لمواقع خارجية (مصادر، مراجع، أدوات). هذه الروابط تُقدَّم
              للفائدة فقط.
            </p>
            <p className="mt-3">
              <strong>لا نتحكم في محتوى هذه المواقع</strong> ولا نتحمل مسؤولية أي ضرر ناتج عن زيارتها.
              استخدامك لها يكون على مسؤوليتك الشخصية.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              7. الإعلانات والروابط التجارية
            </h2>
            <p>
              نعرض إعلانات عبر <strong>Google AdSense</strong>، وقد نشارك في برامج تسويق بالعمولة.
              الإعلانات المعروضة ليست بالضرورة تعبيراً عن رأينا، ولا نتحمل مسؤولية المنتجات
              أو الخدمات المعلن عنها.
            </p>
            <p className="mt-3">
              أي عملية شراء تتم بينك وبين المعلن مباشرة، دون أي تدخل منا.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              8. توفر الخدمة
            </h2>
            <p>
              نسعى لتوفير الخدمة على مدار الساعة (24/7)، لكن قد تحدث انقطاعات لأسباب تقنية
              خارجة عن إرادتنا (أعمال صيانة، هجمات، أعطال في السيرفرات).
            </p>
            <p className="mt-3">
              لا نتحمل مسؤولية أي خسارة ناتجة عن عدم توفر الموقع في وقت معين.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              9. حدود المسؤولية
            </h2>
            <p>
              إلى أقصى حد يسمح به القانون، <strong>لا نتحمل أي مسؤولية</strong> عن:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>أي خسارة مباشرة أو غير مباشرة ناتجة عن استخدام الموقع.</li>
              <li>الأخطاء أو السهو في المحتوى.</li>
              <li>القرارات التي تتخذها بناءً على معلومات من الموقع.</li>
              <li>أي محتوى ينشره المستخدمون عبر نماذج الاتصال أو التعليقات.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              10. الموافقة
            </h2>
            <p>
              باستخدامك لموقع <strong>نبض التقنية</strong>، فإنك توافق على إخلاء المسؤولية هذا
              وتقر بأنك قرأته وفهمته.
            </p>
            <p className="mt-3">
              إذا كنت لا توافق على أي جزء من هذا الإخلاء، يرجى التوقف عن استخدام الموقع.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              11. التحديثات
            </h2>
            <p>
              نحتفظ بالحق في تحديث إخلاء المسؤولية في أي وقت. سيتم نشر التغييرات على هذه الصفحة
              مع تحديث تاريخ "آخر تعديل". استمرارك في استخدام الموقع يعني قبولك للتعديلات.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold mb-3">هل لديك سؤال؟</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              إذا كان لديك أي استفسار حول إخلاء المسؤولية،
              أو لاحظت خطأً في المحتوى، لا تتردد في التواصل معنا.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
            >
              📩 اتصل بنا
            </a>
          </section>

        </div>
      </div>
    </Layout>
  );
}