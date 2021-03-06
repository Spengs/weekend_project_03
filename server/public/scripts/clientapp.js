$(document).ready(function(){
  console.log("working")
  $('.results-container').parent().on('click', '#clearRes', clearResults);
  getStuff();
  $('#calcForm').on('click', '#add', function(){
    event.preventDefault();
    console.log("submit works")
    var calcVals = {};

    $.each($('#calcForm').serializeArray(), function(i, field){
      calcVals[field.name] = field.value;
      console.log(calcVals);
    });
    calcVals.operator = 'addition';
    $.ajax({
      type: 'POST',
      url: '/operations',
      data: calcVals,
      success: function(respose){
        console.log('POST / calcVals works');
        getStuff();
      },
      error: function(respose){
        console.log('POST / calcVals did not work');
      }
    })
  });


  function getStuff(){
      $.ajax({
        type: 'GET',
        url: '/operations',
        success: function(operations) {
          console.log("GET Worked");
          console.log(operations);
          // console.log();
          $('.results-container').empty();
          operations.forEach(function(calcVals){
             parseInt(calcVals.x);
             parseInt(calcVals.y);
             console.log(calcVals);
            $('.results-container').append('<div>' + calcVals.x + calcVals.y +'</div>');
          });
        },
        error: function(){
          console.log("GET /  didn't work");
        }
      });
    }
});

function clearResults(){
  $('.results-container').empty();
}
