function GetData() {
    const submit = document.getElementById("button");
    if (submit) {
        submit.addEventListener('click', e => {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let mail = document.getElementById('mail').value;
            let message = document.getElementById('msg').value;
            let inputs = document.querySelectorAll('.input');
            const messageContainer = document.querySelector('.error');
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
        })
    }
}
GetData();