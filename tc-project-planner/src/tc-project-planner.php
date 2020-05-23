<?php
/*
Plugin Name: TC Project Planner
Plugin URI: http://www.tcarisland.no
Description: A simple project planner for WordPress
Author: Thor Christopher Arisland
Author URI: http://www.tcarisland.no
License: Free for personal use
*/

include_once('tc-project-planner-init-functions.php');
include_once('tc-project-planner-utils.php');

add_action('admin_menu', 'tc_plugin_setup_menu');
add_action('wp_enqueue_scripts', 'tc_plugin_deps' );
add_action('admin_notices', 'tc_plugin_admin_notice' );

add_action('wp_ajax_add_project', 'tc_plugin_admin_ajax_request' );
add_action('wp_ajax_switch_admin_view', 'tc_plugin_admin_ajax_switch_view' );

register_activation_hook( __FILE__, 'tc_plugin_activation' );

 ?>
