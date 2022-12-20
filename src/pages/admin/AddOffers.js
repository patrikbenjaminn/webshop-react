import React from 'react';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/AddProduct.css'



const URL = 'http://localhost/webshop/php/';

function AddOffers() {

    const [tuoteid, setTuoteid] = useState('');

    const [tarjoushinta, setTarjoushinta] = useState('');;
  

    function save(e) {
        e.preventDefault()
        const json = JSON.stringify({
            tuoteid: tuoteid, 
            tarjoushinta: tarjoushinta,
        });
        axios.post(URL + 'admin/addOffers.php', json, {
            headers: {
                'Content-Type': 'Application/json'
            }
        })

            .then((response) => {
                setTuoteid(tuoteid => [...tuoteid, response.data])
                setTarjoushinta(tarjoushinta => [...tarjoushinta, response.data])
               
             
                setTarjoushinta('')
            
                alert('Tarjous lisätty onnistuneesti!')
            })

            .catch(error => {
                console.log(error.response ? error.response.data.error : error)
                alert("Häiriö järjestelmässä, yritä pian uudelleen!")
            })
    }

    return (
        <>
            <div>
                <AdminHeader url={URL} />

                <div className="contact-form3">
                    <Container>
                        <h1>Lisää/ muuta tarjoushinta</h1>
                        <form onSubmit={save}>
                            <Row>
                                <Col>
                                    <label htmlFor="tuoteid">tuoteid </label>
                                    <input type="text" value={tuoteid}
                                        onChange={(e) => setTuoteid(e.target.value)}
                                        placeholder="tuotteen id" required />
                                  
                                    <label htmlFor="tarjoushinta"> tarjoushinta </label>
                                    <input type="text" value={tarjoushinta}
                                        onChange={(e) => setTarjoushinta(e.target.value)}
                                        placeholder="esim. 19.90" />
                                   
                                </Col>
                                <input type="submit" value="Lähetä" />
                            </Row>

                        </form>

                    </Container>
                </div>
            </div>
        </>


    )
}

export default AddOffers;
