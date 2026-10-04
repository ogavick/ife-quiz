const flashcards = [
  {
    front: 'Apple',
    back: 'Pomme',
    options: ['Pomme', 'Poire', 'Orange', 'Banane'],
  },
  {
    front: 'House',
    back: 'Maison',
    options: ['Maison', 'École', 'Église', 'Magasin'],
  },
  {
    front: 'Dog',
    back: 'Chien',
    options: ['Chat', 'Chien', 'Cheval', 'Oiseau'],
  },
  {
    front: 'Cat',
    back: 'Chat',
    options: ['Chien', 'Souris', 'Chat', 'Lapin'],
  },
  {
    front: 'Book',
    back: 'Livre',
    options: ['Livre', 'Table', 'Stylo', 'Crayon'],
  },
  {
    front: 'Water',
    back: 'Eau',
    options: ['Lait', 'Eau', 'Jus', 'Café'],
  },
  {
    front: 'Bread',
    back: 'Pain',
    options: ['Riz', 'Pain', 'Fromage', 'Viande'],
  },
  {
    front: 'Milk',
    back: 'Lait',
    options: ['Eau', 'Lait', 'Miel', 'Jus'],
  },
  {
    front: 'Sun',
    back: 'Soleil',
    options: ['Lune', 'Étoile', 'Soleil', 'Nuage'],
  },
  {
    front: 'Moon',
    back: 'Lune',
    options: ['Soleil', 'Lune', 'Ciel', 'Nuit'],
  },
  {
    front: 'Star',
    back: 'Étoile',
    options: ['Nuage', 'Étoile', 'Planète', 'Soleil'],
  },
  {
    front: 'Tree',
    back: 'Arbre',
    options: ['Fleur', 'Arbre', 'Feuille', 'Herbe'],
  },
  {
    front: 'Flower',
    back: 'Fleur',
    options: ['Branche', 'Racine', 'Fleur', 'Arbre'],
  },
  {
    front: 'Car',
    back: 'Voiture',
    options: ['Avion', 'Bateau', 'Voiture', 'Train'],
  },
  {
    front: 'Bus',
    back: 'Autobus',
    options: ['Taxi', 'Autobus', 'Vélo', 'Train'],
  },
  {
    front: 'Train',
    back: 'Train',
    options: ['Train', 'Avion', 'Voiture', 'Bateau'],
  },
  {
    front: 'Airplane',
    back: 'Avion',
    options: ['Bateau', 'Train', 'Avion', 'Autobus'],
  },
  {
    front: 'Boat',
    back: 'Bateau',
    options: ['Bateau', 'Avion', 'Voiture', 'Moto'],
  },
  {
    front: 'School',
    back: 'École',
    options: ['Hôpital', 'École', 'Bibliothèque', 'Bureau'],
  },
  {
    front: 'Teacher',
    back: 'Professeur',
    options: ['Étudiant', 'Médecin', 'Professeur', 'Policier'],
  },
  {
    front: 'Student',
    back: 'Étudiant',
    options: ['Professeur', 'Étudiant', 'Médecin', 'Cuisinier'],
  },
  {
    front: 'Friend',
    back: 'Ami',
    options: ['Ami', 'Voisin', 'Frère', 'Père'],
  },
  {
    front: 'Family',
    back: 'Famille',
    options: ['Famille', 'École', 'Ville', 'Équipe'],
  },
  {
    front: 'Mother',
    back: 'Mère',
    options: ['Sœur', 'Mère', 'Tante', 'Fille'],
  },
  {
    front: 'Father',
    back: 'Père',
    options: ['Père', 'Fils', 'Frère', 'Grand-père'],
  },
  {
    front: 'Brother',
    back: 'Frère',
    options: ['Cousin', 'Frère', 'Père', 'Oncle'],
  },
  {
    front: 'Sister',
    back: 'Sœur',
    options: ['Mère', 'Sœur', 'Fille', 'Tante'],
  },
  {
    front: 'Child',
    back: 'Enfant',
    options: ['Adulte', 'Enfant', 'Homme', 'Père'],
  },
  {
    front: 'Baby',
    back: 'Bébé',
    options: ['Bébé', 'Enfant', 'Adolescent', 'Adulte'],
  },
  {
    front: 'Man',
    back: 'Homme',
    options: ['Femme', 'Garçon', 'Homme', 'Vieil homme'],
  },
  {
    front: 'Woman',
    back: 'Femme',
    options: ['Femme', 'Homme', 'Fille', 'Mère'],
  },
  {
    front: 'Food',
    back: 'Nourriture',
    options: ['Boisson', 'Nourriture', 'Cuisine', 'Assiette'],
  },
  {
    front: 'Rice',
    back: 'Riz',
    options: ['Pain', 'Pâtes', 'Riz', 'Maïs'],
  },
  {
    front: 'Meat',
    back: 'Viande',
    options: ['Poisson', 'Viande', 'Poulet', 'Fromage'],
  },
  {
    front: 'Fish',
    back: 'Poisson',
    options: ['Poisson', 'Viande', 'Porc', 'Poulet'],
  },
  {
    front: 'Chicken',
    back: 'Poulet',
    options: ['Dinde', 'Poulet', 'Poisson', 'Viande'],
  },
  {
    front: 'Cheese',
    back: 'Fromage',
    options: ['Beurre', 'Lait', 'Fromage', 'Yaourt'],
  },
  {
    front: 'Egg',
    back: 'Œuf',
    options: ['Œuf', 'Fromage', 'Pain', 'Poulet'],
  },
  {
    front: 'Orange',
    back: 'Orange',
    options: ['Pomme', 'Orange', 'Citron', 'Raisin'],
  },
  {
    front: 'Banana',
    back: 'Banane',
    options: ['Banane', 'Poire', 'Orange', 'Fraise'],
  },
  {
    front: 'Strawberry',
    back: 'Fraise',
    options: ['Cerise', 'Fraise', 'Framboise', 'Raisin'],
  },
  {
    front: 'Grape',
    back: 'Raisin',
    options: ['Raisin', 'Fraise', 'Pomme', 'Pêche'],
  },
  {
    front: 'Lemon',
    back: 'Citron',
    options: ['Orange', 'Citron vert', 'Citron', 'Pamplemousse'],
  },
  {
    front: 'Coffee',
    back: 'Café',
    options: ['Thé', 'Café', 'Lait', 'Eau'],
  },
  {
    front: 'Tea',
    back: 'Thé',
    options: ['Café', 'Thé', 'Jus', 'Lait'],
  },
  {
    front: 'Sugar',
    back: 'Sucre',
    options: ['Sel', 'Farine', 'Sucre', 'Miel'],
  },
  {
    front: 'Salt',
    back: 'Sel',
    options: ['Sucre', 'Sel', 'Poivre', 'Farine'],
  },
  {
    front: 'Table',
    back: 'Table',
    options: ['Chaise', 'Table', 'Porte', 'Fenêtre'],
  },
  {
    front: 'Chair',
    back: 'Chaise',
    options: ['Table', 'Canapé', 'Chaise', 'Lit'],
  },
  {
    front: 'Bed',
    back: 'Lit',
    options: ['Lit', 'Chaise', 'Table', 'Armoire'],
  },
  {
    front: 'Door',
    back: 'Porte',
    options: ['Fenêtre', 'Porte', 'Mur', 'Toit'],
  },
  {
    front: 'Window',
    back: 'Fenêtre',
    options: ['Porte', 'Fenêtre', 'Miroir', 'Mur'],
  },
  {
    front: 'Wall',
    back: 'Mur',
    options: ['Toit', 'Sol', 'Mur', 'Porte'],
  },
  {
    front: 'Floor',
    back: 'Sol',
    options: ['Sol', 'Toit', 'Mur', 'Escalier'],
  },
  {
    front: 'Kitchen',
    back: 'Cuisine',
    options: ['Salle de bain', 'Cuisine', 'Chambre', 'Garage'],
  },
  {
    front: 'Bedroom',
    back: 'Chambre',
    options: ['Cuisine', 'Salon', 'Chambre', 'Salle de bain'],
  },
  {
    front: 'Bathroom',
    back: 'Salle de bain',
    options: ['Salle de bain', 'Cuisine', 'Garage', 'Jardin'],
  },
  {
    front: 'Garden',
    back: 'Jardin',
    options: ['Jardin', 'Garage', 'Balcon', 'Cuisine'],
  },
  {
    front: 'Computer',
    back: 'Ordinateur',
    options: ['Téléphone', 'Ordinateur', 'Télévision', 'Radio'],
  },
  {
    front: 'Phone',
    back: 'Téléphone',
    options: ['Ordinateur', 'Téléphone', 'Montre', 'Appareil photo'],
  },
  {
    front: 'Television',
    back: 'Télévision',
    options: ['Radio', 'Ordinateur', 'Télévision', 'Téléphone'],
  },
  {
    front: 'Camera',
    back: 'Appareil photo',
    options: ['Appareil photo', 'Télévision', 'Téléphone', 'Radio'],
  },
  {
    front: 'Clock',
    back: 'Horloge',
    options: ['Calendrier', 'Horloge', 'Téléphone', 'Appareil photo'],
  },
  {
    front: 'Money',
    back: 'Argent',
    options: ['Travail', 'Argent', 'Banque', 'Prix'],
  },
  {
    front: 'Bank',
    back: 'Banque',
    options: ['Magasin', 'Banque', 'Bureau', 'Marché'],
  },
  {
    front: 'Market',
    back: 'Marché',
    options: ['Marché', 'Banque', 'École', 'Hôpital'],
  },
  {
    front: 'Store',
    back: 'Magasin',
    options: ['Magasin', 'Maison', 'Banque', 'Hôtel'],
  },
  {
    front: 'Hospital',
    back: 'Hôpital',
    options: ['Hôpital', 'École', 'Banque', 'Hôtel'],
  },
  {
    front: 'Doctor',
    back: 'Médecin',
    options: ['Médecin', 'Professeur', 'Avocat', 'Cuisinier'],
  },
  {
    front: 'Nurse',
    back: 'Infirmier',
    options: ['Infirmier', 'Médecin', 'Professeur', 'Policier'],
  },
  {
    front: 'Police',
    back: 'Police',
    options: ['Pompier', 'Police', 'Soldat', 'Médecin'],
  },
  {
    front: 'Firefighter',
    back: 'Pompier',
    options: ['Policier', 'Pompier', 'Médecin', 'Pilote'],
  },
  {
    front: 'Chef',
    back: 'Cuisinier',
    options: ['Cuisinier', 'Professeur', 'Médecin', 'Boulanger'],
  },
  {
    front: 'Farmer',
    back: 'Agriculteur',
    options: ['Agriculteur', 'Cuisinier', 'Pêcheur', 'Mécanicien'],
  },
  {
    front: 'Worker',
    back: 'Travailleur',
    options: ['Étudiant', 'Travailleur', 'Professeur', 'Client'],
  },
  {
    front: 'City',
    back: 'Ville',
    options: ['Ville', 'Village', 'Pays', 'Rue'],
  },
  {
    front: 'Country',
    back: 'Pays',
    options: ['Ville', 'État', 'Pays', 'Continent'],
  },
  {
    front: 'Street',
    back: 'Rue',
    options: ['Rue', 'Maison', 'Ville', 'Pont'],
  },
  {
    front: 'Road',
    back: 'Route',
    options: ['Rue', 'Route', 'Pont', 'Tunnel'],
  },
  {
    front: 'Bridge',
    back: 'Pont',
    options: ['Pont', 'Route', 'Bâtiment', 'Tunnel'],
  },
  {
    front: 'Beach',
    back: 'Plage',
    options: ['Plage', 'Montagne', 'Forêt', 'Rivière'],
  },
  {
    front: 'Mountain',
    back: 'Montagne',
    options: ['Colline', 'Montagne', 'Forêt', 'Vallée'],
  },
  {
    front: 'River',
    back: 'Rivière',
    options: ['Lac', 'Rivière', 'Mer', 'Océan'],
  },
  {
    front: 'Ocean',
    back: 'Océan',
    options: ['Rivière', 'Lac', 'Océan', 'Piscine'],
  },
  {
    front: 'Rain',
    back: 'Pluie',
    options: ['Neige', 'Pluie', 'Vent', 'Nuage'],
  },
  {
    front: 'Snow',
    back: 'Neige',
    options: ['Pluie', 'Glace', 'Neige', 'Nuage'],
  },
  {
    front: 'Wind',
    back: 'Vent',
    options: ['Pluie', 'Vent', 'Tempête', 'Neige'],
  },
  {
    front: 'Cloud',
    back: 'Nuage',
    options: ['Ciel', 'Nuage', 'Soleil', 'Pluie'],
  },
  {
    front: 'Fire',
    back: 'Feu',
    options: ['Fumée', 'Eau', 'Feu', 'Glace'],
  },
  {
    front: 'Ice',
    back: 'Glace',
    options: ['Neige', 'Glace', 'Eau', 'Froid'],
  },
  {
    front: 'Light',
    back: 'Lumière',
    options: ['Ombre', 'Lumière', 'Feu', 'Soleil'],
  },
  {
    front: 'Darkness',
    back: 'Obscurité',
    options: ['Nuit', 'Ombre', 'Obscurité', 'Lumière'],
  },
  {
    front: 'Happy',
    back: 'Heureux',
    options: ['Triste', 'En colère', 'Heureux', 'Fatigué'],
  },
  {
    front: 'Sad',
    back: 'Triste',
    options: ['Heureux', 'Triste', 'En colère', 'Effrayé'],
  },
  {
    front: 'Angry',
    back: 'En colère',
    options: ['Triste', 'Heureux', 'En colère', 'Fatigué'],
  },
  {
    front: 'Tired',
    back: 'Fatigué',
    options: ['Fatigué', 'Heureux', 'En colère', 'Affamé'],
  },
  {
    front: 'Hungry',
    back: 'Affamé',
    options: ['Assoiffé', 'Affamé', 'Fatigué', 'Heureux'],
  },
  {
    front: 'Thirsty',
    back: 'Assoiffé',
    options: ['Affamé', 'Assoiffé', 'Fatigué', 'Malade'],
  },
  {
    front: 'Big',
    back: 'Grand',
    options: ['Petit', 'Haut', 'Grand', 'Long'],
  },
  {
    front: 'Small',
    back: 'Petit',
    options: ['Grand', 'Petit', 'Court', 'Mince'],
  },
  {
    front: 'Fast',
    back: 'Rapide',
    options: ['Lent', 'Rapide', 'Fort', 'Haut'],
  },
  {
    front: 'Slow',
    back: 'Lent',
    options: ['Rapide', 'Lent', 'Faible', 'Bas'],
  },
  {
    front: 'Hot',
    back: 'Chaud',
    options: ['Froid', 'Chaud', 'Sec', 'Humide'],
  },
  {
    front: 'Cold',
    back: 'Froid',
    options: ['Chaud', 'Froid', 'Humide', 'Doux'],
  },
  {
    front: 'New',
    back: 'Nouveau',
    options: ['Vieux', 'Nouveau', 'Jeune', 'Moderne'],
  },
  {
    front: 'Old',
    back: 'Vieux',
    options: ['Nouveau', 'Jeune', 'Vieux', 'Grand'],
  },
  {
    front: 'Easy',
    back: 'Facile',
    options: ['Difficile', 'Simple', 'Facile', 'Rapide'],
  },
  {
    front: 'Difficult',
    back: 'Difficile',
    options: ['Facile', 'Long', 'Difficile', 'Lourd'],
  },
];

export default flashcards;