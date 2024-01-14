import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [age,setAge] = useState(Number)
    const [isloading, setisLoading] = useState(false)
    const [isfailed, setisFailed] = useState(false)
    const navigate = useNavigate();


    function onUserName(event) {
        console.log(name);
        setName(event.target.value);
        
        
    }

    function onLastName(event) {
        console.log(lastname)
        setLastName(event.target.value)
    }

    
    function onAge(event) {
        console.log(age)
        setAge(event.target.value)
    }



    function handleSubmit(event) {
        event.preventDefault()
        setisLoading(true);

        fetch("https://dummyjson.com/users/add", {
            method: 'POST',
            body: JSON.stringify({ firstName:name, lastName:lastname,age:age, }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data?.token != null) {
                localStorage.setItem("token", data.token)
                setisLoading(false);
                setisFailed(true)
                navigate("/login")
            
            } else {
                setisLoading(false);
                setisFailed(true);
                
            }
        })
        
    }

    return (
        <>
            <img className="w-20 mr-4" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
            <h1 className="text-3xl font-bold p-0 m-0">Join the DEV Community</h1>
            <p className="text-2xl p-0 m-0">DEV Community is a community of 1,237,804 amazing developers</p>

            <h2 className="text-2xl font-bold">Registrate:</h2>

            <form className=" w-96  p-5 rounded flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>

                
                <label className="text-left" >Nombre:</label>
                <input
                    type="text"
                    className="w-96 border border-black p-2 rounded"
                    onChange={onUserName}
                    value={name}
                    required
                />
                
                <label >Apellido:</label>
                <input
                    type="text" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onLastName}
                    value={lastname}
                    required
                />


                <label >Edad:</label>
                <input
                    type="number" 
                    className="w-96 border border-black p-2 rounded"
                    onChange={onAge}
                    value={age}
                    required
                />

                
               
                <input
                    type="submit"
                    disabled={isloading}
                    value={isloading ? "cargando" : "Ingresar"}
                    className="w-96 bg-sky-900 text-white  rounded p-2 cursor-pointer"
                />

                {isfailed && (
                    <p className=" text-red-500 font-bold p-2rounded w-full">
                    Datos invalidos
                    </p>
                )}

            </form>
        </>
        
    )
}