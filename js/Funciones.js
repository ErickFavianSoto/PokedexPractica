
const fechPokemon = () => {
    const pokeName= document.getElementById("pokeName");
    let PokeName = pokeName.value.toLowerCase();
    

    const url = `https://pokeapi.co/api/v2/pokemon/${PokeName}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            console.log(res);
            pokeImage("./sources/img/sin respuesta.jpg");
        }else{
        return res.json();}
    }).then((data)=>{
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
    }) 
}

//fechPokemon();


const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png");

const imprimir = () =>{
    const pokeName= document.getElementById("pokeName");
    let PokeName = pokeName.value;
    console.log("Tu buscaste : "+PokeName);
}