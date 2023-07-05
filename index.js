function random(){
    var a = Math.abs(Math.round((Math.random()*109 - 9)));
    return a;//55
    }
var ab = random();
document.getElementById("buttons").onclick = function(event) {
    event.preventDefault();
    var b = Number(document.getElementById("inputs").value);

    if (b < ab){
        document.getElementById("outputs").innerHTML = "số mà bạn đoán nhỏ quá";
    }else if (b > ab){
        document.getElementById("outputs").innerHTML = "số mà bạn đoán lớn quá";
    }else if (b == ab){
        document.getElementById("outputs").innerHTML = "chúc mừng bạn đoán đúng rồi 😀";
    }
};

document.getElementById("reset").onclick = function(event) {
    event.preventDefault();
    ab = random();
    document.getElementById("outputs").innerHTML = "";
  };