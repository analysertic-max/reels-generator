import Image from 'next/image';

export default function FeatureCard({ icon, title, description, image, gradient }) {
  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* الصورة أو الخلفية */}
      <div
        className={`relative h-40 overflow-hidden ${gradient || 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}
      >
        {image ? (
          <Image
            src={image}
            alt={`صورة توضيحية لـ ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-6xl opacity-30">{icon}</span>
          </div>
        )}

        {/* أيقونة عائمة */}
        <div
          className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl z-10 group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        >
          {icon}
        </div>
      </div>

      {/* المحتوى */}
      <div className="p-6 pt-10">
        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-indigo-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}