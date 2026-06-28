
export default function Sidebar({ open,setOpen}){
    const recentSearches=["React","NodeJs","Tailwind"];

    return (
        <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-300 text-dark font-semibold transform transition-transform 
        ${open ? "translate-x-0":"-translate-x-full"}`}
        >
            <button onClick={()=> setOpen(false)}>Close</button>
            {recentSearches.map((items,i)=>(
                <p key={i}>{items}</p>
            ))}
        </div>
    );
}