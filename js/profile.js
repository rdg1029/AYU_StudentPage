var score = [], sum = 0.0, count = 0.0, isWrongValue = false;

function init() {
    score[0] = parseFloat(document.getElementById("score1-1").value);
    score[1] = parseFloat(document.getElementById("score1-2").value);
    score[2] = parseFloat(document.getElementById("score2-1").value);
    score[3] = parseFloat(document.getElementById("score2-2").value);
    score[4] = parseFloat(document.getElementById("score3-1").value);
    score[5] = parseFloat(document.getElementById("score3-2").value);
    score[6] = parseFloat(document.getElementById("score4-1").value);
    score[7] = parseFloat(document.getElementById("score4-2").value);
}

function checkScore() {
    var i;
    for(i = 0; i < 8; i++) {
        if(score[i] >= 0.0 && score[i] <= 4.5) {
            sum += score[i];
            count = count + 1.0;
        }
        else if(score[i] < 0.0 || score[i] > 4.5) {
            isWrongValue = true;
        }
    }
}

function showResult() {
    if(isWrongValue === true) {
        document.getElementById("result").innerHTML = "제대로 된 값을 입력해주세요!";
        isWrongValue = false;
    }
    else {
        document.getElementById("meter").value = sum/count;
        document.getElementById("result").innerHTML = (sum/count).toFixed(2);
    }
}

function apply() {
    sum = 0.0, count = 0.0;
    init();
    checkScore();
    showResult();
    console.log("apply clicked");
}