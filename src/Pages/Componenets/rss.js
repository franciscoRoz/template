import React from 'react'
import instagram from "../../Images/instagram.png"
import facebook from "../../Images/facebook.png"
import wsp from "../../Images/whatsapp.png"

export const RSSlogos = () => {
    return (
        <div className="rss">
            <ul className="listgroupstrong">
                <li>
            <a
                href="https://www.instagram.com/marifran.evy/"
                title="logo de intagram"
            >
                <img
                    src={instagram}
                    alt="logo de intagram"
                    height="45px"

                />
            </a>
            </li>
            <li>
            <a
                href="https://www.facebook.com/Marifran-113081250385534/"
                title="logo de intagram"
            >
                <img
                    src={facebook}
                    alt="logo de intagram"
                    height="45px"

                />

            </a>
            </li>
            <li>
            <a
                href="https://api.whatsapp.com/send?phone=56957435617&text=Hola%2C+c%C3%B3mo+estas"
                title="logo de intagram"
            >
                <img
                    src={wsp}
                    alt="logo de intagram"
                    height="50px"

                />

            </a>
            </li>
            </ul>
            
        </div>
    )
}
export const RSS = () => {
    return (
        <div className="rss">
            <ul className="listgroup">
                <li>
                    <a
                        href="https://www.instagram.com/marifran.evy/"
                        title="logo de intagram"
                    >
                        <img
                            src={instagram}
                            alt="logo de intagram"
                            height="50px"

                        />
                        <p className="nombrerss">marifran.evy</p>
                    </a>
                </li>
                <li><li>
                    <a
                        href="https://www.facebook.com/Marifran-113081250385534/"
                        title="logo de intagram"
                    >
                        <img
                            src={facebook}
                            alt="logo de intagram"
                            height="55px"

                        />
                        <p className="nombrerss">marifran.evy</p>
                    </a>
                </li></li>
            </ul>

        </div>
    )
}
