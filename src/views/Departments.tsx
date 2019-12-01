import React, { Component } from 'react';
import { DepartmentModel } from '../models/department';
import DepartamentList from '../components/departmentList/DepartamentList';
import DepartmentListContainer from './../containers/DepartmentListContainer';
import EmployeesList from '../components/employeesList/EmployeesList';

interface IDepartmentsState {
    departments: DepartmentModel[]
}

export default class Departments extends Component<{}, {}>{
    
   

    handleLoadDepartmentInfo(department: DepartmentModel): void {
        console.log(department);
    }   
    
    render() {
        return (
            <div className='row'>
                <div className='col-3'>
                    <DepartmentListContainer/>
                </div> 
                <div className='col-9'>
                    <EmployeesList />
                </div>
            </div>
        );
    }
}