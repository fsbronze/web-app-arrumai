"use client"

import { useState, useEffect } from "react"
import { X, Send, Sparkles, AlertCircle, CheckCircle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  emotion?: "happy" | "thinking" | "alert" | "helping"
}

interface AjudaAIProps {
  isOpen: boolean
  onToggle: () => void
}

export function AjudaAI({ isOpen, onToggle }: AjudaAIProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Olá! Sou o Ajuda AÍ, seu gênio assistente! 🧞‍♂️ Como posso te ajudar hoje?",
      emotion: "happy"
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [genieEmotion, setGenieEmotion] = useState<"happy" | "thinking" | "alert" | "helping">("happy")
  const [bounce, setBounce] = useState(false)

  // Animação de bounce periódica
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setBounce(true)
        setTimeout(() => setBounce(false), 1000)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)
    setGenieEmotion("thinking")

    // Simular resposta da IA com diagnóstico inteligente
    setTimeout(() => {
      let aiResponse = ""
      const lowerInput = input.toLowerCase()

      // Diagnóstico inteligente automático
      if (lowerInput.includes("vazamento") || lowerInput.includes("gotejando") || lowerInput.includes("pingando")) {
        aiResponse = `🔍 **Diagnóstico Automático**\n\n✅ Você relatou: ${input}\n\n🎯 **Possível causa:** Vedação desgastada ou registro com problema\n\n📚 **Tutorial recomendado:** Troca de registro de gaveta\n\n⚠️ **Dificuldade:** 🟡 Médio\n\n🔧 **Ferramentas necessárias:**\n• Chave inglesa\n• Fita veda rosca\n• Balde\n\n💰 **Você economiza:** R$ 350 (custo médio de um encanador em SP)\n\n✅ **Seguro para fazer:** Sim! Feche o registro geral antes de começar.\n\nQuer que eu te guie passo a passo? 😊`
      } else if (lowerInput.includes("tomada") || lowerInput.includes("interruptor") || lowerInput.includes("luz")) {
        aiResponse = `🔍 **Diagnóstico Automático**\n\n✅ Você relatou: ${input}\n\n🎯 **Possível causa:** Problema elétrico - tomada ou interruptor com defeito\n\n📚 **Tutorial recomendado:** Trocar tomada ou interruptor\n\n⚠️ **Dificuldade:** 🟡 Médio\n\n🔧 **Ferramentas necessárias:**\n• Chave de fenda\n• Alicate\n• Fita isolante\n• Testador de voltagem\n\n💰 **Você economiza:** R$ 215 (custo médio de um eletricista em SP)\n\n⚠️ **IMPORTANTE:** Desligue o disjuntor antes de começar!\n\nPosso te ajudar com o passo a passo? 😊`
      } else if (lowerInput.includes("porta") || lowerInput.includes("fechadura") || lowerInput.includes("trancando")) {
        aiResponse = `🔍 **Diagnóstico Automático**\n\n✅ Você relatou: ${input}\n\n🎯 **Possível causa:** Desalinhamento ou fechadura com defeito\n\n📚 **Tutorial recomendado:** Ajustar porta desalinhada ou trocar fechadura\n\n⚠️ **Dificuldade:** 🟡 Médio\n\n🔧 **Ferramentas necessárias:**\n• Chave de fenda\n• Martelo\n• Furadeira (se trocar fechadura)\n\n💰 **Você economiza:** R$ 300 (custo médio de um chaveiro em SP)\n\n✅ **Seguro para fazer:** Sim!\n\nQuer ver o tutorial completo? 😊`
      } else if (lowerInput.includes("parede") || lowerInput.includes("pintura") || lowerInput.includes("descascando")) {
        aiResponse = `🔍 **Diagnóstico Automático**\n\n✅ Você relatou: ${input}\n\n🎯 **Possível causa:** Umidade ou pintura antiga descascando\n\n📚 **Tutorial recomendado:** Reparar parede descascada\n\n⚠️ **Dificuldade:** 🟢 Fácil\n\n🔧 **Ferramentas necessárias:**\n• Espátula\n• Lixa\n• Massa corrida\n• Rolo de pintura\n\n💰 **Você economiza:** R$ 250 (custo médio de um pintor em SP)\n\n✅ **Seguro para fazer:** Sim! Processo simples.\n\nPosso te guiar no passo a passo? 😊`
      } else {
        // Resposta genérica com assistência em tempo real
        const responses = [
          "Ótima pergunta! Vou te ajudar com isso. 🔧\n\nPode me dar mais detalhes sobre o problema? Por exemplo:\n• Onde está acontecendo?\n• Quando começou?\n• Tem algum barulho ou vazamento?",
          "Entendi! Vou analisar isso para você. 💡\n\nPara te ajudar melhor, me conte:\n• É um problema novo ou antigo?\n• Você já tentou algo?\n• Tem ferramentas em casa?",
          "Perfeito! Já sei como te ajudar. ✨\n\nMe diga mais sobre:\n• Qual cômodo da casa?\n• O problema é constante ou só às vezes?\n• Você tem experiência com reparos?"
        ]
        aiResponse = responses[Math.floor(Math.random() * responses.length)]
      }
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: aiResponse,
        emotion: "helping"
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
      setGenieEmotion("happy")
    }, 1500)
  }

  const getEmotionIcon = (emotion?: string) => {
    switch (emotion) {
      case "thinking":
        return <Sparkles className="w-4 h-4 text-purple-500" />
      case "alert":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case "helping":
        return <Lightbulb className="w-4 h-4 text-yellow-500" />
      default:
        return <CheckCircle className="w-4 h-4 text-green-500" />
    }
  }

  return (
    <>
      {/* Gênio Flutuante - MAIOR e mais cartoon */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className={`fixed bottom-24 md:bottom-8 right-8 z-50 group ${
            bounce ? "animate-bounce" : ""
          }`}
        >
          <div className="relative">
            {/* Brilho ao redor - mais intenso */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity animate-pulse"></div>
            
            {/* Corpo do gênio - MAIOR */}
            <div className="relative w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-4 border-white">
              {/* Rosto do gênio - MAIOR */}
              <div className="text-6xl animate-pulse">🧞‍♂️</div>
              
              {/* Nome "Ajuda AÍ" sempre visível */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-xl whitespace-nowrap font-bold text-sm">
                Ajuda AÍ
              </div>
              
              {/* Indicador de notificação */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce shadow-lg">
                !
              </div>
            </div>

            {/* Balão de fala */}
            <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white rounded-2xl shadow-2xl px-5 py-3 whitespace-nowrap border-2 border-purple-200">
                <p className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Precisa de ajuda? Clique aqui! 😊
                </p>
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r-2 border-b-2 border-purple-200"></div>
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-8 right-8 w-96 max-w-[calc(100vw-2rem)] h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-4 border-purple-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse border-2 border-white/50">
                <span className="text-4xl">🧞‍♂️</span>
              </div>
              <div>
                <h3 className="font-black text-white text-xl tracking-tight">Ajuda AÍ</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs text-white/90 font-semibold">Online e pronto para ajudar!</p>
                </div>
              </div>
            </div>
            <Button
              onClick={onToggle}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-purple-50 to-pink-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "bg-white shadow-md border-2 border-purple-100"
                    }`}
                  >
                    {message.type === "ai" && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🧞‍♂️</span>
                        <span className="font-bold text-purple-600 text-sm">Ajuda AÍ</span>
                        {getEmotionIcon(message.emotion)}
                      </div>
                    )}
                    <p className={`text-sm whitespace-pre-line ${message.type === "user" ? "text-white" : "text-gray-800"}`}>
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white shadow-md border-2 border-purple-100 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🧞‍♂️</span>
                      <span className="font-bold text-purple-600 text-sm">Ajuda AÍ</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 bg-white border-t-2 border-purple-100">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua dúvida..."
                className="flex-1 rounded-full border-2 border-purple-200 focus:border-purple-500"
              />
              <Button
                onClick={handleSend}
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                size="icon"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
