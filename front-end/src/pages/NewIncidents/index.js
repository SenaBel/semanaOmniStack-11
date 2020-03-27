import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

function NewIncident() {

    const [titulo, setTitulo] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    async function handleCreateIncidents(e){
       
        e.preventDefault()

        const data = {
            titulo, description, value,
        }
        try {
          await api.post('incidents', data, {
              headers: {
                  Authorization: ongId
              }
          })    
               
            history.push('/profile')
        }catch (err){
            alert('Erro no Cadastro, Tente Novamente.')
        }
    }

        return (
            <div className="new-incident-container">

                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Hero" />

                        <h1>Cadastrar Novo Caso</h1>
                        <p> Descreva o caso detalhadamente para encontrar um herói 
                            para resolver isso.</p>

                        <Link className="back-link" to="/profile"> 
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar Para Home </Link>

                    </section>

                    <form onSubmit={handleCreateIncidents}>
                        <input 
                        placeholder="Título do Caso" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        />

                        <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />

                        <input 
                        placeholder="Valor em R$" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                        

                        <button className="button" type="submit"> Registrar </button>

                    </form>
                </div>

            </div>
        );
    }


export default NewIncident;