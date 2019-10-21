var pizza;
var legumes;
var pepperoni;
var sauce;
var personne;
var TPS;
var TVQ;
var taxes;
var prix;
var prix_finale;

personne=prompt("Combien il y a t-il de personnes?");
pepperoni=prompt("Voulez des pepperonis?");
legumes=prompt("Voulez vous des légumes?");
sauce=prompt("voulez vous de la sauce?");
pizza = 10;
TPS = 0.05;
TVQ = 0.09975;
taxes = TPS + TVQ;

if(pepperoni === "oui"){
    pizza += 8;
}
else{
    if(legumes=== "oui"){
        pizza += 5;
    }
    else{
        if(sauce=== "oui"){
            pizza += personne;
        }
    }
}

prix = pizza * taxes;
prix_finale = pizza + prix;

document.write("Votre pizza coûte " +prix_finale);

//Le prix de la pizza au fromage avec des légumes et de la sauce, commandé par les 6 personnes, est égale a : 24.15$//