import DepartmentActionType from '../actions/index';
import { DepartmentState } from '../states/departmentState';
import { SET_DEPARTMENT_ACTIVE } from '../types/departmentActionTypes';

const initialState: DepartmentState = {
    departaments: [
        {
            id: 1,
            name: "Economía y contabilidad"
        },
        {
            id: 2,
            name: "Servicio técnico"
        },
        {
            id: 3,
            name: "Arquitectura de software"
        },
        {
            id: 4,
            name: "Desarrollo web"
        },
        {
            id: 5,
            name: "Diseño web"
        },
        {
            id: 6,
            name: "Marketing y publicidad"
        },
        {
            id: 7,
            name: "Recursos humanos"
        },
    ],
    departmentActive: {
        id: 1,
        name: "Economía y contabilidad"
    },
    pending: false,
    error: undefined
}

export default (state = initialState, action: DepartmentActionType): DepartmentState => {
    switch (action.type) { 
         case SET_DEPARTMENT_ACTIVE:
            return { ...state, departmentActive: action.payload }; 
        default: 
            return state;
    }

}