import { Footer } from "./Footer/Footer";
import { useNavigate } from "react-router-dom";


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
      precio: 40,
    },
    {
      nombre: "Post",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/5gorillax-album.jpg?alt=media&token=ad4bd301-59d0-4870-a02c-20782daa4488",
      precio: 20,
    },
    {
      nombre: "post",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/6gorillax-album.jpg?alt=media&token=cf68907e-c1ce-4cfd-92d7-af3d03f2498c",
      precio: 10,
    },
    {
      nombre: "post",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/Album-gosillax2.jpg?alt=media&token=b9b3f06d-0518-4415-81bd-720e5a4a56ef",
      precio:40,
    },
    {
      nombre: "post",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/gorillas.jpg?alt=media&token=2da69fb3-3f73-4c35-aa11-f2b755ebe904",
      precio: 20,
    },
    {
      nombre: "post",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/gorillax-album.jpg?alt=media&token=d9aca177-64b1-4d92-99a5-d8813674f4c6",
      precio: 20,
    },
  ];

  return (
    <>
     
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {productos.map(function (producto,id) {
            return (
              <div key={id}>
                <div className="col">

                    <div className="card h-100 shadow"> 


                    
                            
                            <h1>{producto.nombre}</h1>
                            <img src={producto.foto} alt=" " className="h-100 img-fluid w-100"/>
                            <p>Precio ${producto.precio}</p>
                            
                            
                            <button className="btn btn-primary mx-3 mb-3" onClick={
                             
                             
                        
                             
                             
                             function(){
                                dectetarEvento(producto)
                              }
                            }>Ampliar</button>
                    
                    </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
//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 