import Layout from '../components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout
      title="من نحن"
      description="تعرف على فريق نبض التقنية، رسالتنا، وما نقدمه من محتوى تقني عربي موثوق"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <section className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl"></div>

          <div className="relative px-6 py-16 text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-white/40">
              📰 من نحن
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-2xl">
              نبض التقنية
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
              منصة عربية متخصصة في آخر أخبار التكنولوجيا والذكاء الاصطناعي والأدوات الذكية.
            </p>
          </div>
        </section>

        {/* القصة */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-7 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              📖 قصتنا
            </h2>
            <p className="text-lg">
              في عالم يتسارع فيه التطور التقني بجنون، وجدنا أن المحتوى العربي يعاني من فجوة كبيرة.
              الأخبار تصل متأخرة، الشروحات معقدة، والأدوات المفيدة غير معروفة للمستخدم العربي.
            </p>
            <p className="mt-4 text-lg">
              من هنا وُلدت <strong className="text-indigo-600">"نبض التقنية"</strong> — منصة عربية
              تهدف إلى تقريب التقنية من الجميع، بلغة واضحة ومحتوى موثوق، بعيداً عن التعقيد.
            </p>
          </section>

          {/* ما نقدمه */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-7 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
              🎯 ماذا نقدم؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-r-4 border-blue-500">
                <div className="text-3xl mb-2">💻</div>
                <h3 className="font-bold text-gray-800 mb-2">أخبار التكنولوجيا</h3>
                <p className="text-sm leading-relaxed">
                  تغطية شاملة لأحدث تطورات التقنية عالمياً وعربياً، بأسلوب مبسط ومباشر.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 border-r-4 border-cyan-500">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-bold text-gray-800 mb-2">مراجعات الهواتف الذكية</h3>
                <p className="text-sm leading-relaxed">
                  مقارنات ومراجعات لأحدث الهواتف: المواصفات، الأسعار، والمميزات.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-5 border-r-4 border-purple-500">
                <div className="text-3xl mb-2">🖥️</div>
                <h3 className="font-bold text-gray-800 mb-2">الحواسيب والبرامج</h3>
                <p className="text-sm leading-relaxed">
                  دليلك لاختيار الحاسوب المناسب، أفضل البرامج، ونصائح الصيانة.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-r-4 border-amber-500">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="font-bold text-gray-800 mb-2">الذكاء الاصطناعي</h3>
                <p className="text-sm leading-relaxed">
                  شرح أدوات AI، أخبار النماذج الجديدة، وطرق استخدامها عملياً.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border-r-4 border-emerald-500">
                <div className="text-3xl mb-2">🛠️</div>
                <h3 className="font-bold text-gray-800 mb-2">شروحات "كيف"</h3>
                <p className="text-sm leading-relaxed">
                  دروس عملية خطوة بخطوة: من إعداد الجهاز إلى حل المشاكل التقنية.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 border-r-4 border-pink-500">
                <div className="text-3xl mb-2">🧰</div>
                <h3 className="font-bold text-gray-800 mb-2">أدوات ذكية مجانية</h3>
                <p className="text-sm leading-relaxed">
                  مجموعة أدوات مجانية لإنشاء المحتوى العربي بجودة احترافية.
                </p>
              </div>

            </div>
          </section>

          {/* الفائدة */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-7 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></span>
              ✨ ما الذي يجعلنا مختلفين؟
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">محتوى عربي أصلي 100%</h3>
                  <p className="text-sm">كل مقال مكتوب بعناية لجمهورنا العربي، بمعلومات دقيقة ومن مصادر موثوقة.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">لغة مبسطة للجميع</h3>
                  <p className="text-sm">نشرح التقنية بلغة يفهمها المبتدئ، دون المساس بدقة المعلومات.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">محتوى عملي وليس نظري</h3>
                  <p className="text-sm">كل مقال يقدم فائدة حقيقية يمكنك تطبيقها فوراً، وليس مجرد معلومات عامة.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">تحديث مستمر</h3>
                  <p className="text-sm">نواكب آخر المستجدات في عالم التقنية بشكل يومي وأسبوعي.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">مجاني تماماً</h3>
                  <p className="text-sm">كل المحتوى والأدوات مجانية، دون تسجيل ودون اشتراكات إجبارية.</p>
                </div>
              </div>
            </div>
          </section>

          {/* رؤيتنا */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-7 bg-gradient-to-b from-purple-500 to-fuchsia-600 rounded-full"></span>
              🎯 رؤيتنا
            </h2>
            <p className="text-lg">
              نؤمن بأن المعرفة التقنية حق للجميع، بغض النظر عن الخلفية أو الميزانية.
              هدفنا أن نصبح <strong className="text-indigo-600">المرجع العربي الأول</strong> في
              تبسيط التقنية وتقديم محتوى موثوق ومفيد لكل قارئ عربي.
            </p>
            <p className="mt-4 text-lg">
              نطمح إلى بناء <strong>مجتمع عربي واعٍ</strong> يفهم التقنية ويتفاعل معها بثقة،
              ويستخدمها لتطوير نفسه ومشاريعه.
            </p>
          </section>

          {/* قيمنا */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-7 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
              💎 قيمنا
            </h2>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <div>
                  <strong>الأصالة:</strong> كل مقال هو جهد حقيقي من فريقنا، وليس مجرد ترجمة أو نسخ.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <div>
                  <strong>المصداقية:</strong> نتحقق من كل معلومة قبل نشرها، ونذكر المصادر.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <div>
                  <strong>احترام خصوصيتك:</strong> لا نبيع بياناتك لأي طرف ثالث.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <div>
                  <strong>المجانية للجميع:</strong> لا رسوم خفية ولا اشتراكات إجبارية.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <div>
                  <strong>التطوير المستمر:</strong> نستمع لملاحظاتك ونحسّن المحتوى باستمرار.
                </div>
              </li>
            </ul>
          </section>

          {/* التواصل */}
          <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold mb-3">هل لديك سؤال أو اقتراح؟</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              نرحب بتواصلك معنا. راسلنا وسنرد عليك في أقرب وقت ممكن.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
            >
              📩 تواصل معنا
            </Link>
          </section>

        </div>
      </div>
    </Layout>
  );
}