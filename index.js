// Add your code here
const userData = {
        name:'John',
        email:'john@gmail.com',
    };

const submitData = {
    method:'POST',
    headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
    },
    body:JSON.stringify(userData)
};
fetch("http://localhost:3000/users", submitData)
.then (function(response){
    return response.json()
})
.then (function(object){
    console.log(object)
})
.catch(function(error){
    alert('ERror 404.Bad Request')
});

