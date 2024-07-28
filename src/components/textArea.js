import { useState } from "react";

export default function TextArea() {
    const Handler = (event) => {
        setText(event.target.value);
    }
    const Handling = () => {
        let ntext = text.toUpperCase();
        setText(ntext);
    }
    const [text, setText] = useState("enter text here...");
    return (
        <>
            <h1>Type anything to reform...</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={Handler} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button onClick={Handling}>To UpperCase</button>
            </div>
        </>
    );
}