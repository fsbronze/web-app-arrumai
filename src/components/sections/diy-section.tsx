"use client"

import { useState } from "react"
import { Clock, Wrench, ChevronRight, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface DIYProject {
  id: string
  title: string
  description: string
  difficulty: "Fácil" | "Médio" | "Avançado"
  time: string
  cost: string
  image: string
  tools: string[]
  materials: string[]
  steps: number
  popularity: number
}

const projects: DIYProject[] = [
  {
    id: "1",
    title: "Horta Vertical",
    description: "Crie sua própria horta vertical usando paletes e vasos. Perfeito para apartamentos!",
    difficulty: "Fácil",
    time: "2-3 horas",
    cost: "R$ 80-120",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
    tools: ["Furadeira", "Parafusos", "Nível", "Trena"],
    materials: ["Palete", "Vasos", "Terra", "Mudas"],
    steps: 6,
    popularity: 95
  },
  {
    id: "2",
    title: "Nicho de Madeira",
    description: "Nichos decorativos para organizar e decorar qualquer ambiente",
    difficulty: "Médio",
    time: "3-4 horas",
    cost: "R$ 60-100",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
    tools: ["Serra", "Furadeira", "Lixa", "Trena"],
    materials: ["Tábuas de madeira", "Parafusos", "Verniz", "Suportes"],
    steps: 8,
    popularity: 88
  },
  {
    id: "3",
    title: "Prateleira Simples",
    description: "Prateleira flutuante moderna para livros e decoração",
    difficulty: "Fácil",
    time: "1-2 horas",
    cost: "R$ 40-80",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&h=400&fit=crop",
    tools: ["Furadeira", "Nível", "Trena", "Chave de fenda"],
    materials: ["Prateleira", "Suportes invisíveis", "Parafusos", "Buchas"],
    steps: 5,
    popularity: 92
  },
  {
    id: "4",
    title: "Reforma de Móvel",
    description: "Dê nova vida a móveis antigos com pintura e acabamento",
    difficulty: "Médio",
    time: "4-6 horas",
    cost: "R$ 100-180",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop",
    tools: ["Lixa", "Pincel", "Rolo", "Espátula"],
    materials: ["Tinta", "Verniz", "Massa corrida", "Puxadores novos"],
    steps: 10,
    popularity: 85
  },
  {
    id: "5",
    title: "Suporte de Plantas",
    description: "Suporte decorativo em macramê ou madeira para suas plantas",
    difficulty: "Fácil",
    time: "2 horas",
    cost: "R$ 30-60",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&h=400&fit=crop",
    tools: ["Tesoura", "Trena", "Furadeira (opcional)"],
    materials: ["Corda de sisal", "Argolas", "Ganchos"],
    steps: 6,
    popularity: 90
  },
  {
    id: "6",
    title: "Painel de Ferramentas",
    description: "Organize suas ferramentas com um painel funcional e bonito",
    difficulty: "Médio",
    time: "3-4 horas",
    cost: "R$ 70-120",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    tools: ["Furadeira", "Serra", "Nível", "Trena"],
    materials: ["Chapa perfurada", "Ganchos", "Parafusos", "Tinta spray"],
    steps: 7,
    popularity: 82
  },
  {
    id: "7",
    title: "Cabeceira Artesanal",
    description: "Cabeceira estofada ou de madeira para transformar seu quarto",
    difficulty: "Avançado",
    time: "5-7 horas",
    cost: "R$ 150-250",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
    tools: ["Furadeira", "Grampeador", "Serra", "Lixa"],
    materials: ["MDF", "Espuma", "Tecido", "Parafusos"],
    steps: 12,
    popularity: 78
  },
  {
    id: "8",
    title: "Porta Temperos",
    description: "Organize seus temperos com estilo na cozinha",
    difficulty: "Fácil",
    time: "1-2 horas",
    cost: "R$ 40-70",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
    tools: ["Furadeira", "Lixa", "Pincel"],
    materials: ["Madeira", "Potes", "Etiquetas", "Verniz"],
    steps: 5,
    popularity: 87
  },
  {
    id: "9",
    title: "Organizador de Mesa",
    description: "Porta-lápis e organizador personalizado para seu escritório",
    difficulty: "Fácil",
    time: "1-2 horas",
    cost: "R$ 25-50",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tools: ["Tesoura", "Cola quente", "Pincel"],
    materials: ["Latas", "Tinta", "Tecido", "Cola"],
    steps: 4,
    popularity: 91
  },
  {
    id: "10",
    title: "Pendente de Luz Artesanal",
    description: "Luminária pendente criativa para decorar qualquer ambiente",
    difficulty: "Médio",
    time: "2-3 horas",
    cost: "R$ 60-100",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=400&fit=crop",
    tools: ["Alicate", "Chave de fenda", "Estilete"],
    materials: ["Soquete", "Fio elétrico", "Material decorativo", "Lâmpada"],
    steps: 8,
    popularity: 84
  }
]

export function DIYSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Todos")

  const difficulties = ["Todos", "Fácil", "Médio", "Avançado"]

  const filteredProjects = projects.filter(project => {
    return selectedDifficulty === "Todos" || project.difficulty === selectedDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-700 border-green-300"
      case "Médio":
        return "bg-yellow-100 text-yellow-700 border-yellow-300"
      case "Avançado":
        return "bg-red-100 text-red-700 border-red-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-2">✨ Projetos DIY</h2>
        <p className="text-white/90">10 projetos incríveis para fazer em casa e transformar seu espaço</p>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-900 flex-shrink-0">Filtrar por:</span>
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedDifficulty === difficulty
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Popularity Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-bold text-gray-900">{project.popularity}%</span>
              </div>

              {/* Difficulty Badge */}
              <Badge className={`absolute top-3 left-3 ${getDifficultyColor(project.difficulty)} border`}>
                {project.difficulty}
              </Badge>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-xl text-white mb-1">{project.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-blue-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-900">Tempo</span>
                  </div>
                  <p className="text-sm font-bold text-blue-900">{project.time}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-900">Custo</span>
                  </div>
                  <p className="text-sm font-bold text-green-900">{project.cost}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-semibold text-gray-700">Ferramentas ({project.tools.length})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 2).map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      +{project.tools.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Steps */}
              <div className="flex items-center justify-between mb-4 bg-purple-50 rounded-xl p-3">
                <span className="text-sm text-purple-900">
                  <strong>{project.steps}</strong> passos detalhados
                </span>
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>

              {/* Action Button */}
              <Button className="w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg">
                Ver Projeto Completo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum projeto encontrado</h3>
          <p className="text-gray-600">Tente outro filtro de dificuldade</p>
        </div>
      )}
    </div>
  )
}
