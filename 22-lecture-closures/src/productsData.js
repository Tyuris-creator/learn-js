export const products = [
  {
    id: 0,
    category: 'Электроника',
    children: [
      {
        id: 1,
        subCategory: 'Смартфоны',
        children: [
          {
            id: 2,
            smartphoneCategory: 'IOS',
            children: [
              {
                id: 3,
                name: 'iPhone 8',
                price: 25000,
                memoryCapacity: ['256GB', '1TB'],
                inStock: true,
                rating: 4.5
              },
              {
                id: 4,
                name: 'iPhone 13',
                price: 60000,
                memoryCapacity: ['128GB', '256GB', '512GB'],
                inStock: true,
                rating: 4.8
              },
              {
                id: 5,
                name: 'iPhone 15 Pro',
                price: 89990,
                memoryCapacity: ['256GB', '512GB', '1TB'],
                inStock: true,
                rating: 4.9
              }
            ]
          },
          {
            id: 6,
            smartphoneCategory: 'Android',
            children: [
              {
                id: 7,
                name: 'Samsung Galaxy S21',
                price: 45000,
                memoryCapacity: ['128GB', '256GB'],
                inStock: true,
                rating: 4.6
              },
              {
                id: 8,
                name: 'Xiaomi Redmi Note 10',
                price: 18000,
                memoryCapacity: ['64GB', '128GB'],
                inStock: false,
                rating: 4.3
              },
              {
                id: 9,
                name: 'Google Pixel 7',
                price: 52000,
                memoryCapacity: ['128GB', '256GB'],
                inStock: true,
                rating: 4.7
              }
            ]
          }
        ]
      },
      {
        id: 10,
        subCategory: 'Ноутбуки',
        children: [
          {
            id: 11,
            laptopCategory: 'Игровые',
            children: [
              {
                id: 12,
                name: 'ASUS ROG Strix',
                price: 120000,
                specs: ['16GB RAM', '1TB SSD', 'RTX 3060'],
                inStock: true,
                rating: 4.7
              },
              {
                id: 13,
                name: 'MSI Katana GF76',
                price: 95000,
                specs: ['16GB RAM', '512GB SSD', 'RTX 3050'],
                inStock: true,
                rating: 4.5
              },
              {
                id: 14,
                name: 'Lenovo Legion 5',
                price: 110000,
                specs: ['32GB RAM', '1TB SSD', 'RTX 3070'],
                inStock: false,
                rating: 4.8
              }
            ]
          },
          {
            id: 15,
            laptopCategory: 'Ультрабуки',
            children: [
              {
                id: 16,
                name: 'MacBook Air',
                price: 90000,
                specs: ['8GB RAM', '256GB SSD', 'M1'],
                inStock: true,
                rating: 4.9
              },
              {
                id: 17,
                name: 'Dell XPS 13',
                price: 85000,
                specs: ['16GB RAM', '512GB SSD', 'Intel i7'],
                inStock: true,
                rating: 4.6
              },
              {
                id: 18,
                name: 'HP Spectre x360',
                price: 78000,
                specs: ['16GB RAM', '1TB SSD', 'Intel i5'],
                inStock: true,
                rating: 4.4
              }
            ]
          }
        ]
      },
      {
        id: 19,
        subCategory: 'Наушники',
        children: [
          {
            id: 20,
            headphoneCategory: 'Беспроводные',
            children: [
              {
                id: 21,
                name: 'Apple AirPods Pro',
                price: 19990,
                features: ['Шумоподавление', '24ч работы'],
                inStock: true,
                rating: 4.8
              },
              {
                id: 22,
                name: 'Samsung Galaxy Buds2',
                price: 8990,
                features: ['Активное шумоподавление', '20ч работы'],
                inStock: true,
                rating: 4.5
              },
              {
                id: 23,
                name: 'Sony WH-1000XM4',
                price: 24990,
                features: ['Продвинутое шумоподавление', '30ч работы'],
                inStock: true,
                rating: 4.9
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 24,
    category: 'Садовая техника',
    children: [
      {
        id: 25,
        subCategory: 'Газонокосилки',
        children: [
          {
            id: 26,
            toolType: 'Электрические',
            children: [
              {
                id: 27,
                name: 'Газонокосилка Bosch Rotak 32',
                price: 12000,
                power: '1200W',
                inStock: true,
                rating: 4.4
              },
              {
                id: 28,
                name: 'Газонокосилка Makita ELM4611',
                price: 15000,
                power: '1400W',
                inStock: true,
                rating: 4.6
              },
              {
                id: 29,
                name: 'Газонокосилка Greenworks G40LM35',
                price: 13500,
                power: '1300W',
                inStock: false,
                rating: 4.3
              }
            ]
          },
          {
            id: 30,
            toolType: 'Бензиновые',
            children: [
              {
                id: 31,
                name: 'Газонокосилка Huter GLM-5.0S',
                price: 18000,
                power: '5.0 л.с.',
                inStock: true,
                rating: 4.2
              },
              {
                id: 32,
                name: 'Газонокосилка Champion LM4627',
                price: 22000,
                power: '5.5 л.с.',
                inStock: true,
                rating: 4.4
              },
              {
                id: 33,
                name: 'Газонокосилка Patriot Boston 55',
                price: 19500,
                power: '5.0 л.с.',
                inStock: true,
                rating: 4.1
              }
            ]
          }
        ]
      },
      {
        id: 34,
        subCategory: 'Триммеры',
        children: [
          {
            id: 35,
            toolType: 'Аккумуляторные',
            children: [
              {
                id: 36,
                name: 'Триммер Greenworks G24LT25',
                price: 8000,
                battery: '24V',
                inStock: false,
                rating: 4.1
              },
              {
                id: 37,
                name: 'Триммер Einhell GE-LT 18 Li',
                price: 6500,
                battery: '18V',
                inStock: true,
                rating: 4.0
              },
              {
                id: 38,
                name: 'Триммер Ryobi RLT1832H',
                price: 9200,
                battery: '18V',
                inStock: true,
                rating: 4.3
              }
            ]
          },
          {
            id: 39,
            toolType: 'Бензиновые',
            children: [
              {
                id: 40,
                name: 'Триммер Husqvarna 128R',
                price: 12500,
                power: '1.0 л.с.',
                inStock: true,
                rating: 4.5
              },
              {
                id: 41,
                name: 'Триммер Stihl FS 38',
                price: 11000,
                power: '0.8 л.с.',
                inStock: true,
                rating: 4.4
              },
              {
                id: 42,
                name: 'Триммер Champion T333',
                price: 9500,
                power: '1.0 л.с.',
                inStock: false,
                rating: 4.2
              }
            ]
          }
        ]
      },
      {
        id: 43,
        subCategory: 'Садовые измельчители',
        children: [
          {
            id: 44,
            toolType: 'Электрические',
            children: [
              {
                id: 45,
                name: 'Измельчитель Bosch AXT 25 TC',
                price: 34900,
                power: '2500W',
                inStock: true,
                rating: 4.7
              },
              {
                id: 46,
                name: 'Измельчитель AL-KO Easy Crush MH 2800',
                price: 18900,
                power: '2800W',
                inStock: true,
                rating: 4.3
              },
              {
                id: 47,
                name: 'Измельчитель Viking GE 250',
                price: 42900,
                power: '2500W',
                inStock: true,
                rating: 4.8
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 48,
    category: 'Аксессуары',
    children: [
      {
        id: 49,
        subCategory: 'Чехлы',
        children: [
          {
            id: 50,
            accessoryType: 'Для смартфонов',
            children: [
              {
                id: 51,
                name: 'Чехол для iPhone 13',
                price: 1500,
                color: ['черный', 'прозрачный', 'синий'],
                inStock: true,
                rating: 4.0
              },
              {
                id: 52,
                name: 'Чехол для Samsung Galaxy S21',
                price: 1200,
                color: ['черный', 'красный', 'фиолетовый'],
                inStock: true,
                rating: 4.2
              },
              {
                id: 53,
                name: 'Чехол книжка для iPhone 15',
                price: 2500,
                color: ['коричневый', 'черный'],
                inStock: true,
                rating: 4.1
              }
            ]
          }
        ]
      },
      {
        id: 54,
        subCategory: 'Зарядные устройства',
        children: [
          {
            id: 55,
            accessoryType: 'Беспроводные',
            children: [
              {
                id: 56,
                name: 'Беспроводная зарядка Samsung',
                price: 3000,
                power: '15W',
                inStock: true,
                rating: 4.3
              },
              {
                id: 57,
                name: 'Беспроводная зарядка Apple MagSafe',
                price: 4500,
                power: '15W',
                inStock: true,
                rating: 4.6
              },
              {
                id: 58,
                name: 'Беспроводная зарядка Xiaomi 20W',
                price: 2200,
                power: '20W',
                inStock: false,
                rating: 4.2
              }
            ]
          },
          {
            id: 59,
            accessoryType: 'Проводные',
            children: [
              {
                id: 60,
                name: 'Кабель USB-C 2м',
                price: 800,
                type: 'USB-C to USB-C',
                inStock: true,
                rating: 4.2
              },
              {
                id: 61,
                name: 'Кабель Lightning 1.5м',
                price: 1200,
                type: 'USB-C to Lightning',
                inStock: true,
                rating: 4.3
              },
              {
                id: 62,
                name: 'Кабель Micro-USB 3м',
                price: 600,
                type: 'USB-A to Micro-USB',
                inStock: true,
                rating: 4.0
              }
            ]
          }
        ]
      },
      {
        id: 63,
        subCategory: 'Садовые перчатки',
        children: [
          {
            id: 64,
            accessoryType: 'Рабочие',
            children: [
              {
                id: 65,
                name: 'Перчатки садовые усиленные',
                price: 500,
                material: 'кожа',
                inStock: true,
                rating: 4.6
              },
              {
                id: 66,
                name: 'Перчатки нейлоновые с ПВХ',
                price: 300,
                material: 'нейлон',
                inStock: true,
                rating: 4.2
              },
              {
                id: 67,
                name: 'Перчатки резиновые водонепроницаемые',
                price: 450,
                material: 'резина',
                inStock: true,
                rating: 4.4
              }
            ]
          }
        ]
      },
      {
        id: 68,
        subCategory: 'Защитные чехлы',
        children: [
          {
            id: 69,
            accessoryType: 'Для садовой техники',
            children: [
              {
                id: 70,
                name: 'Чехол для газонокосилки',
                price: 1200,
                size: 'универсальный',
                inStock: true,
                rating: 4.1
              },
              {
                id: 71,
                name: 'Чехол для триммера',
                price: 800,
                size: 'универсальный',
                inStock: true,
                rating: 4.0
              },
              {
                id: 72,
                name: 'Чехол для садового измельчителя',
                price: 1500,
                size: 'универсальный',
                inStock: false,
                rating: 4.2
              }
            ]
          }
        ]
      }
    ]
  }
];
