(function(){
    console.log("WORK!");
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerieImg = document.querySelectorAll('.galerie img');
    let elmBoutonOuvrir = document.querySelector('.bouton');
    let elmCarroussel = document.querySelector('.carroussel');
    elmBoutonOuvrir.addEventListener('mousedown', function() {
        for(const elmImg of elmGalerieImg) {
            let newElmImg = document.createElement('img');
            newElmImg.src = elmImg.src
        }
        elmCarroussel.classList.add('carroussel__ouvrir');
    });





    let elmBoutonFermer = document.querySelector('.carroussel--fermer');
    elmBoutonFermer.addEventListener('mousedown', function() {
        console.log('Ouverture de carroussel');
        elmCarroussel.classList.remove('carroussel__ouvrir');
    });

    elmGalerie.addEventListener('click', this.afficherImageCarroussel);
    //figure.innerHTML = getFigureImages.innerHTML;
    //getFigureImages.innerHTML = ""
})();



function afficherImageCarroussel(e) {
    let cible = e.target;
    let elmCarroussel = document.querySelector('.carroussel');
    console.log(e.target);
    let figure = elmCarroussel.querySelector('.carroussel__figure');
    console.log('OUVERTUTE');
    elmCarroussel.classList.add('carroussel__ouvrir');
    console.log(cible.src);
    figure.innerHTML = `<img src='${cible.src}' data-id='61' width="1920" heigth="1080" class='wp-image-61'>`;

}