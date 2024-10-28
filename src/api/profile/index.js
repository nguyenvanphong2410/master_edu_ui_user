import callApi from "../callApi.js";
import {
  startRequestUpdateInformation, startRequestUpdateInformationFail, startRequestUpdateInformationSuccess,
  startRequestChangePassword, requestChangePasswordSuccess, requestChangePasswordFail
} from "../../states/modules/profile/index.js";
import _ from "lodash";

export const updateInformation = (data) => async (dispatch, getState) => {
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const dataInfo = _.cloneDeep(data);
  
  if (dataInfo.avatar !== 'delete' && typeof dataInfo.avatar === 'string') {
    delete dataInfo.avatar
  }
  return callApi({
    method: 'put',
    apiPath: `user/auth/me`,
    actionTypes: [startRequestUpdateInformation, startRequestUpdateInformationSuccess, startRequestUpdateInformationFail],
    variables: dataInfo,
    dispatch,
    getState,
    headers
  })
}

export const changePassword = (data) => async (dispatch, getState) => {
  return callApi({
    method: 'patch',
    apiPath: `user/auth/change-password`,
    actionTypes: [startRequestChangePassword, requestChangePasswordSuccess, requestChangePasswordFail],
    variables: {
      password: data.currentPassword,
      new_password: data.password
    },
    dispatch,
    getState
  })
}
