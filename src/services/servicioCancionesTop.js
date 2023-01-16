//receta para consumir un api con react 

export async function servicioCancionesTop(){


//1. pa done vas y aquevas
//Escribir la url del servicio del api

const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

//2.operacion que vas a hacer en la base de atos
//configurar la peticion de envio hacia el servidor 

const peticion={ 
    method:"GET",
    headers:{Authorization:"Bearer BQBFimUt_BptdHDgAiha4dYaWBXMzIbIt9ex0XIsjYac_T3JAh9GNbdkWKgKer1kDjYflaytPixBiw9IlGEQ-9x0tCmC02_o4s2eMWLrdOH1J2YvCfA3vnWbhka4A5sZA1XJcexZS4J-TgChYJ6YI1CKSVwIAOniB6PDdJRX5e7IajIhBuqhTCneXPHmXsUXCZY"}
}

//3. nos vamos pal restaurante 
//consumimos el api

let respuesta=await fetch(URL,peticion)
let canciones=await respuesta.json()

return(canciones)

}


