import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Publications() {

    const [description, setDescription] = useState("");
    const [img, setImg] = useState(""); 
    const [title, setTitle] = useState(""); 
    const [tags, setTags] = useState("");
    const [imgprofile, setImgProfile] = useState("");
    const [nameUser, setNameUser] = useState("");
    const navigate = useNavigate();
    


    function onDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function onImageProfileChange(event) {
        setImgProfile(event.target.value);
    }

    function onNameChange(event) {
        setNameUser(event.target.value);
    }


    function onImgChange(event) {
        setImg(event.target.value);
    }

    function onTitleChange(event) {
        setTitle(event.target.value);
    }


    function onTagsChange(event) {
        setTags(event.target.value);
    }



    async function onPublication(element) {
        element.preventDefault();
        const tagsList = tags.split(",");
        console.log(tagsList);

        const token_id  = localStorage.getItem('token');
        

        const response = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            body: JSON.stringify({
                description: description,
                img: img,
                imgprofile: imgprofile,
                name: nameUser,
                title: title,
                comments_count: "0",
                date: 'Jul 28',
                tags: tagsList,
            }),
            headers: {
                "Content-Type": "application/json",
                bearerauth: `${token_id}`,
            },
        });
        if (response) {
            navigate("/");
        }
        
    }



    return (
        <main className="flex flex-col justify-center items-center p-10 gap-10">
            <h1 className="text-xl"> <strong>Crear publicacion</strong></h1>
            <form className=" w-96  p-5 rounded flex flex-col justify-center items-center gap-5" onSubmit={onPublication}>

                <label >Imagen:</label>
                <input
                    type="text" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onImgChange}
                    value={img}
                    
                />


                <label >Imagen Perfil:</label>
                <input
                    type="text" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onImageProfileChange}
                    value={imgprofile}
                    
                />


                <label >Nombres:</label>
                <input
                    type="text" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onNameChange}
                    value={nameUser}
                    
                />

                

                <label >Titulo:</label>
                <input
                    type="text" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onTitleChange}
                    value={title}
                    
                />

                <label className="text-left" >Descrpción:</label>
                <input
                    type="text"
                    className="w-96 border border-black p-2 rounded" 
                    onChange={onDescriptionChange}
                    value={description}
                    
                />
                
                
                <label >Tags:</label>
                <input
                    type="text" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onTagsChange}
                    value={tags}
                    
                />


                <input
                    type="submit"                    
                    className="w-96 bg-sky-900 text-white  rounded p-2 cursor-pointer"
                />

            </form>
        </main>

    )
}