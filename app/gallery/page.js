"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Tumhare rehab center ke liye sample data
const galleryData = [
  { id: 1, src: '/1.jpeg', alt: 'Spine Rehabilitation Session', category: 'treatment' },
  { id: 2, src: '/2.jpeg', alt: 'Joint Therapy', category: 'therapy' },
  { id: 3, src: '/3.jpeg', alt: 'Therapeutic Exercises', category: 'exercise' },
  { id: 4, src: '/4.jpeg', alt: 'Modern Clinic Facility', category: 'facility' },
  { id: 5, src: '/5.jpeg', alt: 'Personalized Patient Care', category: 'treatment' },
  { id: 6, src: '/6.jpeg', alt: 'Advanced Equipment', category: 'facility' },
  { id: 7, src: '/7.jpeg', alt: 'Expert Consultation', category: 'treatment' },
  { id: 8, src: '/8.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 9, src: '/9.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 10, src: '/10.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 11, src: '/11.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 12, src: '/12.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 13, src: '/13.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 14, src: '/14.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 15, src: '/15.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 16, src: '/16.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 17, src: '/17.jpeg', alt: 'Recovery Progress', category: 'therapy' },

];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'treatment', label: 'Treatment' },
  { id: 'therapy', label: 'Therapy' },
  { id: 'exercise', label: 'Exercise' },
  { id: 'facility', label: 'Facility' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Parallax Background Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-hero.jpg" // Yahan apni hero image lagao
            alt="Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and witness the journey of healing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Filter Navigation */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <motion.div 
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-white text-slate-700 hover:bg-blue-50 border-2 border-slate-200 hover:border-blue-300'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
                    <p className="text-blue-200 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500 text-lg">No images found in this category</p>
          </motion.div>
        )}
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white text-5xl hover:text-blue-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-white text-3xl font-bold">{selectedImage.alt}</h2>
                <p className="text-blue-300 mt-2 text-lg capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}