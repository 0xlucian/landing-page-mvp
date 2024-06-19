const BASE_URL = process.env.PUBLIC_URL || '';

const phones = [
  {
    id: 'carouselIphone15',
    title: 'Apple iPhone 15, 128GB, 5G, Blue',
    description: 'The iPhone 15 Plus features a 6.7-inch OLED screen and is powered by the Apple Bionic 16 chip. It sports a dual-camera system on the rear consisting of a 48MP primary camera and a 12MP ultra-wide sensor.',
    characteristics: {
      pros: ['Offers a high screen-to-body ratio of 88.16%'],
      technology: ['2G', '3G', '4G', '5G'],
      protection: ['Waterproof', 'Dustproof'],
      displayFeatures: ['True tone', 'Haptic touch', '2000000:1 contrast ratio', 'HDR display', 'Wide color (P3)', 'Dynamic Island'],
      photoVideoFeatures: ['Auto focus', 'Face detection', 'Panorama', 'HDR', 'Slow motion', 'Time-lapse', 'Portrait mode', 'Live photo', 'Timer', 'Night mode', 'Burst shot']
    },
    images: [
      `${BASE_URL}/assets/carousel/iphone15/1.avif`,
      `${BASE_URL}/assets/carousel/iphone15/2.avif`,
      `${BASE_URL}/assets/carousel/iphone15/3.avif`,
      `${BASE_URL}/assets/carousel/iphone15/4.avif`,
    ],
  },
  {
    id: 'carouselIphone15ProBlack',
    title: 'Apple iPhone 15 Pro, 256GB, 5G, Black Titanium',
    description: 'The iPhone 15 Pro is equipped with a 6.1-inch OLED screen that boasts a 120Hz refresh rate and is powered by the upgraded A17 Pro processor from Apple. It features a triple camera array on the back including a 48MP primary camera.',
    characteristics: {
      pros: ['Features a 120Hz high refresh rate for smoother visuals', '5G connectivity capable', 'Possesses a high screen-to-body ratio of 88.23%'],
      connectivity: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC', 'Wireless charging'],
      sensors: ['Accelerometer', 'Barometer', 'Gyroscope', 'Face recognition', 'Proximity sensor', 'Light sensor'],
      protection: ['Waterproof', 'Dustproof'],
      displayFeatures: ['Always-on display', 'True tone', 'Haptic touch', 'Wide color (P3)', 'Dynamic Island', '1000 nits maximum brightness (typical)', '1600 nits peak brightness (HDR)', '2000 nits peak brightness (outdoors)'],
      photoVideoFeatures: ['Auto focus', 'Face detection', 'Panorama', 'HDR', 'Slow motion', 'Time-lapse', 'Portrait mode', 'Live photo', 'Timer', 'Night mode']
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
    id: 'carouselIphone15ProNatural',
    title: 'Apple iPhone 15 Pro, 256GB, 5G, Natural Titanium',
    description: 'The iPhone 15 Pro is equipped with a 6.1-inch OLED screen that boasts a 120Hz refresh rate and is powered by the upgraded A17 Pro processor from Apple. It features a triple camera array on the back including a 48MP primary camera.',
    characteristics: {
      pros: ['Features a 120Hz high refresh rate for smoother visuals', '5G connectivity capable', 'Possesses a high screen-to-body ratio of 88.23%'],
      connectivity: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC', 'Wireless charging'],
      sensors: ['Accelerometer', 'Barometer', 'Gyroscope', 'Face recognition', 'Proximity sensor', 'Light sensor'],
      protection: ['Waterproof', 'Dustproof'],
      displayFeatures: ['Always-on display', 'True tone', 'Haptic touch', 'Wide color (P3)', 'Dynamic Island', '1000 nits maximum brightness (typical)', '1600 nits peak brightness (HDR)', '2000 nits peak brightness (outdoors)'],
      photoVideoFeatures: ['Auto focus', 'Face detection', 'Panorama', 'HDR', 'Slow motion', 'Time-lapse', 'Portrait mode', 'Live photo', 'Timer', 'Night mode']
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
    id: 'carouselIphone15ProMax',
    title: 'Apple iPhone 15 Pro Max Specs',
    description: 'The iPhone 15 Pro Max features a 6.7-inch OLED screen with a 120Hz refresh rate and is powered by the Apple A17 Pro chip. It includes a triple camera system on the rear equipped with a 48MP primary camera.',
    characteristics: {
      pros: ['Equipped for 5G connectivity', 'Offers a substantial screen-to-body ratio of 86.38%'],
      sensors: ['Accelerometer', 'Barometer', 'Gyroscope', 'Face recognition', 'Proximity sensor', 'Light sensor'],
      protection: ['Waterproof', 'Dustproof'],
      displayFeatures: ['Always-on display', 'True tone', 'Haptic touch', 'Wide color (P3)', 'Dynamic Island', '1000 nits maximum brightness (typical)', '1600 nits peak brightness (HDR)', '2000 nits peak brightness (outdoors)'],
      photoVideoFeatures: ['Auto focus', 'Face detection', 'Panorama', 'HDR', 'Slow motion', 'Time-lapse', 'Portrait mode', 'Live photo', 'Timer', 'Night mode']
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
    id: 'carouselSamsungGalaxyA55',
    title: 'Samsung Galaxy A55, 256GB, 8GB RAM, 5G, Awesome Lemon',
    description: 'The Samsung Galaxy A55 5G features a 6.6-inch AMOLED screen with a 120Hz refresh rate and is equipped with a 5000mAh battery.',
    characteristics: {
      pros: ['Offers a smooth 120Hz display for enhanced visuals', 'Supports 5G connectivity', 'Compact build measuring 6.34 x 3.05 x 0.00 inches'],
      sensors: ['Accelerometer', 'Gyroscope', 'Fingerprint reader', 'Proximity sensor', 'Geomagnetic sensor'],
      contentPackage: ['Phone', 'SIM key', 'USB Type-C data cable'],
      displayFeatures: ['16M color depth', '120Hz refresh rate'],
      primaryCameraResolution: ['12 MP Ultrawide', '5 MP Macro', '50 MP Wide'],
      photoVideoFeatures: ['Auto focus', 'Slow motion', 'Digital zoom']
    },
    images: [
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/1.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/2.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/3.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/4.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/5.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/6.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/7.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/8.avif`,
      `${BASE_URL}/assets/carousel/samsungGalaxyA55/9.avif`,
    ],
  },
  {
    id: 'carouselXiaomiRedmiNote12Pro',
    title: 'Xiaomi Redmi Note 12 Pro, 8GB RAM, 256GB, Onyx Black',
    description: 'The Xiaomi Redmi 12 Pro+ features a 6.67-inch OLED screen with a 120Hz refresh rate powered by a MediaTek Dimensity 1080 processor. It boasts a 5000mAh battery capable of 120W fast charging and a triple camera configuration on the rear.',
    characteristics: {
      pros: ['Features a rapid 120Hz refresh rate for smooth visuals', 'Compatible with 5G networks', 'Offers a high screen-to-body ratio of 86.87%'],
      connectivity: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
      contentPackage: ['Phone', 'Data cable'],
      primaryCameraResolution: ['2 MP Macro', '8 MP Ultrawide', '200 MP Wide'],
      secondaryCameraResolution: '16 Mpx',
      videoResolution: 'Full HD',
      photoVideoFeatures: ['Auto focus', 'Slow motion', 'Digital zoom']
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
    id: 'carouselSamsungGalaxyS23FE',
    title: 'Samsung Galaxy S23 FE, 8GB RAM, 125GB',
    description: 'The Samsung Galaxy S23 FE is outfitted with a 6.4-inch AMOLED display featuring a 120Hz refresh rate and runs on the Qualcomm Snapdragon 8 Gen 1 chipset. Additional specifications include a 4500mAh battery with 25W fast charging and a triple camera system on the rear.',
    characteristics: {
      pros: ['Delivers a 120Hz high refresh rate for seamless visuals', 'Prepared for 5G network capabilities'],
      sensors: ['Accelerometer', 'Barometer', 'Gyroscope', 'Fingerprint reader', 'Proximity sensor', 'Geomagnetic sensor'],
      displayFeatures: ['403 ppi', 'FHD+', '120 Hz refresh rate', '1450 nits'],
      primaryCameraResolution: ['12 MP Ultrawide', '8 MP Telephoto', '50 MP Wide'],
      videoResolution: ['HD', 'Full HD', '4K', '8K'],
      photoVideoFeatures: ['Auto focus', 'Panorama', 'Slow motion', 'Portrait mode', 'Timer']
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
    id: 'carouselSonyXperia10',
    title: 'Sony Xperia 10, 8GB RAM, 125GB',
    description: 'The Sony Xperia 10 VI is equipped with a 6.5-inch screen and runs on the Qualcomm Snapdragon 6 Gen 1 processor. It features a 5000mAh battery and a dual camera system on the rear.',
    characteristics: {
      pros: ['Prepared for 5G connectivity', 'Compact size measuring 6.10 x 2.68 x 0.00 inches'],
      sensors: ['Accelerometer', 'Fingerprint reader', 'Compass', 'Proximity sensor'],
      displayFeatures: ['60 Hz refresh rate', '21:9 aspect ratio', 'DCI-P3 100%'],
      primaryCameraResolution: ['48 MP Wide', '8 MP Ultrawide', '8 MP Telephoto'],
      secondaryCameraResolution: '8 Mpx',
      photoVideoFeatures: ['Panorama', 'HDR']
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
    id: 'carouselSonyXperia5',
    title: 'Sony Xperia 5, 8GB RAM, 128GB',
    description: 'The Sony Xperia 5 V features a 6.1-inch OLED screen with a 120Hz refresh rate powered by the Qualcomm Snapdragon 8 Gen 2 processor. It also comes equipped with a 5000mAh battery and a dual camera system on the rear.',
    characteristics: {
      pros: ['Boasts a high 120Hz refresh rate for fluid visuals', 'Ready for 5G networks', 'Includes wireless charging capability'],
      connectivity: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
      processorModel: 'Qualcomm Snapdragon 8 Gen 2',
      displayFeatures: '120 Hz',
      numberOfCameras: 3,
      primaryCameraResolution: ['12 MP Ultrawide', '48 MP Wide'],
      secondaryCameraResolution: '12 Mpx',
      batteryCapacity: '5000 mAh'
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
    id: 'carouselHuaweiPura70Ultra',
    title: 'Huawei Pura 70 Ultra, 16GB RAM, 512GB',
    description: 'The Huawei Pura 70 Ultra is equipped with a 6.8-inch LTPO OLED display that offers a 120Hz refresh rate and runs on a Kirin 9010 processor. The device includes a 5200mAh battery capable of 100W fast charging and features a triple camera array on the rear.',
    characteristics: {
      pros: ['Features a swift 120Hz refresh rate for smoother display performance', 'Provides a high screen-to-body ratio of 91.35%', 'Supports wireless charging capabilities'],
      connectivity: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
      sensors: ['Gyroscope', 'Fingerprint reader', 'Compass', 'Proximity sensor', 'Light sensor', 'Gravitational sensor'],
      contentPackage: ['Phone', '3-array for phone', 'Instructions', 'SIM key', 'USB Type-C data cable'],
      numberOfCameras: 3,
      primaryCameraResolution: ['50 MP Wide', '40 MP Ultrawide', '50 MP Telephoto'],
      secondaryCameraResolution: '13 Mpx',
      photoVideoFeatures: ['Slow motion', 'Smile detection', 'Portrait mode', 'Time-lapse', 'Timer', 'Burst shot']
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