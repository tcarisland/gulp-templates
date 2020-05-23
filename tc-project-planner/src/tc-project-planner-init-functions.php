<?php

function tc_plugin_setup_menu() {
  $page_title = 'TC Project Planner';
  $menu_title = $page_title;
  $capability = 'manage_options';
  $menu_slug  = 'tc-project-planner';
  $menu_page_callback = 'tc_render_menu_page';
  add_menu_page($page_title, $menu_title, $capability, $menu_slug, $menu_page_callback);
}

function tc_plugin_activation() {
  global $wpdb;
  $table_name = $wpdb->prefix . "tc_project_planner_projects";
  $charset_collate = $wpdb->get_charset_collate();
  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
          id mediumint(9) NOT NULL AUTO_INCREMENT,
          name varchar(128) NOT NULL,
          description text,
          created_date datetime DEFAULT NOW(),
          PRIMARY KEY (id)
  ) $charset_collate;";
  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
  dbDelta($sql);
  set_transient( 'tc-project-planner-notice', $wpdb->get_results(), 5 );
}

function tc_render_menu_page() {
  include 'admin-menu.php';
}

?>
