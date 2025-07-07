
import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroContent = [
    {
      badge: "🔥 TRENDING",
      title: "Selic em alta: Como isso afeta seus investimentos?",
      description: "Descubra as melhores estratégias para proteger e multiplicar seu patrimônio com a nova taxa de juros.",
      cta: "Ler análise completa",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      badge: "💎 OPORTUNIDADE",
      title: "3 Ações que podem dobrar de valor em 2024",
      description: "Análise exclusiva dos papéis mais promissores do mercado brasileiro para investidores inteligentes.",
      cta: "Ver recomendações",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      badge: "🎯 ESTRATÉGIA",
      title: "Como construir uma carteira de R$ 1 milhão",
      description: "Passo a passo detalhado para alcançar a independência financeira através de investimentos consistentes.",
      cta: "Começar agora",
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="text-royal-blue border-royal-blue">
                {heroContent[currentSlide].badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">
                  {heroContent[currentSlide].title}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {heroContent[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-royal-gold text-white hover:opacity-90">
                {heroContent[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white">
                <Play className="mr-2 h-5 w-5" />
                Assistir vídeo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-royal-blue">50K+</div>
                <div className="text-sm text-gray-600">Leitores ativos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald">95%</div>
                <div className="text-sm text-gray-600">Taxa de sucesso</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">R$ 2M+</div>
                <div className="text-sm text-gray-600">Em lucros gerados</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={`https://images.unsplash.com/${heroContent[currentSlide].image}?auto=format&fit=crop&w=800&q=80`}
                alt="Financial Growth"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald" />
                  <div>
                    <div className="text-sm font-semibold text-emerald">+12.5%</div>
                    <div className="text-xs text-gray-600">Este mês</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Carteira Recomendada</div>
                <div className="text-xs text-gray-600 mt-1">Rendimento: +28.4% a.a.</div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-royal-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
