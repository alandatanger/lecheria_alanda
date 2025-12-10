export const categories = [
    { id: "petit-dejeuner", name: "Petit Déjeuner" },
    { id: "omelettes", name: "Omelettes" },
    { id: "croque", name: "Croque" },
    { id: "boissons-chaudes", name: "Boissons Chaudes" },
    { id: "boissons-froides", name: "Boissons Froides" },
    { id: "smoothies", name: "Smoothies" },
    { id: "mojito", name: "Mojito" },
    { id: "crepe-sucree", name: "Crêpe Sucrée" },
    { id: "crepe-sale", name: "Crêpe Salé" },
    { id: "pancake", name: "Pancake" },
    { id: "baghrir", name: "Baghrir" },
    { id: "tacos", name: "Tacos" },
    { id: "panini", name: "Panini" },
    { id: "hamburger", name: "Hamburger" },
    { id: "doroom", name: "Doroom" },
    { id: "extra", name: "Extra" },
    { id: "tartes", name: "Tartes" },
    { id: "les-plats", name: "Les Plats" },
    { id: "tajine", name: "Tajine" },
    { id: "les-pates", name: "Les Pâtes" },
    { id: "lasagne", name: "Lasagne" },
    { id: "pasticcio", name: "Pasticcio" },
]

// Sous-catégories pour Petit Déjeuner
export const petitDejeunerSubCategories = [
    { id: "enfant", name: "Enfant", parentId: "petit-dejeuner" },
    { id: "healthy", name: "Healthy", parentId: "petit-dejeuner" },
]

export const products = [
    // PETIT DÉJEUNER
    {
        id: 1,
        categoryId: "petit-dejeuner",
        name: "Petit Déjeuner Marocain",
        description: "Pain + Harcha + Baghrir + Confiture, Miel + Beurre + Fromage arabe + Amlou, Oeuf + Boisson chaud + Mini Orange",
        price: "49 Dh",
        image: "/marocain.jpg", // Convertir marocain.ARW en marocain.jpg
    },
    {
        id: 2,
        categoryId: "petit-dejeuner",
        name: "Petit Déjeuner Espagnol",
        description: "Toast + Olive purée + Tomate puré, Manchengo + Huile + Boisson chaud, Mini Orange",
        price: "55 Dh",
        image: "/alanda1.png", // Image temporaire - à remplacer par espagnol.jpg
    },
    {
        id: 3,
        categoryId: "petit-dejeuner",
        name: "Petit Déjeuner Français",
        description: "Croissant + Petit pain + Nutella ou Miel + Confiture + Boisson chaud, Mini Orange",
        price: "43 Dh",
        image: "/francais.jpg", // Convertir francais.ARW en francais.jpg
    },
    {
        id: 4,
        categoryId: "petit-dejeuner",
        name: "Petit Déjeuner Catalan",
        description: "Pain grillé + Olive Purée + Tomate, Manchengo + Huile + Thon + Avocado, Boisson chaud + Mini Orange",
        price: "62 Dh",
        image: "/alanda2.png", // Image temporaire - à remplacer par catalan.jpg
    },
    {
        id: 5,
        categoryId: "petit-dejeuner",
        name: "Petit Déjeuner Fassi",
        description: "2 Oeuf khlie + jben arabi + Olive +, Boisson chaud + Mini Orange",
        price: "52 Dh",
        image: "/fassi.jpg", // Convertir fassi.ARW en fassi.jpg
    },
    {
        id: 6,
        categoryId: "petit-dejeuner",
        name: "Petit Déjeuner Mexicain",
        description: "Toast Grillé + Avocado + Thon + Oeuf, Fromage râpé + Boisson chaud, Mini Orange",
        price: "58 Dh",
        image: "/alanda3.png", // Image temporaire - à remplacer par mexicain.jpg
    },
    {
        id: 7,
        categoryId: "petit-dejeuner",
        name: "Tangeroise",
        description: "2 oeuf + Mortadella + Fromage rouge Fromage + Boisson chaud + Mini Orange",
        price: "58 Dh",
        image: "/tangeroise.jpg", // Convertir tangeroise.ARW en tangeroise.jpg
    },
    {
        id: 8,
        categoryId: "petit-dejeuner",
        name: "Anglais",
        description: "haricots rouges + Tomate + 2 oeufs saucisse + Fromage rouge + Petite salade aux fruits secs + Boisson chaud",
        price: "70 Dh",
        image: "/alanda4.png", // Image temporaire - à remplacer par anglais.jpg
    },
    {
        id: 9,
        categoryId: "petit-dejeuner",
        name: "Holandais",
        description: "2 Toast grillé + 2 oeufs + Fromage dinde fumée + Boisson chaud Mini Orange",
        price: "53 Dh",
        image: "/alanda5.png", // Image temporaire - à remplacer par holandais.jpg
    },
    {
        id: 10,
        categoryId: "petit-dejeuner",
        name: "Casrole Turque",
        description: "Oeuf + Tomate + Fromage Boisson chaud + Mini Orange",
        price: "59 Dh",
        image: "/casroleturque.jpg", // Convertir casroleturque.ARW en casroleturque.jpg
    },
    {
        id: 11,
        categoryId: "petit-dejeuner",
        name: "Casrole Fine",
        description: "Oeufs de caille + Tomate + Fromage Dinde fumée + champignions Boisson chaud + Mini Orange",
        price: "65 Dh",
        image: "/alanda6.png", // Image temporaire - à remplacer par casrole-fine.jpg
    },
    {
        id: 12,
        categoryId: "petit-dejeuner",
        name: "Alanda 1",
        description: "Omlette spéciale + Spinaka + crevette Champignions + petit jus Petite salade + Boisson chaud",
        price: "75 Dh",
        image: "/alanda-1.jpg", // Convertir alanda-1.ARW en alanda-1.jpg
    },
    {
        id: 13,
        categoryId: "petit-dejeuner",
        name: "Enfant",
        description: "Mini pancake + Nutella + cornflakes, Lait chocolat + yaourt",
        price: "40 Dh",
        image: "/HOU08185.jpg", // Image temporaire - à remplacer par enfant.jpg
    },
    {
        id: 14,
        categoryId: "petit-dejeuner",
        name: "Healthy",
        description: "Pancake avoine + Banane + Amlou, Boisson chaud",
        price: "45 Dh",
        image: "/HOU08180.jpg", // Image temporaire - à remplacer par healthy.jpg
    },
]
