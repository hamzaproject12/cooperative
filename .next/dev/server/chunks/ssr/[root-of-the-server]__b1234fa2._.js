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
"[project]/components/ZoneProductGrid.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ZoneProductGrid.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ZoneProductGrid.tsx <module evaluation>", "default");
}),
"[project]/components/ZoneProductGrid.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ZoneProductGrid.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ZoneProductGrid.tsx", "default");
}),
"[project]/components/ZoneProductGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ZoneProductGrid.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ZoneProductGrid.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/ZoneCooperativesCards.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ZoneCooperativesCards.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ZoneCooperativesCards.tsx <module evaluation>", "default");
}),
"[project]/components/ZoneCooperativesCards.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ZoneCooperativesCards.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ZoneCooperativesCards.tsx", "default");
}),
"[project]/components/ZoneCooperativesCards.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneCooperativesCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ZoneCooperativesCards.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneCooperativesCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ZoneCooperativesCards.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneCooperativesCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/app/zone/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZonePage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZoneProductGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneCooperativesCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZoneCooperativesCards.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZoneNavigator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-rsc] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-rsc] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-rsc] (ecmascript) <export default as Store>");
;
;
;
;
;
;
;
;
const zoneImages = {
    Errachidia: 'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=1600',
    Tinghir: 'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&w=1600',
    Midelt: 'https://images.pexels.com/photos/27429847/pexels-photo-27429847.jpeg?auto=compress&cs=tinysrgb&w=1600',
    Zagora: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600'
};
function slugifyZone(zone) {
    return zone.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-');
}
function generateStaticParams() {
    const zones = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cooperatives"].map((c)=>c.zone)));
    return zones.map((zone)=>({
            slug: slugifyZone(zone)
        }));
}
async function ZonePage({ params }) {
    const { slug } = await params;
    const zone = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cooperatives"].map((c)=>c.zone))).find((z)=>slugifyZone(z) === slug);
    if (!zone) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const zoneCooperatives = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cooperatives"].filter((c)=>c.zone === zone);
    const allProducts = zoneCooperatives.flatMap((coop)=>coop.products.map((product)=>({
                ...product,
                cooperativeSlug: coop.slug,
                category: coop.category,
                cooperativeName: (()=>{
                    const short = coop.name.replace(/^Coopérative\s+/i, '');
                    return short.length > 20 ? `${short.slice(0, 18)}…` : short;
                })()
            })));
    // Best-sellers = premier produit de chaque coopérative de la zone
    const bestSellerProducts = zoneCooperatives.flatMap((coop)=>{
        const firstProduct = coop.products[0];
        if (!firstProduct) return [];
        return [
            {
                ...firstProduct,
                cooperativeSlug: coop.slug,
                category: coop.category,
                cooperativeName: (()=>{
                    const short = coop.name.replace(/^Coopérative\s+/i, '');
                    return short.length > 20 ? `${short.slice(0, 18)}…` : short;
                })()
            }
        ];
    });
    const heroImage = zoneImages[zone] ?? zoneCooperatives[0]?.coverImage;
    const totalProducts = allProducts.length;
    const categories = Array.from(new Set(bestSellerProducts.map((p)=>p.category)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-[35vh] min-h-[240px] w-full overflow-hidden rounded-b-3xl md:h-[42vh] md:min-h-[320px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: heroImage,
                        alt: `Les trésors de ${zone}`,
                        fill: true,
                        sizes: "100vw",
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
                    }, void 0, false, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col justify-end p-6 md:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl",
                                children: [
                                    "Les Trésors de ",
                                    zone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-2xl text-white/90 md:text-lg",
                                children: "Découvrez les coopératives et produits de la région"
                            }, void 0, false, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/zone/[slug]/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-8 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/50 bg-white/90 p-6 shadow-soft backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/15 text-terracotta",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/app/zone/[slug]/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-palmier",
                                                        children: [
                                                            zoneCooperatives.length,
                                                            " coopérative",
                                                            zoneCooperatives.length > 1 ? 's' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-palmier/70",
                                                        children: [
                                                            "dans la zone ",
                                                            zone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-palmier/15 text-palmier",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/app/zone/[slug]/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-palmier",
                                                        children: [
                                                            totalProducts,
                                                            " produits"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-palmier/70",
                                                        children: [
                                                            bestSellerProducts.length,
                                                            " best-sellers"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden items-center gap-2 sm:flex",
                                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-sage/20 px-3 py-1 text-sm font-medium text-palmier",
                                                children: cat
                                            }, cat, false, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/zone/[slug]/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-palmier",
                                        children: "Coopératives de la zone"
                                    }, void 0, false, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-palmier/70",
                                        children: [
                                            zoneCooperatives.length,
                                            " coopérative",
                                            zoneCooperatives.length > 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneCooperativesCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                cooperatives: zoneCooperatives
                            }, void 0, false, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                size: 22,
                                                className: "text-terracotta"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-palmier",
                                                children: "Best-sellers des coopératives"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-palmier/70",
                                        children: [
                                            bestSellerProducts.length,
                                            " produit",
                                            bestSellerProducts.length > 1 ? 's' : '',
                                            " phare",
                                            bestSellerProducts.length > 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zone/[slug]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                products: bestSellerProducts,
                                allBestSellers: true
                            }, void 0, false, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-6 text-xl font-semibold text-palmier",
                                children: "Explorer d'autres zones"
                            }, void 0, false, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZoneNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/zone/[slug]/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zone/[slug]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/zone/[slug]/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/zone/[slug]/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/zone/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/zone/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b1234fa2._.js.map