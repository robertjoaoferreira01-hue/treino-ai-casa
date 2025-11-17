"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Dumbbell, 
  Clock, 
  Zap, 
  Target,
  Activity,
  AlertCircle,
  ChevronRight,
  Play,
  RefreshCw,
  Sparkles,
  TrendingUp,
  User,
  Home,
  TrendingDown,
  Flame,
  Timer,
  Settings,
  Video,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"

type WorkoutGoal = "perder_peso" | "ganhar_massa" | "condicionamento" | "flexibilidade" | "saude_geral"
type FitnessLevel = "iniciante" | "intermediario" | "avancado"
type Equipment = "nenhum" | "basico" | "completo"

interface Exercise {
  name: string
  sets: string
  rest: string
  description: string
  videoUrl: string
  thumbnail: string
}

interface WorkoutPlan {
  title: string
  duration: number
  intensity: string
  exercises: Exercise[]
  warmup: string[]
  cooldown: string[]
  tips: string[]
}

export default function TreinoPersonalizado() {
  const [step, setStep] = useState(1)
  const [generatingWorkout, setGeneratingWorkout] = useState(false)
  const [workoutGenerated, setWorkoutGenerated] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  
  // Form data
  const [goal, setGoal] = useState<WorkoutGoal>("condicionamento")
  const [duration, setDuration] = useState(15)
  const [fitnessLevel, setFitnessLevel] = useState<FitnessLevel>("intermediario")
  const [energyLevel, setEnergyLevel] = useState(70)
  const [restrictions, setRestrictions] = useState<string[]>([])
  const [equipment, setEquipment] = useState<Equipment>("nenhum")

  // Generated workout
  const [workout, setWorkout] = useState<WorkoutPlan | null>(null)

  const goals = [
    { id: "perder_peso", label: "Perder Peso", icon: TrendingUp, color: "from-red-400 to-orange-600" },
    { id: "ganhar_massa", label: "Ganhar Massa", icon: Dumbbell, color: "from-blue-400 to-cyan-600" },
    { id: "condicionamento", label: "Condicionamento", icon: Zap, color: "from-orange-400 to-pink-600" },
    { id: "flexibilidade", label: "Flexibilidade", icon: Activity, color: "from-purple-400 to-pink-600" },
    { id: "saude_geral", label: "Saúde Geral", icon: Target, color: "from-green-400 to-emerald-600" },
  ]

  const levels = [
    { id: "iniciante", label: "Iniciante", description: "Começando agora" },
    { id: "intermediario", label: "Intermediário", description: "Treino regular" },
    { id: "avancado", label: "Avançado", description: "Experiente" },
  ]

  const restrictionOptions = [
    "Joelho", "Ombro", "Coluna", "Tornozelo", "Punho", "Quadril"
  ]

  const equipmentOptions = [
    { id: "nenhum", label: "Nenhum", description: "Apenas peso corporal" },
    { id: "basico", label: "Básico", description: "Halteres, elásticos" },
    { id: "completo", label: "Completo", description: "Academia em casa" },
  ]

  const generateWorkout = () => {
    setGeneratingWorkout(true)
    
    // Simula geração de treino pela IA
    setTimeout(() => {
      const workoutPlan: WorkoutPlan = {
        title: goal === "perder_peso" ? "HIIT Queima Gordura" :
               goal === "ganhar_massa" ? "Força e Hipertrofia" :
               goal === "condicionamento" ? "Cardio Funcional" :
               goal === "flexibilidade" ? "Mobilidade Total" :
               "Treino Equilibrado",
        duration: duration,
        intensity: energyLevel > 70 ? "Alta" : energyLevel > 40 ? "Moderada" : "Leve",
        exercises: [
          {
            name: equipment === "nenhum" ? "Agachamento Livre" : "Agachamento com Peso",
            sets: fitnessLevel === "iniciante" ? "3x10" : fitnessLevel === "intermediario" ? "4x12" : "5x15",
            rest: "45s",
            description: "Mantenha as costas retas e desça até 90 graus. Joelhos alinhados com os pés.",
            videoUrl: "https://www.youtube.com/embed/aclHkVaku9U",
            thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop"
          },
          {
            name: "Flexão de Braço",
            sets: fitnessLevel === "iniciante" ? "3x8" : fitnessLevel === "intermediario" ? "4x12" : "5x15",
            rest: "45s",
            description: restrictions.includes("Punho") ? "Use apoio elevado para reduzir pressão nos punhos" : "Mãos na largura dos ombros, corpo alinhado",
            videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
            thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
          },
          {
            name: "Prancha Isométrica",
            sets: fitnessLevel === "iniciante" ? "3x20s" : fitnessLevel === "intermediario" ? "3x30s" : "4x45s",
            rest: "30s",
            description: restrictions.includes("Coluna") ? "Prancha com joelhos apoiados para proteção da coluna" : "Corpo alinhado, core contraído, respiração controlada",
            videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw",
            thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
          },
          {
            name: "Afundo Alternado",
            sets: fitnessLevel === "iniciante" ? "3x8" : fitnessLevel === "intermediario" ? "4x10" : "4x12",
            rest: "45s",
            description: restrictions.includes("Joelho") ? "Amplitude reduzida para proteção dos joelhos" : "Joelho não ultrapassa a ponta do pé, tronco ereto",
            videoUrl: "https://www.youtube.com/embed/QOVaHwm-Q6U",
            thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
          },
          {
            name: energyLevel > 60 ? "Burpees" : "Step Up",
            sets: fitnessLevel === "iniciante" ? "3x6" : fitnessLevel === "intermediario" ? "3x10" : "4x12",
            rest: "60s",
            description: "Movimento explosivo e controlado. Mantenha o core ativado.",
            videoUrl: energyLevel > 60 ? "https://www.youtube.com/embed/dZgVxmf6jkA" : "https://www.youtube.com/embed/5MYiM4MW_oI",
            thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop"
          },
        ],
        warmup: [
          "Polichinelos - 1 minuto",
          "Rotação de braços - 30 segundos",
          "Agachamento sem peso - 10 repetições",
          "Alongamento dinâmico - 1 minuto"
        ],
        cooldown: [
          "Caminhada leve - 2 minutos",
          "Alongamento de pernas - 1 minuto",
          "Alongamento de braços - 1 minuto",
          "Respiração profunda - 1 minuto"
        ],
        tips: [
          restrictions.length > 0 ? `✅ Exercícios adaptados para suas restrições: ${restrictions.join(", ")}` : "✅ Mantenha boa forma em todos os exercícios",
          energyLevel < 50 ? "💡 Treino ajustado para sua energia baixa - foque na qualidade" : "🔥 Aproveite sua energia alta para dar o máximo",
          "💧 Hidrate-se antes, durante e depois do treino",
          "👂 Escute seu corpo e ajuste a intensidade conforme necessário"
        ]
      }
      
      setWorkout(workoutPlan)
      setGeneratingWorkout(false)
      setWorkoutGenerated(true)
    }, 2000)
  }

  const adjustWorkout = (type: 'lighter' | 'intense' | 'quick' | 'adapted') => {
    if (!workout) return
    
    setGeneratingWorkout(true)
    
    setTimeout(() => {
      let adjustedWorkout = { ...workout }
      
      switch(type) {
        case 'lighter':
          adjustedWorkout.intensity = "Leve"
          adjustedWorkout.exercises = adjustedWorkout.exercises.map(ex => ({
            ...ex,
            sets: ex.sets.replace(/\d+x/, (match) => {
              const num = parseInt(match)
              return `${Math.max(2, num - 1)}x`
            }),
            rest: "60s"
          }))
          adjustedWorkout.tips = [
            "✅ Treino ajustado para intensidade leve - foque na forma correta",
            "💡 Descanse bem entre as séries",
            ...adjustedWorkout.tips.slice(2)
          ]
          break
          
        case 'intense':
          adjustedWorkout.intensity = "Alta"
          adjustedWorkout.exercises = adjustedWorkout.exercises.map(ex => ({
            ...ex,
            sets: ex.sets.replace(/\d+x/, (match) => {
              const num = parseInt(match)
              return `${num + 1}x`
            }),
            rest: "30s"
          }))
          adjustedWorkout.exercises.push({
            name: "Mountain Climbers",
            sets: "3x20",
            rest: "30s",
            description: "Movimento rápido e explosivo. Mantenha o core ativado.",
            videoUrl: "https://www.youtube.com/embed/nmwgirgXLYM",
            thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop"
          })
          adjustedWorkout.tips = [
            "🔥 Treino intensificado - dê o máximo em cada série!",
            "💪 Mantenha a forma mesmo com fadiga",
            ...adjustedWorkout.tips.slice(2)
          ]
          break
          
        case 'quick':
          adjustedWorkout.duration = Math.max(10, adjustedWorkout.duration - 5)
          adjustedWorkout.exercises = adjustedWorkout.exercises.slice(0, 3)
          adjustedWorkout.exercises = adjustedWorkout.exercises.map(ex => ({
            ...ex,
            rest: "30s"
          }))
          adjustedWorkout.warmup = adjustedWorkout.warmup.slice(0, 2)
          adjustedWorkout.cooldown = adjustedWorkout.cooldown.slice(0, 2)
          adjustedWorkout.tips = [
            `⚡ Treino rápido de ${adjustedWorkout.duration} minutos - máxima eficiência!`,
            "🎯 Foque na qualidade dos movimentos",
            ...adjustedWorkout.tips.slice(2)
          ]
          break
          
        case 'adapted':
          adjustedWorkout.exercises = adjustedWorkout.exercises.map(ex => {
            if (ex.name.includes("Burpees")) {
              return {
                ...ex,
                name: "Step Touch",
                description: "Alternativa mais segura e controlada",
                videoUrl: "https://www.youtube.com/embed/5MYiM4MW_oI",
                thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop"
              }
            }
            if (ex.name.includes("Flexão")) {
              return {
                ...ex,
                name: "Flexão com Joelhos Apoiados",
                description: "Versão adaptada para iniciantes ou restrições",
                videoUrl: "https://www.youtube.com/embed/jWxvty2KROs",
                thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
              }
            }
            return {
              ...ex,
              description: ex.description + " (versão adaptada)"
            }
          })
          adjustedWorkout.tips = [
            "✅ Treino adaptado com exercícios modificados para maior segurança",
            "💡 Todas as variações são igualmente eficazes",
            ...adjustedWorkout.tips.slice(2)
          ]
          break
      }
      
      setWorkout(adjustedWorkout)
      setGeneratingWorkout(false)
    }, 1500)
  }

  const resetForm = () => {
    setStep(1)
    setWorkoutGenerated(false)
    setWorkout(null)
    setSelectedExercise(null)
  }

  if (workoutGenerated && workout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/app" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                  <Dumbbell className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Seu Treino Personalizado
                  </h1>
                  <p className="text-sm text-gray-600">Gerado por IA especialmente para você</p>
                </div>
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetForm}
                className="border-orange-300 hover:bg-orange-50 hover:border-orange-400 transition-all"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Novo Treino
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Workout Header */}
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop"
                alt="Treino"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white mb-3 px-3 py-1 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Gerado por IA
                </Badge>
                <h2 className="text-4xl font-bold text-white mb-2">{workout.title}</h2>
                <div className="flex items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{workout.duration} min</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">{workout.intensity}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Target className="w-5 h-5" />
                    <span className="font-semibold">{workout.exercises.length} exercícios</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Ajustes Rápidos */}
          <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Ajustes Rápidos</h3>
                <p className="text-sm text-gray-600">Adapte seu treino instantaneamente com a IA</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                variant="outline"
                className="flex flex-col items-center gap-2 h-auto py-5 hover:border-green-500 hover:bg-green-50 transition-all hover:shadow-lg border-2"
                onClick={() => adjustWorkout('lighter')}
                disabled={generatingWorkout}
              >
                <TrendingDown className="w-6 h-6 text-green-600" />
                <span className="text-sm font-bold">Mais Leve</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-2 h-auto py-5 hover:border-red-500 hover:bg-red-50 transition-all hover:shadow-lg border-2"
                onClick={() => adjustWorkout('intense')}
                disabled={generatingWorkout}
              >
                <Flame className="w-6 h-6 text-red-600" />
                <span className="text-sm font-bold">Mais Intenso</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-2 h-auto py-5 hover:border-blue-500 hover:bg-blue-50 transition-all hover:shadow-lg border-2"
                onClick={() => adjustWorkout('quick')}
                disabled={generatingWorkout}
              >
                <Timer className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-bold">Mais Rápido</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-2 h-auto py-5 hover:border-purple-500 hover:bg-purple-50 transition-all hover:shadow-lg border-2"
                onClick={() => adjustWorkout('adapted')}
                disabled={generatingWorkout}
              >
                <Activity className="w-6 h-6 text-purple-600" />
                <span className="text-sm font-bold">Adaptado</span>
              </Button>
            </div>
            {generatingWorkout && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-purple-600 bg-white/50 backdrop-blur-sm py-3 rounded-lg">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span className="font-semibold">Ajustando seu treino...</span>
              </div>
            )}
          </Card>

          {/* Tips */}
          {workout.tips.length > 0 && (
            <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">Dicas Personalizadas</h3>
                  <div className="space-y-2">
                    {workout.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Warmup */}
          <Card className="p-6 border-0 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Aquecimento</h3>
                <p className="text-sm text-gray-600">5 minutos para preparar o corpo</p>
              </div>
            </div>
            <div className="space-y-3">
              {workout.warmup.map((exercise, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{exercise}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Main Exercises */}
          <Card className="p-6 border-0 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center shadow-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Treino Principal</h3>
                <p className="text-sm text-gray-600">{workout.duration - 10} minutos de exercícios</p>
              </div>
            </div>
            <div className="space-y-4">
              {workout.exercises.map((exercise, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-400 transition-all hover:shadow-lg bg-white">
                  <div className="flex flex-col md:flex-row">
                    {/* Thumbnail */}
                    <div className="relative md:w-48 h-48 md:h-auto flex-shrink-0 group cursor-pointer" onClick={() => setSelectedExercise(exercise)}>
                      <img 
                        src={exercise.thumbnail}
                        alt={exercise.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-all shadow-xl">
                          <Video className="w-8 h-8 text-orange-600" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-orange-600 text-white shadow-lg">
                        <Play className="w-3 h-3 mr-1" />
                        Vídeo
                      </Badge>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 text-white flex items-center justify-center text-lg font-bold shadow-md flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-1">{exercise.name}</h4>
                            <p className="text-sm text-gray-600">{exercise.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-13">
                        <Badge className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-orange-300">
                          <Target className="w-3 h-3 mr-1" />
                          {exercise.sets}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300">
                          <Clock className="w-3 h-3 mr-1" />
                          Descanso: {exercise.rest}
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="ml-auto text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                          onClick={() => setSelectedExercise(exercise)}
                        >
                          <Video className="w-4 h-4 mr-1" />
                          Ver Vídeo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Video Modal */}
          {selectedExercise && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedExercise(null)}
            >
              <div 
                className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedExercise.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{selectedExercise.description}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedExercise(null)}
                    className="hover:bg-gray-100"
                  >
                    ✕
                  </Button>
                </div>
                <div className="aspect-video bg-black">
                  <iframe
                    src={selectedExercise.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-orange-300">
                      <Target className="w-3 h-3 mr-1" />
                      {selectedExercise.sets}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300">
                      <Clock className="w-3 h-3 mr-1" />
                      Descanso: {selectedExercise.rest}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cooldown */}
          <Card className="p-6 border-0 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Desaquecimento</h3>
                <p className="text-sm text-gray-600">5 minutos para relaxar e recuperar</p>
              </div>
            </div>
            <div className="space-y-3">
              {workout.cooldown.map((exercise, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{exercise}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 sticky bottom-6">
            <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-7 text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
              <Play className="w-6 h-6 mr-2" />
              Começar Treino
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={resetForm}
              className="border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-400 shadow-lg"
            >
              <RefreshCw className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/app" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Treino Personalizado
                </h1>
                <p className="text-sm text-gray-600">A IA vai criar o treino perfeito para você</p>
              </div>
            </Link>
            <Link href="/app">
              <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">
                <Home className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-gray-700">Passo {step} de 6</span>
            <span className="text-sm font-semibold text-orange-600">{Math.round((step / 6) * 100)}%</span>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-pink-600 transition-all duration-500 shadow-lg"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Goal */}
        {step === 1 && (
          <Card className="p-8 border-0 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Qual é seu objetivo?</h2>
              <p className="text-gray-600 text-lg">Escolha o foco principal do seu treino</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {goals.map((g) => {
                const Icon = g.icon
                return (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as WorkoutGoal)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                      goal === g.id
                        ? "border-orange-500 bg-gradient-to-br from-orange-50 to-pink-50 shadow-lg"
                        : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{g.label}</h3>
                  </button>
                )
              })}
            </div>
            <Button 
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-7 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Continuar
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </Card>
        )}

        {/* Step 2: Duration */}
        {step === 2 && (
          <Card className="p-8 border-0 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Quanto tempo você tem?</h2>
              <p className="text-gray-600 text-lg">Escolha a duração do seu treino</p>
            </div>
            <div className="space-y-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 mb-6 bg-gradient-to-r from-orange-100 to-pink-100 px-8 py-4 rounded-2xl shadow-lg">
                  <Clock className="w-10 h-10 text-orange-600" />
                  <span className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">{duration}</span>
                  <span className="text-3xl text-gray-700 font-semibold">min</span>
                </div>
              </div>
              <input 
                type="range" 
                min="10" 
                max="25" 
                step="5"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer accent-orange-500 shadow-inner"
              />
              <div className="flex justify-between text-sm font-semibold text-gray-600">
                <span>10 min</span>
                <span>15 min</span>
                <span>20 min</span>
                <span>25 min</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 border-2 py-6"
              >
                Voltar
              </Button>
              <Button 
                onClick={() => setStep(3)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 shadow-xl"
              >
                Continuar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Fitness Level */}
        {step === 3 && (
          <Card className="p-8 border-0 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Qual seu nível de condicionamento?</h2>
              <p className="text-gray-600 text-lg">Isso ajuda a ajustar a intensidade</p>
            </div>
            <div className="space-y-4 mb-8">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setFitnessLevel(level.id as FitnessLevel)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                    fitnessLevel === level.id
                      ? "border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg"
                      : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{level.label}</h3>
                      <p className="text-sm text-gray-600">{level.description}</p>
                    </div>
                    <User className={`w-8 h-8 ${fitnessLevel === level.id ? "text-orange-500" : "text-gray-400"}`} />
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setStep(2)}
                className="flex-1 border-2 py-6"
              >
                Voltar
              </Button>
              <Button 
                onClick={() => setStep(4)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 shadow-xl"
              >
                Continuar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 4: Energy Level */}
        {step === 4 && (
          <Card className="p-8 border-0 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Como está sua energia hoje?</h2>
              <p className="text-gray-600 text-lg">A IA vai adaptar a intensidade do treino</p>
            </div>
            <div className="space-y-8 mb-8">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-xl ${
                  energyLevel > 70 ? "bg-gradient-to-br from-green-400 to-emerald-600" :
                  energyLevel > 40 ? "bg-gradient-to-br from-orange-400 to-pink-600" :
                  "bg-gradient-to-br from-gray-400 to-gray-600"
                }`}>
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {energyLevel > 70 ? "Alta Energia 🔥" :
                   energyLevel > 40 ? "Energia Moderada 💪" :
                   "Energia Baixa 😴"}
                </p>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={energyLevel}
                onChange={(e) => setEnergyLevel(Number(e.target.value))}
                className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer accent-orange-500 shadow-inner"
              />
              <div className="flex justify-between text-sm font-semibold text-gray-600">
                <span>Muito baixa</span>
                <span>Moderada</span>
                <span>Muito alta</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setStep(3)}
                className="flex-1 border-2 py-6"
              >
                Voltar
              </Button>
              <Button 
                onClick={() => setStep(5)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 shadow-xl"
              >
                Continuar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 5: Restrictions */}
        {step === 5 && (
          <Card className="p-8 border-0 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Você tem alguma restrição física?</h2>
              <p className="text-gray-600 text-lg">Selecione todas que se aplicam (opcional)</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {restrictionOptions.map((restriction) => (
                <button
                  key={restriction}
                  onClick={() => {
                    if (restrictions.includes(restriction)) {
                      setRestrictions(restrictions.filter(r => r !== restriction))
                    } else {
                      setRestrictions([...restrictions, restriction])
                    }
                  }}
                  className={`p-5 rounded-2xl border-2 transition-all hover:scale-105 ${
                    restrictions.includes(restriction)
                      ? "border-orange-500 bg-gradient-to-br from-orange-50 to-pink-50 shadow-lg"
                      : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                  }`}
                >
                  <AlertCircle className={`w-8 h-8 mx-auto mb-3 ${
                    restrictions.includes(restriction) ? "text-orange-500" : "text-gray-400"
                  }`} />
                  <p className="text-sm font-bold text-gray-900">{restriction}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setStep(4)}
                className="flex-1 border-2 py-6"
              >
                Voltar
              </Button>
              <Button 
                onClick={() => setStep(6)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 shadow-xl"
              >
                Continuar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 6: Equipment */}
        {step === 6 && (
          <Card className="p-8 border-0 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Quais equipamentos você tem?</h2>
              <p className="text-gray-600 text-lg">A IA vai adaptar os exercícios</p>
            </div>
            <div className="space-y-4 mb-8">
              {equipmentOptions.map((eq) => (
                <button
                  key={eq.id}
                  onClick={() => setEquipment(eq.id as Equipment)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                    equipment === eq.id
                      ? "border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg"
                      : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{eq.label}</h3>
                      <p className="text-sm text-gray-600">{eq.description}</p>
                    </div>
                    <Dumbbell className={`w-8 h-8 ${equipment === eq.id ? "text-orange-500" : "text-gray-400"}`} />
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setStep(5)}
                className="flex-1 border-2 py-6"
              >
                Voltar
              </Button>
              <Button 
                onClick={generateWorkout}
                disabled={generatingWorkout}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-7 text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                {generatingWorkout ? (
                  <>
                    <RefreshCw className="w-6 h-6 mr-2 animate-spin" />
                    Gerando seu treino...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6 mr-2" />
                    Gerar Treino com IA
                  </>
                )}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
