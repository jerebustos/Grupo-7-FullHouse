'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Products', [
      
      {name: "Cafetera Dolce Gusto",
      price: 15000,
      color_id: 1,
      accessory: "Aeroccino" ,
      brand_id: 1,
      model: "PV1205",
      category_id: 1,
      description: "Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado con un diseño radical al que nos tenía acostumbrados Dolce Gusto.En este post te contamos todo lo que necesitas saber sobre ella, desde sus características técnicas hasta la calidad de las cápsulas",
      image: "img-cafetera-moulinex.jpg"
},
{
            name: "Pava Eléctrica",
            price: 4999,
            color_id: 3,
            accessory: "Sin Acceserios" ,
            brand_id: 2,
            model:"PE-DK1850" ,
            category_id: 1,
            description: "La pava eléctrica Peabody PE-DK1850 tiene un diseño con cuerpo en acero inoxidable. Además, cuenta con medidor de agua transparente y control digital de temperatura.",
            image: "image-1614170955855.jpg"
      },{
        name: "Horno microondas",
        price: 25000,
        color_id: 5,
        accessory: "Sin Acceserios" ,
        brand_id: 3,
        model:"MWF300G" ,
        category_id: 1,
        description: "Este modelo de microondas de Atma te permite cocinar o calentar con 8 niveles distintos. También cuenta con la función descongelado automático, reloj con timer e incluye traba de seguridad para niños, que bloquea el teclado para evitar accidentes.",
        image: "image-1615934383274.jpg"
  },
  {name: "Mixer",
  price: 7999,
  color_id: 3,
  accessory: "Vaso medidor" ,
  brand_id: 4,
  model:"HR2625/80",
  category_id: 1,
  description: "La licuadora de mano Philips HR2625/80 tiene un moderno diseño en color negro. Posee tecnología Speed Touch para un control de potencia perfecto. También cuenta con desmontaje el cual permite que con sólo pulsar un botón se pueda cambiar de accesorio.",
  image: "image-1616672159881.jpg"},

  {name: "Cocina Whirlpool",
  price: 66899,
  color_id: 4,
  accessory: "Sin Acceserios" ,
  brand_id: 5,
  model:"WFX57DI",
  category_id: 2,
  description: "La Whirlpool WFX57DI es una cocina de diseño clásico en color Silver que cuenta con cuatro hornallas; horno y cajón parrilla independiente. Dispone de 1 quemador grande; 2 medianos y uno pequeño. A su vez, su construcción hermética evita que se filtre suciedad o líquidos previniendo desgaste y brindando mayor seguridad",
  image: "image-1617483674990.png"},

  {name: "Freezer Inelro",
  price: 62999,
  color_id: 5,
  accessory: "Sin Acceserios" ,
  brand_id: 6,
  model:"FIH-350A+",
  category_id: 2,
  description: "El freezer Inelro FIH-350A+ está fabricado con ruedas de alta resistencia, canastos plásticos, puerta robusta con manijas ergonómicas e interior de gabinete electrozincado prepintado. Además, ofrece compresor EMBRACO de última generación y termostato de función múltiple (Enfriador/Conservadora/Freezer/Frío extremo). Por otro lado, utilizada gas refrigerante ecológico (R600a, libre CFC) y su clasificación energética es Clase A+.",
  image: "image-1617483930704.png"},

  {name: "Heladera Samsung",
  price: 77999,
  color_id: 4,
  accessory: "Sin Acceserios" ,
  brand_id: 7,
  model:"RT29K577JS8",
  category_id: 2,
  description: "La heladera Samsung RT29K577JS8 tiene un diseño fino e innovador que combina en cualquier tipo de cocina. En su interior, cuenta con estantes de vidrio templado y cajón para frutas y verduras. Por otra parte, cuenta con un cómodo dispenser de agua fresca que evita el abrir y cerrar del refrigerador. A su vez, un Display LED permite el control de la unidad desde afuera.",
  image: "image-1617484337143.jpg"},

  {name: "Cava Vondom",
  price: 43000,
  color_id: 3,
  accessory: "Sin Acceserios" ,
  brand_id: 8,
  model:"18ST",
  category_id: 2,
  description: "La cava de vinos Vondom 18ST es especial para vinos tintos. Dada sus medidas es ideal para colocar sobre el piso en cualquier ambiente de su casa, agregando de esta manera sofisticación y elegancia a su hogar. Además, su puerta de vidrio espejado y marco con terminaciones en negro le dan una apariencia atractiva y estilizada de cuerpo completo.",
  image: "image-1617627855552.jpg"}

    ],
    );
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
