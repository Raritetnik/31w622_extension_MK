(function () {
    let index = 0;
    let dernierIndex = -1;

    /* -------------- Les éléments du carrousel ------------- */
    let elmCarrousel = document.querySelector(".carrousel");
    let elmBtnOuverture = document.querySelector(".bouton");
    let elmBtnFermeture = document.querySelector(".carrousel__x");
    let elmCarrousel__figure = document.querySelector(".carrousel__figure");
    let elmCarrousel__form = document.querySelector(".carrousel__form");

    let elmGalerie = document.querySelector(".galerie");
    let elmGalerieImg = document.querySelectorAll(".galerie figure img");

    /**
     * Gestion de bouton ouverture / fermeture
     */
    elmBtnOuverture.addEventListener("mousedown", function () {
        elmCarrousel.classList.add("carrousel--ouvrir");
    });

    elmBtnFermeture.addEventListener("mousedown", function () {
        elmCarrousel.classList.remove("carrousel--ouvrir");
    });


    // Ajout des images dans la carroussel
    for (const elmImg of elmGalerieImg) {
        ajouter_img_carrousel(elmImg);
        ajouter_radio_carrousel();

        // Réaction sur click d'image exterieur de la carroussel
        elmImg.addEventListener("mousedown", function () {
        elmCarrousel.classList.add("carrousel--ouvrir");
        elmCarrousel__figure.children[this.dataset.index]
        .classList.add("activer");
        elmCarrousel__form.children[this.dataset.index].checked = true;
        dernierIndex = this.dataset.index;
        });
    }

    // Affichage des images dans la carroussel
    function ajouter_img_carrousel(elmImg) {
      // elmImg représente une image de la galerie */
      elmImg.dataset.index = index;
      let elmCarrousel__figure__img = document.createElement("img");
      elmCarrousel__figure__img.setAttribute("src", elmImg.getAttribute("src"));
      elmCarrousel__figure__img.classList.add("carrousel__figure__img");
      elmCarrousel__figure__img.dataset.index = index;
      elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
    }

    // Survol de carroussel avec boutons radios
    function ajouter_radio_carrousel() {
      let elmCarrousel__form__radio = document.createElement("input");
      elmCarrousel__form__radio.setAttribute("name", "carrousel__form__radio");
      elmCarrousel__form__radio.setAttribute("class", "carrousel__form__radio");
      elmCarrousel__form__radio.setAttribute("type", "radio");
      elmCarrousel__form__radio.dataset.index = index;
      index++;
      elmCarrousel__form.appendChild(elmCarrousel__form__radio);

      // Changement d'image au changement de bouton radio
      elmCarrousel__form__radio.addEventListener("mousedown", function () {
        console.log(this.dataset.index);

        if (dernierIndex != -1) {
          elmCarrousel__figure.children[dernierIndex]
          .classList.remove("activer");
        }

        elmCarrousel__figure.children[this.dataset.index]
        .classList.add("activer");
        console.log(index);
        dernierIndex = this.dataset.index;
      });
    }
  })();