//console.log(window.location);
//equivalent
//console.log(location);
//windows peut faire passer des variables globale/des informations
//window.a = "Aurevoir";

//querySelector ca nous renvoi un element(pas une chaine de caratère)
//querySelectorAll nous renvoi plusieurs éléments un peu comme un tableau
//mais on a pas accés a toute les fonctions d'un tableau
//un nodeList n'est pas un tableau
//console.log(document.querySelectorAll('li'));

//on peut du coup mettre dans une variable
//const lis = document.querySelectorAll('li');
//console.log(lis[2]);

//const ul = document.querySelector('ul');
//console.log(
//  ul.nodeName,
//   ul.innerHTML
//)

//on peut changer directement le css ici 
/*const li = document.querySelector('li');
li.style.color= 'blue';
li.style.fontWeight = 'bold';*/

//on peut ajouter un nouvelle li sans passer par le HTML
/*const newLi = document.createElement('li');
newLi.innerHTML = "Bonjour les gens d'ici";
newLi.style.color = "pink";*/
//envoi l'element en fin
//document.querySelector('ul').append(newLi);
//envoi l'élément en debut
//document.querySelector('ul').prepend(newLi);
//lorsqu'un element est rajouté dans le DOM, si on a déjà utilisé cette 
//référence, il ne l'affichera pas une fois de plus 
//Un élément ne peut pas etre à plusieurs endroit à la fois dans une 
//structure sur HTML

/*const ul = document.createElement('ul'); 
const div = document.createElement('div');
div.innerHTML = 'Hello world';
ul.insertAdjacentElement('beforebegin', div);*/

//on peut avoir l'ensemble des sous balises par exemple si on a une 
//ul avec 3 li, en faisant ul.children ca concernera tout les li
//c'est une collection live, donc si on la modifie via l'inspecteur, 
//ca le modifie en temps reel
//const ul = document.querySelector('ul');
//console.log(ul.children);
//en la mettant dans une variable globale c'est une collection live
//window.a = ul.children;
/*
//on peut parcourir de l'enfant vers le  parent 
const li = document.querySelector('ul li');
console.log(li.parentNode);
//element suivant et element précedent
console.log(li.nextElementSibling);
console.log(li.previousElementSibling);
//bloc suivant et bloc précedent
console.log(li.nextSibling);
console.log(li.previousSibling);
*/
//verifie si un ul contient un li
const li = document.querySelector('li');
const ul = document.querySelector('ul');
console.log(ul.contains(li));





