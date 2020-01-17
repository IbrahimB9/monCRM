var connexionbtn = document.getElementById("connexion")
var gerer = document.getElementById("gerer")
var deconnexion = document.getElementById("deconnexion")
var connexionstatus
var JeuxV = [{ Titre: "GTA 5", Annee: "2013", Description: "Open-world" }]
var Com = [{ Nom: "gtaRP FRENCH", Nbmembres: "352", Description: "Communauté roleplay de france" }]
var nomdepage = window.location.pathname;
var test = { _embed: [{}] }
console.log(nomdepage);

alert("TU VEUX GAGNER UN IPHONE 11 C'EST ICI")

recupererBaseJeux()



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


chargerMembres()

// CONNEXION
window.onload = function checkConnexion() {

    connexionstatus = sessionStorage.getItem('connexionstatus');
    connexionstatus = JSON.parse(connexionstatus);



    if (connexionstatus == true) {
        document.getElementById("connexion").style.display = "none"
        document.getElementById("deconnexion").style.display = "block"
        document.getElementById("gerer").style.display = "block"
    }
    if (nomdepage == "/C:/Users/Stagiaire/Desktop/monCRM/gerer.html") {
        listeMembres()

    }

    if (nomdepage == "/C:/Users/Stagiaire/Desktop/monCRM/index.html") {

    }

    if (nomdepage == "/C:/Users/Stagiaire/Desktop/monCRM/liste-des-jeux.html") {
        recupererBaseJeux()
    }

}
var hamOK = 0

//Menu hamburger

function ham() {
    if (hamOK == 0) {

        document.getElementById("pagesMin").style.display = "block"
        hamOK = 1

    } else {

        document.getElementById("pagesMin").style.display = "none"
        hamOK = 0

    }
}


//Creer mon compte


function divConnexion() {
    document.getElementById("pageclient").style.display = "block"
}

function divCreerCompte() {
    document.getElementById("pageclient").style.display = "none"
    document.getElementById("creerCompte").style.display = "block"
}




function creerMonCompte() {
    var creerUtilisateur = document.getElementById("creerUtilisateur").value
    var creerAge = document.getElementById("creerAge").value
    var creerGenre = document.getElementById("creerGenre").value
    var creerMotDePasse = document.getElementById("creerMotDePasse").value
    var nv = {
        pseudo: creerUtilisateur,
        age: creerAge,
        genre: creerGenre,
        mtp: creerMotDePasse
    }
    tableauMembres.push(nv);
    sauvegardeDeMembres()
    document.getElementById("creerCompte").style.display = "none"

}

// Se connecter


function clickConnexion() {

    var code = document.getElementById("motDePasse").value
    var uti = document.getElementById("utilisateur").value
    console.log("ca passe")


    if (code == "ok" && uti == "admin") {
        alert("Bienvenue admin")
        console.log("ca passe")
        connexionstatus = true
        document.getElementById("connexion").style.display = "none"
        document.getElementById("deconnexion").style.display = "block"
        document.getElementById("gerer").style.display = "block"
        document.getElementById("gererMin").style.display = "block"
        document.getElementById("pageclient").style.display = "none"
        sessionStorage.setItem('connexionstatus', 'true');
    } else {
        console.log("ca passe")
        for (var u = 0; u < tableauMembres.length; u++) {
            console.log("ca passe")
            if (code == tableauMembres[u].mtp && uti == tableauMembres[u].pseudo) {
                console.log(tableauMembres[u.mtp])
                console.log("ca passe")
                connexionstatus = true
                alert("Bienvenue utilisateur")
                document.getElementById("connexion").style.display = "none"
                document.getElementById("deconnexion").style.display = "block"
                document.getElementById("pageclient").style.display = "none"
                sessionStorage.setItem('connexionstatus', 'true');
            }
            console.log("ca passe")
        }

    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retour() {
    document.getElementById("pageclient").style.display = "none"
}

function retour2() {
    document.getElementById("creerCompte").style.display = "none"
}

//Se deconnecter

function clickDeconnexion() {

    if (connexionstatus == true) {
        console.log("ca passe encore")
        document.getElementById("connexion").style.display = "block"
        document.getElementById("deconnexion").style.display = "none"
        document.getElementById("gerer").style.display = "none"
        connexionstatus = false
        sessionStorage.setItem('connexionstatus', 'false');
    }
}

//Sortir de la page admin si on est deconnecter

function sortirGerer() {
    document.location.href = "/C:/Users/Stagiaire/Desktop/monCRM/index.html"
}







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sous menu dashboard
function sousMenuProduits() {
    document.getElementById("produits").style.display = "block"
    document.getElementById("Dashboard").style.display = "none"
    document.getElementById("communautés").style.display = "none"
    document.getElementById("actualité").style.display = "none"
    document.getElementById("produit").style.backgroundColor = "#202020"
    document.getElementById("membres").style.display = "none"
    document.getElementById("membre").style.backgroundColor = "#111111"
    document.getElementById("actuality").style.backgroundColor = "#111111"
    document.getElementById("dashboard").style.backgroundColor = "#111111"
    document.getElementById("comunity").style.backgroundColor = "#111111"
}

function sousMenuMembres() {
    document.getElementById("membres").style.display = "block"
    document.getElementById("Dashboard").style.display = "none"
    document.getElementById("communautés").style.display = "none"
    document.getElementById("actualité").style.display = "none"
    document.getElementById("produits").style.display = "none"
    document.getElementById("produit").style.backgroundColor = "#111111"
    document.getElementById("actuality").style.backgroundColor = "#111111"
    document.getElementById("comunity").style.backgroundColor = "#111111"
    document.getElementById("dashboard").style.backgroundColor = "#111111"
    document.getElementById("membre").style.backgroundColor = "#202020"
}

function sousMenuCommunautés() {
    document.getElementById("communautés").style.display = "block"
    document.getElementById("Dashboard").style.display = "none"
    document.getElementById("actualité").style.display = "none"
    document.getElementById("produits").style.display = "none"
    document.getElementById("membres").style.display = "none"
    document.getElementById("produit").style.backgroundColor = "#111111"
    document.getElementById("membre").style.backgroundColor = "#111111"
    document.getElementById("dashboard").style.backgroundColor = "#111111"
    document.getElementById("comunity").style.backgroundColor = "#202020"
    document.getElementById("actuality").style.backgroundColor = "#111111"
}

function sousMenuActualités() {
    document.getElementById("actualité").style.display = "block"
    document.getElementById("Dashboard").style.display = "none"
    document.getElementById("communautés").style.display = "none"
    document.getElementById("produits").style.display = "none"
    document.getElementById("membres").style.display = "none"
    document.getElementById("produit").style.backgroundColor = "#111111"
    document.getElementById("membre").style.backgroundColor = "#111111"
    document.getElementById("comunity").style.backgroundColor = "#111111"
    document.getElementById("dashboard").style.backgroundColor = "#111111"
    document.getElementById("actuality").style.backgroundColor = "#202020"
}

function sousMenuDashboard() {
    document.getElementById("Dashboard").style.display = "block"
    document.getElementById("actualité").style.display = "none"
    document.getElementById("communautés").style.display = "none"
    document.getElementById("produits").style.display = "none"
    document.getElementById("membres").style.display = "none"
    document.getElementById("produit").style.backgroundColor = "#111111"
    document.getElementById("membre").style.backgroundColor = "#111111"
    document.getElementById("comunity").style.backgroundColor = "#111111"
    document.getElementById("actuality").style.backgroundColor = "#111111"
    document.getElementById("dashboard").style.backgroundColor = "#202020"
}


////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



// gestion des membres


var selectMembre = document.getElementById('membre-select')

function listeMembres() {
    var listeMembresVide = "";

    for (var i = 0; i < tableauMembres.length; i++) {

        listeMembresVide += "<option>" + tableauMembres[i].pseudo + "</option>"

        document.getElementById('membre-select').innerHTML = listeMembresVide;
    }


}

function creerMembre() {
    var ajouterPseudo = document.getElementById('inputPseudo').value;
    var ajouterAge = document.getElementById('inputAge').value;
    var ajouterGenre = document.getElementById('inputGenre').value;
    var ajouterMDP = document.getElementById('inputMDP').value;

    var membre = {
        pseudo: ajouterPseudo,
        age: ajouterAge,
        genre: ajouterGenre,
        mtp: ajouterMDP

    }
    tableauMembres.push(membre);
    sauvegardeDeMembres()
    listeMembres()
}


function sauvegardeDeMembres() {

    localStorage.setItem('tableauMembres', JSON.stringify(tableauMembres));
    console.log("save " + tableauMembres[1].pseudo)
}

function chargerMembres() {

    tableauMembresJSON = localStorage.getItem('tableauMembres')
    console.log(tableauMembresJSON)
    tableauMembres = JSON.parse(tableauMembresJSON);
    console.log(tableauMembres)




}



function supprimerMembres() {

    var membreSup = document.getElementById('supM').value

    for (c = 0; c < tableauMembres.length; c++) {

        if (membreSup == tableauMembres[c].pseudo) {

            tableauMembres.splice(c);
        }
    }
    listeMembres()
    sauvegardeDeMembres()
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//BASE DE DONNEES

async function recupererBaseJeux() {

    let response = await fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "6c46d927f6mshf28c957fb69bfb3p1be0bfjsn9bcfbde9cf8e"
        }
    })
    response = await response.json()
    response = await response.results
    let baseDonneJeux = await response
    console.log(baseDonneJeux)

    if (nomdepage == "/C:/Users/Stagiaire/Desktop/monCRM/gerer.html") {

        function nbmembres() {

            console.log(tableauMembres.length)
            document.getElementById("nbmembrescontenu").innerHTML = tableauMembres.length

        }
        nbmembres()



        function creerJeu() {
            var ajouterTitre = document.getElementById('inputTitre').value;
            var ajouterAnnee = document.getElementById('inputAnnee').value;
            var ajouterDescription = document.getElementById('inputDescription').value;
            var jeu = {
                name: ajouterTitre,
                released: ajouterAnnee,
                id: ajouterDescription
            }
            baseDonneJeux.push(jeu);
            listeJeuxHtml()


        }


        function listeJeuxHtml() {

            var proprieteJeux = "";
            for (var i = 0; i < baseDonneJeux.length; i++) {

                proprieteJeux += "<li>" + "Titre: " + baseDonneJeux[i].name + "<br>" + "Annee: " + baseDonneJeux[i].released + "<br>" + "Description: " + baseDonneJeux[i].id + "<br>" + "</li>" + "<br>" + "<br>" + "<br>";

                document.getElementById('Ljeux').innerHTML = proprieteJeux;
            }

        }
        listeJeuxHtml()

        listeJeuxHtml()

        function rechercher() {
            var cible = document.getElementById('inputRecherche').value

            for (c = 0; c < baseDonneJeux.length; c++) {

                if (cible == baseDonneJeux[c].name) {

                    baseDonneJeux.splice(c);
                }
            }
            listeJeuxHtml();


        }

        function nbjeux() {


            document.getElementById('nbjeuxcontenu').innerHTML = baseDonneJeux.length


        }

        nbjeux()

    }

    if (nomdepage == "/C:/Users/Stagiaire/Desktop/monCRM/liste-des-jeux.html") {

        //Lister les jeux sur la page liste de jeux



        function listeJeux() {

            var proprieteJeux = "";
            for (var i = 0; i < baseDonneJeux.length; i++) {

                proprieteJeux += "<li>" + "Titre: " + baseDonneJeux[i].name + "<br>" + "Annee: " + baseDonneJeux[i].released + "<br>" + "Description: " + baseDonneJeux[i].id + "<br>" + "</li>" + "<br>" + "<br>" + "<br>";

                document.getElementById('ldejeux').innerHTML = proprieteJeux;
            }


        }
        listeJeux()
    }

    // NOUVEAUTE PAGE D'ACCEUIL
    if (nomdepage == "/C:/Users/Stagiaire/Desktop/monCRM/index.html") {


        var newgame = document.getElementById("newgame")

        function Newgame() {
            var newgameVide = "";
            for (var i = (baseDonneJeux.length - 3); i < baseDonneJeux.length; i++) {

                newgameVide += "<li>" + "Titre: " + baseDonneJeux[i].name + "<br>" + "Annee: " + baseDonneJeux[i].released + "<br>" + "Description: " + baseDonneJeux[i].id + "<br>" + "</li>";

                document.getElementById('newgame').innerHTML = newgameVide;
            }

        }

        Newgame()
        console.log(newgame)
    }



}


// function Sauvegarde() {
//     var sauvegarde = 1
//     localStorage.setItem('JeuxV', JSON.stringify(JeuxV));
// }

// function Charger() {
//     sauvegarde = localStorage.getItem('sauvegarde');

//     JeuxVJSON = localStorage.getItem('JeuxV');
//     JeuxV = JeuxVJSON && JSON.parse(JeuxVJSON);


// }