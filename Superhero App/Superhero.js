const TOKEN='3281962272103526';
const URL=`https://superheroapi.com/api.php/${TOKEN}`;
const getButtonDiv=document.getElementById('getButton')
const imageDiv=document.getElementById('image')
const searchButton=document.getElementById('search')
const searchInputDiv=document.getElementById('searchInput')

const getRandomSuperHero=(id)=>{
    fetch(`${URL}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        const name=`<h2>${json.name}</h2>`
        const stats=getStats(json)
        
        imageDiv.innerHTML =
         `${name} <img src="${json.image.url}" height=200px width=200px/> ${stats}`

    })
}

const getStats = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat}: ${character.powerstats[stat]}</p>`
    })
    return stats.join('')
}

const randomHero=()=>{
    return Math.floor(Math.random()*731)+1;
}

const getSearchSuperHero=(name)=>{
    fetch(`${URL}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        const hero=json.results[0]
        const name=`<h2>${hero.name}</h2>`
        const stats=getStats(hero)

        imageDiv.innerHTML =
        `${name} <img src="${hero.image.url}" height=200px width=200px/> ${stats}`
    })
}


getButtonDiv.onclick = () => getRandomSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInputDiv.value)