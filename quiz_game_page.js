player1_name = localStorage.getItem('player1')
console.log(player1_name)
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("qturn").innerHTML="Question Turn-" + player1_name;
document.getElementById("aturn").innerHTML="Answer Turn-" + player2_name;
function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    actual_answer=parseInt(num1)* parseInt(num2);

question="<h4> " + num1  +"X"+ num2 + "</h4>";
input_box="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

row=question+input_box+check_button;
document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value=" ";
    document.getElementById("num2").value=" ";
}
question_turn="player1";
    answer_turn="player2";
function check(){
  var get_answer=document.getElementById("input_check_box").value;
  if(get_answer==actual_answer)  {
    if(answer_turn=="player1"){
        updated_player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=updated_player1_score;    
}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=updated_player2_score;    
}
} 

if(get_answer==actual_answer)  {
    if(answer_turn=="player2"){
       updated_player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=updated_player2_score;    
}
else{
    updated_player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=updated_player1_score;    
}
} 
}
