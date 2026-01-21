import { useState } from "react"

const SelectorCard = ({ product, setSelected }) => {


  return (
    <button 
      onClick={()=>setSelected(product.id)}
      className="border border-white rounded-2xl h-[90%] hover:h-[95%] w-[30%] transition-all duration-500 cursor-pointer flex flex-col justify-center items-center"
    >
      <img 
        src={product.image}
        alt="popular cake"
        className="h-25 hover:h-20 w-25 hover:w-20 transition-all duration-500" 
      />
      <h3 className="font-extrabold text-[20px] text-[#e7a9ba] hover:text-[25px] transition-all duration-500">
        {product.name}
      </h3>
    </button>
  )
}

export default SelectorCard
