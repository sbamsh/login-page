//selectors

const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininBtn = document.querySelector(".signin-button");
const sigininMsg = document.querySelector(".signin-status");



//listeners

sigininBtn.addEventListener("click", signIn);






//function

function signIn(event){
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifsendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "please enter a valid email";
        ifsendData = false;
    }

    if (passwordValue.length === 0){
        passwordMsg.innerText = "please enter your password";
        ifsendData = false;
    } else if (passwordValue.length <= 4){
        passwordMsg.innerText = "your password is too short";
        ifsendData = false;
    }

    if (ifsendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue
        })

        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
        .then (respnse => {
            if(response.ok) {
                sigininMsg.innerText = "You signed in successfully"
            }
        })
    }

}