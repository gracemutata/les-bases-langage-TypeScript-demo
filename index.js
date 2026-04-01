"use strict";
// Demo les bases du langage TypeScript
/**
 * Exercice 1 : Types de base
 * Énoncé : Déclarez une variable de chaque type de base
 * de TypeScript : string, number, boolean, null et undefined.
 * Attribuez-leur des valeurs appropriées.
 */
// solution :
let noms = "Graven grace";
let age = 21;
let estEtudiant = true;
let valeurNull = null;
let valeurUndefined = undefined;
// -------------------
/**
 * Exercice 2 : Tableaux
 * Énoncé : Créez un tableau de nombres et un tableau
 * de chaînes de caractères. Ajoutez-y quelques éléments.
 */
// solution :
let nombres = [1, 2, 3, 4, 5];
let messages = ["Bonjour", "Comment ça va?", "Au revoir"];
// -------------------
/**
 * Exercice 3 : Fonctions
 * Énoncé : Écrivez une fonction qui prend deux nombres en entrée
 * et retourne leur somme. Spécifiez les types des paramètres
 * et du type de retour.
 */
// solution :
function addition(a, b) {
    return a + b;
}
const user = {
    nom: "Aïcha",
    age: 20
};
// -------------------
/**
 * Exercice 5 : Classes
 * Énoncé : Créez une classe Voiture avec les propriétés
 * marque (string) et modèle (string).
 * Ajoutez une méthode afficherInfos() qui affiche
 * les informations de la voiture.
 */
// solution :
class Voiture {
    marque;
    modele;
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
    afficherInfos() {
        console.log(`Marque: ${this.marque}, Modèle: ${this.modele}`);
    }
}
let maVoiture = new Voiture("Toyota", "Camry");
maVoiture.afficherInfos();
// -------------------
/**
 * Exercice 6 : Génériques
 * Énoncé : Écrivez une fonction générique qui prend
 * un tableau d'éléments de n'importe quel type et retourne
 * le premier élément.
 */
// solution :
function premierElement(tableau) {
    return tableau.length > 0 ? tableau[0] : undefined;
}
// -------------------
/**
 * Exercice 7 : Types Union
 * Énoncé : Déclarez une variable qui peut être soit un nombre,
 * soit une chaîne de caractères.
 * Attribuez-lui une valeur de chaque type.
 */
// solution :
let variable;
variable = 42;
variable = "Hello, world!";
// -------------------
/**
 * Exercice 8 : Enums
 * Énoncé : Créez un enum Couleur avec les valeurs Rouge, Vert et Bleu.
 * Utilisez l'enum pour définir la couleur d'une variable.
 */
// solution :
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
let maCouleur = Couleur.Vert;
// -------------------
/**
 * Exercice 9 : Tuples
 * Énoncé : Créez un tuple qui représente les coordonnées (x, y)
 * d'un point. Accédez aux éléments du tuple.
 */
// solution :
let point = [10, 20];
let x = point[0];
let y = point[1];
// -------------------
/**
 * Exercice 10 : Optionnel
 * Énoncé : Déclarez une variable qui peut être soit
 * une chaîne de caractères, soit null.
 * Vérifiez si la variable est null avant de l'utiliser.
 */
// solution :
let nom = "Alice";
if (nom !== null) {
    console.log(`Le nom est : ${nom}`);
}
else {
    console.log("Le nom est null.");
}
// -------------------
