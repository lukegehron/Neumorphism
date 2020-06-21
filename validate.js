
function validate(){
    let facilitators = ["Laura", "Fazil", "Harsh"];
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let facilitator = document.getElementById("facilitator").value;

    let firstFail = document.getElementById("firstNameFailure");
    let lastFail = document.getElementById("lastNameFailure");
    let fnFail = document.getElementById("facilitatorFailure");

    let mRegex = /^[a-zA-Z]{2,}/;

    let fnCheck, lnCheck, facCheck;


    if(firstName.match(mRegex)){
        firstFail.innerHTML = "";
        fnCheck = true;
    }else{
        firstFail.innerHTML = "Enter your first name";
    }

    if(lastName.match(mRegex)){
        lastFail.innerHTML = "";
        lnCheck = true;
    }else{
        lastFail.innerHTML = "Enter your last name";
    }

    if(facilitators.includes(facilitator)){
        fnFail.innerHTML = "";
        facCheck = true
    }else{
        fnFail.innerHTML = "Please enter Laura, Fazil, or Harsh";
    }
    
    if(fnCheck && lnCheck && facCheck){
        return true;
    }
    return false;
}