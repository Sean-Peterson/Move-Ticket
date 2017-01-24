
//business logic
// function Movie(title, release) { // new movie object constructor
//   this.title = title;
//   this.release = release;
// }

function Ticket(movie, time, age){
  this.movie = movie;
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

  var releaseChecker = function(Ticket) {
    if (Ticket.time === "2") {
      return "$20";
    }   else if (Ticket.movie === "1" && Ticket.age >= 60) {
        return "$10";
      } else if (Ticket.movie === "2" && Ticket.age < 60) {
          return "$10"
      } else if (Ticket.movie === "2" && Ticket.age >= 60) {
          return "$5"
      } else {
          return "$15";
      }
  };


//user interface logic
$(document).ready(function() {

$("form#specifics").submit(function(event) {
   event.preventDefault();

   var inputtedTime = $("input:radio[name=time]:checked").val();
   var inputtedTitle = $("input:radio[name=movie]:checked").val();
   var inputtedAge = parseInt($("input#input-age").val());
   var ticket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);
   var outPut = releaseChecker(ticket);
   alert(outPut);

})
});
