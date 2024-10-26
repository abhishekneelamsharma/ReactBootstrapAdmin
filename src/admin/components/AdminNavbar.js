

import { useState } from "react";

const AdminNavbar = ({ togglesidebar, isSidebarOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(true);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };
    return (
        <>
            <div  style={{zIndex:"9"}} className="w-100 d-flex justify-content-between p-2 border-bottom  position-fixed top-0 bg-white" >
                <div style={{marginLeft:"17.5rem"}}>
                    {/* <h2>Welcome to Admin</h2> */}
                </div>
                <div>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <div className={openDropdown ? "btn-group" : "btn-group show"}>
                                    <a onClick={toggleDropdown} data-toggle="dropdown" aria-haspopup="true" aria-expanded={openDropdown ? "false" : "true"} className="p-0 btn" >
                                        <img width="42" className="rounded-circle border" src="/assets/images/avatars/admin.jpg" alt />
                                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                    </a>
                                    <div tabindex="-1" role="menu" aria-hidden="true" className={openDropdown ? "dropdown-menu dropdown-menu-right" : "dropdown-menu dropdown-menu-right show"} >
                                        <div className="ml-4">
                                            <p>admin <br />
                                                admin@gmail.com</p>
                                        </div>
                                        <button type="button" tabindex="0" className="dropdown-item">Logout</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminNavbar;