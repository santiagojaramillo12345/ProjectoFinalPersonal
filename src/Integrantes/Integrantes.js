import { Footer } from "../shared/Footer/Footer";
import "./Integrantes.css"
export function Integrantes() {

  let titulo = "Integrantes de la banda...";
  let integrantes = [

    {
      nombre: "Dammon",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Damon_Integrante.jpg?alt=media&token=5e98dca4-6a36-4b60-8242-2e1ebea5fac0",
      biografia: "Damon Albarn (pronunciado /ˈdeɪmən_ˈælbɑrn/; Londres, 23 de marzo de 1968) es un músico, cantante, compositor y productor de discos británico, líder y letrista principal de la banda de rock Blur y como cofundador, vocalista principal, instrumentista y compositor principal de la banda virtual Gorillaz  Criado en Leytonstone, East London, y alrededor de Colchester, Essex, Albarn asistió a Stanway School, donde conoció al guitarrista Graham Coxon y formaron Blur, lanzando su álbum debut Leisure en 1991"



    }
    ,
    {

      nombre: "Jamie Hewlett",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Jamie_Hewlett.jpg?alt=media&token=0c00b638-0b85-4bc3-b4ba-6c650726e59e",
      biografia: "Mientras estudiaba en la Northbrook College en Worthing al oeste de Sussex, Inglaterra; Hewlett, Alan Martin y un compañero estudiante llamado Philip Bond crearon un fanzine llamada Atomtan. Esto atrajo la atención de Brett Ewins. Después de dejar la universidad, Hewlett y Martin fueron invitados por Ewins a crear un nuevo material para una nueva revista que él estaba creando junto a Steve Dillon en 1988.1​2​ La revista se llamó Deadline y creaba una mezcla de tiras cómicas producidas por creadores británicos y artículos basados en música y cultura."

    }






    ,
    {
      nombre: "Mike Smith",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Mike_Smith.jpg?alt=media&token=8becc493-1580-4487-a9c3-0f4034eccfaa",
      biografia: "Traducción del inglés-Mike Smith es un músico inglés. Adquirió experiencia como músico de estudio, tocando y haciendo giras con The Brand New Heavies. Smith es miembro de la banda en vivo de Gorillaz, siendo el único otro miembro constante en vivo desde el debut de la banda, el otro es el cofundador y cantante Damon Albarn."
    }]






  return (

    <>



      <h1 classNameName="center">INTEGRANTES DE LA BANDA</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-7 g-5">
          {integrantes.map(function (integrante) {
            return (
              <>




                <div className="col-12 col-md-6 ">



                  <h1>{integrante.nombre}</h1>
                  <img className="imagen" src={integrante.foto}></img>
                </div>


                <div className="col-12 col-md-6 ">
                  <h1 classNameName="center">biografia</h1>
                  <h3 className="fw-bold">{integrante.biografia}</h3>

                </div>






              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>


  )


}
