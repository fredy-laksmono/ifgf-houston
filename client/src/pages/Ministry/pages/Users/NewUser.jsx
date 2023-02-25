const NewUser = ( {setNewUserMode}) => {
    const submit = () => {
        // Send user form to backend
        setNewUserMode(false)
    }
    return (
        <div className=" grid grid-cols-7 py-4 bg-slate-200">
            <button className=" col-start-7 col-span-1 " onClick={()=>{setNewUserMode(false)}}>X</button>
            <div className=" row-start-2 col-start-1 col-span-6">
                <form className=" grid grid-cols-7 gap-1">
                    <label className=" col-start-1 col-span-1"> Name: </label>
                    <input className=" col-start-2 col-span-6" type="text" />
                    <label className=" col-start-1 col-span-1"> Email: </label>
                    <input className=" col-start-2 col-span-6" type="text" />
                    <label className=" col-start-1 col-span-1"> Phone: </label>
                    <input className=" col-start-2 col-span-6" type="text" />
                    <label className=" col-start-1 col-span-1"> Note: </label>
                    <input className=" col-start-2 col-span-6" type="text" />
                    <button className=" col-start-4 py-2 ">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewUser