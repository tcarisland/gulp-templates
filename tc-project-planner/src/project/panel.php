<?php 
  $bgclass = "accordionOdd";
  if($row_index % 2 == 0) {
    $bgclass = "accordionEven";    
  }
  $panel_id = "projectPanelNo" . $row_index;
  $project_number_and_name = $row_index . ". " . $row->name;
?>

<button class="accordion <?php echo $bgclass ?>" onclick='toggleAccordion("<?php echo $panel_id ?>")'><b><?php echo $project_number_and_name ?></b></button>
<div class="panel" id="<?php echo $panel_id ?>">
  <table cellspacing='0' cellpadding='0'  style="width: 100%">
    <?php 
    $i = 0;
    foreach($row as $key => $value) {
      $bgcolor = "rgba(0, 0, 0, 0.1)";
      if(++$i % 2 == 0) {
        $bgcolor = "rgba(0, 0, 0, 0.2)";      
      }
      echo "<tr style='background-color: $bgcolor;'><td style='vertical-align: top; width: 100px; font-weight: bold;'>";
      echo ucfirst(str_replace("_", " ", $key));
      echo "</td><td>";
      if($key == "description") {
        echo "<textarea id='projectDescription" . $row->id . "' style='width: 100%;' rows='10'>" . $value . "</textarea>";        
      } elseif($key == "id") {
        echo "<input id='projectID" . $row->id . "' style='width: 100%;' value='" . $value . "'>";
      } else {
        echo $value;
      }
      echo "</td></tr>";
    }
    ?>
  </table>
  <div class="<?php echo $bgclass; ?>" style="padding: 5px; display: flex; flex-direction: row; justify-content: flex-end;">
    <button onclick="viewProjectTasks(<?php echo $row->id?>)" style="padding: 5px;">View Tasks</button>
    <button onclick="updateProject(<?php echo $row->id?>)" style="padding: 5px; margin-left: 10px;">Update</button>
    <button onclick="removeProject(<?php echo $row->id?>)" style="padding: 5px; margin-left: 10px;">Remove</button>
  </div>
</div>
