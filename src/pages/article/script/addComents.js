const commentsDiv = document.getElementById("comments");
const commentsBox = document.getElementById("comments-box");

function addComents(inputs, errMsg){

    const inptsVals = [];

    inputs.forEach((el) => {
        inptsVals.push(el.value);
    });

    let validateEmailInput = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    let validateEmptyString = (inpts, value) => {
        return inpts.some(el => value === el);
    };

    if(validateEmptyString(inptsVals, "") || !validateEmailInput(inputs[2].value)){
        errMsg.innerText = "Please provide valid inputs for all fields";
    } else {
        errMsg.innerText = "";
        commentsDiv.style.display = "block";
        commentsBox.innerHTML += ` 
            <div style="border: 2.5px solid lightskyblue; border-radius: 10px; background-color: whitesmoke; margin-bottom: 2.5px; padding: 5px"> 
                <p><b>${inputs[0].value} ${inputs[1].value},</b> <i>${new Date().toString().slice(0, 21)}</i></p> </br>
                <p>${inputs[3].value}</p>
            </div> </br>`
            inputs.forEach((el) => {el.value=""});
    };
};

export {addComents};