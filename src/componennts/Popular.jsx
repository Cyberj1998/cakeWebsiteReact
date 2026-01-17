import Dip from '/images/dip.png'


const Popular = () => {
  return (
    <div className='h-screen w-full bg-[#eed7af] grid'>
      <img 
        src={Dip} 
        alt="dip" 
        className='flex justify-self-start w-full h-37.5'
      />

      <div className='w-full h-screen absolute flex flex-row max-md:flex-col justify-center items-center'>
        <div className='h-screen max-md:h-[50%] w-[50%] max-md:w-full'>

        </div>
        <div className='h-screen max-md:h-[50%] w-[50%] max-md:w-full'>

        </div>
      </div>
    </div>
  )
}

export default Popular
