var answerOneOf ="Cho'l";
var answerTwoOf ="tog'lik";
var answerThreeOf ="Ko'l";
var answerFourOf ="Qo'riqxona";
var answerFiveOf ="Daryo";
var answerSixOf ="Milliy bog' ";
var answerSevenOf ="Botiq";
var answerEghtOf = "Vulqon";



 function javoblar() {
    var afrikaInputs1  = document.getElementById('answerAfrika1').value;
    var afrikaInputs2 = document.getElementById('answerAfrika2').value;
    var afrikaInputs3 = document.getElementById('answerAfrika3').value;
    var afrikaInputs4 = document.getElementById('answerAfrika4').value;
    var afrikaInputs5 = document.getElementById('answerAfrika5').value;
    var afrikaInputs6 = document.getElementById('answerAfrika6').value;
    var afrikaInputs7 = document.getElementById('answerAfrika7').value;
    var afrikaInputs8 = document.getElementById('answerAfrika8').value;

    if(afrikaInputs1 == answerOneOf){
        document.getElementById('answerAfrika1').style.backgroundColor = "#6ab04c";

    }else{
        document.getElementById('answerAfrika1').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs2 == answerTwoOf){
        document.getElementById('answerAfrika2').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('answerAfrika2').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs3 == answerThreeOf){
        document.getElementById('answerAfrika3').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('answerAfrika3').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs4 == answerFourOf){
        document.getElementById('answerAfrika4').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('answerAfrika4').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs5 == answerFiveOf){
        document.getElementById('answerAfrika5').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('answerAfrika5').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs6 == answerSixOf){
        document.getElementById('answerAfrika6').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('answerAfrika6').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs7 == answerSevenOf){
        document.getElementById('answerAfrika7').style.backgroundColor = "#6ab04c";    
    }else{
        document.getElementById('answerAfrika7').style.backgroundColor = "#ff4d4d";
    }    

    if(afrikaInputs8 == answerEghtOf){
        document.getElementById('answerAfrika8').style.backgroundColor = "#6ab04c";    
    }else{
        document.getElementById('answerAfrika8').style.backgroundColor = "#ff4d4d";
    }           
 }