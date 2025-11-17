"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Baby, 
  Heart, 
  Shield, 
  Play,
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Target
} from "lucide-react"
import Link from "next/link"

export default function ModoGestante() {
  const [trimestre, setTrimestre] = useState("1")

  const treinosPorTrimestre = {
    "1": {
      titulo: "Primeiro Trimestre (1-12 semanas)",
      descricao: "Foco em exercícios leves e adaptação do corpo",
      cor: "from-pink-400 to-rose-500",
      treinos: [
        {
          nome: "Caminhada Suave",
          duracao: "15 min",
          intensidade: "Leve",
          imagem: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&h=400&fit=crop",
          exercicios: ["Caminhada leve", "Respiração profunda", "Alongamento suave"]
        },
        {
          nome: "Yoga Pré-Natal Iniciante",
          duracao: "20 min",
          intensidade: "Leve",
          imagem: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
          exercicios: ["Postura do gato", "Respiração", "Meditação"]
        }
      ],
      permitidos: [
        "Caminhadas leves",
        "Yoga pré-natal",
        "Alongamentos suaves",
        "Exercícios de respiração",
        "Natação leve"
      ],
      evitar: [
        "Exercícios de alto impacto",
        "Abdominais tradicionais",
        "Levantamento de peso pesado",
        "Exercícios deitada de costas (após 12 semanas)",
        "Esportes de contato"
      ]
    },
    "2": {
      titulo: "Segundo Trimestre (13-26 semanas)",
      descricao: "Período mais confortável para exercícios moderados",
      cor: "from-purple-400 to-pink-500",
      treinos: [
        {
          nome: "Fortalecimento Seguro",
          duracao: "20 min",
          intensidade: "Moderada",
          imagem: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
          exercicios: ["Agachamento na parede", "Elevação de braços", "Mobilidade pélvica"]
        },
        {
          nome: "Cardio Adaptado",
          duracao: "15 min",
          intensidade: "Moderada",
          imagem: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
          exercicios: ["Marcha estacionária", "Step lateral", "Braços leves"]
        }
      ],
      permitidos: [
        "Agachamentos modificados",
        "Exercícios com faixa elástica",
        "Pilates pré-natal",
        "Hidroginástica",
        "Caminhadas moderadas"
      ],
      evitar: [
        "Exercícios de torção intensa",
        "Saltos e pulos",
        "Exercícios deitada de costas",
        "Movimentos bruscos",
        "Overtraining"
      ]
    },
    "3": {
      titulo: "Terceiro Trimestre (27-40 semanas)",
      descricao: "Foco em mobilidade, alongamento e preparação para o parto",
      cor: "from-blue-400 to-purple-500",
      treinos: [
        {
          nome: "Mobilidade Pélvica",
          duracao: "15 min",
          intensidade: "Leve",
          imagem: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
          exercicios: ["Círculos pélvicos", "Agachamento sumo", "Respiração"]
        },
        {
          nome: "Alongamento Relaxante",
          duracao: "20 min",
          intensidade: "Muito Leve",
          imagem: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop",
          exercicios: ["Alongamento lateral", "Postura da criança", "Relaxamento"]
        }
      ],
      permitidos: [
        "Exercícios de respiração",
        "Alongamentos suaves",
        "Caminhadas curtas",
        "Exercícios na bola",
        "Yoga restaurativa"
      ],
      evitar: [
        "Exercícios intensos",
        "Posições desconfortáveis",
        "Exercícios que causem falta de ar",
        "Movimentos de equilíbrio arriscados",
        "Qualquer exercício que cause dor"
      ]
    }
  }

  const trimestreAtual = treinosPorTrimestre[trimestre as keyof typeof treinosPorTrimestre]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/app">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Modo Gestante</h1>
                <p className="text-sm text-gray-600">Treinos seguros para você e seu bebê</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Alert de Segurança */}
        <Card className="p-6 border-2 border-pink-300 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="flex gap-4">
            <Shield className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">Segurança em Primeiro Lugar</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Todos os treinos foram desenvolvidos especificamente para gestantes e aprovados por profissionais de saúde. 
                Sempre consulte seu médico antes de iniciar qualquer programa de exercícios durante a gravidez.
              </p>
            </div>
          </div>
        </Card>

        {/* Seletor de Trimestre */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Selecione seu Trimestre</h2>
          <Tabs value={trimestre} onValueChange={setTrimestre} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1">
              <TabsTrigger value="1" className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-400 data-[state=active]:to-rose-500 data-[state=active]:text-white">
                <div className="text-center">
                  <p className="font-bold">1º Trimestre</p>
                  <p className="text-xs opacity-80">1-12 semanas</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="2" className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-pink-500 data-[state=active]:text-white">
                <div className="text-center">
                  <p className="font-bold">2º Trimestre</p>
                  <p className="text-xs opacity-80">13-26 semanas</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="3" className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                <div className="text-center">
                  <p className="font-bold">3º Trimestre</p>
                  <p className="text-xs opacity-80">27-40 semanas</p>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={trimestre} className="mt-6 space-y-6">
              {/* Header do Trimestre */}
              <Card className={`p-6 bg-gradient-to-r ${trimestreAtual.cor} text-white border-0`}>
                <h3 className="text-2xl font-bold mb-2">{trimestreAtual.titulo}</h3>
                <p className="text-white/90">{trimestreAtual.descricao}</p>
              </Card>

              {/* Treinos Recomendados */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Treinos Recomendados</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {trimestreAtual.treinos.map((treino, index) => (
                    <Card key={index} className="overflow-hidden border-2 hover:border-pink-500 transition-all">
                      <div className="relative h-48">
                        <img 
                          src={treino.imagem}
                          alt={treino.nome}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h4 className="text-xl font-bold text-white mb-1">{treino.nome}</h4>
                          <div className="flex gap-2">
                            <Badge className="bg-white/20 text-white border-0">
                              <Clock className="w-3 h-3 mr-1" />
                              {treino.duracao}
                            </Badge>
                            <Badge className="bg-white/20 text-white border-0">
                              <Target className="w-3 h-3 mr-1" />
                              {treino.intensidade}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Exercícios:</p>
                          <div className="space-y-1">
                            {treino.exercicios.map((ex, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                {ex}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Iniciar Treino
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Exercícios Permitidos e Evitar */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-2 border-green-200 bg-green-50/50">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">Exercícios Permitidos</h3>
                  </div>
                  <ul className="space-y-2">
                    {trimestreAtual.permitidos.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 border-2 border-red-200 bg-red-50/50">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <h3 className="text-lg font-bold text-gray-900">Exercícios a Evitar</h3>
                  </div>
                  <ul className="space-y-2">
                    {trimestreAtual.evitar.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Dicas Importantes */}
        <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Dicas Importantes para Gestantes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mantenha-se hidratada antes, durante e após os exercícios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Pare imediatamente se sentir tontura, falta de ar ou dor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Evite exercícios em ambientes muito quentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Use roupas confortáveis e calçados adequados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Ouça seu corpo - cada gravidez é única</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
