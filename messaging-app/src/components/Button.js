const Button=({text,onClick})=>{
    return(
        <>
        <button className="justify-center rounded-md bg-black text-white p-1 mt-1" 
        onClick={onClick}
        >
            {text}
            </button>
        </>
    )

}
export default Button