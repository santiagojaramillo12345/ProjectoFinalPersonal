import { Link } from "react-router-dom"
import "./Menu.css"
export function Menu() {

  return (

    <nav class="navbar navbar-expand-lg color ">
      <div class="container-fluid">
        <Link class="navbar-brand " id="titulo" to="/">Gorillax</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link id="titulo" class="nav-link active " aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link id="titulo" class="nav-link " to="historia">historia</Link>
            </li>
            <li class="nav-item">
              <Link id="titulo" class="nav-link active " aria-current="page" to="integrantes">Integrantes</Link>
            </li>
            <li class="nav-item">
              <Link id="titulo" class="nav-link active " aria-current="page" to="music">Music</Link>
            </li>
            <li class="nav-item">
              <Link id="titulo" class="nav-link" to="albunes ">Albunes</Link>
            </li>
            <li class="nav-item">
              <Link id="titulo" class="nav-link " to="casa">Casa</Link>
            </li>
            <li class="nav-item">
              <Link id="titulo" class="nav-link " to="mercancia">Mercancia</Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>)

}