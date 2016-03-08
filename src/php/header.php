<?php
/**
 * @package WordPress
 * @subpackage wspa
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="<?= site_url(); ?>/" target="_self">
    
	<?php wp_head(); ?>
    
    <script>
        var wpThemeUrl = "<?= get_template_directory_uri(); ?>";
    </script>
    
    <style>
    </style>
    
</head>
<body ng-app="WSPA" layout="column" ng-cloak layout-fill>