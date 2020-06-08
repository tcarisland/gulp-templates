 <div id="taskList">
 <div class="taskListWrapper">
   <?php
     $query_results = list_items_db_query("projects");
     $row_index = 0;
     foreach($query_results as $row) {
       $row_index++;
       include "panel.php";
     }
    ?>
 </div>
 <div class="tcLowerNavigationWrapper">
   <div class='tcHorizontalListItem' onclick="newItemButtonClicked('addProject');"> New Project </div>
 </div>
 </div>
