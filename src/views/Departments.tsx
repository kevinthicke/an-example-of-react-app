import React, { Component } from 'react';
import { IDepartment } from '../models/department';
import DepartamentList from '../components/departmentList/DepartamentList';

interface IDepartmentsState {
    departments: IDepartment[]
}

export default class Departments extends Component<{ }, IDepartmentsState>{
    
    constructor(props: {}) {
        super(props);

        this.state = { 
            departments: []
        };
    }   

    componentDidMount(): void {
        fetch('http://localhost:3001/departments')
        .then(response => response.json())
        .then(data => {
            this.setState({ departments: data });
        });
    }

    handleLoadDepartmentInfo(department: IDepartment): void {
        console.log(department);
    }
    
    render() {
        return (
            <div className='row'>
                <div className='col-3'>
                    <DepartamentList 
                    loadDepartmentInfo={this.handleLoadDepartmentInfo}
                    departments={this.state.departments}>
                    </DepartamentList>
                </div>
            </div>
        );
    }
}