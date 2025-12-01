"use client"

import { ArrowRight, Wrench, BookOpen, Camera, Users, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

type Section = "home" | "tutoriais" | "ferramentas" | "diy" | "comunidade" | "diagnostico"

interface HomeSectionProps {
  onNavigate: (section: Section) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const quickActions = [
    {
      id: "diagnostico" as Section,
      title: "Diagnóstico por Foto",
      description: "Tire uma foto e descubra o problema",
      icon: Camera,
      color: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      id: "tutoriais" as Section,
      title: "Tutoriais Visuais",
      description: "50+ guias passo a passo com fotos",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
    },
    {
      id: "ferramentas" as Section,
      title: "Biblioteca de Ferramentas",
      description: "Conheça cada ferramenta essencial",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop"
    },
    {
      id: "comunidade" as Section,
      title: "Comunidade",
      description: "Compartilhe seus projetos e inspire-se",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
    }
  ]

  const stats = [
    { label: "Tutoriais", value: "50+", icon: BookOpen, color: "text-purple-600" },
    { label: "Ferramentas", value: "19", icon: Wrench, color: "text-orange-600" },
    { label: "Projetos DIY", value: "10", icon: Sparkles, color: "text-green-600" },
    { label: "Economia Média", value: "R$ 280", icon: TrendingUp, color: "text-blue-600" }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🧞‍♂️</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Bem-vindo ao Arrumaí!
              </h2>
              <p className="text-white/90 text-lg">
                Seu assistente inteligente para reparos domésticos
              </p>
            </div>
          </div>
          <p className="text-white/80 text-lg mb-6 max-w-2xl">
            Aprenda a fazer pequenos reparos em casa com tutoriais visuais, diagnóstico por IA e uma comunidade pronta para ajudar. Economize dinheiro e ganhe autonomia! 💪
          </p>
          <Button
            onClick={() => onNavigate("diagnostico")}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl rounded-full px-8"
          >
            <Camera className="w-5 h-5 mr-2" />
            Começar Diagnóstico
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-purple-600" />
          Comece por aqui
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <button
                key={action.id}
                onClick={() => onNavigate(action.id)}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={action.image}
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${action.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between">
                    {action.title}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-gray-600">{action.description}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Popular Tutorials Preview */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          🔥 Tutoriais Mais Populares
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Trocar Torneira", economy: "R$ 300", difficulty: "Fácil", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" },
            { title: "Desentupir Pia", economy: "R$ 280", difficulty: "Fácil", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
            { title: "Ajustar Porta", economy: "R$ 275", difficulty: "Médio", image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=400&h=300&fit=crop" }
          ].map((tutorial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => onNavigate("tutoriais")}
            >
              <img src={tutorial.image} alt={tutorial.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-gray-900 mb-2">{tutorial.title}</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-semibold">💰 {tutorial.economy}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tutorial.difficulty === "Fácil" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {tutorial.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => onNavigate("tutoriais")}
          variant="outline"
          className="w-full mt-6 rounded-full border-2 border-purple-300 hover:bg-purple-50"
        >
          Ver Todos os Tutoriais
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
