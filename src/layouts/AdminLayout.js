import React from 'react'
import AdminNavbar from '../admin/components/AdminNavbar'
import AdminSidebar from '../admin/components/AdminSidebar'

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <AdminNavbar />
                <AdminSidebar />
                <div className="app-main">
                    <div className="app-main__outer">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout