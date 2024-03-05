const formLabel = document.getElementById("formLabel");
const inputName = document.getElementById("name");
const btnLogin = document.getElementById("btnLogin");
const btnElimina = document.getElementById("btnElimina");

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let name = inputName.value;
    localStorage.setItem( "user", name);
    formLabel.innerText = `Ciao ${name}`;
    inputName.value = "";
});

btnElimina.addEventListener( 'click' , (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    formLabel.innerText = "";
});
