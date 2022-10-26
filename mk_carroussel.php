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

function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu =
    "<div class='boite'>"
    . "<code>Auteur: " . get_the_author() . "</code>"
    . "<date>Date de publication: " . get_the_date() . "</date>"
    . "<h5>Adresse URL" . get_the_guid() . "</h5>"
    . "<h6>Catégorie: " . get_the_category() . "</h6>"
    . '</div> <!-- fin class="boite" -->';

    return $contenu;
}
add_shortcode('mk_carroussel', 'genere_html');
?>
