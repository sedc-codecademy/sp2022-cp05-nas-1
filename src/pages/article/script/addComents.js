const commentsDiv = document.getElementById("comments");
const commentsBox = document.getElementById("comments-box");

function addComents(inputs, errMsg){

    let validateEmailInput = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

    const firstName = inputs[0];
    const lastName = inputs[1];
    const email = inputs[2];
    const comment = inputs[3];

    if(firstName.value==="" || lastName.value==="" || email.value==="" || comment.value==="" || !validateEmailInput(email.value)){
        errMsg.innerText = "Please provide valid inputs for all fields";
    } else {
        errMsg.innerText = "";
        commentsDiv.style.display = "block";
        commentsBox.innerHTML += ` 
            <div style="border: 2.5px solid lightskyblue; border-radius: 10px; background-color: whitesmoke; margin-bottom: 2.5px; padding: 5px"> 
                <p><b>${firstName.value} ${lastName.value},</b> <i>${new Date().toString().slice(0, 21)}</i></p> </br>
                <p>${comment.value}</p>
            </div> </br>`
        inputs.forEach((el) => {el.value=""});
    };
};

export {addComents};