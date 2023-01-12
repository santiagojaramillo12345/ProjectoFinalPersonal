import { Route, Routes } from "react-router-dom"

import { Menu } from '../shared/Menu/Menu';
import { Home } from '../Home/Home';
import { Historia } from "../Historia/Historia";
import {Music} from "../Music/Music"      
import { Casa } from "../shared/Menu/Casa";

import {Integrantes} from "../Integrantes/Integrantes"

import {Albunes} from "../Albunes/Albunes"

import {Mercancia} from "../Mercacia/Mercancia"

import {Ampliarinfo} from "../Ampliarinfo/Ampliarinfo"

export function Rutas(){
    
    return (
    
    <>    
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historia" element={<Historia />}/>
                <Route path="/integrantes" element={<Integrantes />}/>
                <Route path="/music" element={<Music />}/>
                <Route path="/albunes" element={<Albunes />}/>
                <Route path="/casa" element={<Casa />}/>
                <Route path="/mercancia" element={<Mercancia />}/>
                <Route path="/ampliarinfo" element={<Ampliarinfo />}/>
            </Routes>
    </>

    )
}