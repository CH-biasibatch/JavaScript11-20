function firstLast6(arr){
    var theIndex = arr.indexOf(6);
    var lastIndex = arr.lastIndexOf(6);
    if(theIndex === 0 || lastIndex === arr.length-1){
        return true;
    }else{
        return false;
    }
}

function has23(arr){
    var firstNum = arr[0];
    var lastNum = arr[1];
    if(firstNum == 2 || firstNum == 3 || lastNum == 2 || lastNum == 3){
        return true;
    }else{
        return false;
    }
}

function fix23(arr) {
    var firstNum = arr[0];
    var secondNum = arr[1];
    var thirdNum = arr[2];
    if (firstNum == 2 && secondNum == 3) {
        arr[1] = 0;
        return arr;
    }
    if (secondNum == 2 && thirdNum == 3) {
        arr[2] = 0;
        return arr;
    } else {
        return arr;
    }
}

function countYZ(word){
    var count = 0;
    word = word.toLowerCase();
    for(var i = 0; i < word.length; i ++){
        if(word[i] == " "){
            if(word[i - 1] == "y" || word[i - 1] == "z"){
                 count ++;
            }
        }
        console.log(count);
    }
    if(word[word.length - 1] == "y" || word[word.length - 1] == "z"){
        count ++;
    }
    return count;
}

function endOther(strOne,strTwo) {
    strOne.toLowerCase();
    strTwo.toLowerCase();

    if(strOne.endsWith(strTwo)){
        return true;
    }
    if(strTwo.endsWith(strOne)){
        return true;
    }else{
        return false;
    }
}

function starOut(string) {
    var answer = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] != "*") {
            if (string[i + 1] != "*") {
                if (string[i - 1] != "*") {
                    answer = answer + string[i];
                }
            }
        }
    }
    return answer;
}

function evenlySpaced(a,b,c){
    if(c-b == b-a || a-b == b-c || a-b == c-a || a-c == c-b){
        return true;
    }else{
        return false;
    }
}

function getSandwich(string) {

    var firstBread = string.indexOf("bread");
    var lastBread = string.lastIndexOf("bread");

    if (firstBread == -1) {
        return "";
    }

    if (firstBread == lastBread) {
        return "";
    }
    return string.substring(firstBread + 5, lastBread);
}

function canBalance(arr){
    var sum1 = 0;
    var sum2 = 0;

    for(var i = 0; i<arr.length;i++) {
        sum1 += arr[i];

        for(var j = i+1  ;j<arr.length;j++) {
            sum2 += arr[j];
        }
        if(sum1==sum2){
            return true;
        }
        sum2=0;
    }
    return false;
}

function countClumps(arr){
    var clumps = 0;

    for(var i = 0; i<arr.length;i++) {

        if(arr[i]==arr[i+1]) {
            i++;
            clumps += 1;
        }
        if(arr[i]==arr[i+1]==arr[i+2])
            return clumps;
    }
    return clumps;
}






function tester() {

    document.getElementById("output1").innerHTML = firstLast6();
    document.getElementById("output2").innerHTML = has23();
    document.getElementById("output3").innerHTML = fix23();
    document.getElementById("output4").innerHTML = countYZ();
    document.getElementById("output5").innerHTML = endOther();
    document.getElementById("output6").innerHTML = starOut();
    document.getElementById("output7").innerHTML = evenlySpaced();
    document.getElementById("output8").innerHTML = getSandwich();
    document.getElementById("output9").innerHTML = canBalance();
    document.getElementById("output10").innerHTML = countClumps();

}