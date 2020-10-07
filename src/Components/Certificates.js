import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Certificate extends Component {
  render() {
    if (this.props.data) {
        var certificates = this.props.data.certificate.map(cert => (<img src={"images/" + cert.file} width={cert.width}/>))
    }
    return (
        <section id="resume" style={{padding: 0, paddingBottom: 50}}>
            <h3 style={{
                textAlign: 'center',
                marginBottom: 100,
                fontSize: 40
            }}>Certificates and Awards</h3>
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Carousel arrows>
            {certificates}
            </Carousel>
            </div>
        </section>
    )
  }
}

export default Certificate;
