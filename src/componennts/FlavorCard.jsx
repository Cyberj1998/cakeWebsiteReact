

const FlavorCard = ({ item }) => {
  return (
    <div className="border-2 border-purple-700 h-100 w-125 m-10 rounded-2xl relative overflow-visible flex justify-center items-center">
      <img
        src={item.backgroundImage}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
      />
      <img 
        src={item.secondaryImage}
        alt="secondary image"
        className="relative border-2 border-blue-500 w-130 h-120 -left-10"
      />
    </div>
  )
}



export default FlavorCard
