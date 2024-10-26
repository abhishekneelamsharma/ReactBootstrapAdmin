
import { useEffect } from "react";
import { DataTable } from "simple-datatables"
const Table  = () => {

    useEffect(() => {
        new DataTable("#myTable");
    }, []);

    return (
        <>
           
                <div className="app-main__inner">
                    <div className="row">
                        <div className="col-md-12 col-md-12 col-xl-12">
                            <div className="main-card mb-3 card">
                                <div className="card-header">
                                VIEW Banner
                                    <div className="btn-actions-pane-right">
                                        <div role="group" className="btn-group-sm btn-group">
                                            <button className="active btn btn-focus">Last Week</button>
                                            <button className="btn btn-focus">All Month</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table
                                        id="myTable"
                                        className="align-middle mb-0 table table-borderless table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Sr.no.</th>
                                                <th className="text-center">Category</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center text-muted">#1</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left flex2">
                                                                <div className="text-center widget-heading">John Doe</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <a className="btn btn-danger btn-sm  mr-2" href="#">
                                                        Delete
                                                    </a>
                                                    <a className="btn btn-primary btn-sm  mr-2" href="/dashboard/category/edit">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
        </>
    );
};
export default Table ;