//receta para consumir un api con react 

export async function servicioCancionesTop(){


//1. pa done vas y aquevas
//Escribir la url del servicio del api

const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

//2.operacion que vas a hacer en la base de atos
//configurar la peticion de envio hacia el servidor 

const request={ 
    method:"GET",
    headers:{Authorization:"Bearer BQAAHlIDN_Yt4LScCREExjv2Npq2taC-R8BsAL0q1tVH0XocD8y7iImG6UskCYLMW5WK2nkhQRexVoa7s1gVHDuMPLQTBOdgB_zY4GafUN0tZD_XxBDVNZyEd9alfmHAYWGiUVRiFE98mjiafsi7tgrjdbhOhZgAwwG1s6eDrS1Ljdc34tNxmUssyIK8v_kgHVA"}
}

//3. nos vamos pal restaurante 
//consumimos el api

let respuesta=await fetch(URL,request)
let canciones=await respuesta.json()

console.log(canciones)

}