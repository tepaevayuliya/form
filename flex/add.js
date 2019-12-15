function myFunction() {
    var txtFirstName = "";
    if (document.forms["myForm"]["first-name"].value == "") {
        txtFirstName = "Введите имя";
    }
    document.getElementById("demoFirst-name").innerHTML = txtFirstName;

    var txtLastName = "";
    if (document.forms["myForm"]["last-name"].value == "") {
        txtLastName = "Введите фамилию";
    }
    document.getElementById("demoLast-name").innerHTML = txtLastName;

    var txtEmail = "";
    if (document.forms["myForm"]["email"].value == "") {
        txtEmail = "Введите email";
    }
    document.getElementById("demoEmail").innerHTML = txtEmail;

    var txtPhone = "";
    if (document.forms["myForm"]["phone"].value == "") {
        txtPhone = "Введите номер телефона";
    }
    document.getElementById("demoPhone").innerHTML = txtPhone;



    var txtAge = "";
    if (document.getElementById("age").validity.rangeUnderflow) {
        txtAge = "Значение слишком маленькое";
    }
    if (document.getElementById("age").validity.rangeOverflow) {
        txtAge = "Значение слишком большое";
    }
    document.getElementById("demoAge").innerHTML = txtAge;

    var txtHeight = "";
    if (document.getElementById("height").validity.rangeUnderflow) {
        txtHeight = "Значение слишком маленькое";
    }
    document.getElementById("demoHeight").innerHTML = txtHeight;


    var txtEmail = "";
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (!valid) {
        txtEmail = 'Адрес электронной почты введен неправильно!';
    }
    document.getElementById('demoEmail').innerHTML = txtEmail;

    var txtPhone = "";
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (!valid) {
        txtPhone = 'Номер телефона введен неправильно!';
    }
    document.getElementById('demoPhone').innerHTML = txtPhone;



    if (txtFirstName!="" || txtLastName!="" || txtEmail!="" || txtPhone!="" || txtAge!="" ||  txtHeight!=""){
        return false;
    }


}



