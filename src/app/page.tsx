"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Clock, Heart, Sparkles, CheckCircle2, Star, Users, Shield, Zap, Apple, TrendingUp, Baby, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 12 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Carrossel de imagens - Mulheres brasileiras treinando em casa
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
      alt: "Mulher jovem fazendo yoga em casa"
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      alt: "Mulher madura praticando exercícios de força"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Mulher grávida fazendo exercícios seguros"
    },
    {
      url: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=800&h=600&fit=crop",
      alt: "Mulher de biotipo curvilíneo treinando com energia"
    },
    {
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      alt: "Mulher fazendo exercícios aeróbicos em casa"
    }
  ]

  // Navegação do carrossel
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  // Auto-play do carrossel (a cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-pink-50/30">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              FitAI
            </span>
          </div>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Entrar no App
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-0 px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Treinos Guiados por Inteligência Artificial
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Transforme Seu Corpo em Apenas{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                  10 Minutos
                </span>{" "}
                por Dia!
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Treinos personalizados e seguros, criados por IA especialmente para você. 
                Perfeito para pessoas ocupadas e <strong>modo especial para gestantes</strong>!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
                    <Zap className="w-5 h-5 mr-2" />
                    Experimente Grátis por 7 Dias
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-500 font-semibold text-lg px-8 py-6">
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 border-4 border-white flex items-center justify-center text-white font-bold">
                      {i === 4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    Mais de <strong>50.000 usuários</strong> satisfeitos
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                {/* Carrossel de Imagens */}
                <div className="relative">
                  <img 
                    src={carouselImages[currentImageIndex].url}
                    alt={carouselImages[currentImageIndex].alt}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-xl transition-all duration-700 ease-in-out"
                  />
                  
                  {/* Botões de Navegação */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-orange-500" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-orange-500" />
                  </button>

                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência Timer */}
      <section className="py-8 bg-gradient-to-r from-orange-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
            <Clock className="w-8 h-8" />
            <p className="text-xl font-bold">
              Oferta Especial Termina em: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Você é uma pessoa ocupada e acha difícil encontrar tempo para se exercitar?
          </h2>
          <p className="text-2xl text-gray-600">
            Não se preocupe, você <strong>não está sozinha</strong>!
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {[
              { icon: Clock, text: "Sem tempo para academia" },
              { icon: Users, text: "Treinos genéricos não funcionam" },
              { icon: Heart, text: "Medo de se machucar" }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <p className="font-semibold text-gray-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Com o <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">FitAI</span>, você terá acesso a treinos rápidos, seguros e altamente eficazes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Treinos de 10-25 Minutos",
                description: "Perfeito para sua rotina agitada. Treinos curtos e intensos que cabem no seu dia.",
                gradient: "from-blue-400 to-cyan-600"
              },
              {
                icon: Baby,
                title: "Modo Gestante Seguro",
                description: "Treinos especiais por trimestre, com exercícios seguros e aprovados para grávidas.",
                gradient: "from-pink-400 to-rose-600"
              },
              {
                icon: Sparkles,
                title: "IA Personalizada",
                description: "Treinos adaptados ao seu nível, energia do dia e equipamentos disponíveis.",
                gradient: "from-purple-400 to-indigo-600"
              },
              {
                icon: Apple,
                title: "Receitas Rápidas",
                description: "Dicas de alimentação e receitas saudáveis, baratas e práticas para brasileiros.",
                gradient: "from-green-400 to-emerald-600"
              },
              {
                icon: TrendingUp,
                title: "Relatório Semanal",
                description: "Acompanhe sua evolução com relatórios gerados por IA e sugestões personalizadas.",
                gradient: "from-orange-400 to-amber-600"
              },
              {
                icon: Shield,
                title: "100% Seguro",
                description: "Vídeos demonstrativos de cada exercício para garantir execução correta.",
                gradient: "from-red-400 to-pink-600"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-gray-600">Histórias reais de transformação</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Mãe de 2 filhos",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
                text: "Perdi 8kg em 3 meses com treinos de apenas 15 minutos! Finalmente encontrei algo que cabe na minha rotina.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Grávida de 6 meses",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
                text: "O modo gestante é perfeito! Me sinto segura e ativa durante a gravidez. Recomendo demais!",
                rating: 5
              },
              {
                name: "Juliana Santos",
                role: "Empresária",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
                text: "Treinos rápidos e eficazes. A IA entende exatamente o que eu preciso a cada dia. Incrível!",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Vendas - Planos de Assinatura */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-0 px-4 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Escolha Seu Plano
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Comece Sua Transformação Hoje
            </h2>
            <p className="text-xl text-gray-600">
              Todos os planos incluem <strong>7 dias grátis</strong> para você testar sem compromisso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Mensal */}
            <Card className="p-8 border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensal</h3>
                <p className="text-gray-600 mb-4">Flexibilidade total</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">R$ 49</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "7 dias grátis para testar",
                  "Treinos personalizados por IA",
                  "Modo gestante incluído",
                  "Receitas saudáveis",
                  "Relatórios semanais",
                  "Vídeos demonstrativos",
                  "Cancele quando quiser"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/login">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Começar Teste Grátis
                </Button>
              </Link>
            </Card>

            {/* Plano Trimestral - DESTAQUE */}
            <Card className="p-8 border-4 border-orange-500 transition-all duration-300 shadow-2xl relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 text-sm font-bold shadow-lg">
                  MAIS POPULAR
                </Badge>
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trimestral</h3>
                <p className="text-gray-600 mb-4">Melhor custo-benefício</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">R$ 39</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                  Economize R$ 30 (20% OFF)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Total: R$ 117 a cada 3 meses
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "7 dias grátis para testar",
                  "Treinos personalizados por IA",
                  "Modo gestante incluído",
                  "Receitas saudáveis",
                  "Relatórios semanais",
                  "Vídeos demonstrativos",
                  "Suporte prioritário",
                  "Cancele quando quiser"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/login">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Começar Teste Grátis
                </Button>
              </Link>
            </Card>

            {/* Plano Anual */}
            <Card className="p-8 border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                  MAIOR ECONOMIA
                </Badge>
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Anual</h3>
                <p className="text-gray-600 mb-4">Compromisso com resultados</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">R$ 29</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                  Economize R$ 240 (41% OFF)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Total: R$ 348 por ano
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "7 dias grátis para testar",
                  "Treinos personalizados por IA",
                  "Modo gestante incluído",
                  "Receitas saudáveis",
                  "Relatórios semanais",
                  "Vídeos demonstrativos",
                  "Suporte VIP prioritário",
                  "Conteúdo exclusivo",
                  "Cancele quando quiser"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/login">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Começar Teste Grátis
                </Button>
              </Link>
            </Card>
          </div>

          {/* Garantia e Benefícios */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Garantia de Satisfação 100%
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Satisfação garantida ou seu dinheiro de volta em 30 dias.</strong> Experimente sem riscos. 
                    Se não ficar completamente satisfeita, devolvemos 100% do seu investimento. 
                    Sem perguntas, sem complicações.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center border-2 hover:border-orange-500 transition-all duration-300">
                <Zap className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h4 className="font-bold text-gray-900 mb-2">7 Dias Grátis</h4>
                <p className="text-sm text-gray-600">
                  Teste todas as funcionalidades sem pagar nada
                </p>
              </Card>

              <Card className="p-6 text-center border-2 hover:border-orange-500 transition-all duration-300">
                <Shield className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h4 className="font-bold text-gray-900 mb-2">Garantia 30 Dias</h4>
                <p className="text-sm text-gray-600">
                  Dinheiro de volta se não ficar satisfeita
                </p>
              </Card>

              <Card className="p-6 text-center border-2 hover:border-orange-500 transition-all duration-300">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h4 className="font-bold text-gray-900 mb-2">Cancele Quando Quiser</h4>
                <p className="text-sm text-gray-600">
                  Sem multas, sem burocracia, sem compromisso
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-pink-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Comece Sua Transformação Hoje!
          </h2>
          <p className="text-2xl text-white/90">
            7 dias grátis • Cancele quando quiser • Sem compromisso
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-xl px-12 py-8 shadow-2xl hover:scale-110 transition-all duration-300">
              <Zap className="w-6 h-6 mr-3" />
              Experimente Grátis por 7 Dias
            </Button>
          </Link>
          <p className="text-white/80 text-sm">
            ⚡ Oferta limitada • Apenas 50 vagas disponíveis hoje
          </p>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center border-4 border-green-500 shadow-2xl">
            <Shield className="w-20 h-20 mx-auto mb-6 text-green-500" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação 100%
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experimente por 30 dias sem riscos. Se não ficar satisfeita, 
              devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem complicações.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Preciso de equipamentos?",
                a: "Não! A IA adapta os treinos aos equipamentos que você tem. Pode treinar apenas com o peso do corpo."
              },
              {
                q: "É seguro para gestantes?",
                a: "Sim! Temos um modo especial com treinos aprovados e divididos por trimestre, sempre priorizando sua segurança."
              },
              {
                q: "Quanto tempo duram os treinos?",
                a: "De 10 a 25 minutos. Você escolhe quanto tempo tem disponível e a IA cria o treino perfeito."
              },
              {
                q: "Posso cancelar quando quiser?",
                a: "Sim! Sem multas, sem burocracia. Cancele a qualquer momento com apenas um clique."
              }
            ].map((faq, i) => (
              <Card key={i} className="p-6 border-2 hover:border-orange-500 transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">FitAI</span>
              </div>
              <p className="text-gray-400">
                Transforme seu corpo com treinos guiados por IA
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Modo Gestante</li>
                <li>Receitas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>FAQ</li>
                <li>Comunidade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>YouTube</li>
                <li>TikTok</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 FitAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
