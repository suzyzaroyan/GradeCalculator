function checkGrade(evt) {
  var grade =parseFloat(evt.currentTarget.value);

  if (grade > 100 || grade < 0) {
    console.log("Wrong value")
    evt.currentTarget.style.color = "red"
  } else {
    console.log("Correct Value")
    evt.currentTarget.style.color = "black"

  }

}

function calculateGrade() {

  var homework_percent = parseInt(document.getElementById ("homework-percent").innerHTML)

  var homework_grade = parseFloat(document.getElementById ("hwGrade").value)

  homework = homework_percent * homework_grade/100

  var participation_percent = parseInt(document.getElementById ("participation-percent").innerHTML)

  var participation_grade = parseFloat(document.getElementById ("participation-grade").value)

  participation = participation_percent * participation_grade/100

  var quiz_percent = parseInt(document.getElementById ("quiz-percent").innerHTML)

  var quiz_grade = parseFloat(document.getElementById ("quiz-grade").value)

  quiz = quiz_percent * quiz_grade/100

  var finalproject_percent = parseInt(document.getElementById ("finalproject-percent").innerHTML)

  var finalproject_grade = parseFloat(document.getElementById ("finalproject-grade").value)

  finalproject = finalproject_percent * finalproject_grade/100

  var currentGrade = homework + participation + quiz + finalproject
  console.log(currentGrade)

  document.getElementById("currentGradeVAL").innerHTML= currentGrade
}


function LetterGrade() {
      var homework_percent =parseInt(document.getElementById('homework-percent').innerHTML);
            var participation_percent=parseInt(document.getElementById('participation-percent').innerHTML);
            var quiz_percent=parseInt(document.getElementById('quiz-percent').innerHTML);
            var finalproject_percent=parseInt(document.getElementById("finalproject-percent").innerHTML);
            


            var homework_grade =parseFloat(document.getElementById('hwGrade').value);
            var participation_grade =parseFloat(document.getElementById('participation-grade').value);
            var quiz_grade =parseFloat(document.getElementById('quiz-grade').value);
            var finalproject_grade =parseFloat(document.getElementById('finalproject-grade').value);


            var Current_Grade = homework_percent*homework_grade/100 + participation_percent*participation_grade/100 + quiz_percent*quiz_grade/100 + finalproject_percent*finalproject_grade/100 
            
      
      
      if (Current_Grade <= 100 && Current_Grade >=90) {letter_grade = "A"}

      if (Current_Grade < 90 && Current_Grade >=80) {letter_grade = "B"}

      if (Current_Grade < 80 && Current_Grade >=70) {letter_grade = "C"}

      if (Current_Grade < 70  && Current_Grade>=60 ){letter_grade = "D"}
      
      if (Current_Grade < 60) {letter_grade = "F"}

      var display=document.getElementById('LetterGrade');
            display.innerHTML=' Current Letter Grade: ' + letter_grade;
      
      }
