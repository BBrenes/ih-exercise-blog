import React from 'react'
import {Link} from 'react-router-dom'

export default function Articles(props) {
    console.log(props)
    return (
        <div>
            Pagina de articulos
            {
                props.todosLosArticulos.map(e =>{
                    return (
                        <>
                            <Link to={`/${e.slug}`}>
                                <p>{e.title}</p>
                            </Link>
                            <p>{e.date}</p>
                            <img src={e.imageUrl} alt=""/>
                        </>
                    )
                })
            }
        </div>
    )
}
