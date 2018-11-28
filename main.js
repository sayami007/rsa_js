function getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}


function gcd(p, q) {
    if (!q) {
        return p;
    }
    return gcd(q, p % q);
}


function getEncryption() {
    var p = document.querySelector("#p").value;
    var q = document.querySelector("#q").value;
    var phi = (p - 1) * (q - 1);
    var n = p * q;
    var e = 3;
    var d = 7;
    var Message = document.querySelector("#message").value;
    var encryptMessage = Math.pow(Message, e) % n;
    var decryptMessage = Math.pow(encryptMessage, d) % n;
    document.querySelector("#encrypt").innerHTML = encryptMessage;
    document.querySelector("#decrypt").innerHTML = decryptMessage;
}