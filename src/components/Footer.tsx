import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16">
      {/* Restaurant Contact Footer */}
      <div className="glass rounded-2xl mx-4 mb-4 p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-4">{t('contact')}</h3>
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <Phone className="w-5 h-5 text-primary" />
              <span>+34 912 345 678</span>
            </div>
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@bellavista.es</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Calle Gran Vía 28, Madrid</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gradient mb-4">Horarios</h3>
            <div className="space-y-2 text-sm">
              <div>Lun - Jue: 12:00 - 24:00</div>
              <div>Vie - Sáb: 12:00 - 02:00</div>
              <div>Dom: 12:00 - 23:00</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-gradient mb-4">Síguenos</h3>
            <div className="flex gap-3 justify-center md:justify-end">
              <div className="glass-sm rounded-full p-2 glass-hover cursor-pointer">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="glass-sm rounded-full p-2 glass-hover cursor-pointer">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="glass-sm rounded-full p-2 glass-hover cursor-pointer">
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menuria Footer */}
      <div className="glass-sm rounded-xl mx-4 mb-4 p-4 text-center">
        <div className="text-sm text-muted-foreground">
          {t('poweredBy')} • 
          <a 
            href="https://menuria.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 text-primary hover:text-accent transition-colors"
          >
            menuria.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;