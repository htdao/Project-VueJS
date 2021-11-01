<template>
  <div class="content">
    <LoginLayout/>
    <div class="main">
      <div>
        <h3>Đăng Ký</h3>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Email</div>
        <input type="text">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password">
      </div>
      <p @click="onLogin">Đăng nhập</p>
      <button class="loginButton">Đăng ký</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods:{
    onLogin(){
      this.$router.push({ name: 'Login'})
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
    height: 300px;
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