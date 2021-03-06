//Grabs current date prints to page
var currentDay = moment(); 
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do, YYYY - hh:mm a"));

//Loop to change row color based on time
function timeSlotColor() {
    $(".timeBlock").each(function(index,item){ 
        //grab current time
      var currentTime = moment().format('HH');
      //Changes current hour to an integer
      var currentInt = parseInt(currentTime); 
      var blockValue = parseInt($(item).data('index'));
      if(blockValue === currentInt){
          $(item).addClass('present');
      } else if (blockValue < currentInt) {
        $(item).addClass('past');
      } else {
        $(item).addClass('future');
      }
    });
};

//runs color changing function
timeSlotColor();

//Check time every 15sec and run color coding function
var checkTime = window.setInterval(function(){
        timeSlotColor();
        console.log("time checked at 15sec")     
    }, 15000);


  //get the data from localStorage and populate the timeblocks
$(getKeyValues = (function(){
    $('.textInput').each(function(){    
        var key = $(this).attr('id');
        var value = localStorage.getItem(key);
        $(this).val(value);
    }); 
}));

$('.saveBtn').on('click', function(){
    $('.textInput').each(function(){   
        //need the value that was input next to the save button using dom traversal 
        var key = $(this).attr('id');
        var value = $(this).val();
        // setItems in localStorage
        localStorage.setItem(key, value);
    });   
});
