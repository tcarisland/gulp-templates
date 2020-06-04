<?php

function tc_plugin_setup_menu() {
  $page_title = 'Projects';
  $menu_title = $page_title;
  $capability = 'manage_options';
  $menu_slug  = 'tc-project-planner';
  $menu_page_callback = 'tc_render_menu_page';
  add_menu_page($page_title, $menu_title, $capability, $menu_slug, $menu_page_callback);
}

function tc_plugin_activation() {
  ini_set('display_startup_errors', 1);
  ini_set('display_errors', 1);
  error_reporting(-1);
  init_tables();
}

function init_tables() {
  global $wpdb;
  
  $project_table_name = $wpdb->prefix . "tc_project_planner_projects";
  $project_foreign_key_name = $wpdb->prefix . "tc_project_planner_projects(id)";
  $task_table_name = $wpdb->prefix . "tc_project_planner_tasks";

  $charset_collate = $wpdb->get_charset_collate();
  
  $sqlProjects = "CREATE TABLE IF NOT EXISTS $project_table_name (
          id mediumint(9) NOT NULL AUTO_INCREMENT,
          name varchar(128) NOT NULL,
          description text,
          created_date datetime DEFAULT NOW(),
          PRIMARY KEY (id)
  ) $charset_collate;";
  
  $sqlTasks = "CREATE TABLE IF NOT EXISTS $task_table_name (
          id mediumint(9) NOT NULL AUTO_INCREMENT,
          name varchar(128) NOT NULL,
          description text,
          created_date datetime DEFAULT NOW(),
          project_id mediumint(9),
          PRIMARY KEY (id),
          CONSTRAINT `fk_wp_tc_project_planner_projects_id`
        		FOREIGN KEY (project_id) REFERENCES $project_foreign_key_name
  ) $charset_collate;";

  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
  dbDelta($sqlProjects);
  dbDelta($sqlTasks);
  set_transient( 'tc-project-planner-notice', $wpdb->get_results(), 5 );
}

function tc_render_menu_page() {
  include 'admin-menu.php';
}

?>
