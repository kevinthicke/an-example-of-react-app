import { DepartmentModel } from '../../models/department';

export interface DepartmentState {
    departaments: DepartmentModel[],
    activeDepartment: DepartmentModel,
    pending: boolean,
    error: any,
}