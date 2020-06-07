<h2> Select Project </h2>

<select name="project" id="selectProjectCombobox">

<?php
$query_results = list_projects_db_query();
$row_index = 0;
foreach($query_results as $row) {
    echo "<option value='" . $row->id . "'>" . $row->name . "</option>";
}
?>

</select>
<h2> Task Name </h2>
<input style="width: 100%;" id="taskNameTextField" placeholder="Task Name"> </input>
<br>
<h2> Task Description </h2>
<textarea style="width: 100%;" rows="15" id="taskDescriptionTextField" > </textarea>

<br>
<br>

<div style="float: right;">
  <button onclick="exitOverlayDialog()">Cancel</button>
  <button onclick="addTaskEntry()">Create Task</button>
</div>
