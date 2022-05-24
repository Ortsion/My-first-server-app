const btn = document.getElementById("BTNcreate");
const serverAdd = 'http://127.0.0.1:1234/api/student';
// const input = document.getElementById("input").value;
const data = {sheloymale: {"lastName" : "levi", "age": "33"}};

console.log('i m create.js');

const myFetch = () => {
    fetch(serverAdd, {
        method : 'POST',
        headers: {
            "Content-Type" : 'application/json',
        }, 
        body : JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((res) => {console.log(res)});
}
        

    btn.addEventListener('click', myFetch);
    
    
    //     btn.addEventListener('click', () => {
        // console.log('ASGDFBSGDBSDBsfgdfbfryhrmjfyuki685634werdfscx');
        //     })
        
        // fetch(serverAdd, {method : 'CREATE'})
        //         .then((res) => res.json())
        //         .then((res) => {console.log(res)});