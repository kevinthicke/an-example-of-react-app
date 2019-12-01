import { DepartmentModel } from '../../models/department';

export interface DepartmentState {
    departaments: DepartmentModel[],
    departmentActive: DepartmentModel,
    pending: boolean,
    error: any,
}