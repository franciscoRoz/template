import React from 'react'

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
                        src="https://i.imgur.com/tUYyU3s.png"
                        alt="imagen logo marifran papeleria"
                        height="110px"

                    />
                </a>
            </div>

           <RSS/>

        </div>
    )
}
