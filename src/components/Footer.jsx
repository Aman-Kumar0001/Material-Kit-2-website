import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <footer className="mt-5 text-center text-lg-start text-dark">
                    <section classname="mt-5">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-5 pt-5">
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, height: 2 }} />
                                    <p>
                                        <a href="/" className="text-dark">MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">MDWordPress</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Bootstrap Angular</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <a href="/" className="text-dark">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Help</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Copyright:
                        <a className="text-dark" href="https://github.com/Aman-Kumar0001">Amankumar.com</a>
                    </div>
                </footer>
            </div>

        </>
    )
}
