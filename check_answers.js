var SubmitViewResults = () => {
     // add variables for each question
     // we will access them with the vars and the vars will get access b ID

     var question1 = document.getElementById("q1");
     var question2 = document.getElementById("q2");
     var question3 = document.getElementById("q3");

     var points = 0;
     var wrong = 0;

     // question 1 is input ot select
     if(question1.value == "correct answer") {
        points = points + 1; //if you want to make the points increase by let us say 2 replace 1 with 2
        document.getElementById("q1").classList.add("correct")

     } else {
        wrong = wrong + 1;
        alert("question 1 answer is correct answer");
        document.getElementById("q1").classList.add("wrong")

     } //do same for other input questions, not select questions


     if(question2.value == "correct answer") {
        points = points + 1;
        document.getElementById("q2").classList.add("correct")
     } else {
        wrong = wrong + 1
        alert("question 2 answer is correct answer");
        document.getElementById("q2").classList.add("wrong");
     }

     if(question3.value == "miami") {
        points = points + 1;
        console.log(question3.value)
        document.getElementById("q3").style.border = "4px solid green";
     } else {
        wrong = wrong + 1;
        alert("question 3 answer is correct answer");
        document.getElementById("q3").style.border = "4px solid red";
     }

     //alert("wrong: " + wrong);
     //alert("points: " + points);

     document.getElementById("wrong").innerText = "Wrong: " + wrong;

     document.getElementById("points").innerText = "Points: " + points; 

     document.getElementById("notes").innerText = "Note: Edit the code and if you would like put window.open() in the next line. Learn about window.open() before adding it... ";
     
    
}