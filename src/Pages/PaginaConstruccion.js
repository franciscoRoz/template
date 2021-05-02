import React from 'react'
import { Header } from './Componenets/Header'
import { RSSlogos } from './Componenets/rss'



export const PaginaConstruccion = () => {
    return (
        <div className="background">
            <Header />
            <hr />
            <div 
            align="center" 
            className="container">
                <h1 >página en construcción</h1>
                <img src="https://i.imgur.com/DsDp9qn.png" alt="imagen de sitio en construccion" height="400px" min-height="200px"></img>
                <br/>
             
                <p >Pronto podrás comprar todos los productos que quieras.
                Marifran personaliza tus ideas
                <br/>
           
                encuentranos en : <RSSlogos/>
                    
                </p>
                
            </div>
        </div>
    )
}

