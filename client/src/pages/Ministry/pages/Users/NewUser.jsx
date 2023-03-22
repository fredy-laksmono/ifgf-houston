import { useRef } from "react"

const NewUser = ( {setNewUserMode}) => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const noteRef = useRef()

    const onSubmit = () => {
        let formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            note: noteRef.current.value
        }
        console.log(formData)
        // Send user form to backend
        setNewUserMode(false)
    }
    return (
        <div className=" grid grid-cols-7 py-4 bg-slate-200">
            <button className=" col-start-7 col-span-1 " onClick={()=>{setNewUserMode(false)}}>X</button>
            <div className=" row-start-2 col-start-1 col-span-6">
                <form onSubmit={onSubmit} className=" grid grid-cols-7 gap-1">
                    <label className=" col-start-1 col-span-1"> Name: </label>
                    <input ref={nameRef} className=" col-start-2 col-span-6 px-2" type="text" />
                    <label className=" col-start-1 col-span-1"> Email: </label>
                    <input ref={emailRef} className=" col-start-2 col-span-6 px-2" type="text" />
                    <label className=" col-start-1 col-span-1"> Phone: </label>
                    <input ref={phoneRef} className=" col-start-2 col-span-6 px-2" type="text" />
                    <label className=" col-start-1 col-span-1"> Note: </label>
                    <input ref={noteRef} className=" col-start-2 col-span-6 px-2" type="text" />
                    <button type="submit" className=" col-start-4 py-2 ">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewUser