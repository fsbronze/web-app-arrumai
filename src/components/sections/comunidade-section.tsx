"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, TrendingUp, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CommunityPost {
  id: string
  author: string
  avatar: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  category: string
  likes: number
  comments: number
  savings: string
  difficulty: string
  date: string
  featured: boolean
}

const posts: CommunityPost[] = [
  {
    id: "1",
    author: "Maria Silva",
    avatar: "https://i.pravatar.cc/150?img=1",
    title: "Reforma completa do banheiro",
    description: "Consegui reformar meu banheiro inteiro seguindo os tutoriais! Economizei muito e ficou incrível!",
    beforeImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop&sat=-100",
    category: "Banheiro",
    likes: 234,
    comments: 45,
    savings: "R$ 2.800",
    difficulty: "Médio",
    date: "2 dias atrás",
    featured: true
  },
  {
    id: "2",
    author: "João Santos",
    avatar: "https://i.pravatar.cc/150?img=2",
    title: "Horta vertical na varanda",
    description: "Meu primeiro projeto DIY! Ficou melhor do que imaginava. Obrigado AjudaAI pelas dicas!",
    beforeImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop&sat=-100",
    category: "DIY",
    likes: 189,
    comments: 32,
    savings: "R$ 450",
    difficulty: "Fácil",
    date: "5 dias atrás",
    featured: true
  },
  {
    id: "3",
    author: "Ana Costa",
    avatar: "https://i.pravatar.cc/150?img=3",
    title: "Consertei o vazamento sozinha!",
    description: "Primeira vez mexendo com hidráulica. O tutorial estava super claro e consegui!",
    beforeImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop&sat=-100",
    category: "Hidráulica",
    likes: 156,
    comments: 28,
    savings: "R$ 320",
    difficulty: "Fácil",
    date: "1 semana atrás",
    featured: false
  },
  {
    id: "4",
    author: "Pedro Oliveira",
    avatar: "https://i.pravatar.cc/150?img=4",
    title: "Painel de ferramentas organizado",
    description: "Organizei todas as minhas ferramentas com o projeto DIY. Ficou profissional!",
    beforeImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&sat=-100",
    category: "DIY",
    likes: 142,
    comments: 19,
    savings: "R$ 180",
    difficulty: "Médio",
    date: "1 semana atrás",
    featured: false
  },
  {
    id: "5",
    author: "Carla Mendes",
    avatar: "https://i.pravatar.cc/150?img=5",
    title: "Pintura da sala renovada",
    description: "Pintei a sala toda sozinha! Os tutoriais me deram confiança para fazer.",
    beforeImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&sat=-100",
    category: "Pintura",
    likes: 198,
    comments: 41,
    savings: "R$ 1.200",
    difficulty: "Médio",
    date: "2 semanas atrás",
    featured: true
  },
  {
    id: "6",
    author: "Lucas Ferreira",
    avatar: "https://i.pravatar.cc/150?img=6",
    title: "Prateleiras flutuantes instaladas",
    description: "Instalei 3 prateleiras no quarto. Ficou perfeito e super firme!",
    beforeImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=300&fit=crop&sat=-100",
    category: "Móveis",
    likes: 167,
    comments: 23,
    savings: "R$ 350",
    difficulty: "Fácil",
    date: "2 semanas atrás",
    featured: false
  }
]

export function ComunidadeSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())

  const categories = ["Todos", "Hidráulica", "Elétrica", "Pintura", "DIY", "Banheiro", "Móveis"]

  const filteredPosts = posts.filter(post => {
    return selectedCategory === "Todos" || post.category === selectedCategory
  })

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const topContributors = [
    { name: "Maria Silva", posts: 12, savings: "R$ 8.400", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "João Santos", posts: 9, savings: "R$ 6.200", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Ana Costa", posts: 7, savings: "R$ 4.800", avatar: "https://i.pravatar.cc/150?img=3" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-2">👥 Comunidade Arrumaí</h2>
        <p className="text-white/90">Compartilhe seus projetos e inspire-se com a comunidade</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2.847</p>
              <p className="text-sm text-gray-600">Membros ativos</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1.234</p>
              <p className="text-sm text-gray-600">Projetos compartilhados</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">R$ 1.2M</p>
              <p className="text-sm text-gray-600">Economia total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-bold text-gray-900">🏆 Top Contribuidores do Mês</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {topContributors.map((contributor, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <p className="font-bold text-gray-900">{contributor.name}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl">{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="text-blue-900 font-semibold">{contributor.posts}</p>
                  <p className="text-blue-700 text-xs">projetos</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-green-900 font-semibold">{contributor.savings}</p>
                  <p className="text-green-700 text-xs">economizados</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="font-semibold text-gray-900 flex-shrink-0">Filtrar por:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
              post.featured ? "border-yellow-400" : "border-gray-100"
            }`}
          >
            {post.featured && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">Projeto em Destaque</span>
              </div>
            )}

            {/* Author */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-pink-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-xs text-gray-600">{post.date}</p>
                </div>
              </div>
              <Badge className="bg-pink-100 text-pink-700 border-pink-300">
                {post.category}
              </Badge>
            </div>

            {/* Before/After Images */}
            <div className="grid grid-cols-2 gap-1 px-4">
              <div className="relative">
                <img
                  src={post.beforeImage}
                  alt="Antes"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Antes
                </div>
              </div>
              <div className="relative">
                <img
                  src={post.afterImage}
                  alt="Depois"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Depois
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-900">Economia</span>
                  </div>
                  <p className="text-lg font-bold text-green-900">{post.savings}</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-900">Dificuldade</span>
                  </div>
                  <p className="text-lg font-bold text-blue-900">{post.difficulty}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 transition-all ${
                    likedPosts.has(post.id) ? "text-pink-600" : "text-gray-600 hover:text-pink-600"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${likedPosts.has(post.id) ? "fill-pink-600" : ""}`}
                  />
                  <span className="font-semibold">
                    {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                  </span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                  <span className="font-semibold">Compartilhar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Button */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-center shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-2">Compartilhe seu projeto!</h3>
        <p className="text-white/90 mb-6">Inspire outras pessoas e mostre suas conquistas</p>
        <Button
          size="lg"
          className="bg-white text-pink-600 hover:bg-gray-100 shadow-xl rounded-full px-8"
        >
          📸 Enviar Meu Projeto
        </Button>
      </div>
    </div>
  )
}
