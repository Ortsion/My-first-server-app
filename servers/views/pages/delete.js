const BTNdelete = document.querySelector('#BTNdelete');
const serverAdd = 'http://127.0.0.1:1234/api/student';

console.log('i m delete.js');


BTNdelete.addEventListener('click', () => {
    fetch(serverAdd, { method: 'DELETE' })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        });
})