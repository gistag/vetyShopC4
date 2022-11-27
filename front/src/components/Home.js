import React, { Fragment } from 'react'
import MetaData from './layout/MetaData'

export const Home = () => {
  return (
    <Fragment>
        <MetaData title="Lo mejor para ti"></MetaData>
        
        <h1 id="encabezado_productos">Ultimos Productos</h1>
        <section id="productos" className='container mt-5'>
        <div className='row'>
            {/*Producto1*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/gaban.jpg' alt='Abrigos y Gabanes'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000/'>Gabanes</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'></div>
                            </div>
                            <span id="No_de_opiniones">5 reviews</span>
                            
                        </div>
                        <p className='card-text'>$72.000</p><a href='http://localhost:3000/' id="view_btn" className='btn btn-block'>Ver detalle</a>
                       
                    </div>


                </div>

            </div>

            {/*Producto 2*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/gabanfucsia.jpg' alt='Abrigos y Gabanes'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000/'>Gabanes</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'>

                                </div>
                            </div>
                            <span id="No_de_opiniones">5 reviews</span>
                        </div>
                        <p className='card-text'>$72.000</p><a href='http://localhost:3000/' id="view_btn" className='btn btn-block'>Ver detalle</a>
                    </div>


                </div>

            </div>

            {/**Producto 3 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/gabannegro.jpg' alt='Abrigos y Gabanes'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000/'>Gabanes</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'>

                                </div>
                            </div>
                            <span id="No_de_opiniones">5 reviews</span>
                        </div>
                        <p className='card-text'>$72.000</p><a href='http://localhost:3000/' id="view_btn" className='btn btn-block'>Ver detalle</a>
                    </div>


                </div>

            </div>

            {/**Producto 4 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='./images/gabanrojo.jpg' alt='Abrigos y Gabanes'></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000/'>Gabanes</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'>
                                <div className='rating-inner'>

                                </div>
                            </div>
                            <span id="No_de_opiniones">5 reviews</span>
                        </div>
                        <p className='card-text'>$72.000</p><a href='http://localhost:3000/' id="view_btn" className='btn btn-block'>Ver detalle</a>
                    </div>


                </div>

            </div>
        </div>
        </section>
    </Fragment>
  )
}
export default Home