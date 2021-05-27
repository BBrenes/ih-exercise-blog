import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article(props) {
    //Hooks - Estados
    const route = useParams()
    const { slug } = route
   
    //Funciones
    const singlePost = props.todosLosArticulos.filter((e) => {
        return e.slug === slug
    })

    const {title, description, imageUrl, photoAuthor} = singlePost[0]

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <figure>
                <img src={imageUrl} alt=""/>
                <figcaption>📸 {photoAuthor}</figcaption>
            </figure>
        </div>
    )
}
