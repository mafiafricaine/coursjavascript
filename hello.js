/**
 * Fonction permettant d'afficher hello avec un prenom entrer au clavier
 * @param {string} prenom Entrez un prénom
 */
export default function(prenom = "World") {
    console.log('hello '+ prenom)
}

/**
 * On peut avec la jsdoc préciser le type de retour. Ici je vais retourner 
 * un objet qui aura un id, un titre et un body comme attribut
 *  return {{Array<string>}} // equivalent {string[]}
 * si y a plusieurs return on peut ecrire at returns {boolean} par exemple 
 * @return {{id: number, title: string, body:string}}
 */
function fetchPost(){

}
//a indiquera que c'est un objet
const a = fetchPost();

/**
 * @type {string[]}
 */
const tab = []


