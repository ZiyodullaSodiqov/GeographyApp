function result(){
    var score = 0;

    if(document.getElementById('true1').checked){
      score++; //1
    }
    if(document.getElementById('true2').checked){
      score++; //1 //0
    }
    if(document.getElementById('true3').checked){
      score++; //1 //0
    }
    if(document.getElementById('true4').checked){
      score++; //1 //0
    }
    if(document.getElementById('true5').checked){
      score++; //1 //0
    }
    if(document.getElementById('true6').checked){
      score++; //1 //0
    }
    if(document.getElementById('true7').checked){
      score++; //1 //0
    }
    if(document.getElementById('true8').checked){
      score++; //1 //0
    }
    // alert("Your Score IS:" + score);
    document.getElementById('res').innerHTML = "To`gri javoblar:" + score;
  }