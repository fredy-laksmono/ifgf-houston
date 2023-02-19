const WelcomeHome = () => {
    return (
        <section className=" bg-slate-400 relative">
            <img
            className="w-full h-full max-h-screen object-cover "
            src="https://lh3.googleusercontent.com/pw/AMWts8D8OIu7GiOsCrK4FX0Dio2lr1GuMfb5f4Tq9Iy-XiTAy39LL3YwVKIRq__RIML7brBMY76EJtjYyzbk61x2IrKMiMT84J80lG5tAPvszf9s7bDhU-82rbGJ9bNyTSRxd91i2gGX5iQC2BgJzYDsoTPguA=w1024-h683-no?authuser=0"
            alt="IFGFHouston-1.jpeg"
            ></img>
            <div className="absolute top-0 left-0 w-full min-h-min h-full flex flex-col pt-20 bg-black opacity-60"></div>
            <div className="absolute top-0 left-0 w-full min-h-min h-full flex flex-col pt-20">
                <h1 className=" text-8xl">
                    WELCOME <br /> HOME
                </h1>
                <h2 className=" text-2xl mt-10 mb-5">
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