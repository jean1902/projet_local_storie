let bouton = document.querySelector('.btn-inscription')

bouton.onclick = () =>{
    localStorage.setItem("name",name.value);
    localStorage.setItem("lastname",lastname.value);
    localStorage.setItem("name_user",name_user.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("mail",mail.value);
    localStorage.setItem("check",check.value);
}