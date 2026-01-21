

const BentoCard = ({ card }) => {

    
  return (
    <div className={`m-2 rounded-2xl ${card.col} ${card.row} max-md:col-span-3 max-md:row-span-2 relative`} >
      <img 
        src={card.img}
        alt="bento card"
        className="absolute object-cover h-full w-full inset-0 rounded-2xl" 
      />
      <p className="relative z-10 text-[30px] font-extrabold text-[#e7a9ba]">{card.title}</p>
    </div>
  )
}

export default BentoCard
