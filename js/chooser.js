(function(){

function loadApiRootFromInput(){
  var targetRoot = $('#target-root input').val();
  window.location = "
}

$('#api-root button').on('click',loadTargetRootFromInput);
$('#api-root input').on('keyup',function(){
  if(event.keyCode == 13){
    loadApiRootFromInput();
  }
});

})();
