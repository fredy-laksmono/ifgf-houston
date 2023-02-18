const WelcomeHome = () => {
    return (
        <section className=" bg-slate-400 relative">
            <img
            className="w-full h-full max-h-screen object-cover "
            src="https://lh3.googleusercontent.com/6ulD9f7H9j78q0QbC10QJcZahjeRrnmczUzB-43OLsxeUcMs-DDY9anMfjLKa2ROn9TAjMI900VxwvcZwcT_UTkK9MrWlIglhjV1mP0nXXW3F7iIVyk0feGyOKwmVwB2GdvZein_8tuQi46HKvLYWgP1sl52wGkfNcl6vEGLpEctFBdjcK98E_XEKDXzlx1g7YAz55CwfP_lMNen2ZmTymRSprUgHZPhs23t9ke2fa-7YsfMci50GzFwRbK0y7msZZXHFL3-avz_520_HsTfafSu99belnoK3zhiMLLQwcKE5X7xTIc3FdzG-KJLeNQ8HOYJOh2fR_V7YqKmiMs1_OMZ6eRhgXXnd27AWya9aijNl-Tz0aQw5Ifj24SMxEGrqGDJ8o8h73PBZbd04xVjFh24TNIPp7rfMs7d7tXb-P27t48IoqITvqImUUr8MHjeBAOso2BU-BbpPta-POo9vuxcFx7aYEMB2N39f9uxgffmjnH2_-Zu4GZw6sH5fsdFlOf_kgkVsBXG_tpzigmMcLLaL9noRtqX08E5GxTBYDKju71_PZaHybeOOTx5eUa-UVhnrDGWwAO4c6ySaXsnB4k68fSOpOME6kZoTE1zLCJAOhADhjkoZlDHSkqyWcDP-Gctazb46dfd0n_ov_fd5cbrjS8GZrZOfN-4qTyazcpJkzCUtkXxCZKYhSLhlZQFn9VlBo5sOJ-6w3RYtIH9W9TsOg8fLAJWYWA6Ag3oHFPxuRxnVuVSqsxmZeNeMoXiVXPLozIO-NPbgsXigaivbkzQd_4IkAws9lvUD_ZAHC1_FUrbi-HGaAfbv6JWnX5JQmSwpiQXzW05soCxw1MQgsi66R61V00XOvR-kogWaTM8ZHaz2-XdkBibWzupiU0LcmBwVT8xN2JGfngx--gTdHyNrxbW3FolX7NbZW4AMz4k0yl_vA=w996-h664-s-no?authuser=0"
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