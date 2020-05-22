<!DOCTYPE>
<html>
<head>
</head>
<body>
  <h1>TC Project Planner</h1>
  <h2>Project Name</h2>
  <input id="projectNameTextField" placeholder="Project Name"> </input>
  <h2>Project Description</h2>
  <input id="projectDescriptionTextField" placeholder="Project Description"> </input>
  <br>
  <?php
    require_once('tc-project-planner-utils.php');
    tc_plugin_deps();
    echo "This is the admin-menu.php file";
   ?>
   <br>
   <button onclick="tc_say_hello()">Click Me!</button>
   <br>
   <ul class="tc_horizontal_list">
     <li class="tc_horizontal_list">List Projects</li>
     <li class="tc_horizontal_list">List Tasks</li>
     <li class="tc_horizontal_list">Add Projects</li>
     <li class="tc_horizontal_list">Add Tasks</li>
   </ul>
</body>
</html>
