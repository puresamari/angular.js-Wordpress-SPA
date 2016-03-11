<?php

function wspa_scripts() {
    //  vendor js
    wp_enqueue_script( 'wp-api' );
    wp_enqueue_script( 'vendor', get_template_directory_uri() . '/vendor/vendor.bundle.js');
    //  vendor css
    wp_enqueue_style( 'vendor-style', get_template_directory_uri() . '/vendor/vendor.bundle.css');
    //theme js
    wp_enqueue_script( 'app', get_template_directory_uri() . '/app.js');
	// Theme stylesheet.
	wp_enqueue_style( 'wspa-style', get_stylesheet_uri() );
}

function register_menus() {
    register_nav_menu( 'Top-Menu', 'Top Menu' );
}

function ng_gallery_shortcode($attr) {
    $ids = str_replace('"', '', json_encode(explode(",", $attr["ids"])));
    return '<gallery image-ids="'.$ids.'"></gallery>';
}

class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el ( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $sref = 'ui-sref="main.'.$item -> object."({'id':'".$item -> object_id."'})".'"';
        $ariaLabel = 'aria-label="'.$item -> title.'"';
        echo '<md-button class="md-primary" '.$sref.' '.$ariaLabel.'>'.$item -> title.'</md-button>';
    }
    function end_el( &$output, $item, $depth = 0, $args = array() ) {}
}

add_action( 'wp_enqueue_scripts', 'wspa_scripts' );
add_action( 'after_setup_theme', 'register_menus' );

add_filter('show_admin_bar', '__return_false');

remove_shortcode('gallery', 'gallery_shortcode');
add_shortcode('gallery', 'ng_gallery_shortcode');

?>