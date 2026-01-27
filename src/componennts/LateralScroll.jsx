import FlavorCard from "./FlavorCard"
import lateralContent from "./constants/LateralScrollContent"
import { gsap } from "gsap"
import { useRef, useEffect, useState } from "react"

const LateralScroll = () => {

  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect(()=>{

    if (sliderRef.current) {
      setWidth(sliderRef.current.offsetWidth);
    }

    gsap.to('.flavorTrigger', {
      x: '-1000px',
      scrollTrigger: {
        trigger: '.flavorTrigger',
        start: 'top top',
        end: `bottom bottom`,
        scrub: true,
        pin: true,
        markers: true,
      }
    });


  },[])

  return (
    <section className="flavorTrigger h-screen w-full border-2 border-blue-500 bg-amber-400">
      <div ref={sliderRef} className="sliderContainer w-fit flex flex-row border-2 border-amber-300 justify-evenly items-center">
        <h3 className="text-[50px] font-extrabold uppercase">Flavor <br />Section</h3>
        {
          lateralContent.map((item)=>(
            <div 
              key={item.id}
              className="border-2 border-red-500 h-[400px] w-[400px] rounded-2xl m-10"
            >

            </div>
          ))
        }
      </div>
    </section>
  )
}

export default LateralScroll

