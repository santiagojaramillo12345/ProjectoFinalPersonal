import { servicioCancionesTop } from "../services/servicioCancionesTop"
import { useState, useEffect } from "react"

export function Music() {

  //usando el usestate para almacenar la respuesta del api de forma global


  const [canciones, setCanciones] = useState(null)

  const [estadoCarga, setEstadoCargando] = useState(true)


  //usando el useEffect  para limitar el consumo del api a una sola vez 
  useEffect(function () {
    servicioCancionesTop().then(function (response) {
      setCanciones(response)
      setEstadoCargando(false)
    })
  }, [])




  //render del componenete: 
  if (estadoCarga == true) {

    return (

      <>
        <h2>Estamos Cargando Las Canciones</h2>
      </>
    )

  } else {


    return (

      <>
        <h2>

          canciones de la banda:

        </h2>

        {
          canciones.tracks.map(function (cancion) {

            {console.log(cancion.album.images[0].url)}

            return (

              <div className="col">

                    <div className="col-12 col-md-12 card h-100 shadow">


                    <div className="col-12 col-md-12 center ">
                      
                    <img src={cancion.album.images[0].url}></img>


                       </div>







                   </div>

              </div>







            )
          })
        }

      </>

    )

  }

}

/*

              <div>

                <h1>{cancion.name}</h1>

                <audio controls src={cancion.preview_url}></audio>
                <img src={cancion.album.images[0].url}></img>
              
              </div>



*/