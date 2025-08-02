// API -> application programming interface
// object -> JSON
// let obj = {
//     key: "value"
// }

// let json = {
//     "key": "value"
// }

// methods
// GET
// POST
// PUT
// DELETE

// FETCH(), axios

let apiData = "https://jsonplaceholder.typicode.com/posts"
let body = document.querySelector('body')
fetch(apiData)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.map((item, index) => {
            let title = document.createElement('p')
            title.innerHTML = `${index + 1} ${item.title}`
            body.append(title)
        })
    })

console.log(apiData);
