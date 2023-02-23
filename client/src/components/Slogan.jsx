const Slogan = () => {
    return (
        <div>
            <section className=" bg-white text-black static flex flex-col md:hidden">
                
                <h1 className=" font-bold text-4xl pt-4">PEOPLE IS</h1>
                <h1 className=" font-bold text-4xl ">OUR MISSION</h1>
                
                <h2 className=" font-semibold text-large pt-6 ">CONNECT WITH GOD</h2>
                <h2 className=" font-semibold text-large pb-4">MAKE DISCIPLES</h2>
                
            </section>
            <section className=" hidden bg-white text-black static md:grid grid-cols-1">
                <div className=" people ">
                <h1 className=" font-bold text-6xl ">PEOPLE IS</h1>
                <h1 className=" font-bold text-6xl ">OUR MISSION</h1>
                </div>
                <div className=" connect ">
                <h2 className=" font-semibold text-xl ">CONNECT WITH GOD</h2>
                <h2 className=" font-semibold text-xl ">MAKE DISCIPLES</h2>
                </div>
            </section>
        </div>
        
    )
}

export default Slogan