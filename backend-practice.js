/* const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
    console.log(xhr.response);
})
xhr.open('GET','https://supersimplebackend.dev/products/first');
xhr.send(); */

function usingFetch(){
    fetch('https://supersimplebackend.dev/products').then( (response) => {
       
       return response.json()
        

    }).then( (productData) => {
        console.log(productData)

    })
}

usingFetch();