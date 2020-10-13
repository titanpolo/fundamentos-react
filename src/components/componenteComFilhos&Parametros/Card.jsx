//para utilizar o JSX e necessario importar o react
import React from 'react'

//importar CSS
import './Card.css'

export default props => 
    <div className="Card">
        <div className="Header">
            {props.titulo}
        </div>
        <div className="Conteudo">
            {props.children}
        </div>
    </div>