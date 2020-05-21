<?php

function tc_plugin_setup_menu() {
  $page_title = 'TC Project Planner';
  $menu_title = $page_title;
  $capability = 'manage_options';
  $menu_slug  = 'tc-project-planner';
  $menu_page_callback = 'tc_render_menu_page';
  add_menu_page($page_title, $menu_title, $capability, $menu_slug, $menu_page_callback);
}

function tc_plugin_deps() {
  wp_enqueue_script("tc_plugin_script", $script_file, false);
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

  $result = "This is the result of the Query";
  set_transient( 'tc-project-planner-notice', $result, 5 );
}

function tc_plugin_admin_notice(){
    $result = get_transient( 'tc-project-planner-notice' );
    if( strlen($result) > 0 ){
        ?>
        <div class="updated notice is-dismissible">
            <p>TC Project Planner plugin message: </p>
            <?php echo $result ?>
        </div>
        <?php
        delete_transient( 'tc-project-planner-notice' );
    }
}

function tc_render_menu_page() {
  include 'admin-menu.php';
}

?>
