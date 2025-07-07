
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const InvestorQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Qual é o seu principal objetivo financeiro?",
      options: [
        { text: "Preservar meu capital", score: 1 },
        { text: "Crescimento moderado", score: 2 },
        { text: "Crescimento acelerado", score: 3 },
        { text: "Máximo retorno possível", score: 4 }
      ]
    },
    {
      question: "Como você reagiria se seus investimentos perdessem 20% em um mês?",
      options: [
        { text: "Venderia tudo imediatamente", score: 1 },
        { text: "Ficaria preocupado mas manteria", score: 2 },
        { text: "Veria como oportunidade de compra", score: 3 },
        { text: "Investiria ainda mais", score: 4 }
      ]
    },
    {
      question: "Qual é seu horizonte de investimento?",
      options: [
        { text: "Menos de 1 ano", score: 1 },
        { text: "1 a 3 anos", score: 2 },
        { text: "3 a 10 anos", score: 3 },
        { text: "Mais de 10 anos", score: 4 }
      ]
    },
    {
      question: "Qual sua experiência com investimentos?",
      options: [
        { text: "Iniciante total", score: 1 },
        { text: "Alguma experiência", score: 2 },
        { text: "Experiente", score: 3 },
        { text: "Especialista", score: 4 }
      ]
    }
  ];

  const profiles = {
    conservative: {
      name: "Investidor Conservador",
      icon: "🛡️",
      description: "Você prioriza a segurança e preservação do capital",
      recommendations: ["Tesouro Direto", "CDB", "Fundos de Renda Fixa"],
      color: "emerald"
    },
    moderate: {
      name: "Investidor Moderado",
      icon: "⚖️",
      description: "Você busca equilibrio entre segurança e rentabilidade",
      recommendations: ["Fundos Multimercado", "Ações Blue Chips", "FIIs"],
      color: "gold"
    },
    aggressive: {
      name: "Investidor Arrojado",
      icon: "🚀",
      description: "Você aceita riscos maiores em busca de retornos superiores",
      recommendations: ["Ações Growth", "Criptomoedas", "Fundos de Ações"],
      color: "royal-blue"
    }
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getProfile = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / answers.length;

    if (averageScore <= 2) return profiles.conservative;
    if (averageScore <= 3) return profiles.moderate;
    return profiles.aggressive;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const profile = showResult ? getProfile() : null;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 shadow-sm mb-4">
              <Target className="w-5 h-5 text-royal-blue" />
              <span className="text-sm font-medium text-royal-blue">Teste Gratuito</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Descubra Seu Perfil de Investidor
            </h2>
            <p className="text-gray-600">
              Responda 4 perguntas rápidas e receba recomendações personalizadas
            </p>
          </div>

          <Card className="shadow-xl border-0">
            {!showResult ? (
              <>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-lg">
                      Pergunta {currentQuestion + 1} de {questions.length}
                    </CardTitle>
                    <span className="text-sm text-gray-500">
                      {Math.round(progress)}% completo
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </CardHeader>

                <CardContent className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.score)}
                        className="w-full p-4 text-left bg-gray-50 hover:bg-royal-blue hover:text-white rounded-lg transition-all duration-200 border-2 border-transparent hover:border-royal-blue group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option.text}</span>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="text-center p-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-6xl mb-4">{profile?.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {profile?.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {profile?.description}
                    </p>
                  </div>

                  <Card className="bg-gray-50 border-0">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-gold" />
                        Investimentos Recomendados
                      </h4>
                      <div className="space-y-2">
                        {profile?.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald" />
                            <span className="text-sm">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4">
                    <Button 
                      onClick={resetQuiz}
                      variant="outline" 
                      className="flex-1"
                    >
                      Refazer Teste
                    </Button>
                    <Button 
                      className="flex-1 gradient-royal-gold text-white"
                    >
                      Ver Carteira Recomendada
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500">
                    💡 Resultado baseado nas suas respostas. Consulte sempre um especialista.
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestorQuiz;
