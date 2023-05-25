function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function afficheralea() {
    lesrecettealeat = document.getElementById("recettealeatoire");
    randomNumber1 = getRandomNumber(1, 10);
    do {
        randomNumber2 = getRandomNumber(1, 10);
        console.log(randomNumber2);
        randomNumber3 = getRandomNumber(1, 10);
    }  while (randomNumber1 == randomNumber2 || randomNumber1 == randomNumber3 || randomNumber2 == randomNumber3);


    for (i = 0; i < recettesDB.length; i++){
        if (recettesDB[i].id == randomNumber1 || recettesDB[i].id == randomNumber2 || recettesDB[i].id == randomNumber3) {
            let link = document.createElement("a");
            // set the href attribute to the target page URL
            link.setAttribute("href", "details.html?lediv=" + recettesDB[i].id);

            photo = document.createElement("img");
            nImg = Math.floor(Math.random() * 4) + 1;
            photo.setAttribute("src","../assets/recettes/" + recettesDB[i].id + "/" + nImg + ".png");
            photo.setAttribute("alt", recettesDB[i].name);
            divimg = document.createElement("div");
            divimg.classList.add('divimage');
            divimg.appendChild(photo)
            link.appendChild(divimg);
            divtexte = document.createElement("div");
            nom = document.createElement("div");
            categorie = document.createElement("div");
            duree = document.createElement("div");
            note = document.createElement("div");

            nom.innerText = recettesDB[i].name;
            categorie.innerText = "catégorie : " + recettesDB[i].category;
            duree.innerText = "durée : " + recettesDB[i].duration;
            notesum = 0;
            for (j = 0; j < recettesDB[i].comments.length; j++) {
                notesum = notesum + recettesDB[i].comments[j].rating;
            }
            noteavrg = notesum / recettesDB[i].comments.length;
            note.innerHTML = "note globale : " + noteavrg;
            // add class names to elements
            divtexte.classList.add('divtextealea');
            nom.classList.add('nomalea');
            categorie.classList.add('categoriealea');
            duree.classList.add('dureealea');
            note.classList.add('notealea');
            
            divtexte.appendChild(nom);
            divtexte.appendChild(categorie);
            divtexte.appendChild(duree);
            divtexte.appendChild(note);
            divimg.appendChild(divtexte);
            // append the divtexte element to the <a> tag
            link.appendChild(divimg);
            // append the <a> tag to the parent element
            lesrecettealeat.appendChild(link);
        }
    }

}




