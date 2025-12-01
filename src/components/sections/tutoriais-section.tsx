"use client"

import { useState } from "react"
import { Search, Filter, TrendingUp, Clock, Wrench, ChevronRight, DollarSign, AlertCircle, ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Tutorial {
  id: string
  title: string
  category: string
  difficulty: "Fácil" | "Médio" | "Difícil"
  time: string
  economy: string
  image: string
  problemImage: string
  tools: string[]
  views: number
  steps: string[]
  stepImages: string[]
}

// Mapeamento de ferramentas para ícones/emojis
const toolIcons: { [key: string]: string } = {
  "Chave inglesa": "🔧",
  "Fita veda rosca": "📏",
  "Balde": "🪣",
  "Pano": "🧹",
  "Desentupidor": "🪠",
  "Luvas de borracha": "🧤",
  "Soda cáustica (opcional)": "⚗️",
  "Chave de fenda": "🪛",
  "Chave Phillips": "🪛",
  "Testador de voltagem": "⚡",
  "Fita isolante": "📼",
  "Alicate": "🔨",
  "Espátula": "🎨",
  "Lixa grão 120": "📄",
  "Lixa grão 220": "📄",
  "Massa corrida": "🧴",
  "Tinta": "🎨",
  "Rolo pequeno": "🖌️",
  "Pincel": "🖌️",
  "Martelo": "🔨",
  "Formão": "⚒️",
  "Óleo lubrificante": "🛢️",
  "Calços de madeira": "🪵",
  "Luvas": "🧤",
  "Rolo de pintura": "🖌️",
  "Bandeja para tinta": "🎨",
  "Fita crepe": "📼",
  "Lona plástica": "🛡️",
  "Primer/Selador": "🧴",
  "Escada": "🪜",
  "Pincéis (vários tamanhos)": "🖌️"
}

// Função para obter ícone da ferramenta
const getToolIcon = (tool: string): string => {
  // Procura por correspondência exata ou parcial
  for (const [key, icon] of Object.entries(toolIcons)) {
    if (tool.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(tool.toLowerCase())) {
      return icon
    }
  }
  return "🔧" // Ícone padrão
}

const tutorials: Tutorial[] = [
  // Hidráulica (15 tutoriais)
  { 
    id: "1", 
    title: "Trocar Torneira da Pia", 
    category: "Hidráulica", 
    difficulty: "Fácil", 
    time: "30 min", 
    economy: "R$ 300", 
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=400&fit=crop",
    tools: ["Chave inglesa", "Fita veda rosca", "Balde", "Pano"], 
    views: 1250,
    steps: [
      "🔒 Feche o registro de água: Localize o registro embaixo da pia e gire no sentido horário até fechar completamente. Se não houver registro individual, feche o registro geral da casa.",
      "💧 Abra a torneira antiga: Deixe a água restante escoar completamente. Isso evita respingos ao desmontar.",
      "🪣 Coloque um balde embaixo: Posicione um balde ou bacia sob o sifão para coletar a água que pode cair durante a remoção.",
      "🔧 Solte a torneira antiga: Use a chave inglesa para desrosquear as porcas que prendem a torneira por baixo da pia. Gire no sentido anti-horário.",
      "🗑️ Remova a torneira velha: Puxe a torneira para cima com cuidado. Limpe bem a área onde ela estava instalada com um pano úmido.",
      "📏 Prepare a nova torneira: Enrole fita veda rosca na rosca da nova torneira, dando 3 a 5 voltas no sentido horário.",
      "📍 Posicione a nova torneira: Insira a nova torneira no furo da pia, alinhando corretamente. Certifique-se de que está na posição desejada.",
      "🔩 Aperte as porcas por baixo: Use a chave inglesa para apertar as porcas de fixação por baixo da pia. Aperte firmemente, mas sem forçar demais.",
      "🔗 Conecte as mangueiras: Rosqueie as mangueiras flexíveis nas conexões de água quente e fria. Use a chave inglesa para dar um aperto final.",
      "🔓 Abra o registro: Gire o registro no sentido anti-horário lentamente. Observe se há vazamentos nas conexões.",
      "✅ Teste a torneira: Abra e feche a torneira várias vezes. Verifique se a água sai normalmente e se não há gotejamentos.",
      "🔍 Verifique vazamentos: Passe um papel toalha em todas as conexões. Se molhar, aperte um pouco mais com a chave inglesa."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: "2", 
    title: "Desentupir Pia", 
    category: "Hidráulica", 
    difficulty: "Fácil", 
    time: "20 min", 
    economy: "R$ 280", 
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=400&fit=crop",
    tools: ["Desentupidor", "Balde", "Luvas de borracha", "Soda cáustica (opcional)"], 
    views: 980,
    steps: [
      "🧤 Vista luvas de proteção: Coloque luvas de borracha para proteger suas mãos de sujeira e produtos químicos.",
      "🪣 Remova o excesso de água: Use um balde ou caneca para retirar a água parada da pia, deixando apenas cerca de 5cm de água.",
      "🔌 Tape o ladrão: Se a pia tiver um furo de transbordamento (ladrão), tape-o com um pano úmido para criar vácuo.",
      "🪠 Posicione o desentupidor: Coloque a ventosa do desentupidor sobre o ralo, cobrindo-o completamente. Certifique-se de que há água suficiente para cobrir a borracha.",
      "💪 Faça movimentos de vai e vem: Pressione o desentupidor para baixo e puxe para cima rapidamente, criando sucção. Repita por 30 segundos com força.",
      "⬆️ Retire o desentupidor: Puxe o desentupidor rapidamente. A água deve começar a escoar. Se não escoar, repita o processo.",
      "💧 Teste com água corrente: Abra a torneira e deixe a água correr por 1 minuto. Observe se o escoamento está normal.",
      "⚗️ Se persistir, use soda cáustica: Dilua 1 colher de sopa de soda cáustica em 1 litro de água fria (NUNCA quente). Despeje no ralo com cuidado.",
      "⏱️ Aguarde 15 minutos: Deixe a soda agir no entupimento. Não use a pia durante este tempo.",
      "🚿 Enxágue abundantemente: Abra a torneira e deixe água corrente por 3 minutos para remover completamente a soda cáustica.",
      "✅ Teste novamente: Encha a pia com água e solte de uma vez. Observe se o escoamento está rápido e sem borbulhas.",
      "🛡️ Prevenção: Evite jogar restos de comida, gordura ou cabelos no ralo. Use uma peneira protetora."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: "16", 
    title: "Trocar Tomada", 
    category: "Elétrica", 
    difficulty: "Médio", 
    time: "35 min", 
    economy: "R$ 215", 
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop",
    tools: ["Chave de fenda", "Chave Phillips", "Testador de voltagem", "Fita isolante", "Alicate"], 
    views: 1100,
    steps: [
      "⚡ Desligue o disjuntor: Vá até o quadro de distribuição e desligue o disjuntor da tomada. Se não souber qual é, desligue a chave geral. NUNCA trabalhe com energia ligada.",
      "🔍 Confirme ausência de energia: Use um testador de voltagem (chave teste) na tomada. Encoste nas duas entradas. Se a luz não acender, está seguro para prosseguir.",
      "🪛 Remova o espelho da tomada: Use a chave de fenda para desparafusar o espelho (tampa externa). Guarde os parafusos em local seguro.",
      "🔩 Solte os parafusos da tomada: Desparafuse os dois parafusos que prendem a tomada na caixa elétrica (caixinha na parede). Puxe a tomada com cuidado.",
      "🎨 Identifique os fios: Observe os três fios: FASE (preto, vermelho ou marrom), NEUTRO (azul ou branco) e TERRA (verde ou verde/amarelo). Tire uma foto se necessário.",
      "🔓 Solte os fios da tomada antiga: Desparafuse os terminais onde os fios estão conectados. Solte APENAS os parafusos, não puxe os fios com força.",
      "✂️ Prepare os fios: Se os fios estiverem oxidados ou danificados, corte cerca de 1cm da ponta com o alicate e descasque 1cm de isolamento.",
      "🟢 Conecte o fio TERRA: Conecte o fio verde (terra) no terminal marcado com ⏚ ou TERRA. Aperte bem o parafuso.",
      "🔵 Conecte o fio NEUTRO: Conecte o fio azul (neutro) no terminal marcado com N. Aperte firmemente o parafuso.",
      "🔴 Conecte o fio FASE: Conecte o fio preto/vermelho (fase) no terminal marcado com L ou F. Aperte bem o parafuso.",
      "📦 Fixe a tomada na caixa: Encaixe a tomada na caixinha da parede. Parafuse os dois parafusos de fixação, deixando a tomada bem firme e nivelada.",
      "🎭 Recoloque o espelho: Encaixe o espelho (tampa) sobre a tomada e parafuse. Certifique-se de que está bem fixo.",
      "🔌 Ligue o disjuntor: Volte ao quadro de distribuição e ligue o disjuntor novamente.",
      "✅ Teste a tomada: Conecte um carregador de celular ou abajur. Verifique se está funcionando normalmente. Se não funcionar, desligue o disjuntor e revise as conexões."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: "26", 
    title: "Reparar Parede Descascada", 
    category: "Pintura", 
    difficulty: "Fácil", 
    time: "60 min", 
    economy: "R$ 250", 
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=400&fit=crop",
    tools: ["Espátula", "Lixa grão 120", "Lixa grão 220", "Massa corrida", "Tinta", "Rolo pequeno", "Pincel"], 
    views: 920,
    steps: [
      "🛡️ Proteja o ambiente: Cubra o piso com jornal ou lona plástica. Afaste móveis da área de trabalho.",
      "🪛 Remova a tinta solta: Use a espátula para raspar toda a tinta que está descascando. Remova até encontrar uma área firme. Não deixe bordas soltas.",
      "📄 Lixe a área afetada: Com a lixa grão 120, lixe toda a área descascada e cerca de 10cm ao redor. Faça movimentos circulares para nivelar.",
      "🧹 Limpe a poeira: Use um pano úmido para remover toda a poeira do lixamento. Deixe secar completamente (cerca de 15 minutos).",
      "🧴 Prepare a massa corrida: Abra o pote de massa corrida e misture bem com a espátula até ficar homogênea. Se estiver muito dura, adicione algumas gotas de água.",
      "🎨 Aplique a primeira camada de massa: Com a espátula, espalhe a massa sobre a área danificada. Pressione bem para preencher todos os buracos. Nivele com a parede.",
      "⏱️ Deixe secar: Aguarde o tempo indicado na embalagem da massa (geralmente 4 a 6 horas). A massa deve ficar clara e sem áreas escuras.",
      "📄 Lixe a primeira camada: Use a lixa grão 220 para lixar suavemente a massa seca. O objetivo é deixar a superfície lisa e nivelada com a parede.",
      "➕ Aplique segunda camada (se necessário): Se ainda houver imperfeições, aplique uma segunda camada fina de massa. Deixe secar e lixe novamente.",
      "🧹 Limpe novamente: Remova toda a poeira do lixamento com pano úmido. Deixe secar por 30 minutos.",
      "🎨 Prepare a tinta: Misture bem a tinta. Se necessário, dilua conforme instruções da embalagem (geralmente 10% de água para tinta látex).",
      "🖌️ Pinte a área: Use o pincel para contornar a área reparada. Depois, use o rolo para pintar toda a área com movimentos uniformes.",
      "🎨 Aplique segunda demão: Aguarde 4 horas e aplique uma segunda demão de tinta para uniformizar a cor.",
      "✅ Finalize: Remova as proteções do piso após a tinta secar completamente (24 horas). Recoloque os móveis."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: "27", 
    title: "Pintar uma Parede Completa", 
    category: "Pintura", 
    difficulty: "Fácil", 
    time: "3-4 horas", 
    economy: "R$ 450", 
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=400&fit=crop",
    tools: ["Rolo de pintura", "Bandeja para tinta", "Pincéis (vários tamanhos)", "Fita crepe", "Lona plástica", "Lixa grão 220", "Massa corrida", "Espátula", "Primer/Selador", "Tinta", "Escada"], 
    views: 1450,
    steps: [
      "🛡️ Proteja o ambiente: Cubra o piso completamente com lona plástica ou jornal. Afaste todos os móveis da parede. Cubra interruptores e tomadas com fita crepe.",
      "🧹 Limpe a parede: Use um pano úmido para remover poeira, teias de aranha e sujeira. Deixe secar completamente por 30 minutos antes de continuar.",
      "🔍 Inspecione a superfície: Procure por buracos, rachaduras, manchas de umidade ou tinta descascada. Marque com lápis todas as áreas que precisam de reparo.",
      "🪛 Raspe imperfeições: Use a espátula para remover tinta solta ou descascada. Raspe até encontrar uma superfície firme e lisa.",
      "📄 Lixe a parede: Com a lixa grão 220, lixe suavemente toda a parede em movimentos circulares. Isso ajuda a tinta a aderir melhor. Limpe a poeira com pano úmido.",
      "🧴 Corrija imperfeições: Aplique massa corrida em buracos, rachaduras e imperfeições usando a espátula. Nivele bem com a parede. Deixe secar por 4-6 horas.",
      "📄 Lixe as áreas corrigidas: Após a massa secar, lixe as áreas reparadas com lixa grão 220 até ficarem lisas e niveladas com o resto da parede.",
      "🧹 Limpe novamente: Remova toda a poeira do lixamento com pano úmido. Deixe secar por 30 minutos. A parede deve estar limpa e seca antes de pintar.",
      "📼 Proteja bordas e acabamentos: Cole fita crepe em rodapés, batentes de portas, janelas, teto e cantos. Pressione bem a fita para evitar que a tinta escorra por baixo.",
      "🧴 Aplique primer/selador: Use o rolo para aplicar uma camada de primer em toda a parede. Isso sela a superfície e economiza tinta. Deixe secar por 2-4 horas.",
      "🎨 Prepare a tinta: Abra a lata de tinta e misture bem com uma espátula ou bastão por 2-3 minutos. Se necessário, dilua conforme instruções (geralmente 10% de água).",
      "🖌️ Pinte os cantos e bordas: Use um pincel de 2-3 polegadas para pintar cuidadosamente todos os cantos, bordas ao redor de portas, janelas e teto. Isso se chama 'recorte'.",
      "🖌️ Pinte a parede com rolo: Despeje tinta na bandeja. Molhe o rolo e retire o excesso. Pinte em movimentos de 'W' ou 'M', depois preencha os espaços com movimentos verticais uniformes.",
      "🎨 Trabalhe por seções: Divida a parede em seções de 1m² e pinte uma de cada vez, sempre mantendo as bordas úmidas para evitar marcas de emenda.",
      "⏱️ Deixe secar a primeira demão: Aguarde o tempo indicado na lata (geralmente 4 horas). A parede deve estar completamente seca ao toque antes da segunda demão.",
      "🎨 Aplique a segunda demão: Repita o processo de recorte com pincel e depois use o rolo. A segunda demão uniformiza a cor e garante cobertura completa.",
      "📼 Remova a fita crepe: Retire a fita crepe enquanto a tinta ainda está levemente úmida (cerca de 30 minutos após pintar). Puxe em ângulo de 45° para evitar descascar.",
      "⏱️ Deixe secar completamente: Aguarde 24 horas antes de encostar móveis na parede. A cura completa da tinta leva de 7 a 14 dias.",
      "🧹 Limpe as ferramentas: Lave pincéis e rolos imediatamente com água (tinta látex) ou solvente (tinta óleo). Guarde em local seco.",
      "✅ Finalize: Remova as proteções do piso, recoloque os móveis e aprecie seu trabalho! Guarde a tinta restante bem fechada para retoques futuros."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: "36", 
    title: "Ajustar Porta Desalinhada", 
    category: "Portas", 
    difficulty: "Médio", 
    time: "50 min", 
    economy: "R$ 275", 
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&h=400&fit=crop",
    tools: ["Chave de fenda", "Chave Phillips", "Martelo", "Formão", "Óleo lubrificante", "Calços de madeira"], 
    views: 780,
    steps: [
      "🔍 Identifique o problema: Feche a porta e observe onde ela está raspando ou onde há folga. Marque com lápis os pontos problemáticos.",
      "🔩 Verifique as dobradiças: Abra a porta completamente. Observe se alguma dobradiça está solta, enferrujada ou desalinhada.",
      "🪛 Aperte os parafusos soltos: Use a chave de fenda para apertar todos os parafusos das dobradiças, tanto na porta quanto no batente. Aperte firmemente.",
      "✅ Teste o fechamento: Feche a porta e observe se o problema foi resolvido. Se ainda raspar, continue para o próximo passo.",
      "⬆️ Ajuste a dobradiça superior: Se a porta raspa na parte de cima, solte um pouco os parafusos da dobradiça superior. Mova a dobradiça ligeiramente e reaperte.",
      "⬇️ Ajuste a dobradiça inferior: Se a porta raspa embaixo, faça o mesmo com a dobradiça inferior. Pequenos ajustes fazem grande diferença.",
      "🪵 Use calços se necessário: Se a dobradiça estiver muito funda, coloque um pequeno calço de madeira ou papelão atrás dela antes de parafusar novamente.",
      "⚒️ Verifique o batente: Se o batente estiver torto, pode ser necessário ajustá-lo. Use o formão para alargar levemente o encaixe da dobradiça.",
      "🛢️ Lubrifique as dobradiças: Aplique algumas gotas de óleo lubrificante nos pinos das dobradiças. Abra e feche a porta várias vezes para distribuir o óleo.",
      "🔄 Teste múltiplas vezes: Abra e feche a porta pelo menos 10 vezes. Observe se fecha suavemente, sem raspar ou fazer barulho.",
      "🎯 Ajuste fino: Se ainda houver pequenos problemas, faça ajustes milimétricos nas dobradiças até a porta fechar perfeitamente.",
      "🔐 Verifique a trava: Certifique-se de que a lingueta da fechadura entra suavemente no batente. Se necessário, ajuste a posição da trava."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: "3", 
    title: "Trocar Sifão", 
    category: "Hidráulica", 
    difficulty: "Fácil", 
    time: "25 min", 
    economy: "R$ 275", 
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
    problemImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=400&fit=crop",
    tools: ["Chave inglesa", "Balde", "Pano", "Luvas"], 
    views: 750,
    steps: [
      "🧤 Prepare o ambiente: Vista luvas e coloque um balde grande embaixo do sifão para coletar a água suja que vai cair.",
      "🔓 Desrosqueie a parte inferior: Segure o sifão com uma mão e gire a parte de baixo (copo) no sentido anti-horário. A água suja vai cair no balde.",
      "🔩 Solte a conexão superior: Desrosqueie a porca que conecta o sifão ao ralo da pia. Gire no sentido anti-horário até soltar completamente.",
      "🗑️ Remova o sifão antigo: Puxe o sifão para baixo com cuidado. Limpe a área com um pano para remover resíduos.",
      "🧹 Limpe as roscas: Use um pano úmido para limpar as roscas do ralo e do cano de esgoto. Remova toda sujeira e restos de vedação antiga.",
      "🔍 Verifique as vedações: Confira se o sifão novo veio com borrachas de vedação. Posicione-as corretamente nos encaixes.",
      "⬆️ Conecte ao ralo: Encaixe a parte superior do sifão novo no ralo da pia. Rosqueie a porca no sentido horário, apertando com a mão.",
      "⬇️ Conecte ao esgoto: Encaixe a saída do sifão no cano de esgoto. Certifique-se de que está bem encaixado.",
      "🔄 Monte o copo: Rosqueie a parte inferior (copo) do sifão no corpo principal. Aperte bem com as mãos.",
      "🔧 Aperte as conexões: Use a chave inglesa para dar um aperto final em todas as conexões. Não force demais para não quebrar.",
      "💧 Teste com água: Abra a torneira e deixe a água correr por 1 minuto. Observe se há vazamentos em alguma conexão.",
      "✅ Verifique vazamentos: Passe um papel toalha em todas as juntas. Se molhar, aperte um pouco mais a conexão que está vazando."
    ],
    stepImages: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
    ]
  },
]

export function TutoriaisSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const categories = ["Todos", "Hidráulica", "Elétrica", "Pintura", "Alvenaria", "Portas", "Móveis"]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || tutorial.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-700 border-green-300"
      case "Médio":
        return "bg-yellow-100 text-yellow-700 border-yellow-300"
      case "Difícil":
        return "bg-red-100 text-red-700 border-red-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  if (selectedTutorial) {
    return (
      <div className="space-y-6">
        {/* Header do Tutorial */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 shadow-xl">
          <Button
            onClick={() => {
              setSelectedTutorial(null)
              setCurrentStep(0)
            }}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            ← Voltar aos Tutoriais
          </Button>
          <h2 className="text-3xl font-bold text-white mb-2">{selectedTutorial.title}</h2>
          <p className="text-white/90">Tutorial completo passo a passo - Fácil de seguir mesmo sem experiência</p>
        </div>

        {/* Imagem do Problema (Fixa no Topo) */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🔍 Problema Identificado
          </h3>
          <div className="relative h-64 rounded-xl overflow-hidden bg-gray-100">
            <img
              src={selectedTutorial.problemImage}
              alt={`Problema: ${selectedTutorial.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-lg">
                {selectedTutorial.title}
              </p>
            </div>
          </div>
        </div>

        {/* Layout: Carrossel + Passo a Passo */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Carrossel de Fotos (Esquerda) */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📸 Passo {currentStep + 1} de {selectedTutorial.steps.length}
            </h3>
            <div className="relative">
              {/* Imagem Principal */}
              <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={selectedTutorial.stepImages[currentStep]}
                  alt={`Passo ${currentStep + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay com número do passo */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Passo {currentStep + 1}
                </div>

                {/* Descrição do passo sobre a imagem */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <p className="text-white font-medium text-base leading-relaxed">
                    {selectedTutorial.steps[currentStep]}
                  </p>
                </div>

                {/* Botões de navegação */}
                <button
                  onClick={() => setCurrentStep(prev => prev === 0 ? selectedTutorial.steps.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentStep(prev => prev === selectedTutorial.steps.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Miniaturas */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {selectedTutorial.stepImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentStep === index
                        ? "border-purple-500 scale-110"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Passo a Passo Detalhado (Direita) */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              📋 Passo a Passo Detalhado
            </h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {selectedTutorial.steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 items-start p-4 rounded-xl transition-all cursor-pointer ${
                    currentStep === index 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-500' 
                      : 'hover:bg-purple-50'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-transform ${
                    currentStep === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-110'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${currentStep === index ? 'text-purple-900' : 'text-gray-800'}`}>
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Informações do Tutorial */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-gray-900">Tempo</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">{selectedTutorial.time}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-green-500" />
              <span className="font-bold text-gray-900">Você Economiza</span>
            </div>
            <p className="text-2xl font-bold text-green-600">{selectedTutorial.economy}</p>
            <p className="text-xs text-gray-600 mt-1">Custo médio de profissional em SP</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="w-6 h-6 text-orange-500" />
              <span className="font-bold text-gray-900">Dificuldade</span>
            </div>
            <Badge className={`${getDifficultyColor(selectedTutorial.difficulty)} border text-lg px-4 py-1`}>
              {selectedTutorial.difficulty}
            </Badge>
          </div>
        </div>

        {/* Ferramentas Necessárias */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-orange-500" />
            Ferramentas Necessárias
          </h3>
          <div className="flex flex-wrap gap-3">
            {selectedTutorial.tools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full font-medium border border-orange-300 flex items-center gap-2">
                <span className="text-2xl">{getToolIcon(tool)}</span>
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Aviso de Segurança */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-2xl p-6 shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-yellow-900 mb-2">⚠️ Importante - Segurança</h4>
              <p className="text-yellow-800">
                {selectedTutorial.category === "Elétrica" && "Sempre desligue o disjuntor antes de trabalhar com eletricidade. Use testador de voltagem para confirmar ausência de corrente. Nunca trabalhe com mãos molhadas."}
                {selectedTutorial.category === "Hidráulica" && "Feche o registro de água antes de iniciar. Tenha um balde próximo para evitar vazamentos. Use luvas para proteção."}
                {selectedTutorial.category === "Portas" && "Use ferramentas adequadas e tome cuidado com dedos ao trabalhar com portas pesadas. Peça ajuda se necessário."}
                {selectedTutorial.category === "Pintura" && "Use máscara e luvas. Mantenha o ambiente ventilado durante a aplicação. Proteja olhos de respingos."}
                {selectedTutorial.category === "Alvenaria" && "Use óculos de proteção e luvas. Cuidado com poeira e fragmentos. Trabalhe em área ventilada."}
                {selectedTutorial.category === "Móveis" && "Trabalhe em superfície estável. Use cola apropriada e aguarde tempo de secagem. Cuidado com ferramentas cortantes."}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-2">📚 Biblioteca de Tutoriais</h2>
        <p className="text-white/90">Guias visuais detalhados passo a passo - Fácil mesmo sem experiência</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar tutorial..."
              className="pl-10 rounded-full border-2 border-gray-200 focus:border-purple-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "border-2 border-gray-200"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            onClick={() => setSelectedTutorial(tutorial)}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <img 
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop" 
                  alt="Chave de fenda" 
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              
              {/* Category Badge */}
              <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900 border-0">
                {tutorial.category}
              </Badge>

              {/* Views */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                👁️ {tutorial.views}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {tutorial.title}
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600">{tutorial.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-semibold">Economize {tutorial.economy}</span>
                </div>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between mb-4">
                <Badge className={`${getDifficultyColor(tutorial.difficulty)} border`}>
                  {tutorial.difficulty}
                </Badge>
                <div className="flex items-center gap-1">
                  <Wrench className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-gray-600">{tutorial.tools.length} ferramentas</span>
                </div>
              </div>

              {/* Tools Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tutorial.tools.slice(0, 2).map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <span className="text-base">{getToolIcon(tool)}</span>
                    {tool}
                  </span>
                ))}
                {tutorial.tools.length > 2 && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    +{tutorial.tools.length - 2}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <Button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
                Ver Tutorial Completo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum tutorial encontrado</h3>
          <p className="text-gray-600">Tente buscar por outro termo ou categoria</p>
        </div>
      )}
    </div>
  )
}
