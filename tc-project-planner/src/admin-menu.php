<div class="tcProjectPlannerWrapper">

  <div class="tcNavigationWrapper">
    <?php
       $navbar = array(
         "Projects" => "listProjects()",
         "Add Project" => "addProject()",
         "Tasks" => "listTasks()",
         "Categories" => "listCategories()",
       );
       foreach($navbar as $buttonName => $buttonFunction) {
         echo "<div class='tcHorizontalList' onclick=" . $buttonFunction . ">" . $buttonName ."</div> ";
       }
    ?>
  </div>
  <?php
    require_once('tc-project-planner-utils.php');
    tc_plugin_deps();
   ?>
   <br>
   <div id="adminContent" style="position: absolute: left: 0px;">
   </div>
</div>
