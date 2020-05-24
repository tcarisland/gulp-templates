<?php 
  $query_results = list_projects_db_query();
  $row_index = 0;
  foreach($query_results as $row) {
    $row_index++;
    include "panel.php";
  }
 ?>