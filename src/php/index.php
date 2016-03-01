<?php get_header(); ?>

<section class="app" ng-app="WSPA">
    
    <section id="top-menu">
        <div class="menu-items">
            <a class="menu-item" ui-sref="main.landing">return to main</a>
            <?= 
                wp_nav_menu ( [
                    "menu" => "Top-Menu",
                    'walker' => new Custom_Walker_Nav_Menu
                ] ); 
            ?>
        </div>
    </section>
    
    <section id="wrapper" ui-view>loading main....</section>

</section>

<?php get_footer(); ?>