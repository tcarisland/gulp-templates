<?php

function tc_plugin_deps() {
  $script_file = plugin_dir_url(__FILE__) . "js/tc-project-planner.js";
  wp_enqueue_script("tc_plugin_script", $script_file, false);
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

function tc_plugin_admin_ajax_request() {
  $projectName = $_POST['projectName'];
  $projectDescription = $_POST['projectDescription'];
  global $wpdb;
  $table_name = $wpdb->prefix . 'tc_project_planner_projects';
  $wpdb->insert(
    $table_name,
    array(
      'name' => $projectName,
      'description' => $projectDescription
    )
  );
  echo strrev($wpdb->get_results());
	wp_die();
}

?>
