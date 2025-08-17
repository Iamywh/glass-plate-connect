import React, { useState } from 'react';
import { Smile, Meh, Frown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

type RatingType = 'happy' | 'neutral' | 'sad' | null;

const SatisfactionRating = () => {
  const { t } = useLanguage();
  const [selectedRating, setSelectedRating] = useState<RatingType>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSelect = (rating: RatingType) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (!selectedRating) {
      toast({
        title: "Por favor selecciona una calificación",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission
    setSubmitted(true);
    toast({
      title: "¡Gracias por tu feedback!",
      description: "Tu opinión es muy importante para nosotros."
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRating(null);
      setComment('');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto animate-scale-in">
        <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Smile className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gradient mb-2">¡Gracias!</h3>
        <p className="text-muted-foreground">Tu feedback ha sido enviado correctamente.</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto animate-slide-up">
      <h3 className="text-2xl font-bold text-gradient text-center mb-6">
        {t('satisfactionTitle')}
      </h3>

      <div className="flex justify-center gap-8 mb-6">
        <div
          onClick={() => handleRatingSelect('happy')}
          className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 glass-hover ${
            selectedRating === 'happy' 
              ? 'gradient-primary transform scale-110' 
              : 'glass-sm'
          }`}
        >
          <Smile 
            className={`w-12 h-12 ${
              selectedRating === 'happy' ? 'text-white' : 'text-green-500'
            }`} 
          />
        </div>

        <div
          onClick={() => handleRatingSelect('neutral')}
          className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 glass-hover ${
            selectedRating === 'neutral' 
              ? 'gradient-primary transform scale-110' 
              : 'glass-sm'
          }`}
        >
          <Meh 
            className={`w-12 h-12 ${
              selectedRating === 'neutral' ? 'text-white' : 'text-yellow-500'
            }`} 
          />
        </div>

        <div
          onClick={() => handleRatingSelect('sad')}
          className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 glass-hover ${
            selectedRating === 'sad' 
              ? 'gradient-primary transform scale-110' 
              : 'glass-sm'
          }`}
        >
          <Frown 
            className={`w-12 h-12 ${
              selectedRating === 'sad' ? 'text-white' : 'text-red-500'
            }`} 
          />
        </div>
      </div>

      <div className="space-y-4">
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={t('commentPlaceholder')}
          className="glass-sm border-border/30 bg-transparent resize-none h-24"
        />

        <Button
          onClick={handleSubmit}
          className="w-full gradient-primary text-white glass-hover"
          disabled={!selectedRating}
        >
          {t('submitComment')}
        </Button>
      </div>
    </div>
  );
};

export default SatisfactionRating;