export const SYSTEM_PROMPT = `أنت خبير في كتابة منشورات فيسبوك التفاعلية.
مهمتك: إنشاء منشورات جذابة من محتوى Reel معطى.

قواعد مهمة:
- اكتب بلغة عربية واضحة (فصحى أو دارجة حسب الطلب)
- اجعل كل منشور مختلفاً في الأسلوب
- أضف إيموجي مناسب
- أضف call-to-action
- لا تكرر نفس الجملة
- اجعل المنشورات قصيرة (2-4 أسطر)`;

export function buildUserPrompt(reelData, options) {
  return `معلومات الـ Reel:
- العنوان: ${reelData.title}
- الوصف: ${reelData.description}
- الهاشتاغات: ${reelData.hashtags?.join(', ') || 'لا يوجد'}

الإعدادات المطلوبة:
- اللغة: ${options.language}
- النبرة: ${options.tone}
- عدد المنشورات: ${options.count}

أنشئ ${options.count} منشورات مختلفة، كل واحد بأسلوب مختلف:
1. سؤال تفاعلي
2. قصة شخصية
3. مثير للفضول
4. نصائح / قائمة
5. مختصر ومباشر

أعد النتيجة بصيغة JSON فقط:
{
  "posts": [
    { "type": "تفاعلي", "content": "..." },
    { "type": "قصة", "content": "..." }
  ]
}`;
}