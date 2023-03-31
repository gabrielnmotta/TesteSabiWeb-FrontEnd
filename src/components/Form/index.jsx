import { useState,useEffect  } from 'react';
import './form.css';
import { useNavigate } from "react-router-dom";


export function Form ({ onSubmit, EditData }) {
    const navigate = useNavigate()
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (EditData) {
            setId(EditData.id);
            setName(EditData.name);
            setAddress(EditData.address);
            setCity(EditData.city);
            setUf(EditData.uf);
            setPhone(EditData.phone);
        }
    }, [EditData]);

    const data = {
        TECL_NOME: name,
        TECL_ENDERECO: address,
        TECL_CIDADE: city,
        TECL_UF: uf,
        TECL_TELEFONE: phone,
      };

      const edition = {
        TECL_ID: id,
        TECL_NOME: name,
        TECL_ENDERECO: address,
        TECL_CIDADE: city,
        TECL_UF: uf,
        TECL_TELEFONE: phone,
      };
  
    function handleSubmit(event) {
      event.preventDefault();
      
        if (EditData) {
            onSubmit(edition);
        } else {
            onSubmit(data);
        }
    }
  
    return (
        <div class="mainForm">
            <form className='form' onSubmit={handleSubmit}>
                
                <div class="inside">
                    <label className='field'>
                    Nome:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label className='field'>
                    Endereço:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </label>
                    <label className='field'>
                    Cidade:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </label >
                    <label className='field'>
                    UF:
                    <input type="text" value={uf} onChange={(e) => setUf(e.target.value)} required />
                    </label>
                    <label className='field'>
                    Telefone:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </label >
                </div>
                
                <div class="formButton">
                    <button type="submit">Salvar</button>
                    <button onClick={() => navigate("/")}>Cancelar</button>
                </div>
                
            </form>
        </div>
    );
  }