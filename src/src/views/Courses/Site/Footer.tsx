import React from 'react'
// const [currentStep, setCurrentStep] = useState(1);

// const handleFirst = () => setCurrentStep(1);
// const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
// const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4)); // assuming there are 4 steps
// const handleLast = () => setCurrentStep(4);


const Footer = () => {
    return (
        <React.Fragment>
            <div className="d-sm-flex wizard justify-content-between mt-3">
                <div className="#first">
                    <a href="#" className="btn btn-secondary">
                        First
                    </a>
                </div>
                <div className="d-sm-flex ">
                    <div className="previous me-2">
                        <a href="#" className="btn btn-secondary mt-3 mt-md-0">
                            Back To Previous
                        </a>
                    </div>
                    <div className="next">
                        <a href="#" className="btn btn-secondary mt-3 mt-md-0">
                            Next Step
                        </a>
                    </div>
                </div>
                <div className="last">
                    <a href="#" className="btn btn-secondary mt-3 mt-md-0">
                        Finish
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer