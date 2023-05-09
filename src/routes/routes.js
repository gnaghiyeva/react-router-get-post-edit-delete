
import EmployeeDetail from "../pages/Main/EmployeeDetail";

import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";

import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import AddEmployee from "../pages/Admin/AddEmployee";
import Employees from "../pages/Admin/Employees";
import EmployeesList from "../pages/Main/EmployeesList";
import EmployeeDetaill from "../pages/Admin/EmployeeDetaill";
import EditEmployee from "../pages/Admin/EditEmployee";

export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path: 'employees',
                element: <EmployeesList/>
            },
            {
                path:'employees/:id',
                element:<EmployeeDetail/>
            },
            // {
            //     path: 'about',
            //     element: <EmployeeDetail/>
            // },
            {
                path:'*',
                element: <NotFound/>
            }
            
        ]
    },

    //Admin Root - admin side
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element: <Dashboard/>
            },
            {
                path:'employees',
                element:<Employees/>
            },
            {
                path:'add-employee',
                element:<AddEmployee/>
            },
            {
                path:'employees/:id',
                element:<EmployeeDetaill/>
            },
            {
                path:'employees/edit/:id',
                element:<EditEmployee/>
            }
           
            
            
            // {
            //     path:'products/edit/:id',
            //     element: <EditProduct/>
            // }
           
        ]
    }
]