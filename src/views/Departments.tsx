import React, { Component } from 'react';
import { DepartmentModel } from '../models/department';
import DepartamentList from '../components/departmentList/DepartamentList';

interface IDepartmentsState {
    departments: DepartmentModel[]
}

export default class Departments extends Component<{ }, IDepartmentsState>{
    
    constructor(props: {}) {
        super(props);

        this.state = { 
            departments: []
        };
    }   


    handleLoadDepartmentInfo(department: DepartmentModel): void {
        console.log(department);
    }   
    
    render() {
        return (
            <div className='row'>
                <div className='col-3'>
                    <DepartamentList></DepartamentList>
                </div> 
            </div>
        );
    }
}