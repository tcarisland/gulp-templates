<?php
/*
Plugin Name: TC Project Planner
Plugin URI: http://www.tcarisland.no
Description: A simple project planner for WordPress
Author: Thor Christopher Arisland
Author URI: http://www.tcarisland.no
License: Free for personal use
*/

add_action('admin_menu', 'tc_plugin_setup_menu');

function tc_plugin_setup_menu() {
  $page_title = 'TC Project Planner';
  $menu_title = $page_title;
  $capability = 'manage_options';
  $menu_slug  = 'tc-project-planner';
  $menu_page_callback = 'tc_render_menu_page';
  add_menu_page($page_title, $menu_title, $capability, $menu_slug, $menu_page_callback);
}

function tc_render_menu_page() {
  echo "Hello, Thor!";
}

 ?>
