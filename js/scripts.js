
//business logic
// function Movie(title, release) { // new movie object constructor
//   this.title = title;
//   this.release = release;
// }

function Ticket(release, time, age){
  this.release = release;
  this.time = time;
  this.age = age;
}
// Movie.protype.price = function() {
//   if (movie.release === "new")  {
//     return "$10"
//
//   } else if {
//     release === "old";
//   }


  var timeChecker = function(Ticket) {
    if (Ticket.time === "2") {
      return "$15"
    } else {
      return Ticket
    }
  }

  var releaseChecker = function(Ticket) {
    var release = timeChecker(Ticket);
    if (release === "$15") {
      return "$15"
    } else if (release.release === "new" && release.age < 60) {
      return "$10"
    } else {
      return "$5"
    }
  };


//user interface logic
$(document).ready(function() {

$("form#specifics").submit(function(event) {
   event.preventDefault();

   var inputtedTime = $("input:radio[name=time]:checked").val();
   var inputtedTitle = $("input:radio[name=title]:checked").val();
   var inputtedAge = parseInt($("input#input-age").val());

   var ticket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);
   var outPut = releaseChecker(ticket);
   alert(outPut);

})
});
