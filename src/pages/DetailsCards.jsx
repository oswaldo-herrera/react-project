import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DetailsCards() {
    const [detailCard, setDetailCard] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setDetailCard(json?.data);
            })
    }, []);


    return (
        <section className="flex">
          
            {/* <div className="container mx-auto flex"> */}
                {/* <div className="w-1/4 p-4">

                </div> */}
                <div className="w-8/12 p-4">
                     <div className="mb-3 px-5">
                        <img className=""  src={detailCard.img} id="entry-cover" alt="" />
                        <div className="flex flex-row mb-3">
                            <img className='max-w-12 rounded-full mt-3' src={detailCard.imgprofile} alt="" />
                            <div className="flex flex-col justify-center px-4">
                                <h5>{detailCard.name}</h5>
                                <p>{detailCard.date }</p>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row px-5">
                        <h1 className="py-3 "><strong>{detailCard.title}</strong> </h1>
                        
                    </div>
                    <p className="px-5 text-justify">{detailCard.description}
                       </p>


                </div>
                <div className="w-2/5 p-4">

                    <div className="flex flex-row mb-3 ">
                            <img className='max-w-10 rounded-full' src={detailCard.imgprofile} alt="" />
                            <div className="flex flex-col justify-center px-4">
                                <h5>{detailCard.name}</h5>
                            </div>
                    
                    
                    
                            
                    </div>
                
                    <div className="flex flex-col text-center pt-5">

                       
                    
                        <a href={`/posts/${detailCard._id}`} className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">follow</a>
                        
                        <p className="text-justify pt-5 mb-10">
                            I am an artist who develop products, design interface, write and share the journey. Just exploring multiple nuances to get to my own niche one day Or May be I am my NICHE.
                        </p>
                    

                        <p className="text-left"><strong>Joined</strong> </p>
                        <p className="text-left mb-10">{detailCard.date}</p>
                        <p className="text-left "><strong>Comments</strong> </p>
                        <p className="text-left mb-10">{detailCard.comments_count}</p>
                    

                        <h2 className="text-left pt-10 text-xl mb-5"><strong> Did you know?</strong> </h2>
                         <p className="text-justify mb-5">
                            You can use this area right here to promote your company's:
                        </p>
                    
                        <a href={`/posts/${detailCard._id}`} className="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">Learn More</a>    
                    

                        <img className="pt-10 w-1/2 mx-auto" src="https://res.cloudinary.com/practicaldev/image/fetch/s--siP9tC7g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_350/https://i.imgur.com/scD1oBt.png" alt="" />
                    
                        <h2 className="text-left pt-10 text-xl mb-5"><strong> Thank you</strong> </h2>

                        <p className="text-justify">
                            Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us.
                        </p>
                    </div>
                    
                </div>
            {/* </div> */}

           

        </section>
    )
}