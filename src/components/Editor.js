import "./Editor.css"
import { useState, useRef } from "react";


const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === ""){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input ref= {inputRef} 
                   value={content} 
                   onChange={onChangeContent}
                   onKeyDown={onKeyDown} 
                   placeholder="a new to-do list"/>
            <button onClick={onSubmit}>add</button>
        </div>
    );
}
export default Editor;