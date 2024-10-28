import { createSlice } from '@reduxjs/toolkit';
import { initDataFilterCourse, initErrInfoCourse, initInfoCourse, initPaginationListCourse } from './initState';

const packageSlice = createSlice({
  name: 'package',
  initialState: {
    isLoadingCardPackages: false,
    isLoadingBtnCreateOrUpdate: false,
    isLoadingBtnDelete: false,
    visibleModalCreateOrUpdatePackage: false,
    visibleModalDeletePackage: false,

    packages: [],
    allCourse: [],
    giftPackage: null,
    classRegisterOfCourse: '',

    infoPackages: initInfoCourse,
    errorInfoPackages: initErrInfoCourse,

    dataFilter: initDataFilterCourse,
    paginationListCourse: initPaginationListCourse,
    configModalPackage: {
      title: '',
      type: '',
    },
  },
  reducers: {
    getListDataPackage: (state) => ({
      ...state,
      isLoadingCardPackages: true,
    }),
    getListDataPackageSuccess: (state, action) => ({
      ...state,
      isLoadingCardPackages: false,
      packages: action.payload.data.packages,
      paginationListCourse: {
        currentPage: action.payload.data.page,
        perPage: action.payload.data.per_page,
        totalRecord: action.payload.data.total,
      },
    }),
    getListDataPackageFailure: (state) => ({
      ...state,
      isLoadingCardPackages: false,
      packages: [],
    }),
    createPackage: (state) => ({
      ...state,
      isLoadingBtnCreateOrUpdate: true,
    }),
    createPackageSuccess: (state) => ({
      ...state,
      isLoadingBtnCreateOrUpdate: false,
    }),
    createPackageFailure: (state) => ({
      ...state,
      isLoadingBtnCreateOrUpdate: false,
    }),
    updatePackage: (state) => ({
      ...state,
      isLoadingBtnCreateOrUpdate: true,
    }),
    updatePackageSuccess: (state) => ({
      ...state,
      isLoadingBtnCreateOrUpdate: false,
    }),
    updatePackageFailure: (state) => ({
      ...state,
      isLoadingBtnCreateOrUpdate: false,
    }),
    deletePackage: (state) => ({
      ...state,
      isLoadingBtnDelete: true,
    }),
    deletePackageSuccess: (state) => ({
      ...state,
      isLoadingBtnDelete: false,
    }),
    deletePackageFailure: (state) => ({
      ...state,
      isLoadingBtnDelete: false,
    }),
    setShowModalCreateOrUpdatePackage: (state, action) => ({
      ...state,
      visibleModalCreateOrUpdatePackage: action.payload,
    }),
    setShowModalDeletePackage: (state, action) => ({
      ...state,
      visibleModalDeletePackage: action.payload,
    }),
    setConfigModalPackage: (state, action) => ({
      ...state,
      configModalPackage: action.payload,
    }),
    setInfoPackages: (state, action) => ({
      ...state,
      infoPackages: action.payload,
    }),
    setErrorInfoPackages: (state, action) => ({
      ...state,
      errorInfoPackages: action.payload,
    }),
    changeHighlightPackage: (state) => ({
      ...state,
    }),
    changeHighlightPackageSuccess: (state) => ({
      ...state,
    }),
    changeHighlightPackageFailure: (state) => ({
      ...state,
    }),

    //Thêm
    setDataFilterCourse: (state, action) => ({
      ...state,
      dataFilter: action.payload,
    }),

    getAllCourse: (state) => ({
      ...state,
      allCourse: [],
    }),
    getAllCourseSuccess: (state, action) => ({
      ...state,
      allCourse: action.payload.data.courses,
    }),
    getAllCourseFailure: (state) => ({
      ...state,
      allCourse: [],
    }),

    //Lớp học học viên chọn để học của khóa học muốn đki
    setClassRegisterOfCourse: (state, action) => ({
      ...state,
      classRegisterOfCourse: action.payload,
    }),
  },
});

export const {
  getListDataPackage,
  getListDataPackageSuccess,
  getListDataPackageFailure,
  createPackage,
  createPackageSuccess,
  createPackageFailure,
  updatePackage,
  updatePackageSuccess,
  updatePackageFailure,
  deletePackage,
  deletePackageSuccess,
  deletePackageFailure,
  setShowModalDeletePackage,
  setShowModalCreateOrUpdatePackage,
  setConfigModalPackage,
  setInfoPackages,
  setErrorInfoPackages,
  changeHighlightPackage,
  changeHighlightPackageSuccess,
  changeHighlightPackageFailure,

  //Thêm
  setDataFilterCourse,

  getAllCourse,
  getAllCourseSuccess,
  getAllCourseFailure,

  //Lớp học học viên chọn để học của khóa học muốn đki
  setClassRegisterOfCourse,
} = packageSlice.actions;

export default packageSlice.reducer;
