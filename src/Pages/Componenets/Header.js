import React from 'react'
import logo from "../../Images/logo.png"

import { RSS } from './rss.js'

export const Header = () => {
    return (
        <div className = "Header">
            <div className="logo">
                <a
                    href="https://www.instagram.com/marifran.evy/"
                    title="imagen logo marifran papeleria"
                >
                    <img
                        src={logo}
                        alt="imagen logo marifran papeleria"
                        height="110px"

                    />
                </a>
            </div>

           <RSS/>

        </div>
    )
}
