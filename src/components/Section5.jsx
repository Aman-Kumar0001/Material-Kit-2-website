import React from 'react'

const Section5 = () => {
    return (
        <>
            <div className="container ">
                <div className="row sec-5-bg p-5">
                    <h2>Built by developers</h2>
                    <h1>Complex Documentation</h1>
                    <p className="fs-5">From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you will create unlimited combinations for our components.</p>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="sec-5-card">
                            <div className="content">
                                <p className="para">
                                    <h4>
                                        <i className="fa-solid fa-flag fs-6 mt-2"></i>
                                        Getting Started
                                    </h4>
                                    Check the possible ways of working with our product and the necessary files for building your own project.
                                </p>
                                <button>
                                    Sign up
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>

                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="sec-5-card">
                            <div className="content content2">
                                <p className="para">
                                    <h4>
                                        <i className="fa-solid fa-flag fs-6 mt-2"></i>
                                        Plugins
                                    </h4>
                                    Get inspiration and have an overview about the plugins that we used to create the Material Kit.s
                                </p>
                                <button style={{color:'black'}}>
                                    Read more
                                    <div className="arrow-wrapper ar">
                                        <div className="arrow ar2"></div>

                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="sec-5-card">
                            <div className="content content2">
                                <p className="para">
                                    <h4>
                                        <i className="fa-solid fa-flag fs-6 mt-2"></i>
                                        Components
                                    </h4>
                                    Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster.
                                </p>
                                <button style={{color:'black'}}>
                                    Read more
                                    <div className="arrow-wrapper ar">
                                        <div className="arrow ar2"></div>

                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Section5