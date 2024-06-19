const BASE_URL = process.env.PUBLIC_URL || '';

const phones = [
  {
    id: 'iphone15-128gb-5g-blue',
    title: 'Apple iPhone 15, 128GB, 5G',
    description: 'O iPhone 15 Plus possui uma tela OLED de 6,7 polegadas e é alimentado pelo chip Apple Bionic 16. Ele conta com um sistema de câmera dupla na traseira, consistindo de uma câmera principal de 48MP e um sensor ultra grande angular de 12MP.',
    characteristics: {
      prós: ['Oferece uma alta relação tela-corpo de 88,16%'],
      tecnologia: ['2G', '3G', '4G', '5G'],
      proteção: ['À prova d\'água', 'À prova de poeira'],
      recursosDeExibição: ['Tons verdadeiros', 'Toque háptico', 'Taxa de contraste de 2.000.000:1', 'Display HDR', 'Cor ampla (P3)', 'Dynamic Island'],
      recursosDeFotoVídeo: ['Auto foco', 'Detecção de rosto', 'Panorama', 'HDR', 'Câmera lenta', 'Time-lapse', 'Modo retrato', 'Live photo', 'Temporizador', 'Modo noturno', 'Disparo contínuo']
    },
    images: [
      `${BASE_URL}/assets/carousel/iphone15/1.avif`,
      `${BASE_URL}/assets/carousel/iphone15/2.avif`,
      `${BASE_URL}/assets/carousel/iphone15/3.avif`,
      `${BASE_URL}/assets/carousel/iphone15/4.avif`,
    ],
  },
  {
    id: 'iphone15-pro-256gb-5g-black-titanium',
    title: 'Apple iPhone 15 Pro, 256GB, 5G, Black Titanium',
    description: 'O iPhone 15 Pro está equipado com uma tela OLED de 6,1 polegadas com taxa de atualização de 120Hz e é alimentado pelo processador A17 Pro da Apple. Ele possui uma configuração de câmera tripla na traseira, incluindo uma câmera principal de 48MP.',
    characteristics: {
      prós: ['Apresenta uma alta taxa de atualização de 120Hz para visuais mais suaves', 'Capaz de conectividade 5G', 'Possui uma alta relação tela-corpo de 88,23%'],
      conectividade: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC', 'Carregamento sem fio'],
      sensores: ['Acelerômetro', 'Barômetro', 'Giroscópio', 'Reconhecimento facial', 'Sensor de proximidade', 'Sensor de luz'],
      proteção: ['À prova d\'água', 'À prova de poeira'],
      recursosDeExibição: ['Display sempre ativo', 'Tons verdadeiros', 'Toque háptico', 'Cor ampla (P3)', 'Dynamic Island', 'Brilho máximo de 1000 nits (típico)', 'Pico de 1600 nits (HDR)', 'Pico de 2000 nits (ao ar livre)'],
      recursosDeFotoVídeo: ['Auto foco', 'Detecção de rosto', 'Panorama', 'HDR', 'Câmera lenta', 'Time-lapse', 'Modo retrato', 'Live photo', 'Temporizador', 'Modo noturno']
    },
    images: [
      `${BASE_URL}/assets/carousel/iphone15ProBlack/1.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProBlack/2.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProBlack/3.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProBlack/4.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProBlack/5.avif`,
    ],
  },
  {
    id: 'iphone15-pro-256gb-5g-natural-titanium',
    title: 'Apple iPhone 15 Pro, 256GB, 5G, Natural Titanium',
    description: 'O iPhone 15 Pro está equipado com uma tela OLED de 6,1 polegadas com taxa de atualização de 120Hz e é alimentado pelo processador A17 Pro da Apple. Ele possui uma configuração de câmera tripla na traseira, incluindo uma câmera principal de 48MP.',
    characteristics: {
      prós: ['Apresenta uma alta taxa de atualização de 120Hz para visuais mais suaves', 'Capaz de conectividade 5G', 'Possui uma alta relação tela-corpo de 88,23%'],
      conectividade: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC', 'Carregamento sem fio'],
      sensores: ['Acelerômetro', 'Barômetro', 'Giroscópio', 'Reconhecimento facial', 'Sensor de proximidade', 'Sensor de luz'],
      proteção: ['À prova d\'água', 'À prova de poeira'],
      recursosDeExibição: ['Display sempre ativo', 'Tons verdadeiros', 'Toque háptico', 'Cor ampla (P3)', 'Dynamic Island', 'Brilho máximo de 1000 nits (típico)', 'Pico de 1600 nits (HDR)', 'Pico de 2000 nits (ao ar livre)'],
      recursosDeFotoVídeo: ['Auto foco', 'Detecção de rosto', 'Panorama', 'HDR', 'Câmera lenta', 'Time-lapse', 'Modo retrato', 'Live photo', 'Temporizador', 'Modo noturno']
    },
    images: [
      `${BASE_URL}/assets/carousel/iphone15ProNatural/1.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProNatural/2.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProNatural/3.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProNatural/4.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProNatural/5.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProNatural/6.avif`,
    ],
  },
  {
    id: 'iphone15-pro-max',
    title: 'Apple iPhone 15 Pro Max',
    description: 'O iPhone 15 Pro Max possui uma tela OLED de 6,1 polegadas alimentada pelo chip Apple Bionic 16. Inclui um sistema de câmera dupla na traseira, equipado com uma câmera principal de 48MP e um sensor ultra grande angular de 12MP.',
    characteristics: {
      prós: ['Equipado para conectividade 5G', 'Oferece uma substancial relação tela-corpo de 86,38%'],
      sensores: ['Acelerômetro', 'Barômetro', 'Giroscópio', 'Reconhecimento facial', 'Sensor de proximidade', 'Sensor de luz'],
      proteção: ['À prova d\'água', 'À prova de poeira'],
      recursosDeExibição: ['Display sempre ativo', 'Tons verdadeiros', 'Toque háptico', 'Cor ampla (P3)', 'Dynamic Island', 'Brilho máximo de 1000 nits (típico)', 'Pico de 1600 nits (HDR)', 'Pico de 2000 nits (ao ar livre)'],
      recursosDeFotoVídeo: ['Auto foco', 'Detecção de rosto', 'Panorama', 'HDR', 'Câmera lenta', 'Time-lapse', 'Modo retrato', 'Live photo', 'Temporizador', 'Modo noturno']
    },
    images: [
      `${BASE_URL}/assets/carousel/iphone15ProMax/1.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProMax/2.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProMax/3.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProMax/4.avif`,
      `${BASE_URL}/assets/carousel/iphone15ProMax/5.avif`,
    ],
  },
  {
    id: 'samsung-galaxy-a55',
    title: 'Samsung Galaxy A55, 256GB, 8GB RAM, 5G, Awesome Lime',
    description: 'O Samsung Galaxy A55 5G possui uma tela AMOLED de 6,6 polegadas com taxa de atualização de 120Hz e está equipado com uma bateria de 5000mAh.',
    characteristics: {
      prós: ['Oferece uma tela suave de 120Hz para visuais aprimorados', 'Suporta conectividade 5G', 'Construção compacta medindo 6,34 x 3,05 x 0,00 polegadas'],
      sensores: ['Acelerômetro', 'Giroscópio', 'Leitor de impressões digitais', 'Sensor de proximidade', 'Sensor geomagnético'],
      conteúdoDoPacote: ['Telefone', 'Chave SIM', 'Cabo de dados USB Type-C'],
      recursosDeExibição: ['Profundidade de cor de 16M', 'Taxa de atualização de 120Hz'],
      resoluçãoDaCâmeraPrincipal: ['12 MP Ultrawide', '5 MP Macro', '50 MP Wide'],
      recursosDeFotoVídeo: ['Auto foco', 'Câmera lenta', 'Zoom digital']
    },
    images: [
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/1.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/2.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/3.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/4.avif`
    ],
  },
  {
    id: 'xiaomi-redmi-note-12-pro',
    title: 'Xiaomi Redmi Note 12 Pro+, 8GB RAM, 256GB, Onyx Black',
    description: 'O Xiaomi Redmi 12 Pro+ possui uma tela OLED de 6,67 polegadas com taxa de atualização de 120Hz, alimentado pelo processador MediaTek Dimensity 1080. Ele possui uma bateria de 5000mAh capaz de carregamento rápido de 120W e uma configuração de câmera tripla na traseira.',
    characteristics: {
      prós: ['Apresenta uma rápida taxa de atualização de 120Hz para visuais suaves', 'Compatível com redes 5G', 'Oferece uma alta relação tela-corpo de 86,87%'],
      conectividade: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
      conteúdoDoPacote: ['Telefone', 'Cabo de dados'],
      resoluçãoDaCâmeraPrincipal: ['2 MP Macro', '8 MP Ultrawide', '200 MP Wide'],
      resoluçãoDaCâmeraSecundária: '16 Mpx',
      resoluçãoDeVídeo: 'Full HD',
      recursosDeFotoVídeo: ['Auto foco', 'Câmera lenta', 'Zoom digital']
    },
    images: [
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/1.avif`,
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/2.avif`,
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/3.avif`,
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/4.avif`,
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/5.avif`,
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/6.avif`,
      `${BASE_URL}/assets/carousel/xiaomiRedmiNote12Pro/7.avif`,
    ],
  },
  {
    id: 'samsung-galaxy-s23-fe',
    title: 'Samsung Galaxy S23 FE, 8GB RAM, 125GB',
    description: 'O Samsung Galaxy S23 FE está equipado com uma tela AMOLED de 6,4 polegadas com taxa de atualização de 120Hz e roda no chipset Qualcomm Snapdragon 8 Gen 1. Outras especificações incluem uma bateria de 4500mAh com carregamento rápido de 25W e um sistema de câmera tripla na traseira.',
    characteristics: {
      prós: ['Oferece uma alta taxa de atualização de 120Hz para visuais suaves', 'Preparado para capacidades de rede 5G'],
      sensores: ['Acelerômetro', 'Barômetro', 'Giroscópio', 'Leitor de impressões digitais', 'Sensor de proximidade', 'Sensor geomagnético'],
      recursosDeExibição: ['403 ppi', 'FHD+', '120 Hz refresh rate', '1450 nits'],
      resoluçãoDaCâmeraPrincipal: ['12 MP Ultrawide', '8 MP Telephoto', '50 MP Wide'],
      resoluçãoDeVídeo: ['HD', 'Full HD', '4K', '8K'],
      recursosDeFotoVídeo: ['Auto foco', 'Panorama', 'Câmera lenta', 'Modo retrato', 'Temporizador']
    },
    images: [
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/1.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/2.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/3.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/4.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/5.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/6.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/7.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/8.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyS23FE/9.avif`,
    ],
  },
  {
    id: 'sony-xperia-10',
    title: 'Sony Xperia 10, 8GB RAM, 125GB',
    description: 'O Sony Xperia 10 VI está equipado com uma tela de 6,5 polegadas e roda no processador Qualcomm Snapdragon 6 Gen 1. Ele possui uma bateria de 5000mAh e um sistema de câmera dupla na traseira.',
    characteristics: {
      prós: ['Preparado para conectividade 5G', 'Tamanho compacto, medindo 6,10 x 2,68 x 0,00 polegadas'],
      sensores: ['Acelerômetro', 'Leitor de impressões digitais', 'Bússola', 'Sensor de proximidade'],
      recursosDeExibição: ['Taxa de atualização de 60Hz', 'Proporção de aspecto 21:9', 'DCI-P3 100%'],
      resoluçãoDaCâmeraPrincipal: ['48 MP Wide', '8 MP Ultrawide', '8 MP Telephoto'],
      resoluçãoDaCâmeraSecundária: '8 Mpx',
      recursosDeFotoVídeo: ['Panorama', 'HDR']
    },
    images: [
      `${BASE_URL}/assets/carousel/sonyXperia10/1.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/2.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/3.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/4.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/5.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/6.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/7.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/8.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/9.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/10.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/11.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/12.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia10/13.avif`,
    ],
  },
  {
    id: 'sony-xperia-5',
    title: 'Sony Xperia 5, 8GB RAM, 128GB',
    description: 'O Sony Xperia 5 V possui uma tela OLED de 6,1 polegadas com taxa de atualização de 120Hz, alimentado pelo processador Qualcomm Snapdragon 8 Gen 2. Ele também vem equipado com uma bateria de 5000mAh e um sistema de câmera dupla na traseira.',
    characteristics: {
      prós: ['Possui uma alta taxa de atualização de 120Hz para visuais fluidos', 'Preparado para redes 5G', 'Inclui capacidade de carregamento sem fio'],
      conectividade: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
      processorModel: 'Qualcomm Snapdragon 8 Gen 2',
      recursosDeExibição: '120 Hz',
      numberOfCameras: 3,
      resoluçãoDaCâmeraPrincipal: ['12 MP Ultrawide', '48 MP Wide'],
      resoluçãoDaCâmeraSecundária: '12 Mpx',
      capacidadeDaBateria: '5000 mAh'
    },
    images: [
      `${BASE_URL}/assets/carousel/sonyXperia5/1.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/2.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/3.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/4.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/5.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/6.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/7.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/8.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/9.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/10.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/11.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/12.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/13.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/14.avif`,
      `${BASE_URL}/assets/carousel/sonyXperia5/15.avif`,
    ],
  },
  {
    id: 'huawei-pura-70-ultra',
    title: 'Huawei Pura 70 Ultra, 16GB RAM, 512GB',
    description: 'O Huawei Pura 70 Ultra está equipado com uma tela LTPO OLED de 6,8 polegadas que oferece uma taxa de atualização de 120Hz e roda no processador Kirin 9010. O dispositivo inclui uma bateria de 5200mAh capaz de carregamento rápido de 100W e possui uma configuração de câmera tripla na traseira.',
    characteristics: {
      prós: ['Apresenta uma rápida taxa de atualização de 120Hz para um desempenho de display mais suave', 'Oferece uma alta relação tela-corpo de 91,35%', 'Capacidade de carregamento sem fio'],
      conectividade: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
      sensores: ['Giroscópio', 'Leitor de impressões digitais', 'Bússola', 'Sensor de proximidade', 'Sensor de luz', 'Sensor gravitacional'],
      conteúdoDoPacote: ['Telefone', '3 conjuntos para telefone', 'Instruções', 'Chave SIM', 'Cabo de dados USB Type-C'],
      numberOfCameras: 3,
      resoluçãoDaCâmeraPrincipal: ['50 MP Wide', '40 MP Ultrawide', '50 MP Telefoto'],
      resoluçãoDaCâmeraSecundária: '13 Mpx',
      recursosDeFotoVídeo: ['Câmera lenta', 'Detecção de sorriso', 'Modo retrato', 'Time-lapse', 'Temporizador', 'Disparo contínuo']
    },
    images: [
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/1.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/2.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/3.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/4.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/5.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/6.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/7.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/8.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/9.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/10.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/11.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/12.avif`,
      `${BASE_URL}/assets/carousel/huaweiPura70Ultra/13.avif`,
    ],
  },
];

export default phones;
