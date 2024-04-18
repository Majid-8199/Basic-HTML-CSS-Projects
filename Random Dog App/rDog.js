const imageDiv=document.getElementById('image')

function generateImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then( json => {
     console.log(json.message)
imageDiv.innerHTML = `<img src='${json.message}' height=100%/>`
})
}


