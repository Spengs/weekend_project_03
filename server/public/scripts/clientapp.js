$(document).ready(function(){
  $('#songForm').on('submit', function(){
    event.preventDefault();

    var calcVals = {};

    $.each($('#calcForm').serializeArray(), function(i, field){
      calcVals[field.name] = field.value;
    });
})
