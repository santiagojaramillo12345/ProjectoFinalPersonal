import { Footer } from "./Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Mercancia.css"


export function Mercancia() {
  

 //activamos la navegacion entre componentes
 let navegante=useNavigate()

  //que hagp cuando activo el evento
  function dectetarEvento(productoSelecionado){

navegante("/ampliarinfo",{
  state:{productoSelecionado}
})




 

  }
  
  
  let titulo = "producto de la banda...";
   
   
   
  let productos = [
    {
      nombre: "Disquete",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/1gorillax-album.jpg?alt=media&token=f4deb0ed-924f-4bbf-87ad-143eecea5421",
      precio: 40000,
      Descripcion:"Es un disquete que contiene 30 canciones diferentes de gorillaz"
    },
    {
      nombre: "Camisa",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Camisa_Gorillaz.jpg?alt=media&token=e5a891da-6f82-4886-8d27-51d79695c786",
      precio: 20000,
      Descripcion:"Camisa 100% original talla S,L,XL"
    },
    {
      nombre: "Mochila",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Gorillax_mochila.jpg?alt=media&token=9be666c4-3895-4152-b558-e0ceb328fb02",
      precio: 10000,
      Descripcion: "DESDE 1984 SIEMPRE CON LA MUSICAALMAGRO (CAPITAL FEDERAL) - SANTA TERESITA (PDO. COSTA) MATERIAL: DE CORDURASUBLIMADATAMAÑO: 30 cm DE ANCHO X 42 cm DE Mochila  mediana congran resistencia a objetos pesados "
    },
    {
      nombre: "Saco",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Saco_Gorillax.png?alt=media&token=2eee6539-547a-48e1-8eb5-4c37f7a6414e",
      precio:40000,
      Descripcion:"Saco original de agodon talla S,L,XL,M"
    },
    {
      nombre: "Figura",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/figura.jpg?alt=media&token=75844fff-10aa-4b2b-bc4d-33edb9c40853",
      precio: 20000,
      Descripcion: "Figura de plastico de 30 cm de gorillaz"
    },
    {
      nombre: "post",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/gorillax-album.jpg?alt=media&token=d9aca177-64b1-4d92-99a5-d8813674f4c6",
      precio: 20000
      ,
      Descripcion:"Estepost biene conlafirmaautografiada de el  cantante"
    },
  ];

  return (
    <>
     <br/>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5 ">
          {productos.map(function (producto,id) {
            return (
              <div key={id}>
                <div className="col">

                    <div className="col-12 col-md-12 card h-100 shadow"> 


                    <div className="col-12 col-md-12 center "> 
                            
                            <h1>{producto.nombre}</h1>

                            </div>
                            <div className="col-12 col-md-12 center "> 

                            <img src={producto.foto} alt=" " className="imagen"/>
                            
                    </div>
                            
                    <div className="col-12 col-md-12  center"> 

                            <button className="btn btn-primary mx-3 mb-3 t " onClick={
                             
                             
                        
                             
                             
                             function(){
                                dectetarEvento(producto)
                              }
                            }>Ampliar</button>

</div>
                    
                    </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>
<br/>

      <Footer />
    </>
  );
}
//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 