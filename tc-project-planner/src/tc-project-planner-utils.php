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

function tc_plugin_add_project() {
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

function tc_plugin_add_task() {
  $projectId = $_POST['projectId'];
  $taskName = $_POST['taskName'];
  $taskDescription = $_POST['taskDescription'];
  global $wpdb;
  $table_name = $wpdb->prefix . 'tc_project_planner_tasks';
  $wpdb->insert(
    $table_name, 
    array(
      'name' => $taskName,
      'description' => $taskDescription,
      'project_id' => $projectId
    )
  );
  echo "project_id : " . $projectId . " task name : " . $taskName . " task description : " . $taskDescription . " results: " . $wpdb->get_results();
  wp_die();
}

function tc_plugin_remove_project() {
  $projectId = $_POST['projectId'];
  global $wpdb;
  $table_name = $wpdb->prefix . 'tc_project_planner_projects';
  $wpdb->delete(
    $table_name,
    array(
      'id' => $projectId
    )
  );
  echo $wpdb->get_results();
	wp_die();
}

function tc_plugin_remove_task() {
  $taskId = $_POST['taskId'];
  global $wpdb;
  $table_name = $wpdb->prefix . 'tc_project_planner_tasks';
  $wpdb->delete(
    $table_name,
    array(
      'id' => $taskId
    )
  );
  $wpdb->show_errors();
  echo $taskId . " - " . $wpdb->get_results() . " - " . $wpdb->show_errors();
  wp_die();
}

function list_items_db_query($type) {
  global $wpdb;
  $table_name;
  $table_name = $wpdb->prefix . "tc_project_planner_" . $type;
  $charset_collate = $wpdb->get_charset_collate();
  $sql = "SELECT * FROM $table_name;";
  return $wpdb->get_results($sql);
}

function render_column_name($column) {
  if(strpos($column, "_") !== false) {
    $column = str_replace("_", " ", $column);
  }
  $column = ucfirst($column);
  return "<b> " . $column . "</b>";
}

function tc_plugin_admin_ajax_switch_view() {
  switch($_POST['view']) {
    case "listProjects":
      include "project/project-list.php";
      break;
    case "addProject":
      include "add-item-panels/admin-add-project.php";
      break;
    case "addTask":
      include "add-item-panels/admin-add-task.php";
      break;
    case "listTasks":
      if( isset($_POST['project_id']) ) {
        $projectId = $_POST['project_id'];
      }
      include "tasks/task-list.php";
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
