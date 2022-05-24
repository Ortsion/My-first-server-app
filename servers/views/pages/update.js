console.log('i m update.js');
const btn = document.querySelector("#btnUpdate");
const serverAdd = 'http://127.0.0.1:1234/api/student';

btn.addEventListener('click', () => {
    fetch(serverAdd , {method: "PUT"})
            .then(res => res.json())
            .then(res => console.log(res))
})

