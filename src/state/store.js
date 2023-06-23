import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { loginReducer } from "./user/Login";
import  signUpSlice  from "./user/signupSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import doctorsSlice from "./doctor/doctorsSlice";
import doctorSlice from "./doctor/doctorSlice";
import reviewSlice from "./doctor/reviewSlice";
import relatedDoctorsSlice from "./relatedDoctor/relatedDoctorSlice";
import  filterdoctorsSlice  from "./filter/filterSlice";
import appointmentsSlice from "./appointments/appointmentsSlice";
import myAppointmentsSlice from "./user/appointment/myAppointmentsSlice";
import updateProfileSlice from "./user/updateprofile/updateProfileSlice";
import updatePasswordSlice from './user/changePassword/updatePasswordSlice'
import forgotPasswordSlice from "./user/forgotpassword/forgotPasswordSlice";
import resetPasswordSlice from "./user/forgotpassword/resetPasswordSlice";
import  adminAllAppointmentsSlice  from "./admin/AdminAppointmentSlices";
import adminAllDoctorsSlice  from "./admin/AdminDoctorsSlice";
import  adminAllUsersSlice  from "./admin/AllUsersSlice";
import  filternursesSlice  from "./nurses/nursesSlices";
import  nurseSlice  from "./nurses/nursSlice";
import NurseReviewsSlice from "./nurses/NurseReviewsSlice";
import hireNursesSlice from './nurses/hireNurseSlice'
import myHireNurseSlice from "./user/hirenurse/myHireNurseSlice";
import  adminAllNursesSlice  from "./admin/AllNursesSlices";
import adminAllHiredNursessSlice  from "./admin/AllHiredNursesSlice";
import  updateAppointmentSlice  from "./admin/update/updateAppointmentsSlice";
import   fetchSingleAppointmentsSlice from "./admin/SingleAppointmentSlice";
import createDoctorsSlice from "./admin/create/createDoctorsSlice";
import  updateDoctorSlice  from "./admin/update/updateDoctorsSlice";
import createNursesSlice from './admin/create/createNurseSlice'
import updateNurseSlice from "./admin/update/updateNurseSlice";
import deleteUsersSlice from './admin/delete/useDeleteSlice'
import updateAvatarSlice from "./user/updateprofile/updateAvatarSlice";
import filterSlice from "./filter/filterReducer";
import categorySlice from "./category/categorySlice";
import feesSlice from "./category/feesSlice";
import  gendersSlice  from "./category/genderSlice";
import ratingsSlice from "./category/ratingsSlice";
import  doctorsignUpSlice  from "./doctors/doctorsignupSlice";
import updateLogoutSlice from './user/Login/logOutSlice'
import statusSlice from "./category/statusSlice";

const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  userDetails: persistedReducer,
  signup: signUpSlice,
  doctors: doctorsSlice,
  doctor:doctorSlice,
  reviews:reviewSlice,
  relatedDoctors:relatedDoctorsSlice,
  filterDoctors:filterdoctorsSlice,
  appointments:appointmentsSlice,
  myAppointments:myAppointmentsSlice,
  updateProfile:updateProfileSlice,
  updatePassword:updatePasswordSlice,
  forgotpassword:forgotPasswordSlice,
  resetPassword:resetPasswordSlice,
  allAppointments:adminAllAppointmentsSlice,
  allDoctors:adminAllDoctorsSlice,
  allUsers:adminAllUsersSlice,
  filterNurses:filternursesSlice,
  nurse:nurseSlice,
  nursesReviews:NurseReviewsSlice,
  hireNurses:hireNursesSlice,
  myHireNurses:myHireNurseSlice,
  allNurses:adminAllNursesSlice,
  allhiredNurses:adminAllHiredNursessSlice,
  singleAppointments:fetchSingleAppointmentsSlice,
  updateAppointments:updateAppointmentSlice,
  createDoctors:createDoctorsSlice,
  updateDoctor:updateDoctorSlice,
  createNurse:createNursesSlice,
  updateNurse:updateNurseSlice,
  deleteUser:deleteUsersSlice,
  updateAvatar:updateAvatarSlice,
  filter:filterSlice,
  categories:categorySlice,
  fees:feesSlice,
  genders:gendersSlice,
  ratings:ratingsSlice,
  status:statusSlice,
  doctorsignup:doctorsignUpSlice,
  logout:updateLogoutSlice

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);