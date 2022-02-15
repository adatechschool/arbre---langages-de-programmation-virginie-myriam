let liste = ["Pâtes", "Oeufs", "Sel", "Poivre", "Lardons", "Oignons", "Parmesan"];
let numberIngredients = liste.length;
document.body.innerHTML += "<p>Il faut " + numberIngredients + " ingrédients pour faire cette recette :</p>";

let ordreAlphabetique = liste.sort();

let i;
for (i=0; i<numberIngredients; i++) {
    document.body.innerHTML += "<p>" + (i+1) + ". " + ordreAlphabetique[i] + "</p>" // ou liste[i] + "<br>"
}
