
import React from 'react';
import { Clock, User, TrendingUp, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedArticles = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Como a alta da Selic impacta seus investimentos em 2024",
      excerpt: "Análise completa sobre as mudanças na taxa básica de juros e como reposicionar sua carteira para maximizar retornos.",
      category: "Mercado Financeiro",
      author: "Carlos Mendoza",
      readTime: "8 min",
      views: "12.5K",
      image: "photo-1518770660439-4636190af475",
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "5 Ações que podem dobrar de valor até dezembro",
      excerpt: "Seleção exclusiva de papéis com potencial de alta baseada em análise fundamentalista e técnica.",
      category: "Investimentos",
      author: "Ana Silva",
      readTime: "12 min",
      views: "18.2K",
      image: "photo-1498050108023-c5249f4df085",
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: "Fundos Imobiliários: Guia completo para iniciantes",
      excerpt: "Tudo que você precisa saber para começar a investir em FIIs e gerar renda passiva mensal.",
      category: "Imóveis",
      author: "Roberto Santos",
      readTime: "15 min",
      views: "9.8K",
      image: "photo-1486312338219-ce68d2c6f44d",
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: "Criptomoedas em 2024: O que esperar do Bitcoin e Ethereum",
      excerpt: "Projeções e análises sobre o futuro das principais criptomoedas no cenário econômico atual.",
      category: "Cripto",
      author: "Marina Costa",
      readTime: "10 min",
      views: "15.7K",
      image: "photo-1461749280684-dccba630e2f6",
      featured: false,
      trending: true
    }
  ];

  const mainArticle = featuredPosts[0];
  const sideArticles = featuredPosts.slice(1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-gray-600">
              Conteúdo selecionado pelos nossos especialistas para você
            </p>
          </div>
          <Badge variant="outline" className="text-emerald border-emerald">
            <TrendingUp className="w-4 h-4 mr-1" />
            Trending
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Card className="group hover-lift cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/${mainArticle.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={mainArticle.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-royal-blue text-white">
                    {mainArticle.category}
                  </Badge>
                  {mainArticle.trending && (
                    <Badge className="bg-red-500 text-white">
                      🔥 Trending
                    </Badge>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-gold transition-colors">
                    {mainArticle.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    {mainArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {mainArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {mainArticle.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {mainArticle.views}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <Card key={article.id} className="group hover-lift cursor-pointer border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={`https://images.unsplash.com/${article.image}?auto=format&fit=crop&w=200&q=80`}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {article.trending && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full pulse-gold"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-4 min-w-0">
                      <Badge variant="outline" className="text-xs mb-2">
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-royal-blue transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Newsletter CTA */}
            <Card className="bg-gradient-to-br from-royal-blue to-blue-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold mb-2">📈 Newsletter Exclusiva</h4>
                <p className="text-sm mb-4 text-blue-100">
                  Receba as melhores oportunidades de investimento direto no seu e-mail
                </p>
                <button className="w-full bg-white text-royal-blue font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Inscrever-se Grátis
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
