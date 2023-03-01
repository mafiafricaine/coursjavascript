/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body:string}} post
 * @return {HTMLElement} 
 */
function createArticle(post){
    const article = document.createElement('article');
    // article.innerHTML= `
    //     <h2>${post.title}</h2>
    //     <p>${post.body}</p>
    // `
    const h2 = document.createElement('h2');
    h2.innerText = post.title;
    article.append(h2);

    const p = document.createElement('p');
    p.innerText = post.body;
    article.append(p);
    return article;

}
async function main() {
    const wrapper = document.querySelector('#lastPosts');
    const loader = document.createElement('p');
    loader.innerText = "Chargement...";
    wrapper.append(loader);
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5', {
            headers: {
                Accept: "application/json",
            }
        })
        if (!r.ok) {
            throw new Error("Erreur serveur");
        }
        const posts = await r.json();
        loader.remove();
        for (let post of posts){
            wrapper.append(createArticle(post));
        }
    } catch (e) {
        loader.innerText = "Impossible de charger les articles";
        loader.style.color = 'red';
        return
    }

}
main();