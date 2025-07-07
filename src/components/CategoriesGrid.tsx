
import React from 'react';
import { TrendingUp, PiggyBank, Home, Briefcase, Globe, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesGrid = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: 'Mercado Financeiro',
      description: 'Bolsa, criptomoedas, fundos imobiliários e análises de mercado',
      posts: 156,
      color: 'royal-blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: PiggyBank,
      title: 'Investimentos',
      description: 'Ações, renda fixa, ETFs e estratégias de investimento',
      posts: 89,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: GraduationCap,
      title: 'Educação Financeira',
      description: 'Orçamento pessoal, controle de gastos e planejamento',
      posts: 124,
      color: 'gold',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Home,
      title: 'Imóveis & Bens',
      description: 'Financiamento, valorização imobiliária e fundos imobiliários',
      posts: 67,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Negócios',
      description: 'Empreendedorismo, startups, franquias e renda extra',
      posts: 78,
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Economia Global',
      description: 'Políticas monetárias, inflação e cenário econômico',
      posts: 45,
      color: 'rose',
      gradient: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Nosso Conteúdo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra insights valiosos em todas as áreas do mercado financeiro e construa sua independência financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-royal-blue transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {category.posts} artigos
                        </span>
                        <span className="text-xs font-medium text-emerald group-hover:text-gold transition-colors">
                          Ver mais →
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-royal-blue mb-1">500+</div>
            <div className="text-sm text-gray-600">Artigos Publicados</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-emerald mb-1">50K+</div>
            <div className="text-sm text-gray-600">Leitores Mensais</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-gold mb-1">95%</div>
            <div className="text-sm text-gray-600">Satisfação</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">24h</div>
            <div className="text-sm text-gray-600">Atualizações</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
