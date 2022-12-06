import { Footer } from "./Footer/Footer";
export function Mercancia() {
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
     
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-5">
          {productos.map(function (producto) {
            return (
              <>
                <div class="col">

                    <div class="card h-100 shadow"> 
                            
                            <h1>{producto.nombre}</h1>
                            <img src={producto.foto} alt=" " class="h-100 img-fluid w-100"/>
                            <p>Precio ${producto.precio}</p>
                            
                    
                    </div>


                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
