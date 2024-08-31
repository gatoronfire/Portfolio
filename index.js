
const submit = document.getElementById("button");

function randNumFunc (){
    var randNum = Math.floor(Math.random() * 900) + 1;
    let txt = document.getElementById('num');
    num.innerHTML = randNum;
}
randNumFunc();



document.addEventListener('DOMContentLoaded', function() {


    var slider = document.getElementById('slider');
    var sliderUl = slider.querySelector('ul');
    var slides = sliderUl.querySelectorAll('li');
    var slideCount = slides.length;
    var slideWidth = slides[0].offsetWidth;
    var slideHeight = slides[0].offsetHeight;
    var sliderUlWidth = slideCount * slideWidth;

    slider.style.width = slideWidth + 'px';
    slider.style.height = slideHeight + 'px';
    
    sliderUl.style.width = sliderUlWidth + 'px';
    sliderUl.style.marginLeft = -slideWidth + 'px';

    // Mueve el último slide al principio
    sliderUl.insertBefore(slides[slideCount - 1], slides[0]);

    function moveLeft() {
        sliderUl.style.transition = 'left 0.2s';
        sliderUl.style.left = slideWidth + 'px';

        setTimeout(function() {
            sliderUl.insertBefore(sliderUl.lastElementChild, sliderUl.firstElementChild);
            sliderUl.style.transition = 'none';
            sliderUl.style.left = '0';
        }, 200);
    }

    function moveRight() {
        sliderUl.style.transition = 'left 0.2s';
        sliderUl.style.left = -slideWidth + 'px';

        setTimeout(function() {
            sliderUl.appendChild(sliderUl.firstElementChild);
            sliderUl.style.transition = 'none';
            sliderUl.style.left = '0';
        }, 200);
    }

    var controlPrev = document.querySelector('a.control_prev');
    var controlNext = document.querySelector('a.control_next');

    controlPrev.addEventListener('click', function(e) {
        e.preventDefault();
        moveLeft();
    });

    controlNext.addEventListener('click', function(e) {
        e.preventDefault();
        moveRight();
    });

});

  












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


