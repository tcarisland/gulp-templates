/*
  TC Project Planner
*/

function tcSayHello() {
    console.log("tcSayHello called");
    var projectName = jQuery("#projectNameTextField").val();
    var projectDescription = jQuery("#projectDescriptionTextField").val();
    var data = {
			'action': 'add_project',
			'projectName': projectName,
      'projectDescription' : projectDescription
		};
		jQuery.post(ajaxurl, data, function(response) {});
}

function toggleAccordion(item) {
  var panel = document.getElementById(item);
  if (panel.style.maxHeight) {
    console.log("toggleAccordion IF");
    panel.style.maxHeight = null;
  } else {
    panel.style.border = "1px solid #303030";
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

function viewProjectTasks(id) {
    console.log("viewProjectTasks ID : " + id);
    var data = {
      'action': 'switch_admin_view',
      'view': 'listTasks',
      'projectID' : "" + id
    }
    jQuery.post(ajaxurl, data, function(response) {
      displayAdminContent(response);
    });
}