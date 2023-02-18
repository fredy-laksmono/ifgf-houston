const WelcomeHome = () => {
    return (
        <section className=" bg-slate-400 relative">
            <img
            className="w-full h-full max-h-screen object-cover opacity-60"
            src="https://static.wixstatic.com/media/2422f3_21c0c5ed1c2741aaacf587ee8d36a952~mv2.jpg/v1/fill/w_1056,h_804,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2422f3_21c0c5ed1c2741aaacf587ee8d36a952~mv2.jpg"
            alt="IFGF-inside-01.png"
            ></img>
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