import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import NavbarLogin from "./components/navbarLogin/navbarLogin";

function Home(){

    const [artigo, setArtigo] = useState([])

    useEffect(()=>{
        const fetchAllArtigo = async ()=>{
            try{
                const res = await axios.get("http://localhost:8081/artigo")
                setArtigo(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllArtigo()
    },[])

    return(
       
        <div>
            <NavbarLogin />
            <h1> Artigos </h1>
            <div className="artigo" key={artigo.id}>
                {artigo.map((artigo) => (
                <div className="artigo">
                <h2>autor: {artigo.autor}</h2>
                <p>orientador: {artigo.orientador}</p>
                <p>resumo: {artigo.resumo}</p>
                </div>
                
                ))}
            </div>
            <Link to="/addartigo" className='btn btn-default border w-100 bg-light rounded-0'>Criar Artigo</Link>

        </div>
    )
}

export default Home

