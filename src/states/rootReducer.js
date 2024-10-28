import appReducer from './modules/app/index.js';
import authReducer from './modules/auth/index.js';
import profileReducer from './modules/profile/index.js';
import homeSlice from './modules/home/index.js';
import packageSlice from './modules/package/index.js';
import userFeedbackSlice from './modules/userFeedback/index.js';
import orderSlice from './modules/order/index.js';
import configSlice from './modules/config/index.js';
import myCourseSlice from './modules/myCourse/index.js';
import detailsCourseSlice from './modules/package/detailsCourse/index.js';
import commentSlice from './modules/comment/index.js';
const rootReducer = {
  app: appReducer,
  home: homeSlice,
  auth: authReducer,
  profile: profileReducer,
  package: packageSlice,
  userFeedback: userFeedbackSlice,
  order: orderSlice,
  config: configSlice,
  myCourse: myCourseSlice,
  detailsCourse: detailsCourseSlice,
  comment: commentSlice,
}

export default rootReducer
