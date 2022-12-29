import React, {Component} from 'react';
import logo from './assets/foto.png';

class Cabecalho extends Component{
    render(){
        return(
            <>
                <span><strong>Everton Reis</strong></span>
                <br/>
                <span><strong>2003</strong></span>
                <br/>
                <img src={logo} />
            </>
        )
    }
}

export default Cabecalho;