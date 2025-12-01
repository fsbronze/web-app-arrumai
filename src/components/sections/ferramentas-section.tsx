"use client"

import { useState } from "react"
import { Search, Wrench, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Tool {
  id: string
  name: string
  description: string
  usage: string
  importance: "Essencial" | "Importante" | "Útil"
  tutorialCount: number
  image: string
  safetyTips: string[]
  recommendedFor: string[]
}

const tools: Tool[] = [
  {
    id: "1",
    name: "Chave de Fenda",
    description: "Ferramenta básica para apertar e soltar parafusos com fenda reta",
    usage: "Ideal para parafusos de fenda simples em móveis, tomadas e interruptores",
    importance: "Essencial",
    tutorialCount: 28,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
    safetyTips: ["Use o tamanho correto", "Mantenha a ponta em bom estado", "Não use como alavanca"],
    recommendedFor: ["Trocar tomada", "Ajustar móveis", "Instalar interruptor"]
  },
  {
    id: "2",
    name: "Chave Phillips",
    description: "Chave para parafusos com fenda em cruz (formato +)",
    usage: "Usada em parafusos Phillips, muito comum em eletrônicos e móveis modernos",
    importance: "Essencial",
    tutorialCount: 32,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Escolha o tamanho adequado", "Aplique pressão firme", "Evite escorregar"],
    recommendedFor: ["Montar móveis", "Reparos elétricos", "Ajustes gerais"]
  },
  {
    id: "3",
    name: "Martelo",
    description: "Ferramenta de impacto para pregar, ajustar e demolir",
    usage: "Pregar, remover pregos, ajustar peças e pequenas demolições",
    importance: "Essencial",
    tutorialCount: 18,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    safetyTips: ["Use óculos de proteção", "Segure firme o cabo", "Cuidado com os dedos"],
    recommendedFor: ["Pendurar quadros", "Ajustar portas", "Pequenas demolições"]
  },
  {
    id: "4",
    name: "Chave Inglesa",
    description: "Chave ajustável para apertar e soltar porcas e parafusos",
    usage: "Trabalhos hidráulicos, aperto de conexões e tubulações",
    importance: "Essencial",
    tutorialCount: 25,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    safetyTips: ["Ajuste bem antes de usar", "Puxe, não empurre", "Use o tamanho adequado"],
    recommendedFor: ["Trocar torneira", "Consertar vazamentos", "Instalar registros"]
  },
  {
    id: "5",
    name: "Alicate Universal",
    description: "Ferramenta versátil para segurar, cortar e dobrar",
    usage: "Segurar peças, cortar fios, dobrar arames e pequenos ajustes",
    importance: "Essencial",
    tutorialCount: 22,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Não use em circuitos energizados", "Mantenha as lâminas afiadas", "Use com cuidado"],
    recommendedFor: ["Trabalhos elétricos", "Cortar fios", "Segurar peças"]
  },
  {
    id: "6",
    name: "Trena",
    description: "Instrumento de medição flexível e retrátil",
    usage: "Medir distâncias, alturas e dimensões para qualquer projeto",
    importance: "Essencial",
    tutorialCount: 35,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Cuidado ao retrair", "Mantenha limpa", "Verifique a trava"],
    recommendedFor: ["Todos os projetos", "Medições precisas", "Planejamento"]
  },
  {
    id: "7",
    name: "Estilete",
    description: "Lâmina retrátil para cortes precisos",
    usage: "Cortar papelão, fitas, vedações e materiais leves",
    importance: "Importante",
    tutorialCount: 15,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Sempre retraia após usar", "Corte longe do corpo", "Troque lâminas gastas"],
    recommendedFor: ["Cortes precisos", "Abrir embalagens", "Trabalhos de acabamento"]
  },
  {
    id: "8",
    name: "Nível",
    description: "Instrumento para verificar alinhamento horizontal e vertical",
    usage: "Garantir que prateleiras, quadros e instalações fiquem nivelados",
    importance: "Importante",
    tutorialCount: 20,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Mantenha limpo", "Proteja as bolhas", "Calibre periodicamente"],
    recommendedFor: ["Instalar prateleiras", "Pendurar quadros", "Nivelamento geral"]
  },
  {
    id: "9",
    name: "Furadeira",
    description: "Ferramenta elétrica para fazer furos e parafusar",
    usage: "Furar paredes, madeira, metal e apertar/soltar parafusos rapidamente",
    importance: "Importante",
    tutorialCount: 30,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Use óculos de proteção", "Escolha a broca certa", "Segure firme"],
    recommendedFor: ["Instalar suportes", "Montar móveis", "Furar paredes"]
  },
  {
    id: "10",
    name: "Fita Veda Rosca",
    description: "Fita de vedação para conexões hidráulicas",
    usage: "Vedar roscas de tubulações e evitar vazamentos",
    importance: "Essencial",
    tutorialCount: 18,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    safetyTips: ["Aplique no sentido correto", "Use quantidade adequada", "Não exagere"],
    recommendedFor: ["Trocar torneira", "Instalar registros", "Consertar vazamentos"]
  }
]

export function FerramentasSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImportance, setSelectedImportance] = useState<string>("Todas")

  const importanceLevels = ["Todas", "Essencial", "Importante", "Útil"]

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesImportance = selectedImportance === "Todas" || tool.importance === selectedImportance
    return matchesSearch && matchesImportance
  })

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "Essencial":
        return "bg-red-100 text-red-700 border-red-300"
      case "Importante":
        return "bg-orange-100 text-orange-700 border-orange-300"
      case "Útil":
        return "bg-blue-100 text-blue-700 border-blue-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-2">🔧 Biblioteca de Ferramentas</h2>
        <p className="text-white/90">Conheça cada ferramenta essencial para seus reparos</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar ferramenta..."
              className="pl-10 rounded-full border-2 border-gray-200 focus:border-orange-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {importanceLevels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedImportance(level)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                  selectedImportance === level
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative md:w-48 h-48 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className={`absolute top-3 left-3 ${getImportanceColor(tool.importance)} border`}>
                  {tool.importance}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                  <Wrench className="w-8 h-8 text-orange-500 flex-shrink-0 ml-2" />
                </div>

                {/* Usage */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-3">
                  <p className="text-sm text-blue-900">
                    <strong>Para que serve:</strong> {tool.usage}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      <strong>{tool.tutorialCount}</strong> tutoriais
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-600">
                      <strong>{tool.recommendedFor.length}</strong> usos
                    </span>
                  </div>
                </div>

                {/* Safety Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-900">Dicas de Segurança:</span>
                  </div>
                  <ul className="space-y-1">
                    {tool.safetyTips.slice(0, 2).map((tip, index) => (
                      <li key={index} className="text-xs text-yellow-900 flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended For */}
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Recomendado para:</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.recommendedFor.slice(0, 3).map((use, index) => (
                      <span
                        key={index}
                        className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma ferramenta encontrada</h3>
          <p className="text-gray-600">Tente buscar por outro termo</p>
        </div>
      )}
    </div>
  )
}
