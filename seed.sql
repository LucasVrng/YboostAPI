-- ============================================
-- SEED FILE - YBoost DB
-- Données de test : recettes du monde entier
-- ============================================

USE yboost_db;

-- ============================================
-- PAYS
-- ============================================
INSERT INTO country (name) VALUES
('France'),
('Italie'),
('Japon'),
('Mexique'),
('Inde'),
('USA'),
('Maroc');

-- ============================================
-- INGREDIENTS
-- ============================================
INSERT INTO ingredients (name) VALUES
('Farine'),
('Oeufs'),
('Beurre'),
('Lait'),
('Sucre'),
('Sel'),
('Poivre'),
('Ail'),
('Oignon'),
('Tomate'),
('Huile d\'olive'),
('Citron'),
('Persil'),
('Thym'),
('Laurier'),
('Poulet'),
('Boeuf'),
('Porc'),
('Saumon'),
('Crevettes'),
('Riz'),
('Pâtes'),
('Pomme de terre'),
('Carotte'),
('Courgette'),
('Poivron'),
('Aubergine'),
('Épinards'),
('Champignons'),
('Crème fraîche'),
('Parmesan'),
('Mozzarella'),
('Gruyère'),
('Sauce tomate'),
('Bouillon de poulet'),
('Sauce soja'),
('Gingembre'),
('Sésame'),
('Algues nori'),
('Vinaigre de riz'),
('Avocat'),
('Haricots noirs'),
('Maïs'),
('Jalapeño'),
('Tortilla'),
('Coriandre'),
('Cumin'),
('Curcuma'),
('Curry'),
('Lait de coco'),
('Pois chiches'),
('Lentilles'),
('Cheddar'),
('Bacon'),
('Pain brioche'),
('Cornichon'),
('Miel'),
('Cannelle'),
('Cumin en poudre'),
('Paprika'),
('Ras el hanout'),
('Merguez'),
('Couscous'),
('Harissa'),
('Citron confit'),
('Olives'),
('Amandes');

-- ============================================
-- RECETTES
-- ============================================
INSERT INTO recipes (name, time, instructions, country_id, image_url, how_many, ingredients_summary, is_vegan) VALUES

-- FRANCE (country_id = 1)
('Quiche Lorraine', 60,
'1. Préchauffer le four à 180°C.\n2. Étaler la pâte brisée dans un moule.\n3. Faire revenir le bacon coupé en lardons.\n4. Mélanger les oeufs, la crème fraîche, le gruyère râpé, sel et poivre.\n5. Disposer les lardons sur la pâte et verser la préparation.\n6. Enfourner 35 minutes jusqu\'à dorure.',
1, 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800', 4,
'Pâte brisée, lardons, oeufs, crème fraîche, gruyère', 0),

('Boeuf Bourguignon', 180,
'1. Couper le boeuf en gros cubes et le faire mariner dans le vin rouge.\n2. Faire revenir les lardons et les légumes.\n3. Ajouter le boeuf et faire dorer.\n4. Ajouter le vin de marinade, le bouillon, le thym et le laurier.\n5. Laisser mijoter 2h30 à feu doux.\n6. Ajouter les champignons 30 minutes avant la fin.',
1, 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800', 6,
'Boeuf, vin rouge, lardons, champignons, carottes, oignon', 0),

('Crêpes Suzette', 30,
'1. Préparer la pâte à crêpes avec farine, oeufs, lait et beurre fondu.\n2. Laisser reposer 1h.\n3. Cuire les crêpes dans une poêle beurrée.\n4. Préparer la sauce avec beurre, sucre, jus d\'orange et zeste.\n5. Faire flamber avec du Grand Marnier.\n6. Napper les crêpes de sauce et servir chaud.',
1, 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800', 4,
'Farine, oeufs, lait, beurre, sucre, orange', 1),

-- ITALIE (country_id = 2)
('Spaghetti Carbonara', 25,
'1. Faire cuire les spaghettis al dente.\n2. Faire revenir le bacon coupé en lardons.\n3. Battre les jaunes d\'oeufs avec le parmesan râpé et le poivre.\n4. Égoutter les pâtes en gardant un peu d\'eau de cuisson.\n5. Mélanger hors du feu les pâtes, les lardons et la crème d\'oeuf.\n6. Ajouter l\'eau de cuisson si nécessaire pour lier.',
2, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800', 4,
'Spaghetti, lardons, oeufs, parmesan, poivre noir', 0),

('Pizza Margherita', 45,
'1. Préparer la pâte avec farine, eau, levure, sel et huile d\'olive.\n2. Laisser lever 1h.\n3. Étaler la pâte et napper de sauce tomate.\n4. Ajouter la mozzarella en tranches.\n5. Cuire à 250°C pendant 12 minutes.\n6. Ajouter les feuilles de basilic frais à la sortie du four.',
2, 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800', 4,
'Pâte à pizza, sauce tomate, mozzarella, basilic', 1),

('Risotto aux champignons', 40,
'1. Faire revenir l\'oignon et l\'ail dans du beurre.\n2. Ajouter le riz et nacrer 2 minutes.\n3. Déglacer au vin blanc.\n4. Ajouter le bouillon chaud louche par louche en remuant constamment.\n5. Ajouter les champignons poêlés à mi-cuisson.\n6. Finir avec le parmesan et le beurre.',
2, 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800', 4,
'Riz arborio, champignons, parmesan, vin blanc, bouillon', 1),

-- JAPON (country_id = 3)
('Sushi Saumon', 60,
'1. Cuire le riz à sushi et l\'assaisonner avec vinaigre de riz, sucre et sel.\n2. Laisser refroidir à température ambiante.\n3. Couper le saumon frais en tranches fines.\n4. Former des boulettes de riz avec les mains humides.\n5. Poser une tranche de saumon sur chaque boulette.\n6. Servir avec sauce soja, wasabi et gingembre mariné.',
3, 'https://images.unsplash.com/photo-1617196034096-2186592a4776?w=800', 4,
'Riz à sushi, saumon frais, vinaigre de riz, wasabi', 0),

('Ramen au poulet', 90,
'1. Préparer le bouillon en faisant mijoter la carcasse de poulet 2h avec gingembre et ail.\n2. Filtrer le bouillon et l\'assaisonner avec sauce soja et mirin.\n3. Cuire les nouilles ramen séparément.\n4. Faire mariner et cuire le poulet dans sauce soja et miel.\n5. Disposer les nouilles dans le bouillon.\n6. Garnir avec le poulet, un oeuf mollet, du nori et des oignons verts.',
3, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800', 2,
'Nouilles ramen, poulet, bouillon, sauce soja, oeufs, nori', 0),

('Gyoza', 45,
'1. Mélanger le porc haché avec chou chinois, gingembre, ail, sauce soja et sésame.\n2. Déposer une cuillère de farce au centre de chaque feuille de gyoza.\n3. Humidifier les bords et plier en formant des plis.\n4. Cuire à la poêle avec un peu d\'huile jusqu\'à dorure.\n5. Ajouter de l\'eau et couvrir pour cuire à la vapeur 5 minutes.\n6. Servir avec une sauce dipping soja-vinaigre.',
3, 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800', 4,
'Feuilles de gyoza, porc haché, chou, gingembre, sauce soja', 0),

-- MEXIQUE (country_id = 4)
('Tacos al Pastor', 40,
'1. Mariner le porc avec jus d\'ananas, achiote, cumin, ail et piment.\n2. Faire griller la viande marinée.\n3. Couper la viande en petits morceaux.\n4. Réchauffer les tortillas de maïs.\n5. Garnir avec la viande, oignon émincé, coriandre fraîche.\n6. Servir avec quartiers de citron vert et sauce piquante.',
4, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800', 4,
'Porc, tortillas de maïs, ananas, oignon, coriandre', 0),

('Guacamole', 15,
'1. Écraser les avocats mûrs à la fourchette.\n2. Ajouter le jus de citron vert immédiatement.\n3. Incorporer l\'oignon rouge finement haché.\n4. Ajouter la tomate épépinée en petits dés.\n5. Assaisonner avec coriandre, jalapeño, sel et cumin.\n6. Servir aussitôt avec des tortillas chips.',
4, 'https://images.unsplash.com/photo-1573590330099-d6c7355ec595?w=800', 4,
'Avocat, citron vert, oignon rouge, tomate, coriandre, jalapeño', 1),

('Enchiladas', 50,
'1. Préparer la sauce enchilada avec tomates, piments et épices.\n2. Cuire et effilocher le poulet.\n3. Mélanger le poulet avec la moitié de la sauce et le fromage.\n4. Rouler la farce dans les tortillas.\n5. Disposer dans un plat, napper du reste de sauce et de fromage.\n6. Cuire 20 minutes à 180°C.',
4, 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=800', 4,
'Tortillas, poulet, sauce enchilada, cheddar, crème', 0),

-- INDE (country_id = 5)
('Poulet Tikka Masala', 50,
'1. Mariner le poulet dans yaourt, citron, gingembre, ail et épices.\n2. Faire griller le poulet mariné au four ou à la poêle.\n3. Préparer la sauce avec oignon, tomates, gingembre, ail et épices.\n4. Ajouter la crème de coco et laisser mijoter 15 minutes.\n5. Ajouter le poulet grillé dans la sauce.\n6. Servir avec du riz basmati et du naan.',
5, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800', 4,
'Poulet, yaourt, tomates, lait de coco, tikka masala, gingembre', 0),

('Dal de lentilles', 35,
'1. Rincer et cuire les lentilles rouges jusqu\'à tendreté.\n2. Préparer le tadka : faire chauffer l\'huile et y faire revenir cumin, moutarde, ail et gingembre.\n3. Ajouter oignon et tomates et cuire 5 minutes.\n4. Incorporer curcuma, coriandre en poudre et piment.\n5. Mélanger avec les lentilles cuites.\n6. Garnir de coriandre fraîche et servir avec du riz.',
5, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800', 4,
'Lentilles rouges, tomates, oignon, curcuma, cumin, coriandre', 1),

('Saag Paneer', 40,
'1. Blanchir les épinards et les mixer en purée.\n2. Faire revenir oignon, ail et gingembre.\n3. Ajouter les épices : cumin, coriandre, garam masala, curcuma.\n4. Incorporer la purée d\'épinards et la crème.\n5. Ajouter le paneer coupé en cubes et laisser mijoter 10 minutes.\n6. Servir chaud avec du pain naan.',
5, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800', 4,
'Épinards, paneer, crème, oignon, garam masala, gingembre', 1),

-- USA (country_id = 6)
('Burger Classic', 25,
'1. Assaisonner le boeuf haché avec sel, poivre et ail en poudre.\n2. Former des steaks et cuire à la poêle ou au grill.\n3. Toaster les pains brioche.\n4. Faire fondre le cheddar sur les steaks.\n5. Assembler : pain, salade, tomate, oignon, steak, sauce, cornichons.\n6. Servir avec des frites maison.',
6, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800', 4,
'Boeuf haché, pain brioche, cheddar, salade, tomate, sauce burger', 0),

('Mac and Cheese', 30,
'1. Cuire les macaronis al dente.\n2. Préparer un roux avec beurre et farine.\n3. Ajouter le lait progressivement en remuant pour obtenir une béchamel.\n4. Incorporer le cheddar râpé hors du feu.\n5. Mélanger avec les pâtes égouttées.\n6. Gratiner au four avec chapelure et fromage 15 minutes.',
6, 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800', 4,
'Macaronis, cheddar, lait, beurre, farine, chapelure', 1),

('BBQ Ribs', 240,
'1. Retirer la membrane des côtes.\n2. Frotter généreusement avec le mélange d\'épices (paprika, cumin, cassonade, sel, poivre).\n3. Envelopper dans du papier alu et cuire au four 3h à 150°C.\n4. Préparer la sauce BBQ maison avec ketchup, miel, vinaigre et épices.\n5. Badigeonner les côtes de sauce et passer 15 minutes au grill.\n6. Servir avec coleslaw et maïs grillé.',
6, 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800', 4,
'Côtes de porc, sauce BBQ, paprika, miel, vinaigre de cidre', 0),

-- MAROC (country_id = 7)
('Tajine de poulet aux olives', 75,
'1. Faire revenir le poulet dans l\'huile d\'olive avec oignon et ail.\n2. Ajouter le ras el hanout, curcuma, gingembre, sel et poivre.\n3. Incorporer les citrons confits coupés en quartiers.\n4. Ajouter les olives vertes et un peu de bouillon.\n5. Cuire à couvert à feu doux 45 minutes.\n6. Parsemer de coriandre et persil frais avant de servir.',
7, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800', 4,
'Poulet, citron confit, olives, ras el hanout, coriandre', 0),

('Couscous royal', 90,
'1. Préparer le bouillon avec la viande, les légumes et les épices.\n2. Cuire les merguez séparément à la poêle.\n3. Faire gonfler le couscous avec du bouillon chaud et du beurre.\n4. Ajouter les légumes au bouillon : carottes, courgettes, navets, pois chiches.\n5. Égrainer le couscous à la fourchette.\n6. Servir le couscous avec la viande, les légumes et la harissa.',
7, 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800', 6,
'Couscous, merguez, agneau, légumes, pois chiches, harissa', 0),

('Pastilla au poulet', 80,
'1. Cuire le poulet avec oignons, coriandre, persil, gingembre et safran.\n2. Effilocher le poulet et réduire la sauce.\n3. Préparer la garniture aux amandes : amandes grillées, sucre, cannelle.\n4. Battre les oeufs dans la sauce restante pour former une omelette.\n5. Assembler en couches dans des feuilles de brick : omelette, poulet, amandes.\n6. Cuire au four 20 minutes et saupoudrer de sucre glace et cannelle.',
7, 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800', 6,
'Poulet, feuilles de brick, amandes, oeufs, cannelle, safran', 0);

-- ============================================
-- INGREDIENTS PAR RECETTE
-- ============================================

-- Quiche Lorraine (recipe_id=1)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(1, 1), (1, 2), (1, 30), (1, 33), (1, 53), (1, 6), (1, 7);

-- Boeuf Bourguignon (recipe_id=2)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(2, 17), (2, 9), (2, 24), (2, 29), (2, 14), (2, 15), (2, 35);

-- Crêpes Suzette (recipe_id=3)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(3, 1), (3, 2), (3, 4), (3, 3), (3, 5), (3, 12);

-- Spaghetti Carbonara (recipe_id=4)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(4, 22), (4, 53), (4, 2), (4, 31), (4, 7);

-- Pizza Margherita (recipe_id=5)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(5, 1), (5, 34), (5, 32), (5, 11), (5, 6);

-- Risotto aux champignons (recipe_id=6)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(6, 21), (6, 29), (6, 31), (6, 9), (6, 8), (6, 35);

-- Sushi Saumon (recipe_id=7)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(7, 21), (7, 19), (7, 40), (7, 5), (7, 6), (7, 36);

-- Ramen au poulet (recipe_id=8)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(8, 16), (8, 36), (8, 37), (8, 8), (8, 2), (8, 39);

-- Gyoza (recipe_id=9)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(9, 18), (9, 36), (9, 37), (9, 8), (9, 38);

-- Tacos al Pastor (recipe_id=10)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(10, 18), (10, 45), (10, 9), (10, 46), (10, 47), (10, 12);

-- Guacamole (recipe_id=11)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(11, 41), (11, 12), (11, 9), (11, 10), (11, 46), (11, 44);

-- Enchiladas (recipe_id=12)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(12, 16), (12, 45), (12, 34), (12, 53), (12, 30);

-- Poulet Tikka Masala (recipe_id=13)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(13, 16), (13, 10), (13, 50), (13, 37), (13, 8), (13, 49);

-- Dal de lentilles (recipe_id=14)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(14, 52), (14, 10), (14, 9), (14, 48), (14, 47), (14, 46);

-- Saag Paneer (recipe_id=15)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(15, 28), (15, 30), (15, 9), (15, 8), (15, 37), (15, 48);

-- Burger Classic (recipe_id=16)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(16, 17), (16, 55), (16, 53), (16, 10), (16, 9), (16, 56);

-- Mac and Cheese (recipe_id=17)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(17, 22), (17, 53), (17, 4), (17, 3), (17, 1);

-- BBQ Ribs (recipe_id=18)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(18, 18), (18, 60), (18, 57), (18, 47), (18, 6);

-- Tajine de poulet (recipe_id=19)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(19, 16), (19, 65), (19, 64), (19, 61), (19, 46), (19, 11);

-- Couscous royal (recipe_id=20)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(20, 62), (20, 61), (20, 51), (20, 24), (20, 25), (20, 63);

-- Pastilla au poulet (recipe_id=21)
INSERT INTO recipeIngredients (recipe_id, ingredient_id) VALUES
(21, 16), (21, 2), (21, 66), (21, 58), (21, 9), (21, 46);

-- ============================================
-- UTILISATEURS DE TEST
-- ============================================
-- Mot de passe hashé = "password123" (bcrypt)
INSERT INTO User (username, password, email, verified, admin) VALUES
('admin', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@yboost.com', 1, 1),
('john_doe', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'john@example.com', 1, 0),
('jane_smith', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'jane@example.com', 1, 0);

-- ============================================
-- FAVORIS DE TEST
-- ============================================
INSERT INTO UserFav (user_id, recipe_id) VALUES
(2, 1), (2, 4), (2, 7),
(3, 5), (3, 11), (3, 13);

-- ============================================
-- LIKES DE TEST
-- ============================================
INSERT INTO UserLike (user_id, recipe_id, can_like) VALUES
(2, 1, 0), (2, 4, 0), (2, 5, 1),
(3, 7, 0), (3, 13, 0), (3, 16, 1);