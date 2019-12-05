const http = new EasyHttp;

// Get Users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Post Users data
const data = {
    name:'John Doe',
    username:'johndoe',
    email:'johndoe@aol.com'
}
// http.post('http://jsonplaceholder.typicode.com/users',data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Post Users data
// http.put('http://jsonplaceholder.typicode.com/users/2',data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Delete Users Data
http.delete('http://jsonplaceholder.typicode.com/users/2')
.then(data=>console.log(data))
.catch(err=>console.log(err));