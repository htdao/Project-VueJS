<template>
  <div class="content">
    <LoginLayout/>
    <div class="main">
      <div>
        <h2 class="title">Đăng nhập</h2>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Email</div>
        <input type="text" v-model="email">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password" v-model="password">
      </div>
      <p @click="onRegister">Đăng ký tài khoản</p>
      <el-row>
        <button class="loginButton el-button el-button--primary el-button--mini is-plain" @click="handleLogin">Đăng nhập</button>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from "../api";
import {mapMutations} from 'vuex'
import LoginLayout from "../layouts/LoginLayout";
export default {
  name: 'Login',
  components: {
    LoginLayout
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    onRegister(){
      this.$router.push({ name: 'Register'})
    },
    ...mapMutations('auth', [
      'updateLoginStatus',
      'updateAuthUser',
      'updateAccessToken'
    ]),
    handleLogin(){
      api.login({
        email: this.email,
        password: this.password
      }).then((res) => {
        this.updateAccessToken(res.data.access_token)
        this.updateLoginStatus(true)
        this.$router.push({ name: 'Home'})
        this.$message({
          showClose: true,
          message: 'Đăng nhập thành công',
          type: 'success'
        });
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  background-image: url("../assets/anh-nen.jpg");
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  overflow:hidden;

  .main{
    margin: 200px auto;
    background: white;
    padding: 24px;
    height: 300px;
    width: 300px;

    .title{
      color: #0080dd;
    }

    .inputWrap {
      margin-bottom: 12px;

      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }

      input {
        width: 292px;
        height: 30px;
      }
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      background: #0080dd;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }
}

</style>