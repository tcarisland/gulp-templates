/*
  TC Project Planner
*/

function newItemButtonClicked(itemType) {
  jQuery('#tcProjectPlannerOverlayBackground').css('display', 'block');
  jQuery('#tcProjectPlannerOverlayDialog').css('display', 'block');
  jQuery(document).keyup(function(event) {
    if (event.keyCode === 27) {
      exitOverlayDialog();
    }
  });
  switchDialogView(itemType);
}

function exitOverlayDialog() {
  jQuery('#tcProjectPlannerOverlayBackground').css('display', 'none');
  jQuery('#tcProjectPlannerOverlayDialog').css('display', 'none');
  jQuery('#tcProjectPlannerOverlayDialog').html("");
}

function addProjectEntry() {
  var projectName = jQuery("#projectNameTextField").val();
  var projectDescription = jQuery("#projectDescriptionTextField").val();
  console.log("Add Project called " + projectName + " - " + projectDescription);
  var data = {
    'action': 'add_project',
    'projectName': projectName,
    'projectDescription': projectDescription
  };
  jQuery.post(ajaxurl, data, function(response) {
    exitOverlayDialog();
    listProjects();
    console.log("RESPONSE : " + response);
  });
}

function addTaskEntry() {
  var projectId = jQuery("#selectProjectCombobox").val();
  var taskName = jQuery("#taskNameTextField").val();
  var taskDescription = jQuery("#taskDescriptionTextField").val();
  var data = {
    'action': 'add_task',
    'projectId': projectId,
    'taskName': taskName,
    'taskDescription': taskDescription
  };
  jQuery.post(ajaxurl, data, function(response) {
    exitOverlayDialog();
    listTasks();
    console.log("RESPONSE : " + response);
  });
}

function removeProjectEntry(projectId) {
  console.log("Remove Project called " + projectId);
  var data = {
    'action': 'remove_project',
    'projectId': projectId
  };
  jQuery.post(ajaxurl, data, function(response) {
    console.log("RESPONSE : " + response);
    listProjects();
  });
}

function removeTaskEntry(taskId) {
  console.log("Remove Task called " + taskId);
  var data = {
    'action': 'remove_task',
    'taskId': taskId
  };
  jQuery.post(ajaxurl, data, function(response) {
    console.log("RESPONSE : " + response);
    listTasks();
  });
}

function toggleAccordion(item) {
  var panel = document.getElementById(item);
  if (panel.style.maxHeight) {
    console.log("toggleAccordion IF");
    panel.style.maxHeight = null;
  } else {
    panel.style.borderRight = "1px solid #303030";
    panel.style.borderLeft = "1px solid #303030";
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function switchView(viewname) {
  var data = {
    'action': 'switch_admin_view',
    'view': viewname
  }
  jQuery.post(ajaxurl, data, function(response) {
    displayAdminContent(response);
  });
}

function switchDialogView(viewname) {
  var data = {
    'action': 'switch_admin_view',
    'view': viewname
  }
  jQuery.post(ajaxurl, data, function(response) {
    jQuery("#tcProjectPlannerOverlayDialog").html(response);
  });
}

function displayAdminContent(content) {
  jQuery("#adminContent").html(content);
}

function listProjects() {
  console.log("List Projects clicked");
  switchView('listProjects');
}

function listTasks() {
  console.log("List Tasks clicked");
  switchView('listTasks');
}

function addProject() {
  console.log("Add Project clicked");
  switchView('addProject');
}

function listCategories() {
  console.log("List Categories clicked");
  switchView('listCategories');
}

function removeProject(id) {
  console.log("removeProject ID : " + id);
}

function updateProject(id) {
  console.log("updateProject ID : " + id);
}

function updateTask(id) {
  console.log("updateTask ID : " + id);  
}

function viewProjectTasks(id) {
  console.log("viewProjectTasks ID : " + id);
  var data = {
    'action': 'switch_admin_view',
    'view': 'listTasks',
    'projectId': "" + id
  }
  jQuery.post(ajaxurl, data, function(response) {
    displayAdminContent(response);
  });
}