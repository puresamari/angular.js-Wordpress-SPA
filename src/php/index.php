<?php get_header(); ?>
<md-toolbar layout="row" md-whiteframe="2">
    <div class="md-toolbar-tools">
        <md-button ui-sref="main.landing" class="md-raised md-accent">
            Home
        </md-button>
        <span flex></span>
        <?= 
            wp_nav_menu ( [
                "menu" => "Top-Menu",
                'walker' => new Custom_Walker_Nav_Menu
            ] ); 
        ?>
    </div>
</md-toolbar>


<md-content flex layout-padding>
    <section layout="column" layout-fill layout-align="center" ui-view ng-hide="loading"></section>
</md-content>

<?php get_footer(); ?>
<wspa-global-loading></wspa-global-loading>