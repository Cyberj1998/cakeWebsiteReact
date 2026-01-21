import { Canvas } from "@react-three/fiber";
import { CakeModel } from "./CakeModel";
import { Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import Button from "./Button";
import CornerDip from '/images/corner_dip.png'
import Background from '/images/backgroundPhrase.png'

const Hero = () => {

  const textRef = useRef(null)

  useEffect(()=>{
    
    const tl = gsap.timeline();

    const textSplit = new SplitText('.PrimaryText', {type: 'chars, words'})
    const textSplit2 = new SplitText('.SecondaryText', {type: 'chars, words'})


    gsap.from(textSplit.chars,{
      opacity: 0,
      yPercent: 50,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    })

    tl.to('.polygonAnimation', { 
      duration: .5, 
      opacity: 1,
      ease: "circ.inOut",
    }).to('.polygonAnimation', { 
      duration: .5, 
      clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)', 
      ease: "circ.inOut",
      delay: .5
    });

    
    gsap.fromTo('.shapeElement',
      { x: '-100vw', y: '100vh' },  
      {
        x: '0vw', y: '0vh',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.secondHalf',
          start: 'top bottom', 
          end: 'bottom top',
          scrub: true,
          //markers: true,
        }
      }
    );
     
    gsap.to('.wave', {
      top: -1000,
      right: -1000,
      scrollTrigger: {
        trigger: '.firsthalf',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
      }
    });

    
    gsap.from(textSplit2.chars, {
      opacity: 0,
      yPercent: 50,
      stagger: 0.06,
      scrollTrigger: {
        start: 'top top',   
        end: 'center center', 
        scrub: true,
        markers: true
      }
    });

  },[])

  return (
    <div className='containerAnimationTrigger w-full h-[200vh] bg-[#e7a9ba] flex flex-col'>
      <img 
        className="absolute top-0 w-full h-[140vh] bg-cover opacity-45"
        src={Background} 
        alt="backgound" 
      />
      <div className="canvasContainner absolute h-[200vh] w-full pointer-events-none">
        <Canvas className="h-full w-full z-50 bg-transparent pointer-events-none">
            <ambientLight intensity={0.7} color="#ffffff" />
            <hemisphereLight skyColor="#e0c2d6" groundColor="#523536" intensity={0.5} />
            <directionalLight 
            intensity={2} 
            position={[5, 10, 5]} 
            />
            <pointLight intensity={1} position={[-3, 2, -3]} color="#ffc0cb" />
            <Float speed={5} floatIntensity={.5} rotationIntensity={.5}>
            <CakeModel 
                position={[2, 2, 0]}
                rotation={[.9, 2, -.3]} 
                scale={.8}  
            />
            </Float>
        </Canvas>
      </div>
      <div className='firstHalf h-screen w-full flex flex-row max-md:flex-col justify-center items-center'>
        <div className='w-[50%] max-md:w-full h-full max-md:h-[50%] overflow-hidden flex flex-col justify-center items-center'>
          <h3 
            className="PrimaryText text-[#eed7af] text-7xl max-md:text-5xl font-semibold"
          >
            Freaking-Delicious
          </h3>
          <h3
            ref={textRef}
            style={{
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
            }} 
            className="polygonAnimation opacity-0 text-[#e7a9ba] bg-[#eed7af] border-[5px] border-[#e7a9ba] -rotate-3 text-7xl max-md:text-5xl font-semibold">
              Handmade-Cakes
          </h3>
          <p 
            className="mt-5 w-fit text-[#6e6e6e] text-center p-2 font-sans font-semibold z-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            Lorem ipsum dolor sit amet.
          </p>
          <Button />
        </div>
        <div className='w-[50%] max-md:w-full h-full max-md:h-[50%] flex justify-center items-center'>
          <img
            className="wave h-screen w-125 absolute top-0 right-0" 
            src={CornerDip}
            alt="corner dip" 
          />
        </div>
      </div>
      <div className='secondHalf h-screen w-full flex flex-row max-md:flex-col justify-center items-center'>
        <div className="h-screen max-md:h-[50%] w-[50%] max-md:w-full flex justify-center items-center">
          <div 
            className="shapeElement bg-[#eed7af] h-100 w-100 rounded-bl-[200px] rounded-br-[100px] rounded-tl-[200px] rounded-tr-[150px] relative"
          ></div>
        </div>
        <div className="texthalf h-screen max-md:h-[50%] w-[50%] max-md:w-full flex flex-col justify-center items-center">
          <div className="textConntainer">
            <h3 className="SecondaryText text-[#eed7af] text-[60px] font-extrabold text-left leading-tight">
              make with the best <br /> ingredients
            </h3>
            <p className="SecondaryP text-[#6e6e6e] text-left font-sans font-semibold w-112.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia sunt qui pariatur, fugit dicta in suscipit animi 
              ab dolor architecto sed voluptatem? Doloremque consequatur 
              optio consectetur modi dolore voluptatum adipisci!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
