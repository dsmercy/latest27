import { create } from 'zustand'
import Services from "../services/Services";
import { devtools, persist } from 'zustand/middleware';

const useAccountStore = create(persist(devtools((set) => ({
    signedInUserData: null,
    jobSeekerData: null,
    signInUser: async (data) => {
        try {
            const userDetail = await Services.Account.userlogin(data);
            if (userDetail) {
                set((state) => ({
                    signedInUserData: userDetail, 
                }));
            }
            return userDetail;
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    getJobSeeker: async() => {
        try {
            const userDetail = await Services.Account.getJobSeeker();
            set(() => ({
                jobSeekerData: userDetail 
            }));
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    
    signOut: () => {
        set(() => ({ signedInUserData: null }));
        localStorage.removeItem('account');
        localStorage.removeItem('token');
        // navigate('/login');
    },
})), { name: 'account' }));


export default useAccountStore;