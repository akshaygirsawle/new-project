import React,{useState} from 'react'

export default function TextForm(props) {
   
    const handleUpClick= () =>{
        var newText= text.toUpperCase();
        setText(newText);

    }
    const handleClick= () =>{
        var newText= text.toLowerCase();
        setText(newText);

    }
    const handleclearClick= () =>{
        let newText= "";
        setText(newText);

    }
    const handleonChange= (event) =>{
        setText(event.target.value)
    }
    const handlecopy= (event) =>{
        var text= document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(Text.value);
        

    }
    const[text,setText]=useState ('')
    return (
        <>
        <div className="container my-5"style={{color :props.mode==='dark'?'white':'#042743'}} >
            <h1> {props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
            </div>
            <button  className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button  className="btn btn-primary mx-1"onClick={handleClick}>Convert to lowercase</button>
            <button  className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
            <button  className="btn btn-primary mx-1" onClick={handlecopy}>Copy text</button>

        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2 >Your text summary.</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <h2 >Preview.</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

