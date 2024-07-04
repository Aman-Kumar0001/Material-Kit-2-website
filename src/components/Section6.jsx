import React from 'react'

const Section6 = () => {
    return (
        <div className='container mt-5'>
            <div className="container">
                <div className="row text-center">
                    <h1>Trusted by over</h1>
                    <h1 className='text-info'>1,679,477+ web developers</h1>
                    <p>Many Fortune 500 companies, startups, universities and governmental institutions love Creative Tim's products.</p>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="sec-6-card">
                            <div className="title">Easy Cheesy</div>
                            <p className="description">This cheesy, juicy ultimate comforting lunch or quick and easy dinner recipe.</p>
                            <div className="rating"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="sec-6-card sec-6-card1">
                            <div className="title">Shailesh Kushwaha</div>
                            <p className="description">"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"</p>
                            <div className="rating"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="sec-6-card">
                            <div className="title">Samuel Kamuli</div>
                            <p className="description">"Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."</p>
                            <div className="rating"></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5 mb-5 text-center d-flex justify-content-center">
                    {/* <div className="col"> */}
                        <img src="https://demos.creative-tim.com/material-kit-react/static/media/logo-apple.f9c2682e.svg" alt="" style={{width:'200px'}}/>
                    {/* </div> */}
                    {/* <div className="col"> */}
                        <img src="https://demos.creative-tim.com/material-kit-react/static/media/logo-facebook.106d2ac0.svg" alt=""  style={{width:'200px'}}/>
                    {/* </div>
                    <div className="col"> */}
                        <img src="https://demos.creative-tim.com/material-kit-react/static/media/logo-nasa.c5d11f88.svg" alt=""  style={{width:'200px'}}/>
                    {/* </div>
                    <div className="col"> */}
                        <img src="https://demos.creative-tim.com/material-kit-react/static/media/logo-vodafone.b3e8486c.svg" alt=""  style={{width:'200px'}}/>
                    {/* </div>
                    <div className="col"> */}
                        <img src="https://demos.creative-tim.com/material-kit-react/static/media/logo-digitalocean.a1f147b0.svg" alt=""  style={{width:'200px'}}/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Section6