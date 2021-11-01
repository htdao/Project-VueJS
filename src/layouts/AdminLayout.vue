<template>
  <el-row>
    <el-row class="header">
      <el-col :span="6">
        <div class="grid-content bg-purple">
<!--          <img-->
<!--              class="el-avatar"-->
<!--              title="Logo"-->
<!--              src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(2068).png"-->
<!--              @click="onHomePage"-->
<!--          >-->
          <h2 class="logo"><a>Daoha<i class="el-icon-finished"></i></a></h2>
          <el-button type="primary" plain class="btnAdd" @click="dialogAddTag=true"><i class="el-icon-plus"></i>Thêm mới</el-button>
        </div>
      </el-col>
      <el-col :span="16" class="nav">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :span="2" class="logout">
        <el-dropdown class="headerDropWrap">
          <img class="el-avatar el-avatar--medium el-avatar--circle avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWlyxzFm8V3X7sv_ekJfCTOiCRUO4KtX2yw&usqp=CAU" alt="">
          <el-dropdown-menu slot="dropdown" class="dropdown">
            <el-dropdown-item divided @click.native="onUserPage">
              Thông tin tài khoản
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              Đăng xuất
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-dialog
        title="Thêm thẻ"
        :visible.sync="dialogAddTag"
        width="30%"
        :before-close="addTag">
      <div class="inputWarp">
        <label>Tiêu đề thẻ <span class="required">*</span></label>
        <el-input type="text" v-model="titleTag"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogAddTag = false">Huỷ</el-button>
      <el-button type="primary" @click="dialogAddTag = false">Thêm mới</el-button>
    </span>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: 'AdminLayout',
  components: {

  },
  data(){
    return{
      dialogAddTag: false,
      titleTag: ''
    }
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
    },
    addTag(){

    }
  }
}
</script>

<style scoped lang="scss">
.header{
  text-align: center;
  height: 50px;
  background-color: #91aafa;

  .logo{
    height: 50px;
    color: white;
    font-family: "Lucida Console", "Courier New", monospace;
    width: 50%;
    float: left;
  }
  .btnAdd{
    width: 30%;
    float: right;
    margin-top: 5px;
    margin-right: 60px;
  }
  .nav{
    height: 50px;
  }
  .avatar{
    margin-top: 5px;
  }

  .logout{
    height: 50px;
  }
}
.content{

}
.required{
  color: red;
}
</style>