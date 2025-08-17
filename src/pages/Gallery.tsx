import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type FilterType = 'all' | 'interior' | 'dishes' | 'events';

const Gallery = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Mock gallery data
  const galleryItems = [
    { id: 1, type: 'interior', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400', alt: 'Interior del restaurante' },
    { id: 2, type: 'dishes', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400', alt: 'Plato especial' },
    { id: 3, type: 'interior', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400', alt: 'Salon principal' },
    { id: 4, type: 'dishes', src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', alt: 'Pasta fresca' },
    { id: 5, type: 'events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400', alt: 'Evento especial' },
    { id: 6, type: 'interior', src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=400', alt: 'Bar area' },
    { id: 7, type: 'dishes', src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', alt: 'Postre gourmet' },
    { id: 8, type: 'events', src: 'https://images.unsplash.com/photo-1529543738777-dcf160079b2f?w=400', alt: 'Celebración' },
    { id: 9, type: 'interior', src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400', alt: 'Terraza' },
    { id: 10, type: 'dishes', src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400', alt: 'Plato del chef' },
    { id: 11, type: 'events', src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400', alt: 'Noche temática' },
    { id: 12, type: 'interior', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400', alt: 'Cocina abierta' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  const filters = [
    { key: 'all' as FilterType, label: t('allPhotos') },
    { key: 'interior' as FilterType, label: t('interior') },
    { key: 'dishes' as FilterType, label: t('dishes') },
    { key: 'events' as FilterType, label: t('events') }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            {t('galleryTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubre la belleza de nuestro restaurante
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? 'default' : 'ghost'}
              className={`glass-sm ${
                activeFilter === filter.key 
                  ? 'gradient-primary text-white' 
                  : 'glass-hover'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="glass rounded-2xl overflow-hidden glass-hover cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No hay fotos disponibles para este filtro
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;