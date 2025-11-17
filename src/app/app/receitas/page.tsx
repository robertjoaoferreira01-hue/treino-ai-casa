"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Apple, 
  Clock, 
  ChevronLeft,
  Flame,
  Users,
  ChefHat,
  Heart,
  Leaf
} from "lucide-react"
import Link from "next/link"

export default function Receitas() {
  const receitas = {
    "cafe": [
      {
        nome: "Smoothie Energético",
        tempo: "5 min",
        calorias: "280 kcal",
        porcoes: "1 pessoa",
        imagem: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop",
        ingredientes: ["1 banana", "1 xícara de morango", "1 iogurte natural", "1 colher de mel", "Gelo"],
        preparo: "Bata todos os ingredientes no liquidificador até ficar cremoso. Sirva gelado.",
        tags: ["Rápido", "Saudável", "Energético"]
      },
      {
        nome: "Tapioca Fit com Ovo",
        tempo: "10 min",
        calorias: "220 kcal",
        porcoes: "1 pessoa",
        imagem: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=400&fit=crop",
        ingredientes: ["3 colheres de tapioca", "2 ovos", "Tomate", "Orégano", "Sal"],
        preparo: "Hidrate a tapioca, faça a massa na frigideira, adicione ovo mexido e tomate. Tempere a gosto.",
        tags: ["Brasileiro", "Proteína", "Prático"]
      }
    ],
    "almoco": [
      {
        nome: "Frango Grelhado com Legumes",
        tempo: "25 min",
        calorias: "420 kcal",
        porcoes: "2 pessoas",
        imagem: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop",
        ingredientes: ["2 filés de frango", "Brócolis", "Cenoura", "Abobrinha", "Azeite", "Temperos"],
        preparo: "Tempere o frango e grelhe. Refogue os legumes no azeite. Sirva junto com arroz integral.",
        tags: ["Proteína", "Completo", "Saudável"]
      },
      {
        nome: "Salada Completa de Atum",
        tempo: "15 min",
        calorias: "350 kcal",
        porcoes: "1 pessoa",
        imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
        ingredientes: ["1 lata de atum", "Alface", "Tomate", "Milho", "Ovo cozido", "Azeite"],
        preparo: "Monte a salada com todos os ingredientes. Tempere com azeite, limão e sal.",
        tags: ["Rápido", "Leve", "Proteína"]
      }
    ],
    "lanche": [
      {
        nome: "Pasta de Amendoim com Banana",
        tempo: "3 min",
        calorias: "180 kcal",
        porcoes: "1 pessoa",
        imagem: "https://images.unsplash.com/photo-1587334207976-c8bf47e4c9e3?w=600&h=400&fit=crop",
        ingredientes: ["1 banana", "2 colheres de pasta de amendoim", "Canela"],
        preparo: "Corte a banana em rodelas, adicione pasta de amendoim e polvilhe canela.",
        tags: ["Rápido", "Energético", "Prático"]
      },
      {
        nome: "Mix de Castanhas",
        tempo: "1 min",
        calorias: "160 kcal",
        porcoes: "1 pessoa",
        imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&h=400&fit=crop",
        ingredientes: ["Castanha do Pará", "Amêndoas", "Nozes", "Damasco seco"],
        preparo: "Misture as castanhas e frutas secas. Porção ideal: 30g.",
        tags: ["Prático", "Nutritivo", "Portátil"]
      }
    ],
    "jantar": [
      {
        nome: "Omelete de Legumes",
        tempo: "15 min",
        calorias: "280 kcal",
        porcoes: "1 pessoa",
        imagem: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop",
        ingredientes: ["3 ovos", "Tomate", "Cebola", "Espinafre", "Queijo branco"],
        preparo: "Bata os ovos, adicione os legumes picados. Cozinhe em fogo baixo até firmar.",
        tags: ["Leve", "Proteína", "Rápido"]
      },
      {
        nome: "Sopa de Legumes Caseira",
        tempo: "30 min",
        calorias: "220 kcal",
        porcoes: "4 pessoas",
        imagem: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
        ingredientes: ["Batata", "Cenoura", "Abóbora", "Chuchu", "Caldo de legumes"],
        preparo: "Cozinhe todos os legumes no caldo. Bata metade no liquidificador e misture.",
        tags: ["Conforto", "Nutritivo", "Econômico"]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-emerald-50/30">
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Receitas Rápidas</h1>
                <p className="text-sm text-gray-600">Alimentação saudável e prática</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Dicas de Alimentação */}
        <Card className="p-6 border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-start gap-4">
            <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Dicas para uma Alimentação Saudável</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Beba pelo menos 2 litros de água por dia
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Faça 5-6 refeições pequenas ao dia
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Inclua proteína em todas as refeições
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Prefira alimentos integrais
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Receitas por Categoria */}
        <Tabs defaultValue="cafe" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="cafe" className="py-3">
              <div className="text-center">
                <ChefHat className="w-5 h-5 mx-auto mb-1" />
                <p className="text-xs font-semibold">Café da Manhã</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="almoco" className="py-3">
              <div className="text-center">
                <Apple className="w-5 h-5 mx-auto mb-1" />
                <p className="text-xs font-semibold">Almoço</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="lanche" className="py-3">
              <div className="text-center">
                <Heart className="w-5 h-5 mx-auto mb-1" />
                <p className="text-xs font-semibold">Lanches</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="jantar" className="py-3">
              <div className="text-center">
                <Leaf className="w-5 h-5 mx-auto mb-1" />
                <p className="text-xs font-semibold">Jantar</p>
              </div>
            </TabsTrigger>
          </TabsList>

          {Object.entries(receitas).map(([categoria, receitasLista]) => (
            <TabsContent key={categoria} value={categoria} className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {receitasLista.map((receita, index) => (
                  <Card key={index} className="overflow-hidden border-2 hover:border-green-500 transition-all">
                    <div className="relative h-56">
                      <img 
                        src={receita.imagem}
                        alt={receita.nome}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-xl font-bold text-white mb-2">{receita.nome}</h3>
                        <div className="flex flex-wrap gap-2">
                          {receita.tags.map((tag, i) => (
                            <Badge key={i} className="bg-white/20 text-white border-0 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Info Rápida */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span>{receita.tempo}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Flame className="w-4 h-4 text-orange-600" />
                          <span>{receita.calorias}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span>{receita.porcoes}</span>
                        </div>
                      </div>

                      {/* Ingredientes */}
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Ingredientes:</p>
                        <div className="space-y-1">
                          {receita.ingredientes.map((ing, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              {ing}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Modo de Preparo */}
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Modo de Preparo:</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{receita.preparo}</p>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                        <Heart className="w-4 h-4 mr-2" />
                        Salvar Receita
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Dica Extra */}
        <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
          <div className="flex items-start gap-4">
            <ChefHat className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Dica do Chef</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Prepare suas refeições com antecedência nos finais de semana. Isso economiza tempo durante a semana 
                e ajuda a manter uma alimentação saudável mesmo nos dias mais corridos. Use potes de vidro para 
                armazenar e organize na geladeira!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
