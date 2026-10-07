/**
 * BRASA / THE RITUAL OF FIRE
 * Editorial Culinary Architecture & Narrative Data
 */

export interface TastingMenuAct {
  act: string;
  roman: string;
  title: string;
  subhead: string;
  description: string;
  fireTechnique: string;
  temperature: string;
  vessel: string;
  pairing: {
    wine: string;
    producer: string;
    region: string;
    notes: string;
  };
}

export interface IngredientSpecimen {
  id: string;
  name: string;
  botanical: string;
  origin: string;
  fireTreatment: string;
  flavorProfile: string;
  season: string;
}

export interface FireZone {
  zone: string;
  temp: string;
  method: string;
  material: string;
  description: string;
}

export const FIRE_ZONES: FireZone[] = [
  {
    zone: "Fogo Primordial",
    temp: "780°C – 850°C",
    method: "Queima Direta e Chama Aberta",
    material: "Lenha de Angico Preto & Jacarandá Seco",
    description: "Selamento relâmpago, caramelização violenta de açúcares naturais e quebra imediata de fibras."
  },
  {
    zone: "Grelha Basculante",
    temp: "320°C – 380°C",
    method: "Calor Radiante por Convecção",
    material: "Brasas Incandescentes de Carvalho Tostado",
    description: "Gordura pingando sobre o carvão, evaporando instantaneamente em fumaça perfumada que envelopa o corte."
  },
  {
    zone: "Domo de Cinzas Ativas",
    temp: "110°C – 140°C",
    method: "Cocção Lenta Subterrânea",
    material: "Leito de Cinzas Brancas Peneiradas",
    description: "Cozimento isotérmico de raízes e bulbos dentro da própria cinza, concentrando umami sem queimar a casca."
  },
  {
    zone: "Defumação Suspensa",
    temp: "60°C – 85°C",
    method: "Banho de Fumaça Fria Aromática",
    material: "Aparas de Madeiras Frutíferas e Ervas Secas",
    description: "Peixes costeiros e manteiga maturada suspensos a dois metros da fogueira durante seis a doze horas."
  }
];

export const INGREDIENT_SPECIMENS: IngredientSpecimen[] = [
  {
    id: "tomates-heranca",
    name: "Tomates de Herança em Brasa",
    botanical: "Solanum lycopersicum",
    origin: "Vale do Paraíba — Agricultura Regenerativa",
    fireTreatment: "Chamuscados na brasa viva por 40 segundos, descansados em azeite de louro queimado",
    flavorProfile: "Acidez mineral vibrante, notas de madeira doce e fumaça profunda",
    season: "Verão tardio & início de Outono"
  },
  {
    id: "cogumelos-selvagens",
    name: "Chanterelles & Porcini da Mantiqueira",
    botanical: "Cantharellus cibarius",
    origin: "Bosques de Altitude de Minas Gerais",
    fireTreatment: "Salteados em frigideira de ferro fundido centenária com tutano derretido",
    flavorProfile: "Terra úmida, noz tostada, manteiga carbonizada e musgo silvestre",
    season: "Época das Chuvas / Outono"
  },
  {
    id: "polvo-rocha",
    name: "Polvo de Rocha das Ilhas Rasas",
    botanical: "Octopus vulgaris",
    origin: "Litoral Norte de São Paulo — Pesca Artesanal em Mergulho",
    fireTreatment: "Cozido em caldo de algas e terminado com estalo de fogo a 400°C",
    flavorProfile: "Textura tenra com crosta crocante salina, toque de carvão puro e limão cravo tostado",
    season: "Ano todo com pico em águas frias"
  },
  {
    id: "wagyu-curado",
    name: "Prime Rib Curado 60 Dias",
    botanical: "Bos taurus (Linha ancestral)",
    origin: "Pampa Sul — Pastagem Nativa",
    fireTreatment: "Brasagem distante a 45cm do leito de carvão, descanso em tábua de louro",
    flavorProfile: "Gordura entremeada amanteigada, fundo tostado de avelã e caramelo seco",
    season: "Maturado sob demanda constante"
  },
  {
    id: "raizes-cinzas",
    name: "Mandioca & Beterraba Amarela nas Cinzas",
    botanical: "Manihot esculenta / Beta vulgaris",
    origin: "Solo argiloso do interior paulista",
    fireTreatment: "Enterradas 4 horas em leito de cinzas quentes a 120°C sem oxigênio",
    flavorProfile: "Doçura concentrada, fumaça sedosa e crosta terrosa desidratada",
    season: "Inverno & Primavera"
  }
];

export const TASTING_MENU: TastingMenuAct[] = [
  {
    act: "Ato I",
    roman: "I",
    title: "A Origem do Fogo",
    subhead: "Caldo de Ossos Tostados & Carvão Ativado",
    description: "Consommé clarificado de tutano tostado a 800°C durante 18 horas, infusão de folhas de louro defumadas e óleo de carvão ancestral.",
    fireTechnique: "Tostamento violento em chama aberta + infusão lenta em domo térmico",
    temperature: "72°C ao servir",
    vessel: "Tigela de grés negro modelada a mão com borda irregular",
    pairing: {
      wine: "Jerez Oloroso En Rama",
      producer: "Bodegas Tradición",
      region: "Jerez, Espanha",
      notes: "Frutas secas, carvalho oxidado e salinidade austera que limpa o palato"
    }
  },
  {
    act: "Ato II",
    roman: "II",
    title: "O Primeiro Estalo",
    subhead: "Tomate de Herança Queimado & Stracciatella Defumada",
    description: "Tomates colhidos maduros, estalados na brasa viva, emulsão fria de queijo artesanal da serra defumado em lenha de pessegueiro e tuile crocante de carvão vegetal.",
    fireTechnique: "Queima superficial relâmpago de casca + defumação a frio de laticínio",
    temperature: "Ambiente / Brasa tépida",
    vessel: "Prato raso de cerâmica de alta temperatura com textura vulcânica",
    pairing: {
      wine: "Orange Wine Malvasia de Candia 2021",
      producer: "La Stoppa — Ageno",
      region: "Emilia-Romagna, Itália",
      notes: "Casca de tangerina, taninos presentes de maceração e acidez cortante"
    }
  },
  {
    act: "Ato III",
    roman: "III",
    title: "A Floresta e o Carvão",
    subhead: "Chanterelles Selvagens sobre Cinzas Ativas & Gema Curada",
    description: "Cogumelos selvagens salteados ao rubro em ferro forjado, servidos sobre pó de cinzas comestíveis de alho-poró e emulsão aveludada de gema de galinha caipira curada no sal de fumaça.",
    fireTechnique: "Salteado em frigideira de ferro sobre brasas vivas",
    temperature: "68°C",
    vessel: "Cumbuca de pedra-sabão lapidada rusticada",
    pairing: {
      wine: "Gringet 'Le Feu' 2020",
      producer: "Domaine Belluard",
      region: "Savoie, França",
      notes: "Minerais de ardósia, frescor alpino e pureza cortante contra a terra úmida"
    }
  },
  {
    act: "Ato IV",
    roman: "IV",
    title: "O Abismo e a Rocha",
    subhead: "Polvo de Mergulho Chamuscado & Melaço de Alho Negro",
    description: "Tentáculo de polvo selado na grelha basculante até caramelizar a crosta exterior enquanto o núcleo permanece translúcido e amanteigado. Redução de caldo de conchas tostadas.",
    fireTechnique: "Grelha direta a 380°C a 10cm das brasas de carvalho",
    temperature: "82°C",
    vessel: "Placa retangular de basalto escovado",
    pairing: {
      wine: "Etna Bianco 'Pietramarina' 2018",
      producer: "Benanti",
      region: "Sicília, Itália",
      notes: "Fumo vulcânico, sílex, raspas de limão e acidez tensa da rocha do vulcão"
    }
  },
  {
    act: "Ato V",
    roman: "V",
    title: "O Pescador e a Lenha",
    subhead: "Peixe da Costa em Folha de Bananeira & Tutano Derretido",
    description: "Peixe de linha do dia envolto em folha de bananeira chamuscada e cozido sob o vapor aromático da própria folha, finalizado com emulsão quente de tutano grelhado e limão galego.",
    fireTechnique: "Papillote ancestral no leito de cinzas + emulsão de fogo vivo",
    temperature: "75°C",
    vessel: "Bandeja de cobre oxidado forjada por artesãos locais",
    pairing: {
      wine: "Meursault 'Les Narvaux' 2019",
      producer: "Domaine d'Auvenay",
      region: "Bourgogne, França",
      notes: "Avelãs tostadas, manteiga dourada, amplitude cítrica e comprimento infinito"
    }
  },
  {
    act: "Ato VI",
    roman: "VI",
    title: "O Clímax da Matéria",
    subhead: "Costela Bovina Maturada a Seco por 60 Dias",
    description: "Corte nobre com crosta milimétrica de carvão aromático e coração vermelho rubi. Acompanha mandioca confitada na banha de tutano e cebolas tostadas até a doçura extrema.",
    fireTechnique: "Brasagem contínua de 4 horas com calor radiante de angico",
    temperature: "54°C (Ponto do Fogo)",
    vessel: "Prato pesado de barro queimado negro com assinatura do chef",
    pairing: {
      wine: "Barolo 'Monprivato' 2016",
      producer: "Giuseppe Mascarello",
      region: "Piemonte, Itália",
      notes: "Alcatrão, rosas secas, trufas escuras e estrutura tânica esculpida para carnes maturadas"
    }
  },
  {
    act: "Ato VII",
    roman: "VII",
    title: "A Transição da Terra",
    subhead: "Beterraba Assada nas Cinzas & Mel de Abelhas Nativas",
    description: "Beterraba amarela cozida por 5 horas inteira dentro do leito de cinzas brancas. Servida com queijo de cabra artesanal curado e redução de mel de abelha Jataí silvestre.",
    fireTechnique: "Cocção passiva em cinzas residuais isotérmicas (110°C)",
    temperature: "55°C",
    vessel: "Cerâmica esmaltada em tom terra queimada",
    pairing: {
      wine: "Vouvray 'Le Mont' Moelleux 2015",
      producer: "Domaine Huet",
      region: "Loire, França",
      notes: "Marmelo, gengibre, acidez viva cortando a doçura e mineralidade de sílex"
    }
  },
  {
    act: "Ato VIII",
    roman: "VIII",
    title: "O Doce Tostado",
    subhead: "Sorvete de Leite Chamuscado, Caramelo Amargo & Sal de Cinza",
    description: "Leite cru infusionado com tições de madeira ardente antes da centrifugação. Caramelo levado ao limiar da queima proposital e pitada de sal extraído de cinzas de videira.",
    fireTechnique: "Infusão direta de madeira incandescente em gordura láctea",
    temperature: "-4°C contrastando com calda a 50°C",
    vessel: "Taça artesanal de vidro soprado fumê fosco",
    pairing: {
      wine: "Madeira Sercial 10 Anos",
      producer: "Barbeito",
      region: "Ilha da Madeira, Portugal",
      notes: "Frutos secos, iodo, acidez penetrante e notas oxidativas defumadas"
    }
  },
  {
    act: "Ato IX",
    roman: "IX",
    title: "A Cinza e a Memória",
    subhead: "Pera Negra em Infusão de Madeiras Nobres & Café na Brasa",
    description: "Pera inteira desidratada no calor do forno a lenha, glaceada com melaço de café torrado sobre tições. O fecho ritualístico da noite antes do silêncio da sala.",
    fireTechnique: "Desidratação e caramelização de 8 horas no calor residual",
    temperature: "Morno",
    vessel: "Prato cerâmico de cinzas compactadas",
    pairing: {
      wine: "Château d'Yquem 2009 (ou Infusão de Café Ancestral)",
      producer: "Château d'Yquem",
      region: "Sauternes, França",
      notes: "Açafrão, damascos defumados, cera de abelha e elegância eterna"
    }
  }
];

export const ARCHITECTURAL_DETAILS = [
  {
    title: "Yakisugi (Madeira Queimada)",
    element: "Mesas e Revestimentos Acústicos",
    description: "Técnica milenar japonesa de queimar a superfície do cedro e do carvalho a fogo vivo, conferindo resistência eterna à matéria e uma pátina aveludada em negro profundo."
  },
  {
    title: "Basalto Vulcânico Poroso",
    element: "Balcão dos 14 Lugares",
    description: "Monólito maciço de pedra vulcânica extraído de pedreira ancestral, cortado com precisão cirúrgica e mantido áspero ao toque para reter o calor das panelas de ferro."
  },
  {
    title: "Cobre Oxidado & Ferro Forjado",
    element: "Lareira e Coifa do Fogo Vivo",
    description: "Metais que reagem à fumaça, ao tempo e ao suor da cozinha, acumulando tons de ferrugem e pátina que mudam a cada estação do ano."
  },
  {
    title: "Grés e Barro da Mantiqueira",
    element: "Louçaria Exclusiva",
    description: "Cada prato e cumbuca é moldado à mão por oleiros locais usando terra da região e queimado em forno a lenha em temperaturas superiores a 1.280°C."
  }
];
