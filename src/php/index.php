<?php get_header(); ?>

<section ng-app="WSPA" layout="column" ng-cloak>
    <md-toolbar class="md-whiteframe-z2">
      <div class="md-toolbar-tools">
        <md-button ui-sref="main.landing" class="md-accent">
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
    <md-content flex layout-padding id="wrapper">
        <md-progress-circular ng-show="loading"></md-progress-circular>
        <section ui-view ng-show="loading"></section>
    </md-content>
</section>

<?php get_footer(); ?>