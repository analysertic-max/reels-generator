import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout
      title="سياسة الخصوصية"
      description="سياسة الخصوصية الخاصة بمدونة نبض التقنية - كيف نحمي بياناتك ونحترم خصوصيتك"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <section className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

          <div className="relative px-6 py-12 text-center text-white">
            <div className="text-5xl mb-3">🔒</div>
            <h1 className="text-3xl md:text-5xl font-black mb-3 drop-shadow-2xl">
              سياسة الخصوصية
            </h1>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto">
              خصوصيتك تهمنا. تعرّف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك.
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
              في <strong className="text-indigo-600">نبض التقنية</strong>، نحترم خصوصيتك ونلتزم بحماية
              بياناتك الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك عند استخدام موقعنا
              <strong> nabd-tech.vercel.app</strong> وخدماتنا المختلفة.
            </p>
            <p className="mt-3">
              باستخدامك للموقع، فإنك توافق على الممارسات الموضحة في هذه السياسة.
              إذا لم توافق، يرجى عدم استخدام الموقع.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              2. المعلومات التي نجمعها
            </h2>
            <p className="mb-3">نجمع نوعين من المعلومات:</p>

            <h3 className="font-bold text-gray-800 mb-2">أ) معلومات تقدمها طوعاً:</h3>
            <ul className="list-disc mr-6 space-y-1 mb-4">
              <li>البريد الإلكتروني عند الاشتراك في النشرة البريدية.</li>
              <li>الاسم والبريد والرسالة عند استخدام نموذج "اتصل بنا".</li>
              <li>أي محتوى تدخله في أدواتنا (روابط، نصوص).</li>
            </ul>

            <h3 className="font-bold text-gray-800 mb-2">ب) معلومات تُجمع تلقائياً:</h3>
            <ul className="list-disc mr-6 space-y-1">
              <li>عنوان IP ونوع المتصفح ونظام التشغيل.</li>
              <li>الصفحات التي زرتها ومدة الزيارة.</li>
              <li>ملفات تعريف الارتباط (Cookies) والتقنيات المشابهة.</li>
              <li>الموقع الجغرافي التقريبي (على مستوى البلد).</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              3. كيف نستخدم معلوماتك
            </h2>
            <ul className="list-disc mr-6 space-y-1">
              <li><strong>تقديم الخدمة:</strong> توليد المحتوى والصور المطلوبة عبر أدواتنا.</li>
              <li><strong>تحسين الموقع:</strong> تحليل سلوك الزوار لتطوير المحتوى والتجربة.</li>
              <li><strong>الاشتراك البريدي:</strong> إرسال آخر المقالات والأخبار إليك.</li>
              <li><strong>الرد على الاستفسارات:</strong> التواصل معك عبر نموذج الاتصال.</li>
              <li><strong>الإعلانات:</strong> عرض إعلانات ملائمة عبر Google AdSense.</li>
              <li><strong>الأمان:</strong> منع الاحتيال وحماية الموقع من الهجمات.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              4. مشاركة البيانات مع أطراف ثالثة
            </h2>
            <p className="mb-3">
              <strong className="text-red-600">لا نبيع بياناتك الشخصية أبداً</strong> لأي طرف ثالث.
              قد نشارك معلومات مجهولة الهوية فقط مع:
            </p>
            <ul className="list-disc mr-6 space-y-1">
              <li><strong>Google AdSense:</strong> لعرض الإعلانات (تُجمع البيانات وفق سياسة Google).</li>
              <li><strong>مزودو خدمات الذكاء الاصطناعي:</strong> لمعالجة طلباتك (OpenRouter، Hugging Face).</li>
              <li><strong>Formspree:</strong> لاستقبال رسائل "اتصل بنا" والنشرة البريدية.</li>
              <li><strong>Vercel:</strong> استضافة الموقع.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              5. ملفات تعريف الارتباط (Cookies)
            </h2>
            <p>
              نستخدم Cookies لتحسين تجربتك وتذكّر تفضيلاتك وقياس أداء الموقع.
              أنواع Cookies التي نستخدمها:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li><strong>ضرورية:</strong> لتشغيل الموقع بشكل صحيح.</li>
              <li><strong>تحليلية:</strong> لفهم سلوك الزوار (Google Analytics).</li>
              <li><strong>إعلانية:</strong> لعرض إعلانات ملائمة (Google AdSense).</li>
            </ul>
            <p className="mt-3">
              يمكنك تعطيل Cookies من إعدادات المتصفح، لكن قد يؤثر ذلك على بعض ميزات الموقع.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              6. إعلانات Google AdSense
            </h2>
            <p>
              نستخدم <strong>Google AdSense</strong> لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط
              (بما فيها DART Cookie) لعرض إعلانات مخصصة بناءً على زياراتك لموقعنا ومواقع أخرى.
            </p>
            <p className="mt-3">
              يمكنك إلغاء تخصيص الإعلانات من خلال:
            </p>
            <ul className="list-disc mr-6 space-y-1 mt-2">
              <li>
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  إعدادات إعلانات Google
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  www.aboutads.info
                </a>
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              7. أمان البيانات
            </h2>
            <p>
              نتخذ إجراءات أمنية معقولة (تشفير SSL، جدران حماية، مراقبة دورية) لحماية بياناتك
              من الوصول غير المصرح به أو التعديل أو التسريب. لكن لا يمكن ضمان أمان 100% على الإنترنت.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              8. حقوقك
            </h2>
            <p className="mb-3">لديك الحق في:</p>
            <ul className="list-disc mr-6 space-y-1">
              <li>الوصول إلى بياناتك الشخصية التي نحتفظ بها.</li>
              <li>تصحيح أي بيانات خاطئة أو غير مكتملة.</li>
              <li>طلب حذف بياناتك ("حق النسيان").</li>
              <li>الاعتراض على معالجة بياناتك لأغراض تسويقية.</li>
              <li>إلغاء الاشتراك في النشرة البريدية في أي وقت.</li>
            </ul>
            <p className="mt-3">
              لممارسة أي من هذه الحقوق، راسلنا عبر صفحة{' '}
              <a href="/contact" className="text-indigo-600 hover:underline font-medium">اتصل بنا</a>.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              9. خصوصية الأطفال
            </h2>
            <p>
              موقعنا غير موجه للأطفال دون سن 13 عاماً، ولا نجمع بياناتهم عن قصد.
              إذا اكتشفنا أننا جمعنا بيانات طفل دون 13 عاماً، سنحذفها فوراً.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              10. التغييرات على هذه السياسة
            </h2>
            <p>
              قد نحدّث هذه السياسة من وقت لآخر لمواكبة التغييرات في خدماتنا أو القوانين.
              سننشر التغييرات على هذه الصفحة مع تحديث تاريخ "آخر تعديل". ننصحك بمراجعة هذه الصفحة دورياً.
            </p>
          </section>

          {/* 11 */}
          <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold mb-3">هل لديك سؤال حول الخصوصية؟</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              إذا كان لديك أي استفسار حول سياسة الخصوصية أو كيفية تعاملنا مع بياناتك،
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