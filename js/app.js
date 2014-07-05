/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;


(function(){

function loadApiRootFromInput(){
  var apiRoot = $('#api-root input').val();
  window.location.search = apiRoot;
}

$('#api-root button').on('click',loadApiRootFromInput);
$('#api-root input').on('keyup',function(){
  if(event.keyCode == ENTER_KEY){
    loadApiRootFromInput();
  }
});

})();

$(function () {
	'use strict';


  var apiRootUrl = window.location.search.substr(1);
  if( !apiRootUrl ){
    $("body > *").hide();
    $("#api-root").show();
    return;
  }
  $("#api-root").hide();

	// Create our global collection of **Todos**.
	app.todos = new app.Todos();
  app.todos.url = "http://todo-backend-sinatra.herokuapp.com/todos";

	app.TodoRouter = new app.TodoRouter();
	Backbone.history.start();

	// kick things off by creating the `App`
	new app.AppView();
});
