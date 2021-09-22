var quizData=[
  {
    "question":"who is the prime minister of India?",
    "a":"Modi",
    "b":"Rahul gandhi",
    "c":"ka paul",
    "d":"Donald trump",
    "correct":"a"

},
{
  "question":"who is the best language in 2019?",
  "a":"python",
  "b":"java",
  "c":"javascript",
  "d":"c++",
  "correct":"c"

},
{
  "question":"who is the best comedian?",
  "a":"Ali",
  "b":"sunil",
  "c":"sapthagiri",
  "d":"Bramhanandham",
  "correct":"d"
},
{
  "question":"who is the no.1 Hero?",
  "a":"PK",
  "b":"MB",
  "c":"NTR",
  "d":"Ravi teja",
  "correct":"a"

}

]


// testing

let currentQuestion = 0;
function quiz() {
 $('.question').text(quizData[currentQuestion]["question"]);
    $(".text1").text(quizData[currentQuestion]["a"]);
    $(".text2").text(quizData[currentQuestion]["b"]);
    $(".text3").text(quizData[currentQuestion]["c"]);
    $(".text4").text(quizData[currentQuestion]["d"]);

}
quiz();

function checked() {

var checkName=document.getElementsByName("answer");
    checkName.forEach(function (answer)  {
        if (answer.checked) {
            ans = answer.id;
        }
    });

    return ans;
}


function uncheck(){
    var checkName=document.getElementsByName("answer");
     checkName.forEach(function (answer)  {
        if(answer.checked){
            return answer.checked= false;
        }
    });

}
uncheck();
$(".button").on("click",function(){
     var ans = checked();

    if (ans) {
        if (ans === quizData[currentQuestion]["correct"]) {
            alert("answer is correct");
           uncheck();
            currentQuestion++;

        if (currentQuestion < quizData.length) {
            quiz();


        } else {

       $("div").html('<button class="reload" onclick="location.reload();">Reload quiz</button>' );

        }
    }else{
       alert("answer is "+quizData[currentQuestion][quizData[currentQuestion]['correct']]);
    }
    }
});
