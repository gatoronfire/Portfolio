
function GetData() {
    const submit = document.getElementById("button");
    if (submit) {
        submit.addEventListener('click', e => {
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
                messageContainer.classList.add('error', 'show')
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
                From: mail,
                Subject: "Portfolio contact",
                Body: message,
            }).then(
                message => send =message
            );
            console.log(send)

            if(send == undefined){
                let text = "";
                    text += `
                            <p>The mail has been send succesfully</p>
                        `
                    inputs.forEach(input => {
                    input.classList.add('success')
                    });
                    messageContainer.innerHTML = text;
            }
            
        })
    }
}
GetData();
