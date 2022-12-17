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

    const [tuotenimi, setTuotenimi] = useState('');
    const [normihinta, setNormihinta] = useState('');
    const [tarjoushinta, setTarjoushinta] = useState('');;
    const [img, setImg] = useState('');

    function save(e) {
        e.preventDefault()
        const json = JSON.stringify({
            tuotenimi: tuotenimi, normihinta: normihinta,
            tarjoushinta: tarjoushinta, img: img
        });
        axios.post(URL + 'admin/addOffers.php', json, {
            headers: {
                'Content-Type': 'Application/json'
            }
        })

            .then((response) => {
                setTuotenimi(tuotenimi => [...tuotenimi, response.data])
                setNormihinta(normihinta => [...normihinta, response.data])
                setTarjoushinta(tarjoushinta => [...tarjoushinta, response.data])
                setImg(img => [...img, response.data])
                setTuotenimi('')
                setNormihinta('')
                setTarjoushinta('')
                setImg('')
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
                        <h1>Lisää tarjoustuote</h1>
                        <form onSubmit={save}>
                            <Row>
                                <Col>
                                    <label htmlFor="tuotenimi">tuotenimi </label>
                                    <input type="text" value={tuotenimi}
                                        onChange={(e) => setTuotenimi(e.target.value)}
                                        placeholder="tuotteen nimi" required />
                                    <label htmlFor="normihinta"> normihinta</label>
                                    <input type="text" value={normihinta}
                                        onChange={(e) => setNormihinta(e.target.value)}
                                        placeholder="esim. 29.90" required />
                                    <label htmlFor="tarjoushinta"> tarjoushinta </label>
                                    <input type="text" value={tarjoushinta}
                                        onChange={(e) => setTarjoushinta(e.target.value)}
                                        placeholder="esim. 19.90" required />
                                    <label htmlFor="kuva"> kuvan osoite </label>
                                    <input type="text" value={img}
                                        onChange={(e) => setImg(e.target.value)}
                                        placeholder=" esim.lautapelit/monopoly.png" required />
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
