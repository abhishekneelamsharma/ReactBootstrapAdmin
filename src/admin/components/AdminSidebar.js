import { Link } from "react-router-dom"
import React, { useState } from "react";

const AdminSidebar = () => {

    const [openDropdown, setOpenDropdown] = useState(null);


    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <>
            <div className="app-sidebar sidebar-shadow bg-dark position-fixed top-0 left-0 bottom-0" >
                
                
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li>
                                <Link to="/dashboard" className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(0)} className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Banner
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 0 && (
                                    <ul>
                                        <li>
                                            <Link to="/dashboard/banner/create" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                Create
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/dashboard/banner/view" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(1)} className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Category
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 1 && (
                                    <ul>
                                        <li>
                                            <Link to="/CategoriesCreate" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/CategoriesView" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(2)} className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Subcategory
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 2 && (
                                    <ul>
                                        <li>
                                            <Link to="/SubcategoriesCreate" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/SubcategoriesView" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(3)} className="text-light"> 
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Services
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 3 && (
                                    <ul>
                                        <li>
                                            <Link to="/ServiceCreate" className="text-light">
                                                <i className="metismenu-icon" ></i>
                                                Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/ServiceView" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(4)} className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Testimonial
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 4 && (
                                    <ul>
                                        <li>
                                            <Link to="/TestimonialCreate" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/TestimonialView" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(5)} className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Blog
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 5 && (
                                    <ul>
                                        <li>
                                            <Link to='/BlogCreate' className="text-light">
                                                <i className="metismenu-icon"></i>
                                                Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/BlogView" className="text-light">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="#" onClick={() => toggleDropdown(6)} className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Product
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                {openDropdown === 6 && (
                                    <ul>
                                        <li>
                                            <Link to='/ProductCreate'>
                                                <i className="metismenu-icon"></i>
                                                Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/ProductView">
                                                <i className="metismenu-icon"></i>
                                                View
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/Enquiry" className="text-light">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Enquiry
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;
