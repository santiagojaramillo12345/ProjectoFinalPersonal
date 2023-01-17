//receta para consumir un api con react 
import {generarToken} from "./servicioToken"
export async function servicioCancionesTop(){


    let token=await generarToken()

//1. pa done vas y aquevas
//Escribir la url del servicio del api

const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

//2.operacion que vas a hacer en la base de atos
//configurar la peticion de envio hacia el servidor 

const peticion={ 
    method:"GET",
    headers:{Authorization:token}
}

//3. nos vamos pal restaurante 
//consumimos el api

let respuesta=await fetch(URL,peticion)
let canciones=await respuesta.json()

return(canciones)

}


