//para utilizar o JSX e necessario importar o react
import React from 'react'

//importar CSS
import './App.css'
import '../componenteComFilhos&Parametros/Card.css'


import String from '../componenteSemParametros/String'

import Div from '../componenteSemParametros/Div'

import Fragment from '../componenteSemParametros/Fragment'

import TagVazia from '../componenteSemParametros/TagVazia'

import ArrowFunction from '../componenteSemParametros/ArrowFunction'

import ArrowFunctionComParametros from '../componenteComParametros/ArrowFunctionComParametros'

import Filhos from '../componenteComFilhos/Filhos'

import Card from '../componenteComFilhos&Parametros/Card'

import Repeticao from '../componenteRepetidor/Repetidor' 

import Condicional from '../componenteCondicional/Condicional'

import CondicionalComIf from '../componenteCondicional/CondicionalComIf'

export default props => 
    <div>
        <h1 className="Titulo">{props.titulo}</h1>
        <div className="App">
        <Card titulo="#01 - Card do componente String">
            <String></String>
        </Card>
        <Card titulo="#02 - Card do componente Div">
            <Div></Div>
        </Card>
        <Card titulo="#03 - Card do componente Fragment">
            <Fragment></Fragment>
        </Card>
        <Card titulo="#04 - Card do componente TagVazia">
            <TagVazia></TagVazia>
        </Card>
        <Card titulo="#05 - Card do componente ArrowFunction">
            <ArrowFunction></ArrowFunction>
        </Card>
        <Card titulo="#06 - Card do componente ArrowFunctionComParametros">
            <ArrowFunctionComParametros titulo="Esse é um parâmetro (Arrow com parâmetro)"
            subtitulo="Esse é outro parametro (Arrow com parâmetro)"/>
        </Card>
        <Card titulo="#07 - Card do componente RetornaFilhos">
            <Filhos>
                <ul>
                    <li>Primeiro filho</li>
                    <li>Segundo filho</li>
                    <li>Terceiro filho</li>
                    <li>Quarto filho</li>
                </ul>
            </Filhos>
        </Card>
        {
        /*
        <Card titulo="Card's dentro de outro Card">
            <Card titulo="SubCard String" >
                <String></String>
            </Card>
            <Card titulo="subCard Div">
                <Div></Div>
            </Card>
            <Card titulo="subCard Fragment">
                <Fragment></Fragment>
            </Card>
        </Card>
        */
        }
        <Card titulo="#08 - Card do componente de Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#09 - Card do componente Condicional">
            <Condicional numero={10}/>
        </Card>
        <Card titulo="#10 - Card do componente Condicional com IF">
            <CondicionalComIf numero={11}/>
        </Card>
    </div>
</div>
    
    