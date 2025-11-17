"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  ChevronLeft,
  Calendar,
  Award,
  Zap,
  Clock,
  Target,
  Trophy,
  Flame,
  Activity
} from "lucide-react"
import Link from "next/link"

export default function Progresso() {
  const semanas = [
    { semana: "Semana 1", treinos: 3, minutos: 45, meta: 43 },
    { semana: "Semana 2", treinos: 5, minutos: 75, meta: 71 },
    { semana: "Semana 3", treinos: 4, minutos: 60, meta: 57 },
    { semana: "Semana 4", treinos: 6, minutos: 90, meta: 86 }
  ]

  const conquistas = [
    { nome: "Primeira Semana", descricao: "Complete 3 treinos em uma semana", conquistado: true, icone: Award },
    { nome: "Sequência de Fogo", descricao: "5 dias seguidos de treino", conquistado: true, icone: Flame },
    { nome: "Maratonista", descricao: "Complete 100 minutos de treino", conquistado: true, icone: Trophy },
    { nome: "Dedicação Total", descricao: "Complete 20 treinos", conquistado: false, icone: Target },
    { nome: "Mestre do Tempo", descricao: "Complete 500 minutos de treino", conquistado: false, icone: Clock },
    { nome: "Imparável", descricao: "10 dias seguidos de treino", conquistado: false, icone: Zap }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/30">
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Meu Progresso</h1>
                <p className="text-sm text-gray-600">Acompanhe sua evolução</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Resumo Geral */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-600 text-white">Total</Badge>
            </div>
            <p className="text-3xl font-bold text-gray-900">18</p>
            <p className="text-sm text-gray-600">Treinos Completos</p>
          </Card>

          <Card className="p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-600 text-white">Atual</Badge>
            </div>
            <p className="text-3xl font-bold text-gray-900">5</p>
            <p className="text-sm text-gray-600">Dias Seguidos</p>
          </Card>

          <Card className="p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-600 text-white">Total</Badge>
            </div>
            <p className="text-3xl font-bold text-gray-900">270</p>
            <p className="text-sm text-gray-600">Minutos</p>
          </Card>

          <Card className="p-6 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8 text-orange-600" />
              <Badge className="bg-orange-600 text-white">Conquistas</Badge>
            </div>
            <p className="text-3xl font-bold text-gray-900">3/6</p>
            <p className="text-sm text-gray-600">Desbloqueadas</p>
          </Card>
        </div>

        {/* Relatório Semanal da IA */}
        <Card className="p-6 border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center flex-shrink-0">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Relatório Semanal da IA</h3>
                <p className="text-sm text-gray-600">Análise personalizada do seu desempenho</p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-purple-700">Parabéns, Maria!</strong> Você completou 6 treinos esta semana, 
                  superando sua meta de 5 treinos. Sua consistência está excelente! 🎉
                </p>
                <p className="leading-relaxed">
                  <strong className="text-purple-700">Pontos fortes:</strong> Você manteve uma sequência de 5 dias seguidos, 
                  mostrando grande dedicação. Seus treinos de HIIT tiveram ótimo desempenho.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-purple-700">Sugestão:</strong> Para a próxima semana, recomendo adicionar 1 treino 
                  de alongamento para recuperação muscular. Continue assim!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Progresso por Semana */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Evolução Mensal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {semanas.map((semana, index) => (
              <Card key={index} className="p-6 border-2 hover:border-blue-500 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">{semana.semana}</h3>
                  <Badge className="bg-blue-100 text-blue-700">
                    {semana.treinos} treinos
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Meta de treinos</span>
                      <span className="font-bold text-gray-900">{semana.treinos}/5</span>
                    </div>
                    <Progress value={(semana.treinos / 5) * 100} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{semana.minutos} minutos</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4 text-green-600" />
                      <span>{semana.meta}% da meta</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Conquistas */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conquistas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {conquistas.map((conquista, index) => (
              <Card 
                key={index} 
                className={`p-6 border-2 transition-all ${
                  conquista.conquistado 
                    ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50' 
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    conquista.conquistado 
                      ? 'bg-gradient-to-br from-yellow-400 to-amber-600' 
                      : 'bg-gray-300'
                  }`}>
                    <conquista.icone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{conquista.nome}</h3>
                    <p className="text-xs text-gray-600">{conquista.descricao}</p>
                  </div>
                  {conquista.conquistado && (
                    <Badge className="bg-yellow-500 text-white">
                      Conquistado! 🏆
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Próxima Meta */}
        <Card className="p-6 border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Próxima Meta</h3>
              <p className="text-sm text-gray-600 mb-3">Complete 20 treinos para desbloquear "Dedicação Total"</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progresso</span>
                  <span className="font-bold text-gray-900">18/20 treinos</span>
                </div>
                <Progress value={90} className="h-3" />
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 text-center border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-pink-50">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Continue sua jornada!</h3>
          <p className="text-gray-600 mb-6">Você está a apenas 2 treinos da próxima conquista</p>
          <Link href="/app">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold px-8">
              Treinar Agora
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
