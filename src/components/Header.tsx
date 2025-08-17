import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import restaurantLogo from '@/assets/restaurant-logo.png';

const Header = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [visitorCount, setVisitorCount] = useState(1247);
  const location = useLocation();

  useEffect(() => {
    // Simulate visitor counter increment
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ru', name: 'Русский' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass rounded-2xl mx-4 mt-4 mb-8 p-4 sticky top-4 z-50">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Language */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={restaurantLogo} 
              alt="Restaurant Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-2xl font-bold text-gradient">Bella Vista</h1>
          </Link>

          <Select value={currentLanguage} onValueChange={setLanguage}>
            <SelectTrigger className="w-32 glass-sm border-0 text-foreground">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass border-border/30">
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button
            asChild
            variant={isActive('/') ? 'default' : 'ghost'}
            className={`glass-sm ${isActive('/') ? 'gradient-primary text-white' : ''}`}
          >
            <Link to="/">{t('home')}</Link>
          </Button>
          <Button
            asChild
            variant={isActive('/gallery') ? 'default' : 'ghost'}
            className={`glass-sm ${isActive('/gallery') ? 'gradient-primary text-white' : ''}`}
          >
            <Link to="/gallery">{t('gallery')}</Link>
          </Button>
          <Button
            asChild
            variant={isActive('/restaurant') ? 'default' : 'ghost'}
            className={`glass-sm ${isActive('/restaurant') ? 'gradient-primary text-white' : ''}`}
          >
            <Link to="/restaurant">{t('restaurant')}</Link>
          </Button>
          <Button
            asChild
            variant={isActive('/menus') ? 'default' : 'ghost'}
            className={`glass-sm ${isActive('/menus') ? 'gradient-primary text-white' : ''}`}
          >
            <Link to="/menus">{t('menus')}</Link>
          </Button>
        </nav>

        {/* Right side - Visitor Counter */}
        <div className="glass-sm rounded-xl px-4 py-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <div className="text-sm">
            <div className="text-muted-foreground">{t('visitorCounter')}</div>
            <div className="font-bold text-primary pulse-glow">{visitorCount.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden mt-4 flex flex-wrap gap-2">
        <Button
          asChild
          variant={isActive('/') ? 'default' : 'ghost'}
          size="sm"
          className={`glass-sm ${isActive('/') ? 'gradient-primary text-white' : ''}`}
        >
          <Link to="/">{t('home')}</Link>
        </Button>
        <Button
          asChild
          variant={isActive('/gallery') ? 'default' : 'ghost'}
          size="sm"
          className={`glass-sm ${isActive('/gallery') ? 'gradient-primary text-white' : ''}`}
        >
          <Link to="/gallery">{t('gallery')}</Link>
        </Button>
        <Button
          asChild
          variant={isActive('/restaurant') ? 'default' : 'ghost'}
          size="sm"
          className={`glass-sm ${isActive('/restaurant') ? 'gradient-primary text-white' : ''}`}
        >
          <Link to="/restaurant">{t('restaurant')}</Link>
        </Button>
        <Button
          asChild
          variant={isActive('/menus') ? 'default' : 'ghost'}
          size="sm"
          className={`glass-sm ${isActive('/menus') ? 'gradient-primary text-white' : ''}`}
        >
          <Link to="/menus">{t('menus')}</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;