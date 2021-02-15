var score = 0;

function submitEvaluation() {
    var divErr = document.getElementById('error-msg');

    if (!allIsSelected()) {
        divErr.innerHTML = 'You must answer all the questions';
        console.log("error");
    }
    else {
        divErr.innerHTML = '';
        calcAllQues();
        addEvaluation()

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        score = 0;
    }
}

function addEvaluation() {
    var resultMsg = document.getElementById("quiz-result");
        resultMsg.style.textAlign = "center";
        resultMsg.style.width = "100em";
        resultMsg.style.height = "auto";
        resultMsg.style.border = "10px #585786";
        resultMsg.style.borderStyle = "double";
        resultMsg.style.marginLeft = "9em";
        resultMsg.style.marginTop = "2em";
        resultMsg.style.backgroundColor = "#CFCEFF";
    
        var titleDiv = document.createElement("div");
        titleDiv.innerHTML = "Your Self-Care Evaluation";
        titleDiv.style.fontFamily = "Helvetica";
        titleDiv.style.color = "rgb(113, 76, 161)";
        titleDiv.style.fontSize = "70px";
        titleDiv.style.fontWeight = "bold";
        titleDiv.style.paddingTop = "30px";
        resultMsg.appendChild(titleDiv);
        
        var textDiv = document.createElement("div");
        textDiv.style.fontFamily = "Helvetica";
        textDiv.style.fontWeight = "bold";
        textDiv.style.textAlign = "center";
        textDiv.style.fontSize = "30px";

        var textNode = document.createElement("p");
        textDiv.style.paddingTop = "1em";
        textDiv.style.paddingLeft = "3em";
        textDiv.style.paddingRight = "3em";
        textDiv.style.paddingBottom = "2em";
        
        if (score <= 7) {
            textNode.appendChild(document.createTextNode("It sounds like you may not be practicing enough self-care, but you can change that! Self-care is taking\
            the time to care of yourself in whichever ways work best for you. To be in a healthy relationship, you need time\
            to work on yourself and your own interests. It’s important to remember that self-care is not selfish, it’s self-love"));
        }
        else if (score >= 8 && score <= 15){
            textNode.appendChild(document.createTextNode("It sounds like you may be practicing a little self-care, but could use some more guidance \
            or ideas on how to best take care of myself. Remember: self-care is about taking the time to care for yourself in whichever ways\
            work best for you. Just start thinking about what you can do that makes you happy, and do it!"));
            console.log("INSIDE:" + score);
        }
        else if (score >= 16 && score <=22){
            textNode.appendChild(document.createTextNode("It sounds like you are doing a good job taking care of myself! Self-care is important for your emotional, mental,\
            and physical well-being, so keep it up! If you’re used to doing the same techniques or methods, maybe try\
            something totally new. If you usually journal your feelings, try your hand at art. If you always go for a run or do a\
            physical activity, try some meditation and deep breathing exercises too. New experiences can be fun!"));
        }
        else if (score >= 23){
            textNode.appendChild(document.createTextNode("It sounds like you know all about self-care, and are excellent at taking those few moments to focus on you!\
            Keep it up! Self-care can only bring positive things."));
        }
        textDiv.appendChild(textNode);
        resultMsg.appendChild(textDiv);
}

function calcAllQues() {
    calcQues1();
    calcQues2();
    calcQues3();
    calcQues4();
    calcQues5();
    calcQues6();
    calcQues7();
    calcQues8();
    calcQues9();
    calcQues10();
}

function calcQues1() {
    if (document.getElementById("q1a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q1a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q1a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q1a4").checked) {
        score += 0;
    }
}

function calcQues2() {
    if (document.getElementById("q2a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q2a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q2a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q2a4").checked) {
        score += 0;
    }
}

function calcQues3() {
    if (document.getElementById("q3a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q3a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q3a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q3a4").checked) {
        score += 0;
    }
}

function calcQues4() {
    if (document.getElementById("q4a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q4a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q4a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q4a4").checked) {
        score += 0;
    }
}

function calcQues5() {
    if (document.getElementById("q5a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q5a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q5a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q5a4").checked) {
        score += 0;
    }
}

function calcQues6() {
    if (document.getElementById("q6a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q6a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q6a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q6a4").checked) {
        score += 0;
    }
}

function calcQues7() {
    if (document.getElementById("q7a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q7a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q7a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q7a4").checked) {
        score += 0;
    }
}

function calcQues8() {
    if (document.getElementById("q8a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q8a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q8a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q8a4").checked) {
        score += 0;
    }
}

function calcQues9() {
    if (document.getElementById("q9a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q9a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q9a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q9a4").checked) {
        score += 0;
    }
}

function calcQues10() {
    if (document.getElementById("q10a1").checked) {
        score += 3;
    }
    else if (document.getElementById("q10a2").checked) {
        score += 2;
    }
    else if (document.getElementById("q10a3").checked) {
        score += 1;
    }
    else if (document.getElementById("q10a4").checked) {
        score += 0;
    }
}

// Checks if all the questions/radio buttons are answered/selected
function allIsSelected() {
    if (isQues1Selected() && isQues2Selected() && isQues3Selected() && isQues4Selected() && 
            isQues5Selected() && isQues6Selected() && isQues7Selected() && isQues8Selected() && 
            isQues9Selected() && isQues10Selected()) {
        return true;
    }
    else {
        return false;
    }
}

function isQues1Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques1"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 1 checked")
        return true;
    } 
    else { 
        console.log("ques 1 not checked")
        return false;
    } 
}

function isQues2Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques2"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 2 checked")
        return true;
    } 
    else { 
        console.log("ques 2 not checked")
        return false;
    } 
}


function isQues3Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques3"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 3 checked")
        return true;
    } 
    else { 
        return false;
    } 
}


function isQues4Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques4"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 4 checked")
        return true;
    } 
    else { 
        return false;
    } 
}


function isQues5Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques5"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 5 checked")
        return true;
    } 
    else { 
        return false;
    } 
}



function isQues6Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques6"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 6 checked")
        return true;
    } 
    else { 
        return false;
    } 
}


function isQues7Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques7"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 7 checked")
        return true;
    } 
    else { 
        return false;
    } 
}

function isQues8Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques8"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 8 checked")
        return true;
    } 
    else { 
        return false;
    }
}

function isQues9Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques9"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 9 checked")
        return true;
    } 
    else { 
        return false;
    } 
}

function isQues10Selected() {
    var checkRadio = document.querySelector( 
        'input[name="ques10"]:checked'); 
      
    if(checkRadio != null) { 
        console.log("ques 10 checked")
        return true;
    } 
    else { 
        return false;
    } 
}


function init() {
    var submitButton = document.getElementById('buttSubmit');
    submitButton.addEventListener('click', submitEvaluation);
}
  
document.addEventListener('DOMContentLoaded', init);
  
