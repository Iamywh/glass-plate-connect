import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    visitorCounter: 'Visitantes',
    
    // Home
    chatPlaceholder: 'Pregúntanos sobre nuestro restaurante...',
    askButton: 'Preguntar',
    satisfactionTitle: 'Califica tu experiencia',
    commentPlaceholder: 'Déjanos tu comentario...',
    submitComment: 'Enviar comentario',
    
    // Navigation
    home: 'Inicio',
    gallery: 'Galería',
    restaurant: 'El Restaurante',
    menus: 'Menús',
    
    // Gallery
    galleryTitle: 'Galería de Fotos',
    allPhotos: 'Todas las fotos',
    interior: 'Interior',
    dishes: 'Platos',
    events: 'Eventos',
    
    // Restaurant page
    historyTitle: 'Nuestra Historia',
    locationTitle: 'Ubicación',
    reviewsButton: 'Déjanos una reseña en Google',
    promosTitle: 'Promociones Especiales',
    
    // Menus
    menusTitle: 'Nuestros Menús',
    ingredients: 'Ingredientes',
    price: 'Precio',
    
    // Footer
    contact: 'Contacto',
    phone: 'Teléfono',
    email: 'Email',
    address: 'Dirección',
    poweredBy: 'Desarrollado por Menuria'
  },
  en: {
    // Header
    visitorCounter: 'Visitors',
    
    // Home
    chatPlaceholder: 'Ask us about our restaurant...',
    askButton: 'Ask',
    satisfactionTitle: 'Rate your experience',
    commentPlaceholder: 'Leave us your comment...',
    submitComment: 'Submit comment',
    
    // Navigation
    home: 'Home',
    gallery: 'Gallery',
    restaurant: 'The Restaurant',
    menus: 'Menus',
    
    // Gallery
    galleryTitle: 'Photo Gallery',
    allPhotos: 'All photos',
    interior: 'Interior',
    dishes: 'Dishes',
    events: 'Events',
    
    // Restaurant page
    historyTitle: 'Our History',
    locationTitle: 'Location',
    reviewsButton: 'Leave us a Google review',
    promosTitle: 'Special Promotions',
    
    // Menus
    menusTitle: 'Our Menus',
    ingredients: 'Ingredients',
    price: 'Price',
    
    // Footer
    contact: 'Contact',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    poweredBy: 'Powered by Menuria'
  },
  it: {
    // Header
    visitorCounter: 'Visitatori',
    
    // Home
    chatPlaceholder: 'Chiedici del nostro ristorante...',
    askButton: 'Chiedi',
    satisfactionTitle: 'Valuta la tua esperienza',
    commentPlaceholder: 'Lasciaci il tuo commento...',
    submitComment: 'Invia commento',
    
    // Navigation
    home: 'Home',
    gallery: 'Galleria',
    restaurant: 'Il Ristorante',
    menus: 'Menu',
    
    // Gallery
    galleryTitle: 'Galleria Fotografica',
    allPhotos: 'Tutte le foto',
    interior: 'Interni',
    dishes: 'Piatti',
    events: 'Eventi',
    
    // Restaurant page
    historyTitle: 'La Nostra Storia',
    locationTitle: 'Posizione',
    reviewsButton: 'Lasciaci una recensione su Google',
    promosTitle: 'Promozioni Speciali',
    
    // Menus
    menusTitle: 'I Nostri Menu',
    ingredients: 'Ingredienti',
    price: 'Prezzo',
    
    // Footer
    contact: 'Contatto',
    phone: 'Telefono',
    email: 'Email',
    address: 'Indirizzo',
    poweredBy: 'Sviluppato da Menuria'
  },
  pt: {
    // Header
    visitorCounter: 'Visitantes',
    
    // Home
    chatPlaceholder: 'Pergunte-nos sobre nosso restaurante...',
    askButton: 'Perguntar',
    satisfactionTitle: 'Avalie sua experiência',
    commentPlaceholder: 'Deixe seu comentário...',
    submitComment: 'Enviar comentário',
    
    // Navigation
    home: 'Início',
    gallery: 'Galeria',
    restaurant: 'O Restaurante',
    menus: 'Cardápios',
    
    // Gallery
    galleryTitle: 'Galeria de Fotos',
    allPhotos: 'Todas as fotos',
    interior: 'Interior',
    dishes: 'Pratos',
    events: 'Eventos',
    
    // Restaurant page
    historyTitle: 'Nossa História',
    locationTitle: 'Localização',
    reviewsButton: 'Deixe uma avaliação no Google',
    promosTitle: 'Promoções Especiais',
    
    // Menus
    menusTitle: 'Nossos Cardápios',
    ingredients: 'Ingredientes',
    price: 'Preço',
    
    // Footer
    contact: 'Contato',
    phone: 'Telefone',
    email: 'Email',
    address: 'Endereço',
    poweredBy: 'Desenvolvido pela Menuria'
  },
  fr: {
    // Header
    visitorCounter: 'Visiteurs',
    
    // Home
    chatPlaceholder: 'Demandez-nous des informations sur notre restaurant...',
    askButton: 'Demander',
    satisfactionTitle: 'Évaluez votre expérience',
    commentPlaceholder: 'Laissez-nous votre commentaire...',
    submitComment: 'Envoyer commentaire',
    
    // Navigation
    home: 'Accueil',
    gallery: 'Galerie',
    restaurant: 'Le Restaurant',
    menus: 'Menus',
    
    // Gallery
    galleryTitle: 'Galerie Photos',
    allPhotos: 'Toutes les photos',
    interior: 'Intérieur',
    dishes: 'Plats',
    events: 'Événements',
    
    // Restaurant page
    historyTitle: 'Notre Histoire',
    locationTitle: 'Emplacement',
    reviewsButton: 'Laissez-nous un avis Google',
    promosTitle: 'Promotions Spéciales',
    
    // Menus
    menusTitle: 'Nos Menus',
    ingredients: 'Ingrédients',
    price: 'Prix',
    
    // Footer
    contact: 'Contact',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    poweredBy: 'Développé par Menuria'
  },
  de: {
    // Header
    visitorCounter: 'Besucher',
    
    // Home
    chatPlaceholder: 'Fragen Sie uns über unser Restaurant...',
    askButton: 'Fragen',
    satisfactionTitle: 'Bewerten Sie Ihre Erfahrung',
    commentPlaceholder: 'Hinterlassen Sie uns Ihren Kommentar...',
    submitComment: 'Kommentar senden',
    
    // Navigation
    home: 'Startseite',
    gallery: 'Galerie',
    restaurant: 'Das Restaurant',
    menus: 'Speisekarten',
    
    // Gallery
    galleryTitle: 'Fotogalerie',
    allPhotos: 'Alle Fotos',
    interior: 'Interieur',
    dishes: 'Gerichte',
    events: 'Veranstaltungen',
    
    // Restaurant page
    historyTitle: 'Unsere Geschichte',
    locationTitle: 'Standort',
    reviewsButton: 'Hinterlassen Sie uns eine Google-Bewertung',
    promosTitle: 'Sonderaktionen',
    
    // Menus
    menusTitle: 'Unsere Speisekarten',
    ingredients: 'Zutaten',
    price: 'Preis',
    
    // Footer
    contact: 'Kontakt',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    poweredBy: 'Entwickelt von Menuria'
  },
  ru: {
    // Header
    visitorCounter: 'Посетители',
    
    // Home
    chatPlaceholder: 'Спросите нас о нашем ресторане...',
    askButton: 'Спросить',
    satisfactionTitle: 'Оцените ваш опыт',
    commentPlaceholder: 'Оставьте нам ваш комментарий...',
    submitComment: 'Отправить комментарий',
    
    // Navigation
    home: 'Главная',
    gallery: 'Галерея',
    restaurant: 'Ресторан',
    menus: 'Меню',
    
    // Gallery
    galleryTitle: 'Фотогалерея',
    allPhotos: 'Все фото',
    interior: 'Интерьер',
    dishes: 'Блюда',
    events: 'События',
    
    // Restaurant page
    historyTitle: 'Наша История',
    locationTitle: 'Местоположение',
    reviewsButton: 'Оставьте нам отзыв в Google',
    promosTitle: 'Специальные Предложения',
    
    // Menus
    menusTitle: 'Наши Меню',
    ingredients: 'Ингредиенты',
    price: 'Цена',
    
    // Footer
    contact: 'Контакт',
    phone: 'Телефон',
    email: 'Email',
    address: 'Адрес',
    poweredBy: 'Разработано Menuria'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('restaurant-language');
    if (savedLanguage && translations[savedLanguage as keyof typeof translations]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('restaurant-language', language);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[currentLanguage as keyof typeof translations];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};