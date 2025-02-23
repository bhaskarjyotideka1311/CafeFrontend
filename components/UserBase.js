import DashboardNavbar from "./DashboardNavbar";

const UserBase = ({title="Welcome",children}) =>{
    return(
        <div className="container-fluid p-0 m-0">
            <DashboardNavbar />

            {children}
        </div>
    );
};

export default UserBase;