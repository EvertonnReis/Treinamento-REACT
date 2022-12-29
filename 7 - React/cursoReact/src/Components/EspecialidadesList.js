import React, {Component} from 'react';
import axios from 'axios';
import EspecialidadeItem from './EspecialidadeItem';

class EspecialidadesList extends Component{

    state={
        especialidades:[]
    }

    componentDidMount(){
        this.atualizaEspecialidades();
    }

    atualizaEspecialidades(){
        axios.get('http://127.0.0.1:8000/api/especialidade')
        .then(response =>{
           this.setState({
                especialidades:response.data
           })
        })
    }

    handleSubmit = (e)=>{
        const nome = document.getElementById('nome').value;     
        const data =  new FormData();
        data.append('nome', nome);
        data.append('idLegado', '2');
        data.append('id_ambiente', '2');

        axios.post('http://127.0.0.1:8000/api/especialidade', data)
            .then(()=>{
                this.atualizaEspecialidades();
            })
    }

    handleDelete = (item)=>{
        this.setState({
            especialidades:this.state.especialidades.filter( esp=>esp.id!=item.id )            
        })
        /*
            axios.delete('http://127.0.0.1:8000/api/especialidade', item.id)
            .then(()=>{
                this.atualizaEspecialidades();
        })
        */
    }

    render(){
       
        return(
            <>
                <h1>Especialidades</h1>  
                <ul>
                    {   this.state.especialidades.map(esp =>
                        <EspecialidadeItem 
                            key={esp.id}
                            item={esp.nome}
                            onDelete={()=>this.handleDelete(esp)}
                        />
                        )
                    }
                </ul>  
                <input type="text" id="nome" placeholder="informe um nome"/>
                <button type="submit" onClick={this.handleSubmit}>Incluir</button>            
            </>
        )
    }
}

export default EspecialidadesList;