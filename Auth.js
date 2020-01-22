const form = document.querySelector(".signin");
const info = document.querySelector(".info");

const user_email = document.getElementById("email");
const user_password = document.getElementById("password");

form.addEventListener("submit", event => {
    event.preventDefault();

    let email = user_email.value;
    let password = user_password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(`Successfully signed in!`);            
        // redirecting to app homepage
        window.location.href = "../board/";

        })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            let html = `<p><b>Ooops!</b> Could not sign you in!</p>
                        <ol>
                            <li>You <b>forgot your password</b>; contact the admin or</li>
                            <li>Your email <b>is not registered</b> to use this App.</li>
                        </ol>
            `;
            
            info.innerHTML = html;
            setTimeout(() => {
                info.innerHTML = ``;
            }, 8000);
        });

    // reset form
    form.reset();
});