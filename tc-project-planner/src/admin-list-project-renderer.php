<?php 
function render_project_entry($row, $row_index) {
  $content = "<table cellspacing='0' cellpadding='0' style='width: 100%;'>";
  $i = 0;
  foreach($row as $key => $value) {
    $bgcolor = "rgba(0, 0, 0, 0.1)";
    if($i % 2 == 0) {
      $bgcolor = "rgba(0, 0, 0, 0.2)";      
    }
    $i += 1;
      $content .= "<tr style='background-color: " . $bgcolor . "'>";
      $content .= "<td style='vertical-align: top; width: 100px'>";
      $content .= render_column_name($key);
      $content .= "</td><td> ";
      if($key == "description") {
        $content .= "<textarea style='width: 100%;' rows='10'>" . $value . "</textarea>";        
      } elseif($key != "id" && $key != "created_date") {
        $content .= "<input style='width: 100%;' value='" . $value . "'>";
      } else {
        $content .= $value;
      }
      $content .= "</td> ";
      $content .= "</tr>";
  }
  $content .= "</table>";
  $panel_id = "projectPanelNo" . $row->id;
  $bgclass = "accordionOdd";
  if($row_index % 2 == 0) {
    $bgclass = "accordionEven";
  }
  $str = <<<EOD
  <button class="accordion $bgclass" onclick='toggleAccordion("$panel_id")'><b>$row_index. $row->name</b></button>
  <div class="panel" id="$panel_id">
    $content
  </div>    
  EOD;
  error_log($str);
  return $str;
}
 ?>