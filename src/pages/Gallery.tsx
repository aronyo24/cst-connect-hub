import { Layout } from "@/components/layout/Layout";
import { Camera, X } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Computer Lab Session",
    category: "Lab",
    description: "Students engaged in practical programming sessions",
  },
  {
    id: 2,
    title: "Annual Tech Fest",
    category: "Event",
    description: "Celebrating innovation and creativity",
  },
  {
    id: 3,
    title: "Workshop on AI",
    category: "Workshop",
    description: "Interactive session on artificial intelligence",
  },
  {
    id: 4,
    title: "Project Presentation",
    category: "Academic",
    description: "Final year students showcasing their projects",
  },
  {
    id: 5,
    title: "Industrial Visit",
    category: "Tour",
    description: "Learning from industry professionals",
  },
  {
    id: 6,
    title: "Coding Competition",
    category: "Event",
    description: "Students competing in algorithmic challenges",
  },
  {
    id: 7,
    title: "Seminar Hall",
    category: "Infrastructure",
    description: "Modern seminar hall for academic events",
  },
  {
    id: 8,
    title: "Faculty Meeting",
    category: "Academic",
    description: "Department faculty planning session",
  },
  {
    id: 9,
    title: "Hardware Lab",
    category: "Lab",
    description: "Hands-on experience with hardware components",
  },
];

const categories = ["All", "Lab", "Event", "Workshop", "Academic", "Tour", "Infrastructure"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === "All" || img.category === selectedCategory
  );

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container relative mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
            Gallery
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up stagger-1">
            Glimpses of our department activities, events, and memorable moments
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gradient-primary text-primary-foreground shadow-soft'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Placeholder Background */}
                <div className="absolute inset-0 gradient-primary opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Icon Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-primary-foreground/30 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No images found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          <div
            className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder */}
            <div className="absolute inset-0 gradient-primary opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-24 h-24 text-primary-foreground/40" />
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-semibold text-primary-foreground mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-primary-foreground/80">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
