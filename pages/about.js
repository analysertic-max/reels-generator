import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="من نحن" description="تعرف على فريق Reels Generator ورؤيتنا">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">من نحن</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">🎬 قصة Reels Generator</h2>
            <p>
              بدأت رحلة <strong>Reels Generator</strong> من حاجة حقيقية: كيف يمكن لأصحاب الصفحات والمجموعات
              على فيسبوك زيادة تفاعلهم دون قضاء ساعات في كتابة المحتوى؟ الجواب كان في الذكاء الاصطناعي.
            </p>
            <p className="mt-3">
              اليوم، يستخدم آلاف المسوقين وأصحاب المشاريع الصغيرة أدواتنا لتحويل فيديوهات Reels القصيرة
              إلى منشورات نصية تفاعلية جاهزة للنشر، مع صور احترافية تحمل أرقى الخطوط العربية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">🎯 رؤيتنا</h2>
            <p>
              نؤمن بأن كل شخص يستحق أدوات تسويق احترافية، بغض النظر عن ميزانيته أو خبرته.
              لذلك نقدم <strong>Reels Generator مجاناً</strong>، مدعوماً بإعلانات خفيفة غير مزعجة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">💡 قيمنا</h2>
            <ul className="list-disc mr-6 space-y-2">
              <li><strong>المجانية للجميع:</strong> لا رسوم خفية، لا اشتراكات إجبارية.</li>
              <li><strong>الشفافية:</strong> نستخدم AI مفتوح المصدر حيث أمكن.</li>
              <li><strong>احترام خصوصيتك:</strong> لا نبيع بياناتك لأي طرف ثالث.</li>
              <li><strong>الدعم العربي:</strong> مصمّم خصيصاً للمحتوى العربي.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">🚀 التقنيات المستخدمة</h2>
            <p>
              نستخدم مزيجاً من أحدث التقنيات: <strong>Next.js</strong> لواجهة سريعة، <strong>OpenRouter</strong>
              لتوليد النصوص، <strong>Hugging Face</strong> لتوليد الصور، و<strong>Sharp</strong> لدمج النص العربي
              بخط <strong>Cairo</strong> الجميل فوق الصور.
            </p>
          </section>

          <section className="bg-blue-50 rounded-lg p-5 border-r-4 border-blue-500">
            <h2 className="text-xl font-bold text-gray-800 mb-2">📧 تواصل معنا</h2>
            <p>
              هل لديك سؤال أو اقتراح؟ نرحب بتواصلك عبر صفحة{' '}
              <a href="/contact" className="text-blue-600 hover:underline font-medium">اتصل بنا</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}