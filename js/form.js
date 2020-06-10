function init(){
    document.querySelectorAll('.error').forEach(item => {
        item.style.display = 'none';
    });
}

function isValidEmail(email){
    if(email.length == 0) return false;

    if(!email.includes('@')) return false;
    let user = email.split('@');
    if(user.length != 2) return false;
    if(user[0].length == 0 || user[1].length == 0) return false;

    let domain = user[1].split('.');
    if(domain.length != 2) return false;
    if(domain[0].length == 0 || domain[1].length == 0) return false;

    return true;
}

function isValidUsername(username){
    if(username.length == 0 || username.length > 8) return false;
    let allowed = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for(let c of username){
        if(!allowed.includes(c)) return false;
    };

    return true;
}

function isValidPassword(password){
    if(password.length == 0 || password.length < 8) return false;
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let number = '1234567890';
    let symbols = '!"#$%&\'()*+,=./:;<=>?@[\\]^_`{|}~';

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbols = false;
    for(let c of password){
        if(c.includes(upper)) hasUpper = true;
        if(c.includes(lower)) hasLower = true;
        if(c.includes(number)) hasNumber = true;
        if(c.includes(symbols)) hasSymbols = true;
    };
    if(upper && lower && number && symbols) return true;
    else false;
}

function isValidDob(dob){
    if(dob == null || dob == "") return false;
    let today = new Date();
    let birth = new Date(dob);

    if((today-birth)/31536000000 >=13) return true;
    else return false;
}

document.addEventListener('DOMContentLoaded', function(event){
    document.querySelector('form').addEventListener('submit', function(event){
        init();
        event.preventDefault()
        let email = document.querySelector('#email').value;
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        let password2 = document.querySelector('#password2').value;
        let radio_male = document.querySelector('#radio_male').checked;
        let radio_female = document.querySelector('#radio_female').checked;
        let dob = document.querySelector('#dob').value;
        let nation = document.querySelector('#nation').value;
        let validate = document.querySelector('#validate').checked;

        if(!isValidEmail(email)) document.querySelector('#email-error').style.display = 'block';

        if(!isValidUsername(username)) document.querySelector('#username-error').style.display = 'block';

        if(!isValidPassword(password)) document.querySelector('#password-error').style.display = 'block';

        if(password != password2) document.querySelector('#password2-error').style.display = 'block';

        if(!radio_male && !radio_female) document.querySelector('#gender-error').style.display = 'block';

        if(!isValidDob(dob)) document.querySelector('#dob-error').style.display = 'block';

        if(nation == "none") document.querySelector('#nation-error').style.display = 'block';

        if(!validate) document.querySelector('#validate-error').style.display = 'block';

        let eligible = true;
        document.querySelectorAll('.error').forEach(item => {
            if(!(item.style.display == "" || item.style.display == "none")){
                eligible = false;
            }
        });

        if(eligible){
            alert("Register Success! You will be redirected to main page.");
            location.href = "./../index.html";
        }
    });
});