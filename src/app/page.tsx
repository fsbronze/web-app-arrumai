"use client"

import { useState } from "react"
import { Home, Wrench, BookOpen, Users, Camera, MessageCircle } from "lucide-react"
import { AjudaAI } from "@/components/ajuda-ai"
import { HomeSection } from "@/components/sections/home-section"
import { TutoriaisSection } from "@/components/sections/tutoriais-section"
import { FerramentasSection } from "@/components/sections/ferramentas-section"
import { DIYSection } from "@/components/sections/diy-section"
import { ComunidadeSection } from "@/components/sections/comunidade-section"
import { DiagnosticoSection } from "@/components/sections/diagnostico-section"

type Section = "home" | "tutoriais" | "ferramentas" | "diy" | "comunidade" | "diagnostico"

export default function ArrumaIApp() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [chatOpen, setChatOpen] = useState(false)

  const menuItems = [
    { id: "home" as Section, icon: Home, label: "Início", color: "from-blue-500 to-cyan-500" },
    { id: "tutoriais" as Section, icon: BookOpen, label: "Tutoriais", color: "from-purple-500 to-pink-500" },
    { id: "ferramentas" as Section, icon: Wrench, label: "Ferramentas", color: "from-orange-500 to-red-500" },
    { id: "diy" as Section, icon: MessageCircle, label: "DIY", color: "from-green-500 to-emerald-500" },
    { id: "diagnostico" as Section, icon: Camera, label: "Diagnóstico", color: "from-indigo-500 to-purple-500" },
    { id: "comunidade" as Section, icon: Users, label: "Comunidade", color: "from-pink-500 to-rose-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Criativa e Colorida */}
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl animate-pulse shadow-lg"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🔧</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs">✨</span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
                  ARRUMAÍ
                </h1>
                <p className="text-xs font-semibold text-gray-600 tracking-wide">Conserte, economize e crie.</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 shadow-lg">
        <div className="flex items-center justify-around px-2 py-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-110`
                    : "text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24 md:pb-6">
        {activeSection === "home" && <HomeSection onNavigate={setActiveSection} />}
        {activeSection === "tutoriais" && <TutoriaisSection />}
        {activeSection === "ferramentas" && <FerramentasSection />}
        {activeSection === "diy" && <DIYSection />}
        {activeSection === "comunidade" && <ComunidadeSection />}
        {activeSection === "diagnostico" && <DiagnosticoSection />}
      </main>

      {/* AjudaAI - Assistente Flutuante */}
      <AjudaAI isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  )
}
