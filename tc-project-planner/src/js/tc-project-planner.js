/*
  TC Project Planner
*/

function tc_say_hello() {
    console.log("tc_say_hello called");
    var projectName = jQuery("#projectNameTextField").val();
    var projectDescription = jQuery("#projectDescriptionTextField").val();
    var data = {
			'action': 'add_project',
			'projectName': projectName,
      'projectDescription' : projectDescription
		};
		jQuery.post(ajaxurl, data, function(response) {
			alert('Got this from the server: ' + response);
		});
}

function listProjects() {
  console.log("List Projects clicked");
}

function listTasks() {
  console.log("List Tasks clicked");
}

function listCategories() {
  console.log("List Categories clicked");
}
