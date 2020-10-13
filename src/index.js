//Import da Biblioteca React
import React from 'react'
import ReactDOM from 'react-dom'

//Import da Biblioteca de Estilos
import './index.css'

//Import da Biblioteca de Componentes JSX
    //Componentes sem parametros de entrada
        //Retorna uma string
import String from './components/componenteSemParametros/String'

        //Retorna uma Div com subcomponentes
import Div from './components/componenteSemParametros/Div'

        //Retorna um Fragment com subcomponentes
import Fragment from './components/componenteSemParametros/Fragment'
        //Utilizando esse metodo os subcomponentes estarao adjacentes, dispostos diretamente dentro da div Root

        //Retorna uma Tag Vazia com subcomponentes
import TagVazia from './components/componenteSemParametros/TagVazia'
        //O posicionamento dos subcomponentes ocorre como no Fragment, todavia a Tag Vazia nao cria referencia de classe

        //Retorna uma ArrowFunction de uma Tag Vazia com subcomponentes (código mais enxuto)
import ArrowFunction from './components/componenteSemParametros/ArrowFunction'

    //Componentes com parametro de entrada
        //Retorna uma ArrowFunction com parametros de entrada
import ArrowFunctionComParametros from './components/componenteComParametros/ArrowFunctionComParametros'

    //Componentes com Filhos
        //Retorna um template com conteudo dependente do parametro
import Filhos from './components/componenteComFilhos/Filhos'

    //Componentes com Filhos e Parametros
        //CARD: Retorna um template com conteudo dependente do parametro e com estrutura para receber outros subcomponentes
import Card from './components/componenteComFilhos&Parametros/Card'

    //Componentes Aplicativo
        //Interface que realoca os componentes anteriores de forma alinhada e responsiva
import App from './components/componenteAplicativo/App'

//Renderização de todos os componentes dentro da div 'root'
ReactDOM.render(
    <div>
        <String></String>
        <Div></Div>
        <Fragment></Fragment>
        <TagVazia></TagVazia>
        <ArrowFunction></ArrowFunction>
        <ArrowFunctionComParametros titulo="Esse é um parâmetro (Arrow com parâmetro)"
        subtitulo="Esse é outro parâmetro (Arrow com parâmetro)"/>
        <ArrowFunctionComParametros titulo="Segunda instância com parâmetro (Arrow com parâmetro)"
        subtitulo="Subtítulo da Segunda instância com parâmetro (Arrow com parâmetro)"/>
        <Filhos>
            <ul>
                <li>Primeiro filho</li>
                <li>Segundo filho</li>
                <li>Terceiro filho</li>
                <li>Quarto filho</li>
            </ul>
        </Filhos>
        <Card titulo="Isso e um parametro">
            Isso e um filho
        </Card>
        <Card titulo="Título do componente String">
            <String></String>
        </Card>
        <App titulo="Título da página do Aplicativo"/>
    </div>
    ,
    document.getElementById('root')
)