import { useState,useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';



export default function Home() {
    const [token, setToken] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken  = localStorage.getItem('token');
        setToken(storedToken);
    }, []);


    const handleLogout = () => {
        
        localStorage.removeItem('token'); 
        setToken(null); 
        
        navigate('/');
    };





    return (
        <>
            <div className="flex ">

                <div className="flex-none px-10  ml-10">
                   <a href="/"> <img className="w-20 mr-4" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" /></a>
                </div>
                

            
                <div className="pt-4 flex-auto w-96 ml-10">
                    <input type="search" id="default-search" className="w-96 h-10 p-2  border border-orange-600 rounded-2xl" placeholder="Buscar ..." required></input>
                    <button type="submit" className="hidden text-white  end-2.5 bottom-2.5 bg-dark-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                

                
                <div className=" flex flex-auto  ml-20">
                    {token ? <a href='/publication' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-5 p-2 h-10 border border-blue-500 hover:border-transparent rounded">Create Post</a> : <Link to='/login' className='mr-10 mt-5'>Log in </Link>}
                   
                    {token ? <button onClick={handleLogout} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-5 ml-5 p-2 h-10 border border-blue-500 hover:border-transparent rounded">Logout</button> : <a href='/register' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-5 p-2 h-10 border border-blue-500 hover:border-transparent rounded">Create account</a>}
                    
                </div>
                

            </div>
            <hr className="mt-3" />
            <Outlet />

            

            

           
           
            
                    
               

        </>
    )
}