var answerOneOf ="Atlas tog'i";
var answerTwoOf ="Axagar tog'ligi";
var answerThreeOf ="Tibesti tog'ligi";
var answerFourOf ="Darfur tog'ligi";
var answerFiveOf ="Efiopiya tog'ligi";
var answerSixOf ="Margaritta cho'qqisi";
var answerSevenOf ="Sharqiy afrika yassitog'ligi";
var answerEghtOf = "Drakon tog'lari";
var answernineOf = "Kap tog'lari";



 function javoblar() {
    var afrikaInputs1  = document.getElementById('afrikaInputAnswer1').value;
    var afrikaInputs2 = document.getElementById('afrikaInputAnswer2').value;
    var afrikaInputs3 = document.getElementById('afrikaInputAnswer3').value;
    var afrikaInputs4 = document.getElementById('afrikaInputAnswer4').value;
    var afrikaInputs5 = document.getElementById('afrikaInputAnswer5').value;
    var afrikaInputs6 = document.getElementById('afrikaInputAnswer6').value;
    var afrikaInputs7 = document.getElementById('afrikaInputAnswer7').value;
    var afrikaInputs8 = document.getElementById('afrikaInputAnswer8').value;
    var afrikaInputs9 = document.getElementById('afrikaInputAnswer9').value;

    if(afrikaInputs1 == answerOneOf){
        document.getElementById('afrikaInputAnswer1').style.backgroundColor = "#6ab04c";

    }else{
        document.getElementById('afrikaInputAnswer1').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs2 == answerTwoOf){
        document.getElementById('afrikaInputAnswer2').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('afrikaInputAnswer2').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs3 == answerThreeOf){
        document.getElementById('afrikaInputAnswer3').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('afrikaInputAnswer3').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs4 == answerFourOf){
        document.getElementById('afrikaInputAnswer4').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('afrikaInputAnswer4').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs5 == answerFiveOf){
        document.getElementById('afrikaInputAnswer5').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('afrikaInputAnswer5').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs6 == answerSixOf){
        document.getElementById('afrikaInputAnswer6').style.backgroundColor = "#6ab04c";
    }else{
        document.getElementById('afrikaInputAnswer6').style.backgroundColor = "#ff4d4d";
    }

    if(afrikaInputs7 == answerSevenOf){
        document.getElementById('afrikaInputAnswer7').style.backgroundColor = "#6ab04c";    
    }else{
        document.getElementById('afrikaInputAnswer7').style.backgroundColor = "#ff4d4d";
    }    

    if(afrikaInputs8 == answerEghtOf){
        document.getElementById('afrikaInputAnswer8').style.backgroundColor = "#6ab04c";    
    }else{
        document.getElementById('afrikaInputAnswer8').style.backgroundColor = "#ff4d4d";
    }    

    if(afrikaInputs9 == answernineOf){
        document.getElementById('afrikaInputAnswer9').style.backgroundColor = "#6ab04c";    
    }else{
        document.getElementById('afrikaInputAnswer9').style.backgroundColor = "#ff4d4d";
    }       
 }