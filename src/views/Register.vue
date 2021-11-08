<template>
  <div class="content">
    <LoginLayout/>
    <div class="main">
      <div>
        <h3>Đăng Ký</h3>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Họ tên</div>
        <input type="text" v-model="name">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Email</div>
        <input type="text" v-model="email">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password" v-model="password">
      </div>
      <p @click="onLogin">Đăng nhập</p>
      <button class="loginButton" @click="handleRegister">Đăng ký</button>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: "Register",
  data(){
    return{
      email: '',
      name: '',
      password: '',
    }
  },
  methods:{
    onLogin(){
      this.$router.push({ name: 'Login'})
    },
    handleRegister(){
      api.register({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(() => {
        this.$message({
          showClose: true,
          message: 'Đăng ký thành công',
          type: 'success'
        });
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  background-image: url("../assets/background-login.jpg");
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
    height: 400px;
    width: 300px;

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