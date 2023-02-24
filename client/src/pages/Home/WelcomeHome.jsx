import IFGFHouston from "../../assets/IFGFHouston-1.jpeg";

const WelcomeHome = () => {
    return (
        
        <section className=" bg-slate-400 relative">
            <img
            className="w-full h-full max-h-screen object-cover "
            src={IFGFHouston}
            alt="IFGFHouston-1.jpeg"
            ></img>
            <div className="absolute top-0 left-0 w-full min-h-min h-full flex flex-col pt-20 bg-black opacity-60"></div>
            <div className="absolute top-0 left-0 w-full min-h-min h-full flex flex-col pt-4 md:pt-20">
                <h1 className=" text-4xl md:text-8xl">
                    WELCOME <br /> HOME
                </h1>
                <h2 className=" text-large mt-4 md:text-2xl md:mt-10 mb-5">
                    JOIN OUR ONSITE SUNDAY GATHERING
                </h2>
                <p>
                    IFGF Houston <br /> 11:00AM - 12:30PM <br /> 6455 Wilcrest Dr,
                    Houston, TX 77072
                </p>
            </div>
        </section>
        
        
    )
}

export default WelcomeHome;