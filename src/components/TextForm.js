import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }

    const handleloClick = ()=>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }

    const handleclearClick = ()=>{
      //console.log("Uppercase was clicked" + text);
      let newText = ('');
      setText(newText)
    }

    const handleCopy=()=>{
      console.log("copied");
      var text = document.getElementById("myBox");
      text.ariaSelected();
      navigator.clipboard.writeText(text,value);
    }

    const handleOnChange =(event)=>{
     // console.log("On Change");
      setText(event.target.value);
    }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="12"></textarea>
         </div>
         <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
         {/* <button type="button" className="btn btn -primary"  onClick={handleUpClick}>Convert to Uppercase</button> */}
         <button type="button" className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
         <button type="button" className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
         <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split("").length} words and {text.length} character</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>   
     </>  
    
  
  )
}
