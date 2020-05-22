<!DOCTYPE>
<html>
<head>
</head>
<body>
  <div class="tc_project_planner_wrapper">

    <div class="tc_navigation_wrapper">
    <ul class="tc_horizontal_unordered_list">
      <?php
         $navbar = array(
           "Projects" => "listProjects()",
           "Tasks" => "listTasks()",
           "Categories" => "listCategories()",
         );
         foreach($navbar as $buttonName => $buttonFunction) {
           echo "<li class='tc_horizontal_list' onclick=" . $buttonFunction . ">" . $buttonName ."</li> ";
         }
      ?>
    </ul>
    </div>

    <h1>TC Project Planner</h1>
    <h2>Project Name</h2>
    <input id="projectNameTextField" placeholder="Project Name"> </input>
    <h2>Project Description</h2>
    <input id="projectDescriptionTextField" placeholder="Project Description"> </input>
    <br>
    <?php
      require_once('tc-project-planner-utils.php');
      tc_plugin_deps();
     ?>
     <br>
     <button onclick="tc_say_hello()">Click Me!</button>
     <br>

  </div>
</body>
</html>
