import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import SatisfactionRating from '@/components/SatisfactionRating';
import restaurantHero from '@/assets/restaurant-hero.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={restaurantHero} 
                alt="Bella Vista Restaurant Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 float">
                  Bienvenidos a Bella Vista
                </h2>
                <p className="text-xl md:text-2xl opacity-90">
                  Una experiencia culinaria inolvidable en el corazón de Madrid
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ChatBot Section */}
        <section className="mb-16">
          <ChatBot />
        </section>

        {/* Satisfaction Rating Section */}
        <section className="mb-16">
          <SatisfactionRating />
        </section>

        {/* Quick Info Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass rounded-2xl p-6 text-center glass-hover">
            <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-xl font-bold text-gradient mb-2">Cocina Mediterránea</h3>
            <p className="text-muted-foreground">Sabores auténticos con ingredientes frescos</p>
          </div>

          <div className="glass rounded-2xl p-6 text-center glass-hover">
            <div className="gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-gradient mb-2">Chef Premiado</h3>
            <p className="text-muted-foreground">Más de 20 años de experiencia culinaria</p>
          </div>

          <div className="glass rounded-2xl p-6 text-center glass-hover">
            <div className="gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍷</span>
            </div>
            <h3 className="text-xl font-bold text-gradient mb-2">Bodega Selecta</h3>
            <p className="text-muted-foreground">Más de 200 referencias de vinos</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;