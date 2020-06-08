<div id="taskList">
<div class="taskListWrapper">
  <?php
    $query_results = list_items_db_query("tasks");
    $row_index = 0;
    foreach($query_results as $row) {
      $row_index++;
      include "panel.php";
    }
   ?>
</div>
<div class="tcLowerNavigationWrapper">
  <div class='tcHorizontalListItem' onclick="newItemButtonClicked('addTask');"> Add Task </div>
  <div class='tcHorizontalListItem' onclick="alert('List Tasks')"> List Tasks </div>
</div>
</div>
