"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Dumbbell, 
  Clock, 
  Zap, 
  TrendingUp, 
  Apple, 
  Baby,
  Play,
  ChevronRight,
  Calendar,
  Target,
  Award,
  Heart,
  Sparkles
} from "lucide-react"
import Link from "next/link"

export default function AppDashboard() {
  const [userEnergy, setUserEnergy] = useState(70)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-pink-50/30">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Olá, Maria! 👋</h1>
                <p className="text-sm text-gray-600">Pronta para treinar hoje?</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Histórico
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 border-2 hover:border-orange-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-600">Treinos</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 border-2 hover:border-orange-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-xs text-gray-600">Sequência</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 border-2 hover:border-orange-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">180</p>
                <p className="text-xs text-gray-600">Minutos</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 border-2 hover:border-orange-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-600">Conquistas</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Energy Check */}
        <Card className="p-6 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-pink-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Como está sua energia hoje?</h3>
                <p className="text-sm text-gray-600">A IA vai adaptar seu treino</p>
              </div>
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Baixa</span>
                <span className="font-bold text-orange-600">{userEnergy}%</span>
                <span className="text-gray-600">Alta</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={userEnergy}
                onChange={(e) => setUserEnergy(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        </Card>

        {/* Treino Recomendado pela IA */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Treino de Hoje</h2>
            <Link href="/app/treino-personalizado">
              <Button variant="outline" size="sm" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                <Sparkles className="w-4 h-4 mr-2" />
                Criar Novo Treino
              </Button>
            </Link>
          </div>

          <Card className="overflow-hidden border-2 border-orange-300 shadow-xl">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop"
                alt="Treino HIIT"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-orange-500 text-white mb-2">
                  <Clock className="w-3 h-3 mr-1" />
                  15 minutos
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-1">HIIT Energizante</h3>
                <p className="text-white/90 text-sm">Perfeito para sua energia de hoje</p>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">Corpo inteiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">Alta intensidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">Sem equipamento</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Exercícios incluídos:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Burpees", "Mountain Climbers", "Jump Squats", "High Knees"].map((exercise) => (
                    <div key={exercise} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {exercise}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <Play className="w-5 h-5 mr-2" />
                Começar Treino
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/app/gestante">
            <Card className="p-6 border-2 hover:border-orange-500 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Modo Gestante</h3>
              <p className="text-sm text-gray-600">Treinos seguros por trimestre</p>
            </Card>
          </Link>

          <Link href="/app/receitas">
            <Card className="p-6 border-2 hover:border-orange-500 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Receitas Rápidas</h3>
              <p className="text-sm text-gray-600">Alimentação saudável e prática</p>
            </Card>
          </Link>

          <Link href="/app/progresso">
            <Card className="p-6 border-2 hover:border-orange-500 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Meu Progresso</h3>
              <p className="text-sm text-gray-600">Relatório semanal completo</p>
            </Card>
          </Link>
        </div>

        {/* Weekly Progress */}
        <Card className="p-6 border-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Progresso Semanal</h3>
            <Button variant="outline" size="sm">Ver Detalhes</Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Meta de treinos</span>
                <span className="font-bold text-gray-900">5/7 dias</span>
              </div>
              <Progress value={71} className="h-3" />
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {["S", "T", "Q", "Q", "S", "S", "D"].map((day, i) => (
                <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-sm font-bold ${
                  i < 5 ? "bg-gradient-to-br from-orange-400 to-pink-600 text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
