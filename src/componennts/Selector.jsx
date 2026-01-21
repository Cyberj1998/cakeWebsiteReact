import Background from '/images/backgroundPhrase.png'
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import PlaneMaterial from './PlaneMaterial';
import popularProducts from './constants/PopularProducts';
import SelectorCard from './SelectorCard';
import { useState } from 'react';

const Selector = () => {

  const[selected,setSelected]=useState(0)

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[#e7a9ba] relative'>
      <img 
        src={Background}
        alt="background" 
        className='absolute top-0 w-full h-[140vh] bg-cover opacity-45'
      />

      {/*-------------------------3d object-------------------*/}
      <Canvas className="border-2 border-blue-700 h-[60%] w-full z-50 bg-transparent pointer-events-none">
        <ambientLight intensity={0.7} color="#ffffff" />
        <hemisphereLight skyColor="#e0c2d6" groundColor="#523536" intensity={0.5} />
        <directionalLight 
          intensity={2} 
          position={[5, 10, 5]} 
        />
        <pointLight intensity={1} position={[-3, 2, -3]} color="#ffc0cb" />
        <Float speed={5} floatIntensity={.5} rotationIntensity={.5}>
          <PlaneMaterial 
            selected={selected}
          />
        </Float>
      </Canvas>

      {/*-------------------------selector-------------------*/}
      <div className='border-2 border-red-600 w-full h-[40%] flex flex-row'>
        <div className='border-2 border-amber-500 h-full w-[40%] flex flex-col justify-center items-start p-3'>
          <h3 className='text-[#eed7af] font-extrabold text-[40px] z-10 uppercase'>
            name of the cake
          </h3>
          <p className='text-[15px] font-sans font-semibold text-gray-600 z-10'>
            brief description of the cake Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus incidunt nemo cum modi 
            odit corporis, aliquid ipsa numquam quam similique, in odio 
          </p>
        </div>
        <div className='border-2 border-purple-700 h-full w-[60%] flex flex-row justify-evenly items-center bg-[#eed7af] rounded-2xl z-10'>
          {
            popularProducts.map((product)=>(
              <SelectorCard 
                key={product.id}
                product={product}
                setSelected={setSelected}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Selector

/* 

<mesh ref={cakeRef} >
  <planeGeometry args={[2, 1.5]} />
  <meshBasicMaterial map={texture} transparent />
</mesh>


*/


/*

 <Float speed={5} floatIntensity={.5} rotationIntensity={.5}>

*/