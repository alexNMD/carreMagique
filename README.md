# carreMagique

## Etape 1:
On commence par initialiser tous les éléments du tableau à zéro. L'initialisation à zéro de tous
les éléments du carré permettra ultérieurement de déduire si la case pointée est libre ou non.
## Etape 2:
Le chiffre 1 est placé dans la case au milieu de la dernière ligne du carré.
## Etape 3:
Une fois qu'une case a été remplie, on en choisit une autre en effectuant, par rapport à la case
qui vient d'être remplie précédemment, deux mouvements successifs :
- l'un horizontal vers la case de droite
- l'autre vertical d'une case vers le haut

Si i est l'indice de ligne et j l'indice de colonne, ce déplacement s'obtient en effectuant i = i+1
et j = j+1. Deux cas peuvent alors se présenter:
1. La case atteinte est libre, on y place alors le nombre suivant.
2. La case atteinte est déjà remplie, on en choisit une autre en effectuant un déplacement vertical vers le
haut à partir de la case de départ.
Etape 4:
La loi de progression mentionnée ci-dessus entraînera tôt ou tard une sortie hors des limites
du carré défini. Dès qu'un déplacement oblige à sortir du carré, on se place dans la case
correspondante du bord opposé et on continue à effectuer la suite des déplacements.
On peut interpréter cette règle d'une autre manière, en considérant simplement que le carré
est, pour chaque dimension, placé sur un cylindre de telle sorte que la ligne du bas est située
immédiatement au- dessus de celle du haut, que la colonne de droite est située à gauche de la
première colonne, et réciproquement pour la colonne de gauche.

# Indications pour la programmation
- On n'effectuera pas le calcul si l'ordre n demandé n'est pas impair.
- On se limite à un ordre tel que la visualisation reste possible.
- Place le chiffre 1 dans la case d’indice (n, (n + 1)/2).
- Si une case n’est pas vide, le nombre suivant est placé à la case d’indice (i-1, j).
- Si un indice est supérieur à n il est ramené à 1.
# Fonctions à réaliser
Le programme principal devra impérativement appeler au moins 2 fonctions :
- Une première fonction qui consiste à générer le carré magique de l'ordre spécifié en suivant
l'algorithme donné précédemment.
- Une deuxième fonction ayant pour objectif de réaliser la visualisation à l'écran du carré magique
résultant des calculs précédents.
- Réaliser une fonction permettant de vérifier si le carré est bien magique.
- Améliorer la procédure d'affichage tel que celui-ci puisse se réaliser en temps réel. Ainsi, on doit
pouvoir observer le remplissage du carré magique au fur et à mesure qu'un nombre a été introduit
dans le tableau.
