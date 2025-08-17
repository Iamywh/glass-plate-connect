import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Restaurant = () => {
  const { t } = useLanguage();
  const [selectedPromo, setSelectedPromo] = useState<any>(null);

  const promos = [
    {
      id: 1,
      title: 'Menú Degustación',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      shortDesc: '7 platos del chef',
      fullDesc: 'Disfruta de una experiencia culinaria única con nuestro menú degustación de 7 platos, cuidadosamente seleccionados por nuestro chef ejecutivo.',
      price: '65€',
      availability: 'Viernes y Sábados'
    },
    {
      id: 2,
      title: 'Noche de Tapas',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      shortDesc: 'Tapas + bebida',
      fullDesc: '5 tapas gourmet acompañadas de una selección de vinos españoles. Perfect para compartir.',
      price: '35€',
      availability: 'Miércoles a Domingo'
    },
    {
      id: 3,
      title: 'Brunch Dominical',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
      shortDesc: 'Brunch buffet',
      fullDesc: 'Buffet libre con platos dulces y salados, bebidas incluidas. Ideal para disfrutar en familia.',
      price: '28€',
      availability: 'Solo Domingos'
    },
    {
      id: 4,
      title: 'Cena Romántica',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
      shortDesc: 'Para dos personas',
      fullDesc: 'Mesa privada, menú de 3 platos, botella de cava y postre especial. Incluye decoración romántica.',
      price: '120€',
      availability: 'Todos los días'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* History Section */}
        <section className="mb-16">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8 text-center">
              {t('historyTitle')}
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Bella Vista nació en 1985 con la visión de crear un espacio donde la tradición culinaria mediterránea 
                  se fusionara con técnicas modernas. Durante más de 35 años, hemos sido el hogar de celebraciones, 
                  encuentros familiares y momentos especiales.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Nuestro chef ejecutivo, María González, lleva 15 años al frente de nuestra cocina, 
                  creando platos que honran las recetas tradicionales mientras incorpora toques innovadores 
                  que sorprenden y deleitan a nuestros comensales.
                </p>
                <p className="text-lg leading-relaxed">
                  Ubicados en el corazón de Madrid, continuamos siendo un referente gastronómico, 
                  comprometidos con la calidad, la sostenibilidad y la experiencia excepcional de nuestros clientes.
                </p>
              </div>
              
              <div className="glass-sm rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600" 
                  alt="Chef en la cocina"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              {t('locationTitle')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="glass-sm rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Dirección</h3>
                  </div>
                  <p className="text-lg">Calle Gran Vía 28, 28013 Madrid</p>
                  <p className="text-muted-foreground mt-2">
                    Metro: Gran Vía (L1, L5) - 2 minutos a pie
                  </p>
                </div>
                
                <Button className="w-full gradient-primary text-white glass-hover">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t('reviewsButton')}
                </Button>
              </div>
              
              <div className="glass-sm rounded-2xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy42Ilc!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del restaurante"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              {t('promosTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              Ofertas especiales que no te puedes perder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promos.map((promo) => (
              <Card
                key={promo.id}
                className="glass border-border/30 cursor-pointer glass-hover"
                onClick={() => setSelectedPromo(promo)}
              >
                <div className="aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{promo.title}</CardTitle>
                  <CardDescription>{promo.shortDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{promo.price}</span>
                    <Button size="sm" className="gradient-primary text-white">
                      Ver más
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Promo Modal */}
        {selectedPromo && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPromo(null)}
          >
            <div 
              className="glass rounded-3xl p-8 max-w-md mx-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPromo.image}
                alt={selectedPromo.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gradient mb-4">{selectedPromo.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedPromo.fullDesc}</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-primary">{selectedPromo.price}</span>
                <span className="text-sm text-muted-foreground">{selectedPromo.availability}</span>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  className="flex-1 glass-sm"
                  onClick={() => setSelectedPromo(null)}
                >
                  Cerrar
                </Button>
                <Button className="flex-1 gradient-primary text-white">
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Restaurant;