//receta para consumir un api con react 

export async function servicioCancionesTop(){


//1. pa done vas y aquevas
//Escribir la url del servicio del api

const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

//2.operacion que vas a hacer en la base de atos
//configurar la peticion de envio hacia el servidor 

const request={ 
    method:"GET",
    headers:{Authorization:"Bearer BQB_tsfSCe6umnR3GU5j4vAQT2SgDbRna5W144UKJ2mt4vtEcSlqrx7Oi3IIFR-1xxEBUN_gBIUv095MZNNeD9Pcp74P--llmV9qNly8a2LPqB8zW3hscYlZsQ-EDvXMAHaNvq9q-aG3TcD6SJ4DoNTNM0r91Ch1NjlcUQHl3cT1Jp20On1b4MVqygdgyqXZnlI"}
}

//3. nos vamos pal restaurante 
//consumimos el api

let respuesta=await fetch(URL,request)
let canciones=await respuesta.json()

return(canciones)

}


