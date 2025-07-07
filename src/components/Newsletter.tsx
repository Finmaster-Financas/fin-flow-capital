
import React, { useState } from 'react';
import { Mail, CheckCircle, TrendingUp, Zap, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const benefits = [
    { icon: TrendingUp, text: "Análises exclusivas de mercado" },
    { icon: Zap, text: "Alertas de oportunidades em tempo real" },
    { icon: Gift, text: "E-book gratuito: 'Guia do Investidor Inteligente'" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-royal-blue to-blue-600 text-white">
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium">Newsletter Gratuita</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      Não Perca Nenhuma Oportunidade de Ouro
                    </h3>
                    
                    <p className="text-blue-100 text-lg leading-relaxed">
                      Junte-se a mais de 50.000 investidores inteligentes que recebem insights exclusivos e análises de mercado que não encontram em lugar nenhum.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-blue-100">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Social Proof */}
                  <div className="pt-6 border-t border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 bg-white/30 rounded-full border-2 border-white" />
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">50.000+ investidores</div>
                        <div className="text-xs text-blue-200">já se inscreveram</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 lg:p-12 bg-gray-50">
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Inscreva-se Gratuitamente
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Sem spam. Apenas conteúdo de alto valor. Cancele quando quiser.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Seu melhor e-mail
                        </label>
                        <Input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          className="h-12 text-lg"
                          required
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full gradient-royal-gold text-white font-semibold h-12 text-lg hover:opacity-90"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Receber Insights Gratuitos
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500">
                        🔒 Seus dados estão seguros. Política de privacidade.
                      </p>
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-white border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center text-white font-semibold">
                            M
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 italic mb-2">
                              "Graças às dicas da newsletter, consegui +35% de rentabilidade em 6 meses!"
                            </p>
                            <div className="text-xs text-gray-500">
                              <strong>Marcos Silva</strong> • Investidor
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </form>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        🎉 Bem-vindo ao time!
                      </h4>
                      <p className="text-gray-600">
                        Você receberá nosso primeiro insight exclusivo em breve.
                        Prepare-se para turbinar seus investimentos!
                      </p>
                    </div>

                    <div className="bg-emerald/10 border border-emerald/20 rounded-lg p-4">
                      <p className="text-sm text-emerald-700 font-medium">
                        📧 Confirme sua inscrição no e-mail que enviamos
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
