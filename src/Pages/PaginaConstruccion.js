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
            className="Newspot">
                <h1 >Pagina en construccion</h1>
                <p width="50%">pronto podras comprar todos los productos que quieras.
                <br/>
                marifran personaliza tus ideas</p>
                <br/>
                <br/>
                <p >encuentranos en : <RSSlogos/>
                    
                </p>
                
            </div>
        </div>
    )
}

