import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("UpperCase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success")
    };

    const handleClearText = () => {
        console.log("Text Cleared");
        let newtext = "";
        setText(newtext);
        props.showAlert("Text Cleared ","success")
    };

    const handleOnChange = (event) => {
        console.log("On change");
        let newText = event.target.value;
        setText(newText);
    };

    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showAlert("Converted to LowerCase","success")
    };

    // Function to convert only selected text to Title Case (Heading case)
    const handleHeading = () => {
        console.log("Converted Selected Text To Heading");

        // Getting the textarea element
        let textarea = document.getElementById("myBox");

        // Get the selected text range
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        // Get the selected text
        let selectedText = text.substring(start, end);

        // Convert the selected text to Title Case
        let headingText = selectedText
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Replace the selected text with the new heading text
        let newText = text.substring(0, start) + headingText + text.substring(end);
        
        setText(newText);
        props.showAlert("Converted to heading","success");
    };

    const handleRemoveExtraSpaces = () => {
        console.log("Remove Extra Spaces");
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra Space Removed ","success");
    };
      

    return (
        <>
            <div>
                <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        id="myBox" 
                        value={text} 
                        placeholder='Type here!!!'
                        onChange={handleOnChange}  
                        
                        style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black'}}
                        rows="8">

                    </textarea>
                </div>
                <div className="button-container">
                    <button className='button'  type="button" class="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className='button'  type="button" class="btn btn-primary" onClick={handleLowClick}>Convert To LowerCase</button>
                    <button className='button'  type="button" class="btn btn-primary"onClick={handleHeading}>Convert Selected To Heading</button> {/* Button to convert selected text to Heading */}
                    <button className='button'  type="buttom"  class="btn btn-primary" onClick={handleRemoveExtraSpaces}>Remove extra Spaces </button>
                    <button className='button'  type="button" class="btn btn-primary" onClick={handleClearText}>Clear Text</button>
                </div>

                <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2  >Your Text Summary</h2>
                    <p >{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes required to read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                </div>
            </div>
        </>
    );
}
