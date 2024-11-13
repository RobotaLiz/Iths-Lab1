import { useState } from "react"; 

function Form (props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleAddClick = () => {
        if(name == "") {
          
            return;

        }else if(image == ""){
            return;
        }

        props.onAdd(name, image);
        setName("");
        setImage("");
    }

    return (
        <div className="add-component">
      
            <input 
                className="input-field"
                placeholder={props.placeholderText}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="input-field"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button className="button-add" onClick={handleAddClick}>Add</button>
        </div>
    );



}
export default Form;