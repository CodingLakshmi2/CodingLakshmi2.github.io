var userAnswer = prompt("Do you want to listen to music? (yes/no)");
var song = new Audio('newmusic.mp3');

if (userAnswer === "yes" || userAnswer === "Yes" || userAnswer === "YES") {
   alert("Great! Here's some music!");
   song.play();
 } else if (userAnswer === "no" || userAnswer === "No" || userAnswer === "NO") {
   alert("Alright!");
   console.log(returnVariable());
 }