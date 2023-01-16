import { servicioCancionesTop } from "../services/servicioCancionesTop"
import { useState, useEffect } from "react"
import "./Music.css"
import { Footer } from "../shared/Footer/Footer";

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
        <h2 className="centrar" >

          canciones de la banda:

        </h2>
<br></br>
       
<div className="container">    
       
<div className="row row-cols-1 row-cols-md-2 g-5 ">
        {
          canciones.tracks.map(function (cancion) {

            {console.log(cancion
              )}

            return (


              
              <div className="col">

                    <div className="col-12 col-md-12 card h-100 shadow">
<br></br>

                    <div className="col-12 col-md-12 center "><img className="imagen" src={cancion.album.images[0].url}></img></div>

                        <div className="col-12 col-md-8 center"><h1>{cancion.name}</h1></div>


                        
                        <div className="col-12 col-md-8 center"><audio controls src={cancion.preview_url}></audio></div>



                        <div className="col-12 col-md-8 center"> <p>Popularidad : {cancion.popularity}</p> </div>


                   </div>


                  
                  
                   




                   

              </div>







            )
          })
        }

</div>
</div>

<Footer />

      </>

    )

  }

}

