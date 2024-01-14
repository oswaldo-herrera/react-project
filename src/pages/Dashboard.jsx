import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Cards from '../components/Cards';



export default function () {
    // const [publications, setPublications] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/posts")
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setPublications(json?.data);
    //         console.log(json.data);
    //     })
    // },[])


    return(
        <>
            {/* <h1>Soy dashboard</h1>
            <Link to='/detalle'>Detalle</Link> */}
            <div className="container mx-auto flex">
    
                
                <div className="w-1/4 p-4">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold mb-4">DEV Community is a community of 1,237,804 amazing developers</h2>
                        <p className='mb-5'>We're a place where coders share, stay up-to-date and grow their careers.</p>
                            
                        <div className='flex flex-col '>
                            <a href='/register' className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create account</a>
                            
                            <Link to='/login' className='mt-3 text-center'>Log in </Link>
                                
                        </div>
                        <hr className='mt-2 pt-2'/>
                            <div className='flex flex-col'>
                                <div className='flex mb-3'>
                                    <p className='text-xl'>🏚️</p><a href="/" className='text-xl  bg-transparent hover:text-blue-500'>Home</a>
                                </div>
                                <div className='flex mb-3'>
                                    <p className='text-xl'>🎙️</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Podcast</a>
                                </div>
                                <div className='flex mb-3'>
                                    <p className='text-xl'>📹</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Videos</a>
                                </div>
                                <div className='flex mb-3'>
                                    <p className='text-xl'>🗒️</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Tags</a>
                                </div>

                                <div className='flex mb-3'>
                                    <p className='text-xl'>📖</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Guides</a>
                                </div>

                                <h2 className='mt-2 mb-4 font-bold'>Other</h2>

                                <div className='flex mb-3'>
                                    <p className='text-xl'>👍</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Code of Conduct</a>
                                </div>
                                <div className='flex mb-3'>
                                    <p className='text-xl'>🤓</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Privacy policy</a>
                                </div>

                                <div className='flex mb-3'>
                                    <p className='text-xl'>👀</p><a href="/" className='text-xl bg-transparent hover:text-blue-500'>Terms of use</a>
                                </div>
                                
                                <div className='flex mt-4 mb-3 '>
                                    <a href="https://facebook.com/thepracticaldev" target='blank'><img className='w-6 mr-4' src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-gris.png" alt="" /></a>
                                    
                                    <a href="https://github.com/forem" target='blank'><img className='w-6 mr-2' src="https://w7.pngwing.com/pngs/280/352/png-transparent-computer-icons-github-social-media-github-mammal-cat-like-mammal-carnivoran-thumbnail.png" alt="" /></a>

                                    <a href="https://twitter.com/thepracticaldev" target='blank'><img className='w-6 mr-4' src="https://cdn-icons-png.flaticon.com/512/107/107195.png" alt="" /></a>

                                    <a href="https://twitch.com/thepracticaldev" target='blank'><img className='w-6 mr-4' src="https://icones.pro/wp-content/uploads/2021/05/symbole-twitch-logo-icone-gris.png" alt="" /></a>

                                    <a href="https://instagram.com/thepracticaldev" target='blank' ><img className='w-6 mr-4' src="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-gris.png" alt="" /></a>

                                </div>
                            
                            
                                
                            </div>
                            
                        <div className="max-h-48 overflow-y-auto p-4 mb-4">
                            
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># webdev</a></div>
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># javascript</a></div>
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># beginners</a></div>
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># programming</a></div>                            
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># tutorial</a></div>
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># react</a></div>
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># aws</a></div>
                                <div className="mb-2"><a href="/" className="text-dark-500 hover:underline"># open source</a></div>                            
            
                        </div>

                        <div className='flex flex-col '>

                            <h2 class="text-xl font-semibold mb-4">Did you know?</h2>

                            <p className='mb-5'>DEV's Organization Accounts give you a dedicated landing page to showcase your brand. It's your opportunity to shine in a sea of content. Explore the possibilities today and stand out from the crowd.</p>


                            <a href='/' className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Tip's Dev</a>



                            <p className='mb-5 mt-5'><strong >DEV Community</strong>  A constructive and inclusive social network for software developers. With you every step of your journey.</p>

                            <p className='mb-5 mt-5'>Built on Forem — the open source software that powers DEV and other inclusive communities.</p>

                            <p className='mb-5 mt-5'>Made with love and Ruby on Rails. DEV Community © 2016 - 2024.</p>
                            
                            
                                
                        </div>
                            
                            

                    </div>
                </div>
                
                
                <div className="w-2/4 p-4">
                <div className="bg-white p-6 rounded shadow">
                    {/* <h2 className="text-xl font-semibold mb-4">Columna Central</h2> */}
                   <Cards/>
                </div>
                </div>
                
                
                <div className="w-1/4 p-4">
                <div className="bg-white p-6 rounded shadow">
                       
                        <div className='flex flex-col '>

                            <a href=""> <h2 class="text-xl text-dark font-semibold mb-4  hover:text-blue-700 ">#Did you know?</h2></a>

                            <p className='mb-5'>DEV's Organization Accounts give you a dedicated landing page to showcase your brand. It's your opportunity to shine in a sea of content. Explore the possibilities today and stand out from the crowd.</p>

                            <a href='/' className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">new notice</a>

                            <p className='mb-5 mt-5'><strong >DEV Community</strong>  Discussion threads targeting the whole community</p>

                            <p className='mb-5 mt-5'>What are you learning about this weekend? </p>

                            <p className='mb-5 mt-5'>Which type of Blogs DEV.TO Community want ?</p>

                            <p className='mb-5 mt-5'>Tag your posts with #DEVResolutions2024 to share your goals, track your progress, and inspire the DEV community with your achievements for the coming year.</p>

                            <hr />

                            <p className='mb-5 mt-5'>How to get good at competitive programming</p>

                            <p className='mb-5 mt-5'>From Next.js to Rails then Elixir: My journey through React.js burnout</p>
                            
                            
                                
                        </div>
                </div>
                </div>

            </div>
        </>
    )
}