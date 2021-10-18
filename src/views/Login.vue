<template>
  <div class="content">
    <LoginLayout/>
    <div class="main">
      <div>
        <h3>Đăng nhập</h3>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Tên đăng nhập</div>
        <input type="text">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password">
      </div>
      <p @click="onRegister">Đăng ký tài khoản</p>
      <button class="loginButton" @click="onHomePage">Đăng nhập</button>
    </div>
  </div>
</template>

<script>
import LoginLayout from "../layouts/LoginLayout";
export default {
  name: 'Login',
  components: {
    LoginLayout
  },
  methods:{
    onRegister(){
      this.$router.push({ name: 'Register'})
    },
    onHomePage(){
      this.$router.push({ name: 'Home'})
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  .main{
    margin: 0 auto;
    background: #f5f5f5;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
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