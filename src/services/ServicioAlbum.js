/*//receta para consumir api
export async function servicioAlbum(){

//1. pa done vas y aquevas
//Escribir la url del servicio del api

const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/albums?include_groups=on&market=us&limit=6&offset=5"

//2.operacion que vas a hacer en la base de atos
//configurar la peticion de envio hacia el servidor 


const request={
    method:"GET",
    headers:{Authorization:"Bearer BQC5K-dvrSV-98tWHhM5YmAetE9_rSmtZn1-3RQZCNWJ3tbIW8F07yX2DSR-uEFzkb_sxa-7l6FqFmG1UkqrakFnWM0cw4FxrSwQS5Pv_oSO3vZT7gWwDrY2SXQZOBOrS7yFP8u3Tsi5LiVIHpiCdf2lAOnM3DBop9tdaLw1epuBeRI02he94NIb6LPNLvAjRcY"} 
    
}

//3. nos vamos pal restaurante 
//consumimos el api





let respuesta=await fetch(URL,request)
let album=await respuesta.json()

return(album)

console.log(album)


}*/