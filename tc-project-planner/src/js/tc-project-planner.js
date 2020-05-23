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
		jQuery.post(ajaxurl, data, function(response) {
			console.log('Got this from the server: ' + response);
		});
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
  console.log("displayAdminContent called ")
  console.log(content);
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
