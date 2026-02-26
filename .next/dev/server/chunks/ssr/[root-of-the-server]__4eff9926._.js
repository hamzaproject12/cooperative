module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/mockData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cooperatives",
    ()=>cooperatives
]);
// URLs Pexels pour galeries produits (images pertinentes)
const pexels = {
    dates: [
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    dates2: [
        'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    pate: [
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    sirop: [
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    rose: [
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    huile: [
        'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    savon: [
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    brume: [
        'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    pommes: [
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/27429847/pexels-photo-27429847.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    jus: [
        'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    vinaigre: [
        'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    ceramique: [
        'https://images.pexels.com/photos/5492122/pexels-photo-5492122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9080009/pexels-photo-9080009.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8540162/pexels-photo-8540162.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    miel: [
        'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    pollen: [
        'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    safran: [
        'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9080009/pexels-photo-9080009.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    tapis: [
        'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    henne: [
        'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    herbes: [
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900'
    ]
};
const cooperatives = [
    {
        id: '1',
        name: 'Coopérative Agricole des Dattes',
        slug: 'coop-dattes-errachidia',
        category: 'Agriculture',
        zone: 'Errachidia',
        location: {
            lat: 31.9314,
            lng: -4.4244,
            address: 'Marché Oued Lahmar, Errachidia'
        },
        descriptionShort: 'Dattes Majhoul & Boufeggous de la vallée du Ziz.',
        descriptionLong: 'La coopérative regroupe des producteurs familiaux de palmeraies pour une culture responsable, un tri soigné et une valorisation locale.',
        coverImage: 'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Paniers de dattes',
        products: [
            {
                id: 'p1',
                name: 'Dattes Majhoul Premium 500g',
                price: 120,
                images: pexels.dates,
                alt: 'Dattes Majhoul',
                shortDescription: 'Sélection manuelle, calibre premium.',
                longDescription: 'Nos dattes Majhoul sont triées à la main dans les palmeraies de la vallée du Ziz. Calibre premium, texture moelleuse et saveur caramélisée intense. Conditionnées à la coopérative pour garantir fraîcheur et traçabilité.',
                cooperativeId: '1'
            },
            {
                id: 'p2',
                name: 'Dattes Boufeggous 1kg',
                price: 135,
                images: pexels.dates2,
                alt: 'Dattes Boufeggous',
                shortDescription: 'Texture fondante et goût caramélisé.',
                longDescription: "La variété Boufeggous, emblématique du Tafilalet, offre une texture fondante unique et un goût caramélisé incomparable. Récoltées à maturité optimale, ces dattes sont idéales pour une consommation directe ou en pâtisserie.",
                cooperativeId: '1'
            },
            {
                id: 'p3',
                name: 'Pâte de Dattes Nature 350g',
                price: 45,
                images: pexels.pate,
                alt: 'Pâte de dattes',
                shortDescription: 'Sans sucre ajouté, idéale en pâtisserie.',
                longDescription: "Pâte de dattes 100% naturelle, sans sucre ajouté. Préparée selon une recette traditionnelle à base de dattes de la vallée. Parfaite pour les gâteaux, tartes et encas énergétiques sains.",
                cooperativeId: '1'
            },
            {
                id: 'p4',
                name: 'Sirop de Dattes 250ml',
                price: 55,
                images: pexels.sirop,
                alt: 'Sirop de dattes',
                shortDescription: 'Édulcorant naturel pour boissons et desserts.',
                longDescription: "Sirop de dattes artisanal, concentré et onctueux. Un édulcorant naturel parfait pour sucrer tisanes, yaourts et desserts. Sans conservateurs, élaboré à partir de dattes locales de première qualité.",
                cooperativeId: '1'
            }
        ]
    },
    {
        id: '2',
        name: 'Coopérative Damaskina',
        slug: 'coop-damaskina-tinghir',
        category: 'Cosmétique',
        zone: 'Tinghir',
        location: {
            lat: 31.2452,
            lng: -6.1286,
            address: "Kelâat M'Gouna, Tinghir"
        },
        descriptionShort: "Distillation de la rose de Kelâat M'Gouna.",
        descriptionLong: "Damaskina valorise la rose de la vallée du Dadès via une distillation artisanale et des soins naturels inspirés des rituels locaux.",
        coverImage: 'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Champ de roses',
        products: [
            {
                id: 'p5',
                name: 'Eau de Rose 200ml',
                price: 35,
                images: pexels.rose,
                alt: 'Eau de rose',
                shortDescription: '100% naturelle.',
                longDescription: "Eau de rose 100% naturelle issue de la distillation des roses de Kelâat M'Gouna. Idéale en brume tonique, démaquillant ou dans vos recettes cosmétiques maison. Parfum délicat et frais.",
                cooperativeId: '2'
            },
            {
                id: 'p6',
                name: 'Huile Essentielle de Rose 30ml',
                price: 160,
                images: pexels.huile,
                alt: 'Huile essentielle de rose',
                shortDescription: 'Concentrée, distillation lente.',
                longDescription: "Huile essentielle de rose de Damas, obtenue par distillation lente et traditionnelle. Un concentré de bienfaits pour la peau et le bien-être. Quelques gouttes suffisent pour parfumer et apaiser.",
                cooperativeId: '2'
            },
            {
                id: 'p7',
                name: 'Savon Rose & Argile 100g',
                price: 28,
                images: pexels.savon,
                alt: 'Savon artisanal',
                shortDescription: 'Peau douce, parfum floral naturel.',
                longDescription: "Savon saponifié à froid à l'eau de rose et à l'argile verte. Nettoyant doux, parfum floral naturel et mousse onctueuse. Convient à tous les types de peaux, même sensibles.",
                cooperativeId: '2'
            },
            {
                id: 'p8',
                name: 'Brume Visage Rose 100ml',
                price: 49,
                images: pexels.brume,
                alt: 'Brume visage rose',
                shortDescription: 'Hydratation quotidienne légère.',
                longDescription: "Brume visage hydratante à l'eau de rose et extraits de fleurs locales. Parfaite pour un coup d'éclat tout au long de la journée. Légère, rafraîchissante et sans alcool.",
                cooperativeId: '2'
            }
        ]
    },
    {
        id: '3',
        name: "Pommes de l'Atlas",
        slug: 'coop-pommes-midelt',
        category: 'Agriculture',
        zone: 'Midelt',
        location: {
            lat: 32.6816,
            lng: -4.7303,
            address: "Route d'Imilchil, Midelt"
        },
        descriptionShort: 'Pommes croquantes de la capitale de la pomme.',
        descriptionLong: "Cultivées en altitude sur le plateau de Midelt, ces pommes profitent d'une forte amplitude thermique pour un goût sucré-acidulé.",
        coverImage: 'https://images.pexels.com/photos/27429847/pexels-photo-27429847.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Verger de pommiers',
        products: [
            {
                id: 'p9',
                name: 'Cagette Pommes Gala 5kg',
                price: 60,
                images: pexels.pommes,
                alt: 'Pommes Gala',
                shortDescription: 'Cueillies à la main.',
                longDescription: "Pommes Gala cultivées sur les hauteurs de Midelt, cueillies à la main à maturité. Croquantes, juteuses et légèrement acidulées. La capitale de la pomme du Maroc livre ici ses meilleures variétés.",
                cooperativeId: '3'
            },
            {
                id: 'p10',
                name: 'Pommes Golden 5kg',
                price: 65,
                images: pexels.pommes,
                alt: 'Pommes Golden',
                shortDescription: 'Douces et parfumées.',
                longDescription: "Pommes Golden du plateau de Midelt : douces, parfumées et légèrement sucrées. Idéales en compote, tarte ou simplement croquées nature. Une variété prisée pour son équilibre parfait.",
                cooperativeId: '3'
            },
            {
                id: 'p11',
                name: 'Jus de Pomme Artisanal 1L',
                price: 32,
                images: pexels.jus,
                alt: 'Jus de pomme',
                shortDescription: 'Pressage à froid, sans conservateurs.',
                longDescription: "Jus de pomme artisanal obtenu par pressage à froid. Sans sucre ajouté ni conservateurs. Le goût pur et frais des pommes de Midelt, conditionné sur place pour préserver toutes les vitamines.",
                cooperativeId: '3'
            },
            {
                id: 'p12',
                name: 'Vinaigre de Pomme 500ml',
                price: 34,
                images: pexels.vinaigre,
                alt: 'Vinaigre de pomme',
                shortDescription: 'Fermentation naturelle locale.',
                longDescription: "Vinaigre de cidre de pommes locales, fermentation naturelle lente. Utilisation culinaire ou cosmétique (rinçage cheveux, peau). Acide acétique naturel et enzymes préservés.",
                cooperativeId: '3'
            }
        ]
    },
    {
        id: '4',
        name: 'Poterie Tamegroute',
        slug: 'coop-poterie-zagora',
        category: 'Artisanat',
        zone: 'Zagora',
        location: {
            lat: 30.2605,
            lng: -5.6749,
            address: 'Tamegroute, Zagora'
        },
        descriptionShort: 'Céramique verte authentique du désert.',
        descriptionLong: "Nos artisans perpétuent la tradition de l'émail vert unique de Tamegroute, fait à base de cuivre et de manganèse.",
        coverImage: 'https://images.pexels.com/photos/5492122/pexels-photo-5492122.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Poterie verte',
        products: [
            {
                id: 'p13',
                name: 'Bol en Céramique Verte',
                price: 85,
                images: pexels.ceramique,
                alt: 'Bol céramique',
                shortDescription: 'Fait main, cuisson traditionnelle.',
                longDescription: "Bol en céramique de Tamegroute, modelé et émaillé à la main. L'émail vert emblématique est obtenu par une recette ancestrale à base de cuivre et manganèse. Pièce unique, va au four et lave-vaisselle.",
                cooperativeId: '4'
            },
            {
                id: 'p14',
                name: 'Assiette Tamegroute 28cm',
                price: 120,
                images: pexels.ceramique,
                alt: 'Assiette artisanale',
                shortDescription: 'Émail vert emblématique.',
                longDescription: "Grande assiette en céramique de Tamegroute, décorée à la main. L'émail vert unique de la région orne votre table pour des repas mémorables. Résistante et élégante.",
                cooperativeId: '4'
            },
            {
                id: 'p15',
                name: 'Vase Décoratif Tamegroute',
                price: 210,
                images: pexels.ceramique,
                alt: 'Vase en céramique',
                shortDescription: 'Pièce décorative unique.',
                longDescription: "Vase décoratif en céramique de Tamegroute, forme traditionnelle et émail vert profond. Une pièce d'artisanat marocain emblématique pour sublimer votre intérieur.",
                cooperativeId: '4'
            },
            {
                id: 'p16',
                name: 'Tasse Artisanale Verte',
                price: 48,
                images: pexels.ceramique,
                alt: 'Tasse céramique',
                shortDescription: 'Modelée à la main par les artisans.',
                longDescription: "Tasse en céramique verte de Tamegroute, modelée à la main. Parfaite pour thé à la menthe ou café. Chaque pièce est unique, fruit du savoir-faire des artisans locaux.",
                cooperativeId: '4'
            }
        ]
    },
    {
        id: '5',
        name: 'Coopérative Miel des Oasis',
        slug: 'coop-miel-oasis-errachidia',
        category: 'Terroir',
        zone: 'Errachidia',
        location: {
            lat: 31.85,
            lng: -4.34,
            address: 'Ksour du Ziz, Errachidia'
        },
        descriptionShort: 'Miel de jujubier, romarin et plantes désertiques.',
        descriptionLong: 'Des apiculteurs locaux transhument selon les floraisons pour produire des miels rares, mis en pot sur place.',
        coverImage: 'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Pot de miel artisanal',
        products: [
            {
                id: 'p17',
                name: 'Miel de Jujubier 500g',
                price: 140,
                images: pexels.miel,
                alt: 'Miel de jujubier',
                shortDescription: 'Monofloral, parfum intense.',
                longDescription: "Miel monofloral de jujubier, récolté dans les oasis du Ziz. Parfum intense, couleur ambrée et texture crémeuse. Un miel rare et précieux, reconnu pour ses qualités apaisantes.",
                cooperativeId: '5'
            },
            {
                id: 'p18',
                name: 'Miel de Romarin 500g',
                price: 92,
                images: pexels.miel,
                alt: 'Miel de romarin',
                shortDescription: 'Récolte printanière locale.',
                longDescription: "Miel de romarin des collines arides, récolte printanière. Claire et fluide, parfum délicat et notes herbacées. Idéal au petit-déjeuner ou en cuisine pour sublimer viandes et fromages.",
                cooperativeId: '5'
            },
            {
                id: 'p19',
                name: "Pollen d'Abeille 250g",
                price: 75,
                images: pexels.pollen,
                alt: "Pollen d'abeille",
                shortDescription: 'Riche en nutriments.',
                longDescription: "Pollen d'abeille récolté par les apiculteurs des oasis. Riche en protéines, vitamines et antioxydants. Consommation à jeun ou en topping sur yaourt et smoothies.",
                cooperativeId: '5'
            },
            {
                id: 'p20',
                name: 'Miel Crémeux 250g',
                price: 58,
                images: pexels.miel,
                alt: 'Miel crémeux',
                shortDescription: 'Texture onctueuse et tartinable.',
                longDescription: "Miel crémeux naturellement battu pour une texture onctueuse et tartinable. Mélange des meilleures récoltes locales. Parfait sur tartines, dans les pâtisseries ou à la cuillère.",
                cooperativeId: '5'
            }
        ]
    },
    {
        id: '6',
        name: 'Coopérative Safran de Tinejdad',
        slug: 'coop-safran-tinejdad',
        category: 'Terroir',
        zone: 'Errachidia',
        location: {
            lat: 31.5,
            lng: -4.95,
            address: 'Tinejdad, Errachidia'
        },
        descriptionShort: 'Safran rouge pur cultivé en parcelles familiales.',
        descriptionLong: "Culture raisonnée, cueillette à l'aube et séchage traditionnel pour conserver le pouvoir aromatique du safran.",
        coverImage: 'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Fleurs de safran',
        products: [
            {
                id: 'p21',
                name: 'Safran Pur 1g',
                price: 95,
                images: pexels.safran,
                alt: 'Safran pur',
                shortDescription: 'Filaments rouges de catégorie premium.',
                longDescription: "Safran pur en filaments, catégorie premium. Cueilli à l'aube dans les parcelles de Tinejdad, séché traditionnellement. Quelques filaments parfument tout un plat : risottos, tajines, pâtisseries.",
                cooperativeId: '6'
            },
            {
                id: 'p22',
                name: 'Safran Pur 3g',
                price: 260,
                images: pexels.safran,
                alt: 'Safran 3g',
                shortDescription: 'Format cuisine familiale.',
                longDescription: "Format famille : 3g de safran pur pour des mois de cuisine parfumée. Même qualité premium que le format 1g. Idéal pour les amateurs de cuisine marocaine et internationale.",
                cooperativeId: '6'
            },
            {
                id: 'p23',
                name: 'Sel au Safran 120g',
                price: 34,
                images: pexels.safran,
                alt: 'Sel au safran',
                shortDescription: 'Assaisonnement gastronomique.',
                longDescription: "Sel de cuisine parfumé au safran de Tinejdad. Assaisonnement gastronomique pour viandes, poissons et légumes. Une touche d'exotisme dans votre cuisine quotidienne.",
                cooperativeId: '6'
            },
            {
                id: 'p24',
                name: 'Infusion Safran & Verveine',
                price: 42,
                images: pexels.safran,
                alt: 'Infusion safran',
                shortDescription: 'Mélange aromatique relaxant.',
                longDescription: "Mélange de safran et verveine pour une infusion relaxante et parfumée. Inspiré des traditions locales, sans théine. À déguster en fin de journée.",
                cooperativeId: '6'
            }
        ]
    },
    {
        id: '7',
        name: 'Coopérative Laine Ayt Ayach',
        slug: 'coop-laine-midelt',
        category: 'Artisanat',
        zone: 'Midelt',
        location: {
            lat: 32.7,
            lng: -4.74,
            address: 'Ayt Ayach, Midelt'
        },
        descriptionShort: 'Tissage traditionnel de laine de montagne.',
        descriptionLong: 'Des artisanes transforment la laine locale en pièces tissées durables inspirées des motifs amazighs.',
        coverImage: 'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Tissage traditionnel',
        products: [
            {
                id: 'p25',
                name: 'Tapis Amazigh 120x80',
                price: 480,
                images: pexels.tapis,
                alt: 'Tapis amazigh',
                shortDescription: 'Laine naturelle, motifs traditionnels.',
                longDescription: "Tapis amazigh tissé à la main en laine naturelle de montagne. Motifs traditionnels berbères, teintures végétales. Pièce d'exception pour sol ou mur, durable et unique.",
                cooperativeId: '7'
            },
            {
                id: 'p26',
                name: 'Couverture Tissée',
                price: 320,
                images: pexels.tapis,
                alt: 'Couverture laine',
                shortDescription: 'Confort thermique haute montagne.',
                longDescription: "Couverture en laine tissée selon les techniques ancestrales d'Ayt Ayach. Confort thermique incomparable, motifs géométriques. Idéale pour canapé ou lit.",
                cooperativeId: '7'
            },
            {
                id: 'p27',
                name: 'Écharpe Laine Fine',
                price: 140,
                images: pexels.tapis,
                alt: 'Écharpe artisanale',
                shortDescription: 'Teinture douce, finition manuelle.',
                longDescription: "Écharpe en laine fine tissée et teinte à la main. Douce au toucher, chaude et légère. Une pièce d'artisanat marocain pour vos tenues d'hiver.",
                cooperativeId: '7'
            },
            {
                id: 'p28',
                name: 'Coussin Berbère',
                price: 95,
                images: pexels.tapis,
                alt: 'Coussin berbère',
                shortDescription: 'Décoration artisanale locale.',
                longDescription: "Coussin décoratif en tissu berbère, motifs traditionnels et laine naturelle. Une touche d'authenticité pour votre intérieur.",
                cooperativeId: '7'
            }
        ]
    },
    {
        id: '8',
        name: 'Coopérative Henné du Drâa',
        slug: 'coop-henne-zagora',
        category: 'Cosmétique',
        zone: 'Zagora',
        location: {
            lat: 30.33,
            lng: -5.83,
            address: 'Mhamid El Ghizlane, Zagora'
        },
        descriptionShort: 'Henné naturel du Drâa, séché au soleil.',
        descriptionLong: 'Feuilles triées et moulues localement pour des soins capillaires et corporels naturels.',
        coverImage: 'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Poudre de henné',
        products: [
            {
                id: 'p29',
                name: 'Henné Naturel 250g',
                price: 38,
                images: pexels.henne,
                alt: 'Henné naturel',
                shortDescription: 'Poudre fine sans additifs.',
                longDescription: "Henné naturel du Drâa, feuilles triées et moulues localement. Poudre fine sans additifs, idéale pour coloration et soin des cheveux. Teinte cuivrée naturelle et fortifiant.",
                cooperativeId: '8'
            },
            {
                id: 'p30',
                name: 'Masque Henné & Plantes',
                price: 52,
                images: pexels.henne,
                alt: 'Masque au henné',
                shortDescription: 'Soin fortifiant pour cheveux.',
                longDescription: "Masque capillaire au henné et plantes locales (indigo, amla). Soin fortifiant, gainant et réparateur. Laisse les cheveux brillants, souples et en bonne santé.",
                cooperativeId: '8'
            },
            {
                id: 'p31',
                name: 'Tatouage Henné Kit Débutant',
                price: 68,
                images: pexels.henne,
                alt: 'Kit henné',
                shortDescription: 'Poches + embouts + guide motifs.',
                longDescription: "Kit complet pour tatouage au henné : poudre de henné, poches, embouts et guide de motifs traditionnels. Pour créer des dessins éphémères naturels et élégants.",
                cooperativeId: '8'
            },
            {
                id: 'p32',
                name: 'Huile Sèche au Henné 100ml',
                price: 74,
                images: pexels.henne,
                alt: 'Huile au henné',
                shortDescription: 'Finition brillante et nourrissante.',
                longDescription: "Huile sèche capillaire au henné et extraits de plantes. Finition brillante sans effet gras, nourrissante et parfumée. Pour des cheveux sublimés au quotidien.",
                cooperativeId: '8'
            }
        ]
    },
    {
        id: '9',
        name: 'Coopérative Herbes des Gorges',
        slug: 'coop-herbes-tinghir',
        category: 'Terroir',
        zone: 'Tinghir',
        location: {
            lat: 31.53,
            lng: -5.52,
            address: 'Gorges du Todgha, Tinghir'
        },
        descriptionShort: 'Plantes aromatiques de montagne et tisanes du Todgha.',
        descriptionLong: 'Cueillette raisonnée des herbes aromatiques et assemblages de tisanes inspirés des savoirs traditionnels.',
        coverImage: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Herbes aromatiques',
        products: [
            {
                id: 'p33',
                name: 'Thym Séché 100g',
                price: 24,
                images: pexels.herbes,
                alt: 'Thym séché',
                shortDescription: 'Arôme intense des hauteurs.',
                longDescription: "Thym sauvage des Gorges du Todgha, cueilli et séché selon les méthodes traditionnelles. Arôme intense, idéal en infusion, cuisine ou friction pour les voies respiratoires.",
                cooperativeId: '9'
            },
            {
                id: 'p34',
                name: 'Verveine Bio 80g',
                price: 28,
                images: pexels.herbes,
                alt: 'Verveine',
                shortDescription: 'Infusion apaisante.',
                longDescription: "Verveine cultivée en altitude, cueillie et séchée avec soin. Infusion apaisante et digestive, parfum citronné. Un classique des tisanes du Todgha.",
                cooperativeId: '9'
            },
            {
                id: 'p35',
                name: 'Mélange Tisane Oasis 120g',
                price: 38,
                images: pexels.herbes,
                alt: 'Tisane mélange',
                shortDescription: 'Menthe, verveine et fleurs locales.',
                longDescription: "Mélange maison de menthe, verveine et fleurs locales des Gorges. Tisane désaltérante et réconfortante. Inspiré des recettes traditionnelles transmises de génération en génération.",
                cooperativeId: '9'
            },
            {
                id: 'p36',
                name: 'Origan de Montagne 90g',
                price: 26,
                images: pexels.herbes,
                alt: 'Origan',
                shortDescription: 'Parfum puissant pour cuisine traditionnelle.',
                longDescription: "Origan sauvage des hauteurs du Todgha, au parfum puissant et aromatique. Indispensable en cuisine marocaine : tajines, salades, grillades. Séché à l'ombre pour préserver les huiles essentielles.",
                cooperativeId: '9'
            }
        ]
    }
];
}),
"[project]/components/ProductGallery.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProductGallery.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProductGallery.tsx <module evaluation>", "default");
}),
"[project]/components/ProductGallery.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProductGallery.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProductGallery.tsx", "default");
}),
"[project]/components/ProductGallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ProductGallery.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ProductGallery.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/ZoneNavigator.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ZoneNavigator.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ZoneNavigator.tsx <module evaluation>", "default");
}),
"[project]/components/ZoneNavigator.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ZoneNavigator.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ZoneNavigator.tsx", "default");
}),
"[project]/components/ZoneNavigator.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ZoneNavigator.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ZoneNavigator.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/product/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductGallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZoneNavigator.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function getProductWithCoop(productId) {
    for (const coop of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cooperatives"]){
        const product = coop.products.find((p)=>p.id === productId);
        if (product) return {
            product,
            cooperative: coop
        };
    }
    return null;
}
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cooperatives"].flatMap((c)=>c.products.map((p)=>({
                id: p.id
            })));
}
async function ProductPage({ params }) {
    const { id } = await params;
    const data = getProductWithCoop(id);
    if (!data) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { product, cooperative } = data;
    const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite commander : ${product.name} (${product.price} MAD)`);
    const whatsappUrl = `https://wa.me/212600000000?text=${whatsappMessage}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-6xl space-y-12 px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            images: product.images,
                            alt: product.alt
                        }, void 0, false, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold tracking-tight text-palmier md:text-4xl",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-4xl font-bold text-terracotta md:text-5xl",
                                children: [
                                    product.price,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-semibold text-palmier/80",
                                        children: "MAD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-palmier/90",
                                children: product.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/cooperative/${cooperative.slug}`,
                                className: "mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border border-terracotta/40 bg-terracotta/5 px-4 py-2 text-sm font-medium text-palmier transition hover:bg-terracotta/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: cooperative.coverImage,
                                        alt: "",
                                        width: 32,
                                        height: 32,
                                        className: "rounded-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cooperative.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-palmier/70",
                                        children: [
                                            "• ",
                                            cooperative.zone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: whatsappUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E2725B] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#d8654e] md:w-auto md:px-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    "Commander via WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            product.longDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-white/40 bg-white/75 p-6 shadow-soft backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-palmier",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-palmier/90",
                        children: product.longDescription
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-6 text-2xl font-semibold text-palmier",
                        children: "Explorer d'autres merveilles"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/product/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/product/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4eff9926._.js.map