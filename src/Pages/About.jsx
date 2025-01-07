import React from 'react'
import bgmainImage from "../Components/mens/bgmain.jpg"; 

const About = () => {
  return (
    <div className="bg-black text-white py-10 px-5 md:px-10 lg:px-10 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div className='text-white items-center justify-center'>
                <h1 className='text-center text-[3rem] font-serif font-bold'>About Us</h1>
                <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem natus tempore quia beatae tenetur fugiat nulla laboriosam amet laudantium necessitatibus nobis sit autem, delectus laborum magni iste explicabo aspernatur.
                Error nobis libero amet ipsam quia? Voluptatum numquam fugiat molestias sequi earum atque iure sapiente possimus eos at natus iusto provident esse, dolores aut id eaque? Corporis maiores sunt non!
                Sunt laborum cum eius quos sit dolorum omnis hic vel expedita ab exercitationem voluptatum suscipit deleniti aut accusantium, delectus rem quae iure? Ipsum consequuntur modi cumque ex eveniet earum at?
                quis mollitia, Sunt laborum cum eius quos sit dolorum omnis hic vel expedita ab exercitationem voluptatum suscipit deleniti aut accusantium, delectus rem quae iure? Ipsum consequuntur modi cumque ex eveniet earum at?
                </p>
            </div>
            <div className='justify-self-center'>
                <img src={bgmainImage} alt="bg" className='w-full h-full'/>
            </div>
        </div>

    </div>
  )
}

export default About