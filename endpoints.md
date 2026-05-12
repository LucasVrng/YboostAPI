### ENDPOINTS:

Base URL :

`
http://localhost:5000/api
`

## Recipes

Route qui récupére toutes les recettes :

`
GET /recipes
`

Route qui récupére toutes une recette en fonction de son id :

`
GET /recipes/{id}
`

Route qui permet de filtrer en fonction du nom de la recette:

`
GET /recipes?q={name}
`

Route qui permet de filtrer en fonction du pays d'origine de la recette:

`
GET /recipes?country={choice}
`

Route qui permet de récupérer les plats vegan seulement:

`
GET /recipes?is_vegan=true
`

Route qui permet d'ajouter une recette 

`
POST /recipes
`

Route qui permet de modifier une recette 

`
PUT /recipes
`

Route qui permet de supprimer une recette 

`
DELETE /recipes
`

Route qui permet de récupérer les ingrédients d'une recette

`
GET /recipes/{id}/ingredients
`

Route qui permet de récupérer le nombre de likes dans une semaine

`
GET /recipes/{id}/likes
`

Route qui permet d'ajouter une recette en favori

`
POST /recipes/{id}/favorite
`

Route qui permet de retirer une recette en favori

`
DELETE /recipes/{id}/favorite
`

## Users

Route qui permet de créer un nouvel utilisateur

`
POST /auth/register
`

Route qui permet de récupérer les recettes en favoris

`
GET /users/{id}/favorites
`

---
