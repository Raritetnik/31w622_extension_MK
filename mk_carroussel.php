<?php
/**
 * @package Carroussel
 * @author Mykhaylo Kuzmin
 * @copyright Collège Maisonneuve
 * @license GPL-2.0-or-later
 *
 * Plugin Name: mk_carroussel
 * Description: Permet d'afficher une boite modale de l'image sélectionné d'une galerie. Pour ensuite acceder à toutes les autres images de la galerie
 * Author: Mykhaylo Kuzmin
 * Author URL: https://github.com/Raritetnik
 * Version: 1.0.0
 */

function boite_carroussel(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu =
    "<section class='carroussel'>"
    . "<button class='carroussel--fermer'>X</button>"
    . "<figure class='carroussel__figure'></figure>"
    . "<form class='carroussel__form'>
    <input type='radio' name='carroussel_radio'>1</input>
    <input type='radio' name='carroussel_radio'>2</input>
    </form>"
    . '</section> <!-- fin class="carroussel" -->';

    return $contenu;
}
add_shortcode('mk_carroussel', 'boite_carroussel');
?>
