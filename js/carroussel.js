(function(){
    console.log("WORK!");
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerieImg = document.querySelectorAll('.galerie img');
    let elmBoutonOuvrir = document.querySelector('.bouton');
    let elmCarroussel = document.querySelector('.carroussel');
    elmBoutonOuvrir.addEventListener('mousedown', function() {
        console.log('Ouverture de carroussel');
        elmCarroussel.classList.add('carroussel__ouvrir');
        for(let elmImg of elmGalerieImg) {
            console.log(elmImg.getAttribute("src"));
        }
    });

    let elmBoutonFermer = document.querySelector('.carroussel--fermer');
    elmBoutonFermer.addEventListener('mousedown', function() {
        console.log('Ouverture de carroussel');
        elmCarroussel.classList.remove('carroussel__ouvrir');
    });

    /*let figure = elmCarroussel.querySelector('.carroussel__figure');
    let getFigureImages = document.querySelector('#galerie');
    figure.innerHTML = getFigureImages.innerHTML;
    getFigureImages.innerHTML = ""*/
})();