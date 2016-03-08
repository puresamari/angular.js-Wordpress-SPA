<?php

function wspa_scripts() {

    //  vendor js
    wp_enqueue_script( 'wp-api' );
    wp_enqueue_script( 'vendor', get_template_directory_uri() . '/vendor/vendor.bundle.js');
    wp_enqueue_style( 'vendor-style', get_template_directory_uri() . '/vendor/vendor.bundle.css');
    
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
    $output = '<md-grid-list '.
        'md-cols="1" md-cols-sm="2" md-cols-md="3" md-cols-gt-md="6" '.
        'md-row-height-gt-md="1:1" md-row-height="4:3" '.
        'md-gutter="8px" md-gutter-gt-sm="4px">';
    $ids = explode(",", $attr["ids"]);
    foreach ($ids as $val) {
        $output = $output.
        '<md-grid-tile md-rowspan="1" md-colspan="3" md-colspan-sm="1" ng-class="tile.background">'.
            '<img src="'.wp_get_attachment_thumb_url($val).'" class="img-thumbnail" image-box="'.$val.'">'.
            '<md-grid-tile-footer><h3>replace</h3></md-grid-tile-footer>'.
        '</md-grid-tile>';
    }
    $output = $output.'</md-grid-list>';
    return $output;
}

class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el ( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $id = $item -> object_id;
        $type = $item -> object;
        echo '<md-button class="md-primary" ui-sref="main.'.$type."({'id':'".$id."'})".'" aria-label="'.$item -> title.'">'.$item -> title.'</md-button>';
    }

    function end_el( &$output, $item, $depth = 0, $args = array() ) {
    }
}