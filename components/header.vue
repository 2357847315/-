<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt>
        </nuxt-link>
      </div>

      <!-- 菜单 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 登录注册 -->
      <div class="header-right">
        <div v-if="$store.state.user.userInfo.token">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img
                :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                alt
              >
              {{$store.state.user.userInfo.name}}
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item><div @click="handleClick">退出</div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

               <div class="login-link" v-else>
                    <nuxt-link to="/user/login"> 登录 / 注册</nuxt-link>
                </div>
      </div>
    </el-row>
  </div>
</template>
  

<script>
export default {
  mounted(){},
  methods:{
    handleClick(){
      //  清楚本地數據
      this.$store.commit("user/clearUserInfo");
      this.$message.success("推出成功")
    }
  }
};
</script>



<style lang="less" scoped>
.header {
  height: 66px;
  line-height: 66px;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 2px 2px #eee;
  .main {
    margin: 0 auto;
    width: 1000px;
  }

  .navs {
    flex: 1;
    a {
      display: block;
      padding: 0 20px;
      height: 66px;
      &:hover {
        color: #409eff;
        border-bottom: 5px #409eff solid;
      }
      &:active {
        background: #409eff;
        color: #fff;
      }
    }
    // 高亮的样式
    .nuxt-link-exact-active {
      background: #409eff;
      color: #fff !important;
    }
  }
  .el-dropdown-link {
    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border: 2px #fff solid;
      border-radius: 50px;
    }
  }
}
</style>

