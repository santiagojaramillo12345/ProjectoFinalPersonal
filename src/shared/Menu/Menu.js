import { Link } from "react-router-dom"
import "./Menu.css"
export function Menu() {

  return (

    <nav className="navbar navbar-expand-lg color ">
      <div className="container-fluid">
        <Link className="navbar-brand " id="titulo" to="/">Gorillax</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link id="titulo" className="nav-link active " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link id="titulo" className="nav-link " to="historia">historia</Link>
            </li>
            <li className="nav-item">
              <Link id="titulo" className="nav-link active " aria-current="page" to="integrantes">Integrantes</Link>
            </li>
            <li className="nav-item">
              <Link id="titulo" className="nav-link active " aria-current="page" to="music">Music</Link>
            </li>
            <li className="nav-item">
              <Link id="titulo" className="nav-link" to="albunes ">Albunes</Link>
            </li>
            <li className="nav-item">
              <Link id="titulo" className="nav-link " to="casa">Casa</Link>
            </li>
            <li className="nav-item">
              <Link id="titulo" className="nav-link " to="mercancia">Mercancia</Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>)

}