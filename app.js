const spanDate = document.getElementById('date');
const spanweekday = document.getElementById('weekday');
const spanmonth = document.getElementById('month');
const spanyear = document.getElementById('year');

function loadbody() {
    console.log('body loaded');
    const date = new Date();
    const month = date.toLocaleString();
    const myDate = date.getDate();
    const year = year.getfullyear();
    const day= date.toDateString();


    spanDate.innerText = myDate;
    spanmonth.innerText = month;
    spanyear.innerText = year;
    spanweekday.innerText = day;
    
}

// signup

const signupForm = document.getElementById("signup-Form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = signupForm['name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    console.log(name,email,password)
    signupForm.request();

    //auth creat
    Auth.creatUserWithEmailAndPassword(email, password).then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password,
        }).then(() => {
            location = login.html
        }).catch(err => {
            const signupError = document.getElementById('signupError');
            signupError.innerText = err.message;
        })
    }).catch(err => {
        const signupError2 = document.getElementById('signupError');
        signupError2.innerText = err.message;


    })
})