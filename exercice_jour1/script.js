let bouton = document.querySelector('.formulaire_inscription');

let data ={
    name :name.value,
    lastname :lastname.value,
    name_user : name_user.value,
    password :password.value,
    mail :mail.value 
}

bouton.addEventListener("submit",()=>{

    localStorage.setItem("name",name.value);

})

// bouton.onclick = () =>{
//     localStorage.setItem("name",name.value);
//     localStorage.setItem("lastname",lastname.value);
//     localStorage.setItem("name_user",name_user.value);
//     localStorage.setItem("password",password.value);
//     localStorage.setItem("mail",mail.value);
//     localStorage.setItem("check",check.value);
// }


