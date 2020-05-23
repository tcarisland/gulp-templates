<div class="tcProjectPlannerWrapper">

  <div class="tcNavigationWrapper">
  <ul class="tcHorizontalUnorderedList">
    <?php
       $navbar = array(
         "Projects" => "listProjects()",
         "Add Project" => "addProject()",
         "Tasks" => "listTasks()",
         "Categories" => "listCategories()",
       );
       foreach($navbar as $buttonName => $buttonFunction) {
         echo "<li class='tcHorizontalList' onclick=" . $buttonFunction . ">" . $buttonName ."</li> ";
       }
    ?>
  </ul>
  </div>
  <?php
    require_once('tc-project-planner-utils.php');
    tc_plugin_deps();
   ?>
   <br>
   <div id="adminContent" style="position: absolute: left: 0px;">
   </div>
</div>
