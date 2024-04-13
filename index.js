
const submit = document.getElementById("button");

function randNumFunc (){
    var randNum = Math.floor(Math.random() * 900) + 1;
    let txt = document.getElementById('num');
    num.innerHTML = randNum;
}
randNumFunc();
var sended = 0;
function GetData() {
    if (submit) {
        submit.addEventListener('click', e => {
            if(sended !=0){
                return;
            }
            sended++;
            e.preventDefault();
            let name = document.getElementById('name').value;
            let mail = document.getElementById('mail').value;
            let message = document.getElementById('msg').value;
            let inputs = document.querySelectorAll('.input');
            const messageContainer = document.querySelector('.container');
            if (name == '' || mail == '' || message == '') {

                let text = "";
                text += `
                            <p>Por favor completar todos los campos.</p>
                        `
                inputs.forEach(input => {
                    input.classList.add('error')
                });
                messageContainer.classList.add('error')
                messageContainer.innerHTML = text;
                return;
            }
            inputs.forEach(input => {
                input.classList.remove('error')
                submit.classList.add('disabled');
            });

            if(messageContainer.classList.contains('error')){
                messageContainer.classList.remove('error', 'show')
                let text = messageContainer.firstElementChild
                messageContainer.removeChild(text)
            }
            var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
            var send;
            
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "diego.casas11104@gmail.com",
                Password: "418FDD9C8EC3144649615F92D8466DD0339D",
                To: 'diego.casas11104@gmail.com',
                From: 'diego.casas11104@gmail.com',
                Subject: "NetType contact",
                Body:'name: ' + name + "\n" + 'email: ' + mail + "\n" + message,
            }).then(
                message => console.log(message)
                
            );

            if(send == undefined){
                let text = "";
                    text += `
                            <p>El mail se envio correctamente</p>
                        `
                    inputs.forEach(input => {
                    input.classList.add('success')
                    });
                    messageContainer.classList.add('success');
                    messageContainer.innerHTML = text;
            }
            console.log(e);
        })
    }
}
GetData();


//code for slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}