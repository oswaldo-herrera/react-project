import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isloading, setisLoading] = useState(false)
    const [isfailed, setisFailed] = useState(false)
    const [ispasswordtrue , setisPasswordTrue] = useState(false)
    const navigate = useNavigate();


    function onUserName(event) {
        console.log(email);
        setEmail(event.target.value);
        
        
    }

    function onPassword(event) {
        console.log(password)
        setPassword(event.target.value)
    }

    function handlePasswword() {
        setisPasswordTrue(!ispasswordtrue)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setisLoading(true);

        fetch("http://localhost:3000/users/auth/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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
                navigate("/")
            
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

            <form className=" w-96  p-5 rounded flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>

                
                <label className="text-left" >Usuario:</label>
                <input
                    type="text"
                    className="w-96 border border-black p-2 rounded"
                    onChange={onUserName}
                    value={email}
                    required
                />
                
                <label >Email:</label>
                <input
                    type={ispasswordtrue ? "text" : "password"}
                    className="w-96 border border-black p-2 rounded"
                    onChange={onPassword}
                    value={password}
                    required
                />

                <span
                    onClick={handlePasswword}
                    className="text-sm text-black/50 cursor-pointer"
                >
                    {ispasswordtrue ? "ocultar" : "mostrar"} contraseña
                </span>
               
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