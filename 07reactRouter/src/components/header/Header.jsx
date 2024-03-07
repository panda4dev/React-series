import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                //most of the time we write className in callback function because we have to chnage apperance or many other thongs 
                                // in the nav bar items and also using callback we can use a varibale which matches route from url and return true or false 
                                // like here if the user is on .home then isActive will return true 

                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-700":"text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about"
                                //most of the time we write className in callback function because we have to chnage apperance or many other thongs 
                                // in the nav bar items and also using callback we can use a varibale which matches route from url and return true or false 
                                // like here if the user is on .home then isActive will return true 
                                
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-700":"text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/contact"
                                //most of the time we write className in callback function because we have to chnage apperance or many other thongs 
                                // in the nav bar items and also using callback we can use a varibale which matches route from url and return true or false 
                                // like here if the user is on .home then isActive will return true 
                                
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-700":"text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/github"
                                //most of the time we write className in callback function because we have to chnage apperance or many other thongs 
                                // in the nav bar items and also using callback we can use a varibale which matches route from url and return true or false 
                                // like here if the user is on .home then isActive will return true 
                                
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-700":"text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


