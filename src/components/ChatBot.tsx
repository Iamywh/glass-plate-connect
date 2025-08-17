import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const ChatBot = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: '¡Hola! Soy el asistente virtual de Bella Vista. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    horarios: '¡Por supuesto! Nuestros horarios son: Lunes a Jueves de 12:00 a 24:00, Viernes y Sábado de 12:00 a 02:00, y Domingos de 12:00 a 23:00.',
    reservas: 'Para reservar una mesa, puedes llamarnos al +34 912 345 678 o enviarnos un email a info@bellavista.es. ¡Estaremos encantados de atenderte!',
    ubicacion: 'Nos encontramos en Calle Gran Vía 28, Madrid. ¡Muy fácil de llegar en metro o autobús!',
    especialidades: 'Nuestras especialidades incluyen paella valenciana, jamón ibérico, gazpacho andaluz y nuestro famoso tiramisú casero.',
    precios: 'Nuestros precios van desde 15€ para entrantes hasta 35€ para platos principales. Ofrecemos menús del día desde 25€.',
    alergenos: 'Tenemos opciones para celíacos, veganos y personas con alergias. Nuestro chef puede adaptar los platos según tus necesidades.',
    default: 'Gracias por tu pregunta. Para información más específica, no dudes en contactarnos al +34 912 345 678 o visítanos en persona.'
  };

  const getResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('horario') || lowerQuestion.includes('hora') || lowerQuestion.includes('abierto')) {
      return predefinedResponses.horarios;
    }
    if (lowerQuestion.includes('reserva') || lowerQuestion.includes('mesa') || lowerQuestion.includes('booking')) {
      return predefinedResponses.reservas;
    }
    if (lowerQuestion.includes('donde') || lowerQuestion.includes('ubicacion') || lowerQuestion.includes('direccion')) {
      return predefinedResponses.ubicacion;
    }
    if (lowerQuestion.includes('especialidad') || lowerQuestion.includes('plato') || lowerQuestion.includes('comida')) {
      return predefinedResponses.especialidades;
    }
    if (lowerQuestion.includes('precio') || lowerQuestion.includes('costo') || lowerQuestion.includes('cuanto')) {
      return predefinedResponses.precios;
    }
    if (lowerQuestion.includes('alergia') || lowerQuestion.includes('celiaco') || lowerQuestion.includes('vegano')) {
      return predefinedResponses.alergenos;
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        text: getResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="glass rounded-2xl p-6 max-w-2xl mx-auto animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="gradient-primary rounded-full p-3">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gradient">Asistente Virtual</h2>
      </div>

      <div className="h-80 overflow-y-auto mb-6 space-y-4 px-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.type === 'user'
                  ? 'gradient-primary text-white'
                  : 'glass-sm border border-border/30'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="glass-sm border border-border/30 px-4 py-2 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chatPlaceholder')}
          className="glass-sm border-border/30 bg-transparent"
        />
        <Button
          onClick={handleSendMessage}
          className="gradient-primary text-white glass-hover px-6"
          disabled={!inputMessage.trim() || isTyping}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatBot;