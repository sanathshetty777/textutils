import React, { useState } from 'react'

export default function About() {
    const [btnText, setBtnText] = useState("Dark Mode");
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const handleDarkMode = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText("Dark Mode");  // Corrected to "Dark Mode"
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnText("Light Mode"); // Toggling back to "Light Mode"
        }
    };

    return (
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={myStyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container my-3">
                <button type="button" className="btn btn-secondary" onClick={handleDarkMode}>{btnText}</button>
            </div>
        </div>
    );
}
