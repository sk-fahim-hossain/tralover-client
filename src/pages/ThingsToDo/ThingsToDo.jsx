import React from 'react';
import './TC.css'

const ThingsToDo = () => {

    const touristData = [
        {
            "id": 1,
            "name": "Cox's Bazar",
            "description": "Known for having the world's longest natural sea beach, Cox's Bazar offers stunning views of the Bay of Bengal. The golden sands stretch for over 120 kilometers, making it a popular destination for beach lovers.",
            "image": "https://images.unsplash.com/photo-1587222318667-31212ce2828d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y294cyUyMGJhemFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
        },
        {
            "id": 2,
            "name": "Sundarbans Mangrove Forest",
            "description": "The Sundarbans, a UNESCO World Heritage Site, is home to the famous Royal Bengal Tiger. This unique mangrove forest spans both India and Bangladesh and is a haven for wildlife enthusiasts and nature lovers.",
            "image": "https://images.unsplash.com/photo-1551615577-1c7e180a77ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VuZGFyYmFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            "id": 3,
            "name": "Sajek Valley",
            "description": "Nestled in the Chittagong Hill Tracts, Sajek Valley is a picturesque hill station surrounded by lush green hills and tribal villages. It's a serene escape from the bustling city life.",
            "image": "https://images.unsplash.com/photo-1629739868151-d29aab8b4dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhamVrJTIwdmFsbGV5JTIwKHJhbmdhbWF0aSl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            "id": 4,
            "name": "Rangamati",
            "description": "Located in the Chittagong Hill Tracts, Rangamati is a beautiful district dotted with serene lakes, lush forests, and indigenous communities. The Kaptai Lake here is a major attraction.",
            "image": "https://images.unsplash.com/photo-1642179335770-82d5ffc4b439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJhbmdhbWF0aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            "id": 5,
            "name": "Srimangal",
            "description": "Known as the 'Tea Capital of Bangladesh,' Srimangal is famous for its rolling tea gardens, producing some of the finest tea in the world. It's a great place to explore and relax in the lap of nature.",
            "image": "https://images.unsplash.com/photo-1645153529792-c5823ffe9525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2hhZ3JhY2hoYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        },
        {
            "id": 6,
            "name": "Saint Martin's Island",
            "description": "Situated in the Bay of Bengal, Saint Martin's Island is the only coral island in Bangladesh. Its pristine beaches, crystal-clear waters, and vibrant marine life make it a paradise for snorkelers and divers.",
            "image": "https://images.unsplash.com/photo-1665805397302-79f6419c2bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FpbnQlMjBtYXJ0aW5zJTIwaXNsYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        },
        {
            "id": 7,
            "name": "Jaflong",
            "description": "Located in the Sylhet region, Jaflong is a picturesque spot near the India-Bangladesh border. It's famous for its tea gardens, the Khasi tribal community, and the view of the Khasi hills and the Kynshi River.",
            "image": "https://images.unsplash.com/photo-1643001607577-0a0332e79aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFmbG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        }
    ];

    return (
        <div className=' thingsToDo'>
            <div className='title'>
                <h1 >Things To Do</h1>
                <div className="border"></div>
            </div>
            <div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">

                    {
                        touristData.splice(0,3).map(item => (
                            <div class="col ">
                                <div class="card h-auto" >
                                    <img src={item.image} class="card-img-top " alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <a href="#" class="btn btn-primary">Read More...</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default ThingsToDo;