import { useLocation } from "react-router-dom" //recibe datos que mande componentes
import "./Ampliarinfo.css"
export function Ampliarinfo() {

    let datosRecibidos = useLocation()

    let producto = datosRecibidos.state.productoSelecionado
    console.log(producto)

    return (

        <>

            <div className="container">

                <div className="row my-5">

                    <div className="col-12 col-md-4 border-end">

                        <img src={producto.foto} alt="foto"
                            className="img-fluid w-100" />
                    </div>
                    <div className="col-12 col-md-7 p-3" >
                        <h2>Disquete original </h2>
                        <h3>Precio ${producto.precio} <span><p className="descuento">20% off</p></span></h3>
                        <br />
                        <span class="badge text-bg-primary">Descuento del dia</span>
                        <p> Hasta 48 Cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/mastercard.png?alt=media&token=62bb43a2-b695-48ef-8c5f-4bb29dc7b9fc" alt="foto"
                            className="img" />
                    

                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifay-ddec4.appspot.com/o/visa.png?alt=media&token=3683f6da-3e12-4f8b-9298-76c56dece072" alt="foto"
                            className="img-fluidms-2" />
                        <br/>
                     
                            <i class="bi bi-truck mt-5 fs-1 text-success">
                           <span className="text-success fw-bold fuente">  Envio Gratis a nivel nacional
                            </span></i>
                            <p/>Conoce los tiempos y las formas de envio <br></br>
                            
                            <i class="bi bi-arrow-clockwise mt-5 fs-1  text-success"><span class="fs-1 text-success fw-bold fuente">  Devolucion gratis</span></i>
                            
                            <p>30 dias de devolucion</p>
                            <p>Conoce los tiempos y las formas de envio.</p>
                         
                         
                            <h1 class="fs-1 text-success fw-bold">  Descripcion</h1>
                            <p >{producto.Descripcion}</p>
                    </div>


                </div>


            </div>

        </>

    )

}