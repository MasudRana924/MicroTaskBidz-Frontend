import React from 'react';
import UserSidebar from './UserSidebar';
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;

    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="max-w-full mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 ">
                    <div className="lg:w-8/12 lg:mx-auto text-end  mb-5  ">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div className="lg:w-8/12 gap-2">

                        <div className="avatar mr-28">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="mt-12 w-3/4 mx-auto">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-base">Name</span>
                                </label>
                                <input type="text" placeholder={user.name} className="input input-bordered w-full max-w-xs text-black" value={user.name}/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-base">Email</span>
                                </label>
                                <input type="text" placeholder={user.email} className="input input-bordered w-full max-w-xs text-black" value={user.email}/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-base">Gender</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs text-black"/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-base">Date Of Birth</span>
                                </label>
                                <input type="date" placeholder="" className="input input-bordered w-full max-w-xs text-black"/>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default UserDetails;