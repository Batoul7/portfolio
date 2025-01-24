import { FilterButtonsData } from "../../Data/FilterButtonsData";
import useProjectStore from "../../store/filterProjectsStore";


export default function FilterButtons() {
  const setFilter = useProjectStore((state) => state.setFilter);
  const filter = useProjectStore((state) => state.filter);

  return (
    <div className="flex gap-4 mb-6 py-10 justify-center items-center flex-wrap">
    {FilterButtonsData.map((type) => (
      <button
        key={type}
        onClick={() => setFilter(type)}
        className={`py-1 px-3 shadow-btnshadow rounded-lg text-base md:text-lg font-medium font-poppins 
                        flex gap-3 items-center justify-center hover:bg-my-secondery 
                         ${ filter === type && "bg-my-secondery text-white hover:bg-my-secondery"}`} >
        {type === "" ? "ALL" : type.toUpperCase()}
      </button>
    ))}
  </div>
  )
}
