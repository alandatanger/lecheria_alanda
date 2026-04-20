import type { Language } from "@/components/language-provider"

export const languageLabels: Record<Language, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
}

export const menuCategoryTranslations = {
  "petit-dejeuner": { fr: "Petit Déjeuner", en: "Breakfast", es: "Desayuno" },
  omelettes: { fr: "Omelettes", en: "Omelettes", es: "Tortillas" },
  croque: { fr: "Croque", en: "Croque", es: "Croque" },
  "boissons-chaudes": { fr: "Boissons Chaudes", en: "Hot Drinks", es: "Bebidas Calientes" },
  "boissons-froides": { fr: "Boissons Froides", en: "Cold Drinks", es: "Bebidas Frías" },
  smoothies: { fr: "Smoothies", en: "Smoothies", es: "Batidos" },
  mojito: { fr: "Mojito", en: "Mojito", es: "Mojito" },
  "crepe-sucree": { fr: "Crêpe Sucrée", en: "Sweet Crepe", es: "Crepe Dulce" },
  "crepe-sale": { fr: "Crêpe Salée", en: "Savory Crepe", es: "Crepe Salada" },
  pancake: { fr: "Pancake", en: "Pancake", es: "Panqueque" },
  baghrir: { fr: "Baghrir", en: "Baghrir", es: "Baghrir" },
  tacos: { fr: "Tacos", en: "Tacos", es: "Tacos" },
  panini: { fr: "Panini", en: "Panini", es: "Panini" },
  hamburger: { fr: "Hamburger", en: "Hamburger", es: "Hamburguesa" },
  doroom: { fr: "Doroom", en: "Doroom", es: "Doroom" },
  extra: { fr: "Extra", en: "Extra", es: "Extra" },
  tartes: { fr: "Tartes", en: "Tarts", es: "Tartas" },
  "les-plats": { fr: "Les Plats", en: "Main Dishes", es: "Platos" },
  tajine: { fr: "Tajine", en: "Tagine", es: "Tajín" },
  "les-pates": { fr: "Les Pâtes", en: "Pasta", es: "Pastas" },
  lasagne: { fr: "Lasagne", en: "Lasagna", es: "Lasaña" },
  pasticcio: { fr: "Pasticcio", en: "Pasticcio", es: "Pasticcio" },
} as const

export const menuProductTranslations = {
  1: {
    fr: {
      name: "Petit Déjeuner Marocain",
      description: "Pain + Harcha + Baghrir + Confiture, miel + beurre + fromage arabe + amlou, oeuf + boisson chaude + mini orange",
    },
    en: {
      name: "Moroccan Breakfast",
      description: "Bread + harcha + baghrir + jam, honey + butter + local cheese + amlou, egg + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Marroquí",
      description: "Pan + harcha + baghrir + mermelada, miel + mantequilla + queso árabe + amlou, huevo + bebida caliente + mini naranja",
    },
  },
  2: {
    fr: {
      name: "Petit Déjeuner Espagnol",
      description: "Toast + purée d'olive + purée de tomate, manchego + huile + boisson chaude + mini orange",
    },
    en: {
      name: "Spanish Breakfast",
      description: "Toast + olive spread + tomato spread, manchego + olive oil + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Español",
      description: "Tostada + puré de aceituna + puré de tomate, manchego + aceite + bebida caliente + mini naranja",
    },
  },
  3: {
    fr: {
      name: "Petit Déjeuner Français",
      description: "Croissant + petit pain + Nutella ou miel + confiture + boisson chaude + mini orange",
    },
    en: {
      name: "French Breakfast",
      description: "Croissant + bread roll + Nutella or honey + jam + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Francés",
      description: "Croissant + panecillo + Nutella o miel + mermelada + bebida caliente + mini naranja",
    },
  },
  4: {
    fr: {
      name: "Petit Déjeuner Catalan",
      description: "Pain grillé + purée d'olive + tomate, manchego + huile + thon + avocat + boisson chaude + mini orange",
    },
    en: {
      name: "Catalan Breakfast",
      description: "Toasted bread + olive spread + tomato, manchego + olive oil + tuna + avocado + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Catalán",
      description: "Pan tostado + puré de aceituna + tomate, manchego + aceite + atún + aguacate + bebida caliente + mini naranja",
    },
  },
  5: {
    fr: {
      name: "Petit Déjeuner Fassi",
      description: "2 oeufs khlii + jben arabi + olives + boisson chaude + mini orange",
    },
    en: {
      name: "Fassi Breakfast",
      description: "2 khlii eggs + local cheese + olives + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Fassi",
      description: "2 huevos khlii + queso local + aceitunas + bebida caliente + mini naranja",
    },
  },
  6: {
    fr: {
      name: "Petit Déjeuner Mexicain",
      description: "Toast grillé + avocat + thon + oeuf, fromage râpé + boisson chaude + mini orange",
    },
    en: {
      name: "Mexican Breakfast",
      description: "Grilled toast + avocado + tuna + egg, grated cheese + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Mexicano",
      description: "Tostada a la parrilla + aguacate + atún + huevo, queso rallado + bebida caliente + mini naranja",
    },
  },
  7: {
    fr: {
      name: "Tangéroise",
      description: "2 oeufs + mortadelle + fromage rouge + boisson chaude + mini orange",
    },
    en: {
      name: "Tangier Breakfast",
      description: "2 eggs + mortadella + red cheese + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Tánger",
      description: "2 huevos + mortadela + queso rojo + bebida caliente + mini naranja",
    },
  },
  8: {
    fr: {
      name: "Anglais",
      description: "Haricots rouges + tomate + 2 oeufs + saucisse + fromage rouge + petite salade aux fruits secs + boisson chaude",
    },
    en: {
      name: "English Breakfast",
      description: "Beans + tomato + 2 eggs + sausage + red cheese + small dried-fruit salad + hot drink",
    },
    es: {
      name: "Desayuno Inglés",
      description: "Frijoles + tomate + 2 huevos + salchicha + queso rojo + pequeña ensalada de frutos secos + bebida caliente",
    },
  },
  9: {
    fr: {
      name: "Hollandais",
      description: "2 toasts grillés + 2 oeufs + fromage + dinde fumée + boisson chaude + mini orange",
    },
    en: {
      name: "Dutch Breakfast",
      description: "2 toasted breads + 2 eggs + cheese + smoked turkey + hot drink + mini orange",
    },
    es: {
      name: "Desayuno Holandés",
      description: "2 tostadas + 2 huevos + queso + pavo ahumado + bebida caliente + mini naranja",
    },
  },
  10: {
    fr: {
      name: "Casserole Turque",
      description: "Oeuf + tomate + fromage + boisson chaude + mini orange",
    },
    en: {
      name: "Turkish Casserole",
      description: "Egg + tomato + cheese + hot drink + mini orange",
    },
    es: {
      name: "Cazuela Turca",
      description: "Huevo + tomate + queso + bebida caliente + mini naranja",
    },
  },
  11: {
    fr: {
      name: "Casserole Fine",
      description: "Oeufs de caille + tomate + fromage + dinde fumée + champignons + boisson chaude + mini orange",
    },
    en: {
      name: "Fine Casserole",
      description: "Quail eggs + tomato + cheese + smoked turkey + mushrooms + hot drink + mini orange",
    },
    es: {
      name: "Cazuela Fina",
      description: "Huevos de codorniz + tomate + queso + pavo ahumado + champiñones + bebida caliente + mini naranja",
    },
  },
  12: {
    fr: {
      name: "Alanda 1",
      description: "Omelette spéciale + épinards + crevettes + champignons + petit jus + petite salade + boisson chaude",
    },
    en: {
      name: "Alanda 1",
      description: "Special omelette + spinach + shrimp + mushrooms + small juice + small salad + hot drink",
    },
    es: {
      name: "Alanda 1",
      description: "Tortilla especial + espinacas + camarones + champiñones + jugo pequeño + ensalada pequeña + bebida caliente",
    },
  },
} as const

export const commonTranslations = {
  header: {
    fr: { home: "ALANDA", menu: "MENU", gallery: "GALERIE", contact: "CONTACT" },
    en: { home: "ALANDA", menu: "MENU", gallery: "GALLERY", contact: "CONTACT" },
    es: { home: "ALANDA", menu: "MENÚ", gallery: "GALERÍA", contact: "CONTACTO" },
  },
  hero: {
    fr: {
      tagline: "L'EXCELLENCE DU GOÛT ARTISANAL",
      description:
        "Plongez dans un univers de saveurs authentiques. De nos petits déjeuners copieux à nos produits laitiers frais, chaque bouchée est une invitation au voyage.",
      menu: "DÉCOUVRIR LE MENU",
      contact: "NOUS TROUVER",
    },
    en: {
      tagline: "THE EXCELLENCE OF ARTISAN FLAVOR",
      description:
        "Step into a world of authentic flavors. From hearty breakfasts to fresh dairy products, every bite is an invitation to travel.",
      menu: "DISCOVER THE MENU",
      contact: "FIND US",
    },
    es: {
      tagline: "LA EXCELENCIA DEL SABOR ARTESANAL",
      description:
        "Descubre un universo de sabores auténticos. Desde desayunos abundantes hasta productos lácteos frescos, cada bocado es una invitación al viaje.",
      menu: "DESCUBRIR EL MENÚ",
      contact: "ENCONTRARNOS",
    },
  },
  about: {
    fr: {
      eyebrow: "À Propos De Nous",
      p1: "Ancrée dans l'histoire moderne de Tanger, Lecheria Alanda est une référence dans l'artisanat laitier et culinaire.",
      p2: "Nous comblons les goûts les plus raffinés en offrant une expérience unique, alliant tradition et fraîcheur. Notre mission est de vous transporter au-delà de la plénitude dans une atmosphère authentique, charmante et harmonieuse.",
      p3: "L'ensemble de l'équipe, de nos chefs passionnés à nos serveurs dévoués, a à coeur de vous servir et de dessiner le sourire sur votre visage à chaque visite.",
      quote: '"La qualité est notre signature."',
      badge: "Frais & Naturel",
      imageAlt: "Nos chefs en cuisine",
    },
    en: {
      eyebrow: "About Us",
      p1: "Rooted in the modern history of Tangier, Lecheria Alanda is a landmark for dairy and culinary craftsmanship.",
      p2: "We delight the most refined tastes with a unique experience that blends tradition and freshness. Our mission is to take you beyond satisfaction in an authentic, charming, and harmonious atmosphere.",
      p3: "From our passionate chefs to our dedicated servers, the whole team is committed to serving you and bringing a smile to your face with every visit.",
      quote: '"Quality is our signature."',
      badge: "Fresh & Natural",
      imageAlt: "Our chefs in the kitchen",
    },
    es: {
      eyebrow: "Sobre Nosotros",
      p1: "Arraigada en la historia moderna de Tánger, Lecheria Alanda es una referencia en la artesanía láctea y culinaria.",
      p2: "Satisfacemos los gustos más refinados ofreciendo una experiencia única que combina tradición y frescura. Nuestra misión es llevarte más allá de la plenitud en un ambiente auténtico, encantador y armonioso.",
      p3: "Todo el equipo, desde nuestros chefs apasionados hasta nuestros camareros dedicados, pone el corazón en atenderte y dibujar una sonrisa en tu rostro en cada visita.",
      quote: '"La calidad es nuestra firma."',
      badge: "Fresco y Natural",
      imageAlt: "Nuestros chefs en la cocina",
    },
  },
  glovo: {
    fr: {
      badge: "LIVRAISON RAPIDE",
      title: "Lecheria Alanda chez vous !",
      description:
        "Profitez de vos plats préférés sans bouger de chez vous. Nous sommes partenaires officiels de Glovo pour vous garantir une livraison rapide et soignée.",
      cta: "Commander maintenant",
      note: "* Disponible sur l'application et le site web Glovo",
      imageAlt: "Livraison Glovo Alanda",
    },
    en: {
      badge: "FAST DELIVERY",
      title: "Lecheria Alanda at your home!",
      description:
        "Enjoy your favorite dishes without leaving home. We are official Glovo partners to guarantee fast and careful delivery.",
      cta: "Order now",
      note: "* Available on the Glovo app and website",
      imageAlt: "Alanda Glovo delivery",
    },
    es: {
      badge: "ENTREGA RÁPIDA",
      title: "¡Lecheria Alanda en tu casa!",
      description:
        "Disfruta de tus platos favoritos sin moverte de casa. Somos socios oficiales de Glovo para garantizarte una entrega rápida y cuidada.",
      cta: "Pedir ahora",
      note: "* Disponible en la aplicación y la web de Glovo",
      imageAlt: "Entrega Glovo Alanda",
    },
  },
  products: {
    fr: {
      title: "Nos Spécialités",
      description: "Une sélection variée de produits laitiers et jus naturels pour toute la famille.",
      cta: "Voir Tout le Menu",
      categories: [
        { name: "Petit Déjeuner", description: "Commencez votre journée avec énergie et douceur." },
        { name: "Menu Italien", description: "Saveurs authentiques de l'Italie dans votre assiette." },
        { name: "Jus / Desserts", description: "Fraîcheur des fruits et douceurs sucrées." },
        { name: "Les Plats", description: "Des plats savoureux cuisinés avec passion." },
      ],
    },
    en: {
      title: "Our Specialties",
      description: "A varied selection of dairy products and natural juices for the whole family.",
      cta: "See the Full Menu",
      categories: [
        { name: "Breakfast", description: "Start your day with energy and sweetness." },
        { name: "Italian Menu", description: "Authentic Italian flavors on your plate." },
        { name: "Juices / Desserts", description: "Fresh fruit and sweet delights." },
        { name: "Main Dishes", description: "Tasty dishes prepared with passion." },
      ],
    },
    es: {
      title: "Nuestras Especialidades",
      description: "Una selección variada de productos lácteos y jugos naturales para toda la familia.",
      cta: "Ver Todo el Menú",
      categories: [
        { name: "Desayuno", description: "Empieza tu día con energía y dulzura." },
        { name: "Menú Italiano", description: "Sabores auténticos de Italia en tu plato." },
        { name: "Jugos / Postres", description: "Frescura de frutas y dulces deliciosos." },
        { name: "Platos", description: "Platos sabrosos cocinados con pasión." },
      ],
    },
  },
  footer: {
    fr: {
      follow: "Suivez-nous",
      hours: "Nos Horaires",
      findUs: "Nous trouver",
      order: "Envie de commander ?",
      call: "Appel Direct",
      glovo: "Commandez sur Glovo",
      cookies: "Cookies",
      manage: "Gerer mes cookies",
      crafted: "Fait avec passion.",
      by: "Réalisé par",
      brand:
        "L'excellence artisanale au coeur de Tanger. Produits laitiers frais, jus naturels et petits déjeuners inoubliables.",
    },
    en: {
      follow: "Follow us",
      hours: "Opening Hours",
      findUs: "Find us",
      order: "Want to order?",
      call: "Call Now",
      glovo: "Order on Glovo",
      cookies: "Cookies",
      manage: "Manage my cookies",
      crafted: "Made with passion.",
      by: "Created by",
      brand:
        "Artisanal excellence in the heart of Tangier. Fresh dairy products, natural juices, and unforgettable breakfasts.",
    },
    es: {
      follow: "Síguenos",
      hours: "Nuestros Horarios",
      findUs: "Encontrarnos",
      order: "¿Quieres pedir?",
      call: "Llamar ahora",
      glovo: "Pide en Glovo",
      cookies: "Cookies",
      manage: "Gestionar mis cookies",
      crafted: "Hecho con pasión.",
      by: "Realizado por",
      brand:
        "La excelencia artesanal en el corazón de Tánger. Productos lácteos frescos, jugos naturales y desayunos inolvidables.",
    },
  },
  cookies: {
    fr: {
      title: "Respect de votre vie privee",
      text: "Nous utilisons des cookies essentiels pour le fonctionnement du site. Avec votre accord, nous activons aussi les cookies de mesure d'audience pour mieux comprendre les visites.",
      more: "En savoir plus sur notre politique de cookies",
      customize: "Personnaliser",
      reject: "Tout refuser",
      accept: "Tout accepter",
      preferences: "Preferences de cookies",
      required: "Necessaires",
      requiredDesc: "Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas etre desactives.",
      stats: "Statistiques",
      statsDesc: "Autorise Google Analytics uniquement si vous acceptez la mesure d'audience.",
      save: "Enregistrer mes preferences",
      requiredBadge: "Requis",
    },
    en: {
      title: "Respect for your privacy",
      text: "We use essential cookies for the proper functioning of the site. With your consent, we also enable audience measurement cookies to better understand visits.",
      more: "Learn more about our cookie policy",
      customize: "Customize",
      reject: "Reject all",
      accept: "Accept all",
      preferences: "Cookie preferences",
      required: "Required",
      requiredDesc: "These cookies are essential for the website to function and cannot be disabled.",
      stats: "Analytics",
      statsDesc: "Allows Google Analytics only if you accept audience measurement.",
      save: "Save my preferences",
      requiredBadge: "Required",
    },
    es: {
      title: "Respeto de tu privacidad",
      text: "Usamos cookies esenciales para el funcionamiento del sitio. Con tu consentimiento, también activamos cookies de análisis para comprender mejor las visitas.",
      more: "Más información sobre nuestra política de cookies",
      customize: "Personalizar",
      reject: "Rechazar todo",
      accept: "Aceptar todo",
      preferences: "Preferencias de cookies",
      required: "Necesarias",
      requiredDesc: "Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.",
      stats: "Estadísticas",
      statsDesc: "Permite Google Analytics solo si aceptas la medición de audiencia.",
      save: "Guardar mis preferencias",
      requiredBadge: "Obligatorio",
    },
  },
  contactPage: {
    fr: {
      title: "Nous Contacter",
      subtitle: "Une question ? Une réservation ? Nous sommes à votre écoute.",
      phone: "Téléphone",
      phoneNote: "Disponible aux heures d'ouverture",
      address: "Adresse",
      openMap: "Ouvrir la localisation",
      hours: "Horaires",
      days: "Lundi - Dimanche",
    },
    en: {
      title: "Contact Us",
      subtitle: "A question? A reservation? We are here for you.",
      phone: "Phone",
      phoneNote: "Available during opening hours",
      address: "Address",
      openMap: "Open location",
      hours: "Hours",
      days: "Monday - Sunday",
    },
    es: {
      title: "Contáctanos",
      subtitle: "¿Una pregunta? ¿Una reserva? Estamos a tu disposición.",
      phone: "Teléfono",
      phoneNote: "Disponible durante el horario de apertura",
      address: "Dirección",
      openMap: "Abrir ubicación",
      hours: "Horarios",
      days: "Lunes - Domingo",
    },
  },
  menuPage: {
    fr: {
      titleFallback: "Menu",
      subtitle: "Découvrez nos produits faits avec passion",
      emptyTitle: "Bientôt disponible",
      emptyDescription: "Nous travaillons sur de nouvelles recettes pour cette catégorie.",
      add: "+ Ajouter",
      sidebarTitle: "MENU",
    },
    en: {
      titleFallback: "Menu",
      subtitle: "Discover our products made with passion",
      emptyTitle: "Coming soon",
      emptyDescription: "We are working on new recipes for this category.",
      add: "+ Add",
      sidebarTitle: "MENU",
    },
    es: {
      titleFallback: "Menú",
      subtitle: "Descubre nuestros productos hechos con pasión",
      emptyTitle: "Próximamente",
      emptyDescription: "Estamos trabajando en nuevas recetas para esta categoría.",
      add: "+ Añadir",
      sidebarTitle: "MENÚ",
    },
  },
  galleryPage: {
    fr: {
      title: "Notre Galerie",
      subtitle: "Une immersion visuelle dans l'univers de Lecheria Alanda.",
      items: [
        { title: "Notre Espace", description: "Un cadre chaleureux et convivial" },
        { title: "Petits Déjeuners", description: "Pour bien commencer la journée" },
        { title: "Produits Frais", description: "Ingrédients de qualité supérieure" },
        { title: "Ambiance", description: "Détente et plaisir garantis" },
        { title: "Service", description: "Une équipe à votre écoute" },
        { title: "Détails", description: "L'excellence dans chaque détail" },
      ],
    },
    en: {
      title: "Our Gallery",
      subtitle: "A visual immersion into the world of Lecheria Alanda.",
      items: [
        { title: "Our Space", description: "A warm and welcoming setting" },
        { title: "Breakfasts", description: "To start the day right" },
        { title: "Fresh Products", description: "Premium quality ingredients" },
        { title: "Atmosphere", description: "Relaxation and pleasure guaranteed" },
        { title: "Service", description: "A team that listens to you" },
        { title: "Details", description: "Excellence in every detail" },
      ],
    },
    es: {
      title: "Nuestra Galería",
      subtitle: "Una inmersión visual en el universo de Lecheria Alanda.",
      items: [
        { title: "Nuestro Espacio", description: "Un entorno cálido y acogedor" },
        { title: "Desayunos", description: "Para empezar bien el día" },
        { title: "Productos Frescos", description: "Ingredientes de primera calidad" },
        { title: "Ambiente", description: "Relajación y placer garantizados" },
        { title: "Servicio", description: "Un equipo atento a ti" },
        { title: "Detalles", description: "La excelencia en cada detalle" },
      ],
    },
  },
} as const

