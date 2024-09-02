function Validate(value) {
    let error="";
    const email=/[a-z][a-z0-9]*@gmail.com/;
    const password=/[a-zA-z0-9]+/;
    if(password.test(value.password) && email.test(value.email)){
        error="Password and email is correct";
    }
    else if(!email.test(value.email) && !password.test(value.password)){
        error="Both are wrong";
    }
    else if(!email.test(value.email)){
        error="Email is wrong";
        alert(error);
    }
    else if(!password.test(value.password)){
        error="Password is wrong";
    }
    return error;
}

export default Validate;