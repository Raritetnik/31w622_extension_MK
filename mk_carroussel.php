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

 /*
filemtime() // retourne en milliseconde le temps de la dernière sauvegarde
plugin_dir_path() // retourne le chemin du répertoire du plugin
__FILE__ // le fichier en train de s'exécuter
wp_enqueue_style() // Intègre le link:css dans la page
wp_enqueue_script() // intègre le script dans la page
wp_enqueue_scripts // le hook
 */

function mk_enqueue() {
    $version_css = filemtime(plugin_dir_path(__FILE__).'style.css');
    $version_js = filemtime(plugin_dir_path(__FILE__).'js/carroussel.js');

    wp_enqueue_style("mk_carroussel",
                    plugin_dir_url(__FILE__) . "style.css",
                    array(), $version_css, false);
    wp_enqueue_script('mk_carrousel',
                    plugin_dir_url(__FILE__) . "js/carroussel.js",
                    array(), $version_js, true);
}

add_action("wp_enqueue_scripts", "mk_enqueue");

function boite_carroussel(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu =
    "<button class='bouton'>Ouvrir carrousel</button>"
     .'<div class="carrousel">'
        .'<button class="carrousel__x">X</button>'
        .'<figure class="carrousel__figure"></figure>'
        .'<form class="carrousel__form"></form>'
    . '</div> <!-- fin class="carrousel" -->';

    return $contenu;
}
add_shortcode('mk_carroussel', 'boite_carroussel');
?>
