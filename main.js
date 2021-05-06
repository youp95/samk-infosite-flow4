var quizQuestions = [
    {q:"Hvor mange procent biler kan samkørsel formindske trafik på vejene?",
     a:["21%", "31%", "40%"],
     correct:"31%",
     point: 0
    },
    {
    q:"Hvor mange procent tror du trafikken på den danske veje er steget siden år 1980?",
    a:["30%", "40%", "50%"],
    correct:"50%",
    point: 0
    },
   {
   q:"Hvor mange ton C02 om året tror du kan reduceres, hvis 100.000 pendlere stiller bilen?",
   a:["108.000 ton", "152.000 ton", "183.000 ton"],
   correct:"183.000 ton",
   point: 0
   }];

 //Vi tæller op med 1 for et nyt spørgsmål
 var count = 0; 

 var qElement = document.querySelector("h4"); 
 var optionsElement = document.querySelector(".option")


 function runProgram(){
      qElement.innerHTML = quizQuestions[count].q

      var aElements = "<form>"

      quizQuestions[count].a.forEach(answer => {
          aElements += '<input type="radio" id="male" name="answer" value="'+answer+'"><label for="male">'+ answer +'</label><br>' 
      })

  optionsElement.innerHTML = aElements + '<br> <input type="submit" value="svar" id="svar"> </form>' 

  checkAnswer();

 }

 function checkAnswer(){
  var answerElement = document.querySelector("#svar"); 
  
  answerElement.addEventListener("click", function(e){

      e.preventDefault(); //her undgår vi at siden reloader

     //Check om brugeren har svaret rigtigt

     var answer = document.querySelector('input[name="answer"]:checked').value

     if(answer == quizQuestions[count].correct){
         quizQuestions[count].point = 1;
     }

     //Er der flere spørgsmål

     count = count + 1;

     //Eller er det tid til point status?

     if(quizQuestions.length == count){
         pointStatus(); 
         //alert("her skal vi have en point status")
     }else{
         runProgram();
     }

  })
  
 }

function pointStatus(){
  qElement.innerHTML = "Point status"

  optionsElement.innerHTML = "";

  var samletPoint = 0; 

  quizQuestions.forEach(answer =>{
      samletPoint += answer.point; 
  })

  optionsElement.innerHTML = "Du fik " + samletPoint + " ud af " + quizQuestions.length + " mulige point"

  console.log(samletPoint); 


 }

 runProgram();

 // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}