<div class="tcProjectPlannerWrapper">

  <div class="tcNavigationWrapper">
    <?php
       $navbar = array(
         "Projects" => "listProjects()",
         "Tasks" => "listTasks()",
         "Categories" => "listCategories()",
       );
       $gridColumn = 1;
       foreach($navbar as $buttonName => $buttonFunction) {
         echo "<div style='grid-column: " . ($gridColumn++) . ";' class='tcHorizontalListItem' onclick=" . $buttonFunction . ">" . $buttonName ."</div> ";
       }
    ?>
  </div>
  <?php
    require_once('tc-project-planner-utils.php');
    tc_plugin_deps();
   ?>
   <div id="adminContent">
   </div>
   <div id="tcProjectPlannerOverlayBackground">
     <div id="tcProjectPlannerOverlayDialog"></div>
   </div>
</div>
