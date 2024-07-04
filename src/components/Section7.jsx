import React from 'react'

const Section7 = () => {
    return (
        <>
            <div className="container mt-5 sec-7-bg">
                <div className="row flex-column">
                    <div className="col">
                        <img className='sec-7-img' src="https://demos.creative-tim.com/material-kit-react/static/media/waves-white.7e7579c6.svg" alt="" width='100%' height='400px'/>
                    </div>
                    <div className="col text-light text-center"style={{marginTop:'-356px'}}>
                        <h3>Do you love this awesome <br />
                        UI Kit for ReactJS & MUI?</h3>
                        <p style={{width:'400px',margin:'0px auto 40px'}}>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in HTML. Start a new project or give an old Bootstrap project a new look!</p>
                        <button className="btn btn-primary fw-bold">
                            Download Now
                        </button>
                    </div>
                </div>
                <div className="row mt-5 pt-5 text-center">
                    <h3 className='mt-5'>Available on these technologies</h3>
                </div>
                <div className="row mt-2 justify-content-center">
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg" alt="" style={{width:'80px'}}/>
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg" alt="" style={{width:'80px'}}/>
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg" alt="" style={{width:'80px'}}/>
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg" alt="" style={{width:'80px'}}/>
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg" alt="" style={{width:'80px'}}/>
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg" alt="" style={{width:'80px'}}/>
                </div>
                <div className="row mt-5 text-center pt-5">
                    <div className="col">
                        <h2>Thank you for your support!</h2>
                        <h4>We deliver the best web products</h4>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary fw-bold ms-2">TWEET</button>
                        <button className="btn btn-secondary fw-bold ms-2">GOOGLE</button>
                        <button className="btn btn-danger fw-bold ms-2">PIN IT</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section7