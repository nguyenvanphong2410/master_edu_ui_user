import { getAllTeacher, getAllTeacherFailure, getAllTeacherSuccess } from "@/states/modules/teacher";
import callApi from "../callApi";

export const requestGetAllTeachers = () => async (dispatch, getState) => {
  return callApi({
    method: 'get',
    apiPath: '/admin-management/teacher/all',
    actionTypes: [  getAllTeacher,
      getAllTeacherSuccess,
      getAllTeacherFailure],
    variables: {},
    dispatch,
    getState,
  });
};
