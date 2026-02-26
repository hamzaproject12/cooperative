# Images des coopératives

Les images de couverture des coopératives (issues du CSV) sont chargées depuis le sous-dossier **`images/`** (chemin complet : `public/images/images/`).

Fichiers utilisés par le site (noms exacts, à placer dans `public/images/images/`) :

- `Apiculture - Caisses Apicoles.png`
- `Apiculture.png` (fallback pour toute coopérative Apiculture)
- `Elevage Ovin - Elevage Ovin.png`
- `Elevage Poulet - Elevage Poulet.png`
- `Patisserie - Gâteaux Marocains.png`
- `Valorisation des produits locaux - Couscous.png`
- `Valorisation des produits locaux - Production d'Emballage.png`
- `Valorisation des produits locaux.png` (fallback pour Valorisation des produits locaux)

Le code dans `data/mockData.ts` associe les axes/spécialités du CSV à ces noms (ex. Patissereie + Gateaux Marocaine → Patisserie - Gâteaux Marocains.png).
