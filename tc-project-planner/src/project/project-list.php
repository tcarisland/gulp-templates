 <div id="taskList">
 <div class="taskListWrapper">
   <?php
     $query_results = list_projects_db_query();
     $row_index = 0;
     foreach($query_results as $row) {
       $row_index++;
       include "panel.php";
     }
    ?>
 </div>
 <div class="tcLowerNavigationWrapper">
   <div class='tcHorizontalListItem' onclick="newProjectButtonClicked();"> New Project </div>
 </div>
 </div>
