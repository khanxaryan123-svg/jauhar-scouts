import { galleryImages } from "@/lib/community-service-data";

export function CommunityGallery() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="rounded-2xl overflow-hidden shadow-lg bg-white aspect-square flex items-center justify-center text-7xl hover:scale-105 transition-transform duration-300" style={{backgroundColor: "#F2EFE9"}}>
              {image.emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
