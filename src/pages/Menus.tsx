import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Wheat, Milk, Egg, Fish, Nut } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type AllergenType = 'gluten' | 'lactose' | 'eggs' | 'fish' | 'nuts';

interface MenuItem {
  id: number;
  name: string;
  ingredients: string;
  price: string;
  allergens: AllergenType[];
}

interface MenuCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
}

const Menus = () => {
  const { t } = useLanguage();
  const [selectedMenu, setSelectedMenu] = useState<MenuCategory | null>(null);
  const [activeAllergens, setActiveAllergens] = useState<AllergenType[]>([]);

  const allergenIcons = {
    gluten: Wheat,
    lactose: Milk,
    eggs: Egg,
    fish: Fish,
    nuts: Nut
  };

  const allergenLabels = {
    gluten: 'Gluten',
    lactose: 'Lactosa',
    eggs: 'Huevos',
    fish: 'Pescado',
    nuts: 'Frutos secos'
  };

  const menus: MenuCategory[] = [
    {
      id: 1,
      name: 'Entrantes',
      description: 'Para abrir el apetito',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
      items: [
        { id: 1, name: 'Jamón Ibérico', ingredients: 'Jamón ibérico de bellota, pan cristal, tomate', price: '18€', allergens: ['gluten'] },
        { id: 2, name: 'Gazpacho Andaluz', ingredients: 'Tomate, pepino, pimiento, ajo, aceite de oliva', price: '12€', allergens: [] },
        { id: 3, name: 'Croquetas de Jamón', ingredients: 'Jamón serrano, bechamel, pan rallado', price: '14€', allergens: ['gluten', 'lactose', 'eggs'] },
        { id: 4, name: 'Ensalada de Burrata', ingredients: 'Burrata, tomate, rúcula, reducción balsámica', price: '16€', allergens: ['lactose'] }
      ]
    },
    {
      id: 2,
      name: 'Pescados',
      description: 'Del mar a tu mesa',
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
      items: [
        { id: 5, name: 'Lubina a la Sal', ingredients: 'Lubina fresca, sal marina, hierbas aromáticas', price: '24€', allergens: ['fish'] },
        { id: 6, name: 'Salmón Grillado', ingredients: 'Salmón noruego, espárragos, salsa holandesa', price: '26€', allergens: ['fish', 'eggs'] },
        { id: 7, name: 'Paella Marinera', ingredients: 'Arroz bomba, mariscos, azafrán, ajo', price: '28€', allergens: ['fish'] },
        { id: 8, name: 'Bacalao Confitado', ingredients: 'Bacalao, aceite de oliva, ajo, perejil', price: '22€', allergens: ['fish'] }
      ]
    },
    {
      id: 3,
      name: 'Carnes',
      description: 'Selección premium',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400',
      items: [
        { id: 9, name: 'Chuletón de Ávila', ingredients: 'Ternera de Ávila, patatas panaderas, pimientos', price: '32€', allergens: [] },
        { id: 10, name: 'Cordero Lechal', ingredients: 'Cordero asado, romero, ajo, vino blanco', price: '28€', allergens: [] },
        { id: 11, name: 'Secreto Ibérico', ingredients: 'Secreto ibérico, puré de boniato, reducción Pedro Ximénez', price: '24€', allergens: [] },
        { id: 12, name: 'Pollo de Corral', ingredients: 'Pollo criado en libertad, verduras de temporada', price: '20€', allergens: [] }
      ]
    },
    {
      id: 4,
      name: 'Postres',
      description: 'Final dulce perfecto',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400',
      items: [
        { id: 13, name: 'Tiramisú Casero', ingredients: 'Mascarpone, café, cacao, savoiardi', price: '8€', allergens: ['lactose', 'eggs', 'gluten'] },
        { id: 14, name: 'Crema Catalana', ingredients: 'Crema pastelera, azúcar caramelizado, canela', price: '7€', allergens: ['lactose', 'eggs'] },
        { id: 15, name: 'Tarta de Chocolate', ingredients: 'Chocolate negro, avellanas, frambuesas', price: '9€', allergens: ['lactose', 'eggs', 'nuts'] },
        { id: 16, name: 'Sorbete de Limón', ingredients: 'Limón natural, azúcar, menta fresca', price: '6€', allergens: [] }
      ]
    }
  ];

  // Add more menus to reach 16 total
  const allMenus = [
    ...menus,
    { id: 5, name: 'Vegetarianos', description: 'Opciones vegetales', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', items: [] },
    { id: 6, name: 'Veganos', description: 'Sin productos animales', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', items: [] },
    { id: 7, name: 'Sin Gluten', description: 'Libre de gluten', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400', items: [] },
    { id: 8, name: 'Arroces', description: 'Especialidades de arroz', image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=400', items: [] },
    { id: 9, name: 'Tapas', description: 'Tapas tradicionales', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', items: [] },
    { id: 10, name: 'Vinos', description: 'Carta de vinos', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', items: [] },
    { id: 11, name: 'Cócteles', description: 'Bebidas premium', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400', items: [] },
    { id: 12, name: 'Café', description: 'Cafés especiales', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', items: [] },
    { id: 13, name: 'Desayunos', description: 'Para empezar el día', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400', items: [] },
    { id: 14, name: 'Brunchs', description: 'Fin de semana especial', image: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=400', items: [] },
    { id: 15, name: 'Menú Niños', description: 'Para los más pequeños', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400', items: [] },
    { id: 16, name: 'Menú Degustación', description: 'Experiencia completa', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400', items: [] }
  ];

  const toggleAllergen = (allergen: AllergenType) => {
    setActiveAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  const getFilteredItems = (items: MenuItem[]) => {
    if (activeAllergens.length === 0) return items;
    return items.filter(item => 
      !item.allergens.some(allergen => activeAllergens.includes(allergen))
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            {t('menusTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubre nuestra variada selección culinaria
          </p>
        </div>

        {!selectedMenu ? (
          <>
            {/* Allergen Filters */}
            <div className="glass rounded-2xl p-6 mb-12">
              <h3 className="text-lg font-bold mb-4 text-center">Filtrar por alérgenos</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {(Object.keys(allergenIcons) as AllergenType[]).map((allergen) => {
                  const Icon = allergenIcons[allergen];
                  const isActive = activeAllergens.includes(allergen);
                  return (
                    <Button
                      key={allergen}
                      onClick={() => toggleAllergen(allergen)}
                      variant="outline"
                      size="sm"
                      className={`glass-sm ${isActive ? 'gradient-primary text-white' : 'glass-hover'}`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {allergenLabels[allergen]}
                    </Button>
                  );
                })}
              </div>
              {activeAllergens.length > 0 && (
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Filtrando platos sin: {activeAllergens.map(a => allergenLabels[a]).join(', ')}
                </p>
              )}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
              {allMenus.map((menu, index) => (
                <Card
                  key={menu.id}
                  className="glass border-border/30 cursor-pointer glass-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedMenu(menu)}
                >
                  <div className="aspect-square overflow-hidden rounded-t-xl">
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{menu.name}</CardTitle>
                    <CardDescription className="text-sm">{menu.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </>
        ) : (
          /* Menu Details */
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gradient">{selectedMenu.name}</h2>
                <p className="text-muted-foreground">{selectedMenu.description}</p>
              </div>
              <Button
                onClick={() => setSelectedMenu(null)}
                variant="outline"
                className="glass-sm"
              >
                <X className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </div>

            {selectedMenu.items.length > 0 ? (
              <div className="grid gap-6">
                {getFilteredItems(selectedMenu.items).map((item) => (
                  <Card key={item.id} className="glass border-border/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                          <p className="text-muted-foreground mb-3">{item.ingredients}</p>
                          {item.allergens.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {item.allergens.map((allergen) => {
                                const Icon = allergenIcons[allergen];
                                return (
                                  <Badge key={allergen} variant="outline" className="glass-sm text-xs">
                                    <Icon className="w-3 h-3 mr-1" />
                                    {allergenLabels[allergen]}
                                  </Badge>
                                );
                              })}
                            </div>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-primary ml-4">
                          {item.price}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {getFilteredItems(selectedMenu.items).length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-xl text-muted-foreground">
                      No hay platos disponibles con los filtros seleccionados
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass rounded-2xl p-12 text-center">
                <h3 className="text-2xl font-bold text-gradient mb-4">Próximamente</h3>
                <p className="text-muted-foreground">
                  Estamos preparando este menú especialmente para ti. ¡Vuelve pronto!
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Menus;