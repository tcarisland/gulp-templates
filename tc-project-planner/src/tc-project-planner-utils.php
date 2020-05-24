<?php

function tc_plugin_deps() {
  $script_file = plugin_dir_url(__FILE__) . "js/tc-project-planner.js";
  $style_file = plugin_dir_url(__FILE__) . "style.css";
  wp_enqueue_script("tc_plugin_script", $script_file, false);
  wp_enqueue_style("tc_plugin_style", $style_file, false);
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
  echo $wpdb->get_results();
	wp_die();
}

function list_projects_db_query() {
    global $wpdb;
    $table_name = $wpdb->prefix . "tc_project_planner_projects";
    $charset_collate = $wpdb->get_charset_collate();
    $sql = "SELECT * FROM $table_name;";
    $results = $wpdb->get_results($sql);
    $data = "";
    $row_index = 0;
    foreach($results as $row) {
      $data .= render_project_entry($row, ++$row_index);
    }
    return $data;
}

function render_column_name($column) {
  if(strpos($column, "_") !== false) {
    $column = str_replace("_", " ", $column);    
  }
  $column = ucfirst($column);
  return "<b> " . $column . "</b>";
}

function tc_plugin_admin_ajax_switch_view() {
  switch_view($_POST['view']);
}

function switch_view($view) {
  switch($view) {
    case "listProjects":
      include("admin-list-projects.php");
      break;
    case "addProject":
      include("admin-add-project.php");
      break;
    case "listTasks":
      echo "List Tasks Selected";
      break;
    case "listCategories":
      echo "List Categories Selected";
      break;
    default:
      echo "Error - Invalid View";
      break;    
  }
  wp_die();
}

?>
