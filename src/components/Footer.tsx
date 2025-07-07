
import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    conteudo: [
      { name: 'Mercado Financeiro', href: '#' },
      { name: 'Investimentos', href: '#' },
      { name: 'Educação Financeira', href: '#' },
      { name: 'Imóveis', href: '#' },
      { name: 'Negócios', href: '#' },
      { name: 'Economia Global', href: '#' }
    ],
    recursos: [
      { name: 'Quiz do Investidor', href: '#' },
      { name: 'Calculadora de Juros', href: '#' },
      { name: 'Comparador de Investimentos', href: '#' },
      { name: 'Glossário Financeiro', href: '#' },
      { name: 'Cursos Online', href: '#' },
      { name: 'Newsletter', href: '#' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Nossa Equipe', href: '#' },
      { name: 'Contato', href: '#' },
      { name: 'Parcerias', href: '#' },
      { name: 'Trabalhe Conosco', href: '#' },
      { name: 'Mídia Kit', href: '#' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-royal-gold">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">FinFlow Capital</h3>
                <p className="text-sm text-gray-400">Seu guia para prosperidade</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transformamos informação em riqueza. Oferecemos análises profundas, insights exclusivos e estratégias comprovadas para você alcançar a independência financeira.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm text-gray-300">contato@finflowcapital.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Conteúdo</h4>
            <ul className="space-y-2">
              {footerLinks.conteudo.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Empresa</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-sm font-semibold mb-2 text-gray-400">Legal</h5>
            <ul className="space-y-1">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-gray-300 transition-colors text-xs">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} FinFlow Capital. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>🔒 Site Seguro SSL</span>
              <span>📊 Dados em Tempo Real</span>
              <span>✨ Desde 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <strong>Disclaimer:</strong> As informações contidas neste site são de caráter educacional e não constituem recomendação de investimento. 
            Investimentos envolvem riscos e podem resultar em perdas. Consulte sempre um assessor qualificado antes de tomar decisões financeiras.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
