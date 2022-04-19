const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/logout';
    } else{
        greeting.innerHTML = `witaj ${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}

