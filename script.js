let bouton = document.querySelector('.btn-inscription')

bouton.onclick = () =>{
    let data ={
        prenom: document.getElementById('lastname').value,
        name_user: document.getElementById('name_user').value,
        password :document.getElementById('password').value,
        mail : document.getElementById('mail').value
    }
    console.log("data",data);

    localStorage.setItem("user_data",JSON.stringify(data) );
   
}





