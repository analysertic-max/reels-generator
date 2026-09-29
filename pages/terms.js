import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout
      title="الشروط والأحكام"
      description="شروط وأحكام استخدام مدونة نبض التقنية وأدواتها المجانية"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <section className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

          <div className="relative px-6 py-12 text-center text-white">
            <div className="text-5xl mb-3">📋</div>
            <h1 className="text-3xl md:text-5xl font-black mb-3 drop-shadow-2xl">
              الشروط والأحكام
            </h1>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto">
              يرجى قراءة هذه الشروط بعناية قبل استخدام موقع نبض التقنية.
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
              1. قبول الشروط
            </h2>
            <p>
              مرحباً بك في <strong className="text-indigo-600">نبض التقنية</strong>.
              باستخدامك لهذا الموقع (المشار إليه بـ "الموقع" أو "نحن" أو "نبض التقنية")،
              فإنك توافق على الالتزام بهذه الشروط والأحكام.
            </p>
            <p className="mt-3">
              إذا كنت لا توافق على أي جزء من هذه الشروط،
              <strong className="text-red-600"> يرجى التوقف عن استخدام الموقع فوراً</strong>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              2. وصف الخدمة
            </h2>
            <p>
              <strong>نبض التقنية</strong> هو موقع عربي متخصص في:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>نشر أخبار ومقالات تقنية أصلية.</li>
              <li>مراجعات الهواتف الذكية والحواسيب.</li>
              <li>شروحات "كيف" التعليمية.</li>
              <li>توفير أدوات ذكية مجانية لإنشاء المحتوى.</li>
            </ul>
            <p className="mt-3">
              يتم تقديم الخدمات <strong>"كما هي" (As Is)</strong> وقد تتغير أو تتوقف في أي وقت
              دون إشعار مسبق.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              3. استخدام مقبول
            </h2>
            <p className="mb-3">
              توافق على استخدام الموقع لأغراض قانونية فقط. يُمنع استخدامه في:
            </p>
            <ul className="list-disc mr-6 space-y-1">
              <li>نشر محتوى مسيء أو غير قانوني أو ينتهك حقوق الآخرين.</li>
              <li>انتهاك حقوق الملكية الفكرية بأي شكل.</li>
              <li>محاولة اختراق الموقع أو تعطيله أو إلحاق الضرر به.</li>
              <li>استخدام روبوتات أو أدوات آلية لجمع البيانات (Scraping).</li>
              <li>انتحال هوية الموقع أو فريق العمل.</li>
              <li>نشر رسائل إعلانية مزعجة (Spam) عبر نماذج الاتصال.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              4. الملكية الفكرية
            </h2>
            <p>
              جميع محتويات الموقع (المقالات، التصميم، الشعار، الأكواد، الصور) هي ملك
              <strong> لنبض التقنية</strong> أو مرخصة لها، ومحمية بحقوق النشر.
            </p>
            <p className="mt-3">
              <strong className="text-green-600">ما يمكنك فعله:</strong>
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>قراءة المقالات ومشاركة روابطها.</li>
              <li>استخدام المحتوى الذي تولّده أدواتنا لأي غرض مشروع.</li>
              <li>الاقتباس من المقالات مع ذكر المصدر ورابط الموقع.</li>
            </ul>
            <p className="mt-3">
              <strong className="text-red-600">ما لا يمكنك فعله:</strong>
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>نسخ المقالات كاملة وإعادة نشرها في مواقع أخرى.</li>
              <li>استخدام الشعار أو الهوية البصرية دون إذن.</li>
              <li>إعادة بيع المحتوى أو الخدمات.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              5. الأدوات المجانية
            </h2>
            <p>
              نوفر أدوات مجانية (مثل مولد المنشورات، ومولد الصور). باستخدامك لها، أنت توافق على:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>عدم استخدامها لإنتاج محتوى مسيء أو مضلل.</li>
              <li>عدم محاولة استغلال الأدوات لإنتاج ضخم (Mass Production) يضر بالخدمة.</li>
              <li>أن المحتوى المولّد هو مسؤوليتك الكاملة.</li>
              <li>أننا لا نضمن دقة 100% لما تنتجه الأدوات (خاصة AI).</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              6. النشرة البريدية
            </h2>
            <p>
              عند اشتراكك في النشرة البريدية، فإنك توافق على استقبال إيميلات دورية منا
              تحتوي على آخر المقالات والأخبار والعروض.
            </p>
            <p className="mt-3">
              يمكنك إلغاء الاشتراك في أي وقت عبر الرابط الموجود في أسفل كل إيميل.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              7. الروابط الخارجية
            </h2>
            <p>
              قد يحتوي الموقع على روابط لمواقع خارجية (مصادر، مراجع). نحن لا نتحكم في محتواها
              ولا نتحمل مسؤولية أي ضرر ناتج عن زيارتها.
            </p>
            <p className="mt-3">
              ننصحك بمراجعة سياسات الخصوصية لأي موقع خارجي قبل استخدامه.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              8. الإعلانات
            </h2>
            <p>
              نعتمد على <strong>Google AdSense</strong> لتمويل الموقع. الإعلانات المعروضة ليست
              بالضرورة تعبيراً عن رأينا، ولا نتحمل مسؤولية المنتجات أو الخدمات المعلن عنها.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              9. حدود المسؤولية
            </h2>
            <p>
              يُقدّم المحتوى والخدمات <strong>"كما هي"</strong> دون أي ضمانات صريحة أو ضمنية.
              لا نتحمل مسؤولية:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>أي خسارة أو ضرر مباشر أو غير مباشر ناتج عن استخدام الموقع.</li>
              <li>الاعتماد على المعلومات المنشورة دون التحقق منها.</li>
              <li>انقطاع الخدمة أو توقف الموقع لأسباب تقنية.</li>
              <li>أي محتوى ينشره المستخدمون عبر نماذج الاتصال أو التعليقات.</li>
            </ul>
            <p className="mt-3">
              <strong className="text-amber-600">ننصحك دائماً بالتحقق من المعلومات من مصادر متعددة</strong>
              قبل اتخاذ قرارات مهمة.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              10. التعديلات
            </h2>
            <p>
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق.
              استمرارك في استخدام الموقع بعد التعديلات يعني قبولك لها.
              ننصحك بمراجعة هذه الصفحة دورياً.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              11. إنهاء الحساب
            </h2>
            <p>
              نحتفظ بالحق في حظر أو تقييد وصولك للموقع، وحذف أي محتوى،
              دون إشعار، إذا خالفت هذه الشروط.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              12. القانون المطبق
            </h2>
            <p>
              تخضع هذه الشروط وتُفسّر وفقاً للقوانين المعمول بها في بلد تشغيل الموقع.
              أي نزاع يتم حله ودياً قبل اللجوء للقضاء.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              13. قابلية الفصل
            </h2>
            <p>
              إذا ثبت أن أي بند من هذه الشروط غير قانوني أو غير قابل للتنفيذ،
              فسيتم فصله مع بقاء باقي البنود سارية المفعول.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold mb-3">هل لديك سؤال حول الشروط؟</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              إذا كان لديك أي استفسار حول هذه الشروط والأحكام،
              لا تتردد في التواصل معنا.
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