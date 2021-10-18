<template>
  <el-row>
    <el-row class="header">
      <el-col :span="4" class="logo">
        <div class="grid-content bg-purple">
          <img
              class="el-avatar"
              title="Logo"
              src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(2068).png"
              @click="onHomePage"
          >
        </div>
      </el-col>
      <el-col :span="14" class="nav">
        <div class="grid-content bg-purple">
          <h3>Nav</h3>
        </div>
      </el-col>
      <el-col :span="3" class="avatar">
        <div class="grid-content bg-purple-light">
          <img
              class="el-avatar"
              title="Ảnh đại diện"
              src="https://webcongnghe247.com/wp-content/uploads/2021/07/nh-dai-dien-FB-mac-dinh-nu-800x800.jpg"
              @click="onUserPage"
          >
        </div>
      </el-col>
      <el-col :span="3" class="logout">
        <button @click="logout">Đăng xuất</button>
      </el-col>
    </el-row>
    <el-row class="content">
      <router-view></router-view>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'AdminLayout',
  components: {

  },
  methods:{
    onUserPage(){
      this.$router.push({ name: 'User'})
    },
    logout(){
      this.$router.push({ name: 'Login'})
    },
    onHomePage(){
      this.$router.push({ name: 'Home'})
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  height: 50px;

  .logo{
    background-color: red;
    height: 50px;
  }
  .nav{
    background-color: #42b983;
    height: 50px;
  }
  .avatar{
    background-color: blue;
    height: 50px;
  }

  .logout{
    background-color: orange;
    height: 50px;
  }
}
.content{

}
</style>