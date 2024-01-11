import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import NavbarLogin from '../src/components/navbarLogin/navbarLogin'
import { Righteous } from '@fontsource/righteous'
import BarraOpcoes from "./components/navbarLogin/barraopcoes";
function Principal(){

    const [eventos, setEventos] = useState([])

    useEffect(()=>{
        const fetchAllEventos = async ()=>{
            try{
                const res = await axios.get("http://localhost:8081/eventos")
                setEventos(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllEventos()
    },[])
    

    return(
        <>
            <NavbarLogin />

        <div>
        <h1>Toth</h1>
        <p1> não sei o que por então vou falar um fato curioso aleatorio <br /> todos os mamiferos sabem pular menos os elefantes  <br /> não por falta de força mas pq pular é pra covardes</p1>
        
        </div>
            <BarraOpcoes />
        <div>
            <h1> Eventos </h1>
            
            <div className="eventos" key={eventos.id}>
                {eventos.map((eventos) => (
                <div className="eventos">
                <div class="scrollmenu">
                <h2>{eventos.nome}</h2>
                <p>não sei {eventos.data}</p>
                <p>{eventos.horas}</p>
                </div>
                </div>
                
                ))}
            </div>
            

        </div>
        </>
    )
}

export default Principal

