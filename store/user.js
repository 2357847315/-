export const state = () => ({
    userInfo: {
        name:"血洗寡妇村",
        token:"",
        user:{}
    }
});
export const mutations = {
    // 設置用戶數據 
    setUserInfo(state,data){
        state.userInfo = data;
    },
    // 清楚用戶數據
    clearUserInfo(state){
        // 重置用戶數據
        state.userInfo = {
            token:"",
            user:{}
        }
    }
};

// 存放公共的异步的方法
export const actions = {
    login({commit},data){
        return this.$axios({
            url: "/accounts/login",
            method:"POST",
            data
        }).then(res => {
            commit("setUserInfo",res.data);

            Promise.resolve();
        })
    }
}