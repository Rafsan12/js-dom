document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit')
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // console.log(email)
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    // console.log(password)

    if(email ==="rafsan@gmail.com" && password === "RAFSAN"){
        window.location.href = 'Bank.html'
    }else{
        alert('Please provide valid user email and password')
    }
})