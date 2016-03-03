<?php

function wspa_scripts() {

    //  vendor js
    wp_enqueue_script( 'wp-api' );
    wp_enqueue_script( 'vendor', get_template_directory_uri() . '/vendor/vendor.bundle.js');
    
    //theme js
    wp_enqueue_script( 'app', get_template_directory_uri() . '/app.js');
    
	// Theme stylesheet.
	wp_enqueue_style( 'wspa-style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'wspa_scripts' );

function register_top_menu() {
    
    register_nav_menu( 'Top-Menu', 'Tis the fuggin top-menu u wot m8 imma slit yer faggin throat yer fuggin beggar' );
    
}

add_action( 'after_setup_theme', 'register_top_menu' );

remove_shortcode('gallery', 'gallery_shortcode');
add_shortcode('gallery', 'my_awesome_gallery_shortcode');

function my_awesome_gallery_shortcode($attr) {
    $output = "";
    $ids = explode(",", $attr["ids"]);
    foreach ($ids as $val) {
        $output = $output.
            '<a class="menu-item" ui-sref="main.image({id:'.$val.'})">'.
                '<img src="'.wp_get_attachment_thumb_url($val).'" class="img-thumbnail">'.
            '</a>';
    }
    return $output;
}

class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el ( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $id = $item -> object_id;
        $type = $item -> object;
        echo '<a class="menu-item" ui-sref="main.'.$type."({'id':'".$id."'})".'">'.$item -> title.'</a>';
    }

    function end_el( &$output, $item, $depth = 0, $args = array() ) {
    }
}