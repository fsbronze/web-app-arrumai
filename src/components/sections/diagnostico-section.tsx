"use client"

import { useState } from "react"
import { Camera, Upload, Sparkles, AlertCircle, CheckCircle, Wrench, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface DiagnosisResult {
  problem: string
  confidence: number
  tools: string[]
  difficulty: string
  estimatedTime: string
  estimatedCost: string
  risks: string[]
  suggestedTutorial: string
  steps: string[]
}

export function DiagnosticoSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
        analyzeProblem()
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeProblem = () => {
    setIsAnalyzing(true)
    setDiagnosis(null)

    // Simular análise da IA
    setTimeout(() => {
      setDiagnosis({
        problem: "Vazamento em torneira de pia",
        confidence: 92,
        tools: ["Chave inglesa", "Fita veda rosca", "Balde", "Pano"],
        difficulty: "Fácil",
        estimatedTime: "30-45 minutos",
        estimatedCost: "R$ 300",
        risks: [
          "Feche o registro antes de começar",
          "Tenha um balde para água residual",
          "Não force as conexões"
        ],
        suggestedTutorial: "Trocar Torneira da Pia",
        steps: [
          "Feche o registro de água",
          "Coloque um balde embaixo da pia",
          "Solte as conexões com chave inglesa",
          "Remova a torneira antiga",
          "Aplique fita veda rosca nas roscas",
          "Instale a nova torneira",
          "Aperte as conexões",
          "Abra o registro e teste"
        ]
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const exampleProblems = [
    {
      title: "Torneira Pingando",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&h=200&fit=crop",
      category: "Hidráulica"
    },
    {
      title: "Tomada Quebrada",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=200&fit=crop",
      category: "Elétrica"
    },
    {
      title: "Parede Descascando",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop",
      category: "Pintura"
    },
    {
      title: "Porta Desalinhada",
      image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=300&h=200&fit=crop",
      category: "Portas"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-2">📸 Diagnóstico por Foto</h2>
        <p className="text-white/90">Tire uma foto do problema e descubra como resolver com IA</p>
      </div>

      {/* Upload Area */}
      {!selectedImage && (
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-dashed border-gray-300 hover:border-purple-500 transition-colors">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie uma foto do problema</h3>
            <p className="text-gray-600 mb-6">
              O AjudaAI vai analisar a imagem e identificar o problema automaticamente
            </p>
            <label htmlFor="photo-upload">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-xl rounded-full px-8 cursor-pointer"
                asChild
              >
                <span>
                  <Upload className="w-5 h-5 mr-2" />
                  Escolher Foto
                </span>
              </Button>
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <p className="text-sm text-gray-500 mt-4">
              Ou tire uma foto diretamente com a câmera
            </p>
          </div>
        </div>
      )}

      {/* Analyzing State */}
      {isAnalyzing && selectedImage && (
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="relative w-full max-w-md mx-auto mb-6">
              <img
                src={selectedImage}
                alt="Problema"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span className="text-4xl">🧞‍♂️</span>
                  </div>
                  <p className="text-white font-bold text-lg">Analisando com IA...</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600 animate-spin" />
              <p className="text-gray-600">O AjudaAI está identificando o problema</p>
            </div>
          </div>
        </div>
      )}

      {/* Diagnosis Result */}
      {diagnosis && selectedImage && !isAnalyzing && (
        <div className="space-y-6">
          {/* Image and Main Result */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={selectedImage}
                  alt="Problema"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold">{diagnosis.confidence}% confiança</span>
                </div>
              </div>

              {/* Result */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🧞‍♂️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Diagnóstico</p>
                    <h3 className="text-2xl font-bold text-gray-900">{diagnosis.problem}</h3>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-900">Tempo</span>
                    </div>
                    <p className="text-sm font-bold text-blue-900">{diagnosis.estimatedTime}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-semibold text-green-900">Economia</span>
                    </div>
                    <p className="text-sm font-bold text-green-900">{diagnosis.estimatedCost}</p>
                  </div>
                </div>

                {/* Difficulty */}
                <Badge className="bg-green-100 text-green-700 border-green-300 mb-4">
                  Dificuldade: {diagnosis.difficulty}
                </Badge>

                {/* Action Button */}
                <Button className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg">
                  Ver Tutorial Completo
                </Button>
              </div>
            </div>
          </div>

          {/* Tools Needed */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Ferramentas Necessárias</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {diagnosis.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Wrench className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="text-sm font-semibold text-orange-900">{tool}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Risks */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-yellow-900">⚠️ Avisos de Segurança</h3>
            </div>
            <ul className="space-y-2">
              {diagnosis.risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-900 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-yellow-900 font-medium">{risk}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Step by Step Preview */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Passo a Passo Rápido</h3>
            </div>
            <div className="space-y-3">
              {diagnosis.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-purple-50 border border-purple-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-900 font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* New Analysis Button */}
          <div className="text-center">
            <Button
              onClick={() => {
                setSelectedImage(null)
                setDiagnosis(null)
              }}
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-purple-300 hover:bg-purple-50"
            >
              <Camera className="w-5 h-5 mr-2" />
              Analisar Outro Problema
            </Button>
          </div>
        </div>
      )}

      {/* Example Problems */}
      {!selectedImage && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Problemas Comuns</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {exampleProblems.map((problem, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(problem.image)
                  analyzeProblem()
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-2 left-2 bg-white/90 text-gray-900 border-0 text-xs">
                    {problem.category}
                  </Badge>
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-900">{problem.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
