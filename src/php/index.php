<?php get_header(); ?>

    <md-toolbar layout="row" md-whiteframe="2">
      <div class="md-toolbar-tools">
        <md-button ui-sref="main.landing" class="md-raised md-accent">
            Home<md-icon md-font-icon="icon-home" ng-style="{color: 'green', 'font-size':'36px', height:'36px'}">
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
    <div layout="column" layout-fill layout-align="center"  md-whiteframe="1">
        <md-progress-circular ng-show="loading"></md-progress-circular>
        <section ui-view ng-show="loading"></section>
    </div>
</md-content>

<?php get_footer(); ?>