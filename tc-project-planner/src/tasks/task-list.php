<?php
if(isset($projectID)) {
  echo "List Tasks selected " . $projectID;
} else {
  echo "List Tasks selected - No Project Selected";
}

global $wpdb;

$project_table_name = $wpdb->prefix . "tc_project_planner_projects";
$project_foreign_key_name = $wpdb->prefix . "tc_project_planner_projects(id)";
$task_table_name = $wpdb->prefix . "tc_project_planner_tasks";

$charset_collate = $wpdb->get_charset_collate();

$sqlTasks = "CREATE TABLE IF NOT EXISTS $task_table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(128) NOT NULL,
        description text,
        created_date datetime DEFAULT NOW(),
        project_id int,
        PRIMARY KEY (id),
        FOREIGN KEY (project_id) REFERENCES $project_foreign_key_name
) $charset_collate;";

?>

<br>
<div class="tcLowerNavigationWrapper">
  <div>
    Add Task
  </div>
</div>
<br>
<button style="" onclick="alert('hello')">Add Task</button>
