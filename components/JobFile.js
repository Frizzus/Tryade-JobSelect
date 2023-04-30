export function createJobFile(content) {
    // création de la liste de compétences
    let comps = "";
    for (const str of content.competences) {
        comps += `<li>${str}</li>\n`;
    }

    const container = document.createElement("article");
    container.classList.add("job");

    const innerhtml = `
        <header style='background-image: url(${content.imgLink})'>
            <div>${content.categorie}</div>
            <h3>${content.nom}</h3> 
        </header>
        <section>
            <p>Vous serez payé : <span><small>$</small> ${content.salaire} <small>/h</small></span></p>
            <p>Vos horaires de travail : <span>${content.hMin}<sub>h</sub> <span class="norm">-</span> ${content.hMax}<sub>h</sub></span></p>
            <p>Compétences requises : </p>
            <ul>
                ${comps}
            </ul>
        </section>
        <button>Accepter le travail</button>
        `;

    container.insertAdjacentHTML("afterbegin", innerhtml);
    return container;
}