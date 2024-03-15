import React, { Component } from "react";

export class Home extends Component {
    render () {
        return (

            <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
                <div className="z-50">
                    <div className="container">
                        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
                            <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
                                <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                                    <a className="text-5xl font-semibold" href="/">
                                        <img className="h-[26px] lg:h-[32px]" src="./images/logo/logo.png" alt="logo" />
                                    </a>
                                    <div className="flex items-center">
                                        <button id="theme-toggle-mobile" type="button"
                                            className="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                                            <i id="theme-toggle-dark-icon-mobile" className="fa-solid text-xl fa-moon hidden"></i>
                                            <i id="theme-toggle-light-icon-mobile" className="fa-solid fa-sun text-xl hidden"></i>
                                        </button>
                                        <button id="menu-toggle" type="button" className="menu-toggle-btn">
                                            <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl "></i>
                                            <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  "></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
        
                            <nav className="hidden lg:block">
                                <ul className="flex my-12">
                                    <li>
                                        <a className="menu-item-two-active" href="./homePage.html">
                                            <span className="mr-2 text-base">
                                                <i className="fa-solid fa-house"></i>
                                            </span> Home </a>
                                    </li>
                                    <li>
                                        <a className="menu-item-two" href="./aboutTwo.html">
                                            <span className="mr-2 text-base">
                                                <i className="fa-regular fa-user"></i>
                                            </span> About </a>
                                    </li>
                                    <li>
                                        <a className="menu-item-two" href="./resumeTwo.html">
                                            <span className="mr-2 text-base">
                                                <i className="fa-regular fa-file-lines"></i>
                                            </span> Resume </a>
                                    </li>
                                    <li>
                                        <a className="menu-item-two" href="./portfiloTwo.html">
                                            <span className="mr-2 text-base">
                                                <i className="fas fa-briefcase"></i>
                                            </span> Works </a>
                                    </li>
                                    <li>
                                        <a className="menu-item-two" href="./blogTwo.html">
                                            <span className="mr-2 text-base">
                                                <i className="fa-brands fa-blogger"></i>
                                            </span> Blogs </a>
                                    </li>
                                    <li>
                                        <a className="menu-item-two" href="./contactTwo.html">
                                            <span className="mr-2 text-base">
                                                <i className="fa-solid fa-address-book"></i>
                                            </span> Contact </a>
                                    </li>
                                    <li>
                                        <button id="theme-toggle" type="button" className="dark-light-btn w-[44px] h-[44px] ml-2">
                                            <i id="theme-toggle-dark-icon" className="fa-solid text-xl fa-moon hidden"></i>
                                            <i id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden"></i>
                                        </button>
                                    </li>
                                </ul>
                            </nav>

                            <nav id="navbar" className="hidden lg:hidden">
                                <ul
                                    className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                                    <li>
                                        <a className="mobile-menu-items-active" href="./homePage.html">
                                            <span className="mr-2 text-xl">
                                                <i className="fa-solid fa-house"></i>
                                            </span> Home </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-items" href="./aboutTwo.html">
                                            <span className="mr-2 text-xl">
                                                <i className="fa-regular fa-user"></i>
                                            </span> About </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-items" href="./resumeTwo.html">
                                            <span className="mr-2 text-xl">
                                                <i className="fa-regular fa-file-lines"></i>
                                            </span> Resume </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-items" href="./portfiloTwo.html">
                                            <span className="mr-2 text-xl">
                                                <i className="fas fa-briefcase"></i>
                                            </span> Works </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-items" href="./blogTwo.html">
                                            <span className="mr-2 text-xl">
                                                <i className="fa-brands fa-blogger"></i>
                                            </span> Blogs </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-items" href="./contactTwo.html">
                                            <span className="mr-2 text-xl">
                                                <i className="fa-solid fa-address-book"></i>
                                            </span> Contact </a>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        
                        <div className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
                            data-aos="fade">
                            <img className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
                                src="./images/about/avatar.jpg" alt="about avatar" />
                            <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white"> Monalisa Ashley </h3>
                            <p className="mb-4 text-[#7B7B7B]">Ui/Ux Designer</p>
                            <div className="flex space-x-3">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="socialbtn text-[#1773EA]">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </span>
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="socialbtn text-[#1C9CEA]">
                                        <i className="fa-brands fa-twitter"></i>
                                    </span>
                                </a>
                                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="socialbtn text-[#e14a84]">
                                        <i className="fa-brands fa-dribbble"></i>
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="socialbtn text-[#0072b1]">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                </a>
                            </div>
                            <button className="dowanload-btn">
                                <img src="./images/icons/dowanload.png" alt="icon" className="mr-2" />Download CV </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}