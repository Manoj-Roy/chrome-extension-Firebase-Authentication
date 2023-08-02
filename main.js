// window.onload = function (params) {
    console.log("hello chrome");
    var fb = globalThis; // Firebase module
    var signEmail,
        signPassword,
        signUp,
        loginEmail,
        loginPassword,
        logIn,

        logOut,
        token,

        signUpCred,
        logInCred,
        userDetails,
        user,
        isSignUp,
        islogIn;

    signEmail = document.getElementById('signEmail');
    signPassword = document.getElementById('signPassword');
    signUp = document.getElementById('signUp');

    loginEmail = document.getElementById('loginEmail');
    loginPassword = document.getElementById('loginPassword');
    logIn = document.getElementById('logIn');

    logOut = document.getElementById('logOut');

    user = document.getElementById('user');

    isSignUp = document.getElementById('isSignUp');
    islogIn = document.getElementById('islogIn');

    async function logIN() {
        // console.log(loginEmail.value,loginPassword.value);

        try {
            logInCred = await fb.signInWithEmailAndPassword(fb.auth, loginEmail.value, loginPassword.value);
            if (logInCred) {
                token = logInCred.user.accessToken;
                localStorage.setItem('setToken', token);
                // console.log(logInCred);
                let parseToken = parseJwt(token);
                user.innerHTML = "Hi this is " + parseToken.email.split("@")[0];
                showComponent('homeComponent');

            }
        } catch (error) {
            error.code.includes('email') ? ((loginEmail.nextElementSibling.innerHTML = error.code), loginEmail.nextElementSibling.style.display = 'block') : (loginEmail.nextElementSibling.style.display = 'none');
            error.code.includes('password') ? ((loginPassword.nextElementSibling.innerHTML = error.code), loginPassword.nextElementSibling.style.display = 'block') : (loginPassword.nextElementSibling.style.display = 'none');
            console.log(error.code);
        }
    }
    const signUP = async () => {

        try {
            signUpCred = await fb.createUserWithEmailAndPassword(fb.auth, signEmail.value, signPassword.value)
            // console.log(signUpCred);
        } catch (error) {
            error.code.includes('email') ? ((signEmail.nextElementSibling.innerHTML = error.code), signEmail.nextElementSibling.style.display = 'block') : (signEmail.nextElementSibling.style.display = 'none');
            error.code.includes('password') ? ((signPassword.nextElementSibling.innerHTML = error.code), signPassword.nextElementSibling.style.display = 'block') : (signPassword.nextElementSibling.style.display = 'none');
            console.log(error.code);
        }
    }
    const logOUT = async () => {
        let out = await fb.signOut(fb.auth);
        setTimeout(() => {
            localStorage.removeItem('setToken');
            showComponent('logInControle');
        })

    }
    const signed = () => {
        showComponent('logInControle');
    }
    const logged = () => {
        showComponent('signUpControle');
    }
    window.showComponent = function (componentName) {
        console.log(componentName);
        let allComponents = document.querySelectorAll(".allComponents");
        allComponents.forEach((el, i) => {
            el.style.display = 'none';
        })
        let compName = document.getElementById(componentName);
        compName.style.display = 'block';
    }
    logIn.addEventListener("click", logIN);
    signUp.addEventListener("click", signUP);
    logOut.addEventListener("click", logOUT);
    isSignUp.addEventListener("click", signed);
    islogIn.addEventListener("click", logged);


    window.getUserDetailsByToken = async () => {
        try {
            userDetails = await fb.getIdTokenResult()
        } catch (error) {
            console.log(error.code);
        }
    }
    window.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }
    token = localStorage.getItem('setToken');
    if (token) {
        let parseToken = parseJwt(token);
        user.innerHTML = "Hi this is " + parseToken.email.split("@")[0].toUpperCase();
        console.log(parseToken);
        showComponent('homeComponent');
    }
    // console.clear()
    // document.getElementById("submit").addEventListener("click", function (e) {
    //     e.preventDefault();
    //     grecaptcha.ready(function () {
    //         grecaptcha.execute('', { action: 'submit' }).then(function (token) {
    //             // Add your logic to submit to your backend server here.
    //             console.log(token);
    //         });
    //     });
    // });
// }
