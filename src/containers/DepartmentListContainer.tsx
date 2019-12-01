import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import DepartmentList from '../components/departmentList/DepartamentList';
import { DepartmentModel } from '../models/department';
import { setActiveDepartmentAction } from '../store/actions/departmentAction';
import DepartmentActionType from '../store/actions/index';
import { AppState } from '../store/states/index';


interface IDepartmentListContainerProps {
    departments: DepartmentModel[],
    activeDepartment: DepartmentModel,
    setActiveDepartment: (department: DepartmentModel) => void;
}

interface IDepartmentListContainerState {
    departmentsFiltered: DepartmentModel[]
}



class DepartmentListContainer extends Component <IDepartmentListContainerProps, IDepartmentListContainerState> {

    constructor(props: IDepartmentListContainerProps) {
        super(props);

        this.state = {
            departmentsFiltered: this.props.departments
        }

        this.handleSelectDepartment = this.handleSelectDepartment.bind(this);
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    } 
    
    handleSelectDepartment(department: DepartmentModel): void {
        this.props.setActiveDepartment(department);
    }

    handleInputOnChange(searchValue: string): void {

        const departmentsFiltered = this.props
                                        .departments
                                        .filter(department => department.name.includes(searchValue));
        this.setState({ departmentsFiltered });
    }

    render() {

        const { departmentsFiltered } = this.state;
        const { activeDepartment } = this.props;

        return (
            <DepartmentList 
            departments={departmentsFiltered}
            activeDepartment={activeDepartment}
            onChangeInputForm={this.handleInputOnChange} 
            selectDepartment={this.handleSelectDepartment}
            />
        );
    }
}

const mapStateToProps = ({ department }: AppState) => ({ 
    departments: department.departaments,
    activeDepartment: department.activeDepartment
});

const mapDispatchToProps = (dispatch: Dispatch<DepartmentActionType>) => ({
    setActiveDepartment: (department: DepartmentModel) => dispatch(setActiveDepartmentAction(department))
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListContainer);