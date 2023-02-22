
import axios from 'axios'
import { useState } from 'react'
// import './node_modules/bootstrap/dist/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Url = () => {
    const [images, setimages] = useState([])
    const [simg, setSimg] = useState('')

    const inputEvent = (event) => {

        setSimg(event.target.value)
    }

    const getImage = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${simg}&client_id=J612fFzR11X0C8T2RvXIrTlHu3Ig7rkTXXamg8Gyrsc`)
            .then((response) => {
                console.log(response);
                setimages(response.data.results)
            })

    }

    return (
        <>
            <input type="text"
                value={simg}
                onChange={inputEvent} /><button onClick={getImage}>GEt Image</button>
            <Container>
                <Row>
                    {
                        images.map((value, index) => {
                            return (
                                <Col key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={value.urls.full} className="card-img" />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </>
    )
}

export default Url

