import { useEffect, useState } from 'react'

export default function Cards() {
    
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((json) => {
                setPublications(json?.data);
                console.log(json.data);
            });
    },[])


    return (
        <section>
            {publications.map((publication) => (

                <article id='userCol' key={`publication-${publication._id}`} className='my-3 drop-shadow'>
                    
                    <div id='userCard' className='flex flex-col justify-center bg-white rounded-md'>

                        <img src={publication.img} alt="" id='upImage' className='object-fill rounded-t-md max-h-64' />
                        <div id='cardBody' className='p-3'>
                            <div id="imageProfile " className='flex'>
                                <div id='imageProfileCol' className='flex flex-row gap-3 items-center'>
                                    <img src={publication.imgprofile} alt="" id='userImage' className='max-w-14 rounded-full'/>

                                </div>

                                <div id='dateTitle'>
                                    <h5 id='cardUsername' className='font-semibold p-1 rounded-md text-sm text-gray-600 hover:text-black hover:bg-gray-100'>{publication.name}</h5>
                                    <p className='pl-1 text-xs text-gray-500'>
                                        {publication.date}
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='pl-[68px]'>
                            <a href="">
                                <p id='cardTitle' className='font-bold text-2xl hover:text-indigo-800 pb-3'>
                                    {publication.title}
                                </p>
                            </a>

                        </div>

                        <div id='divTags' className='flex justify-center gap-3 pb-1 '>
                            {publication.tags.map((tag, index) => {
                                return (
                                    <span key={`tag-$(publication._id)-${index}`} className=' p-1 rounded-lg border border-white hover:border hover:border-indigo-800 hover:bg-indigo-200/50 hover:text-indigo-600'> #{tag}</span>
                                )
                            })}

                        </div>

                        

                    </div>

                </article>
            ))}        
        </section>
    )
}