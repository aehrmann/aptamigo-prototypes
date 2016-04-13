window.onload = addLink();

function addLink(){
	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("submit-button").addEventListener("click", function(){
			requestForm ();
			return false
		});
		return false
	});
}

function createUrl (){
	var name = document.getElementById("lead_name").value;
	var email = document.getElementById("lead_email").value;
	var phone = document.getElementById("lead_phone").value;
	var moveInDate= document.getElementById("lead_move_in_date").value;
	var beds = document.getElementById("lead_bed_count_desired").value;
	var comments = document.getElementById("lead_comments").value;
	var url = "https://crm.zoho.com/crm/private/xml/Contacts/insertRecords?authtoken=79e679562772681ad008f06f418e6921&scope=crmapi&newFormat=1&xmlData=" + 
	  "%3CContacts%3E%3Crow%20no%3D%221%22%3E%3CFL%20val%3D%22Last%20Name%22%3E" + name + 
	  "%3C%2FFL%3E%3CFL%20val%3D%22Email%22%3E" + email + 
	  "%3C%2FFL%3E%3CFL%20val%3D%22Phone%22%3E" + phone + 
	  "%3C%2FFL%3E%3CFL%20val%3D%22Move-in%20Date%22%3E" + moveInDate + 
	  "%3C%2FFL%3E%3CFL%20val%3D%22Bedrooms%22%3E" + beds + 
	  "%3C%2FFL%3E%3CFL%20val%3D%22Comments%22%3E" + comments + 
	  "%3C%2FFL%3E%3C%2Frow%3E%3C%2FContacts%3E";
	return url;
}

function createCORSRequest(method, url){
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
	xhr.withCredentials = true;
	xhr.send();

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

function requestForm (){
	url = createUrl();
	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
	  alert('CORS not supported');
	}
	alert('data sent');
	return false;
}
