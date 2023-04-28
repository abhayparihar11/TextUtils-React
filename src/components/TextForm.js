import React , {useState} from "react";

export default function TextForm(props){
  const [text , setText] = useState("");
  const handleUpClick =()=>{
    console.log("upperCase Was clicked "+text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");
    props.showAlert("converted to uppercase" , "success")
  }
  const handleLoClick =()=>{
    // console.log("LowerCse was Clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase" , "success")
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared" , "success")
  }
   const handleCopy =() =>{
   let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to clipboard" , "success")

   }
   const handleExtraSpace =()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Removed Extra spaces" , "success")
   }

  const handleOnChange=(event)=>{
    console.log("on changes")
    setText(event.target.value);
  }
    return(
      <> 
        <div>
         
<div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}   >
    <h1>{props.heading}</h1>
    
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode === 'dark'?'white':'black'}}    id="myBox" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert TO Lowwercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick} >clear</button>
  <button className="btn btn-primary mx-2 my-1 " onClick={handleCopy} >copy</button>
  <button className="btn btn-primary mx-2 my-1 " onClick={handleExtraSpace} >Extra Space</button>
  
        </div>
        <div className="container my-3  " style={{color: props.mode==='dark'?'white':'black'}}  >
          <h1>Your Text Summary</h1>
           <p> {text.split(" ").length} words and  {text.length} Character</p>
           <p>{0.008 * text.split(" ").length} minutes read </p>
           <h1> Preview </h1>
               <p> {text.length>0?text:"Enter Something in the textbox above to preview it here"} </p>
            
        </div>
        </>
    );
}