import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/diseño.jpg'
import pic02 from '../assets/images/inyeccion.jpg'
import pic03 from '../assets/images/procesos.jpg'
import pic04 from '../assets/images/moldes.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="ALVAREZ GROUP"
                    meta={[
                        { name: 'description', content: 'Innovation ' },
                        { name: 'keywords', content: 'innovation, technology' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>DISEÑO</h3>
                                <p>Creamos el produtcto que necesitas</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>INYECCIÓN</h3>
                                <p>Utilizamos los diferentes sistemas de manejo del plastico</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>PROCESOS</h3>
                                <p>Automatizacion y Mejora de procesos</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>MOLDES</h3>
                                <p>Diseño y Manufactura</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>MANUFACTURA</h3>
                                <p>Todos los productos que necesites al mejor precio</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>INSTALACIÓN</h3>
                                <p>Te asesoramos en la instalacion de tu maquinaria</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
