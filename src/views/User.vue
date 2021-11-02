<template>
  <div class="contain">
    <AdminLayout/>
    <el-row>
      <h2 style="text-align: center">Thông tin tài khoản</h2>
    </el-row>
      <div class="avatar">
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
      </div>
      <el-form status-icon ref="ruleForm" label-width="120px" class="demo-ruleForm form-update">
        <el-form-item label="Tên người dùng" prop="pass">
          <el-input type="text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Ảnh đại diện" prop="checkPass">
          <input type="file" @change="onFileChange" class="changeImg"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">Cập nhật</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import AdminLayout from "../layouts/AdminLayout";
export default {
  name: 'User',
  components: {
    AdminLayout
  },
  data(){
    return{
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWlyxzFm8V3X7sv_ekJfCTOiCRUO4KtX2yw&usqp=CAU",
    }
  },
  methods:{
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    }
  }

}
</script>

<style scoped lang="scss">
.contain{
  .avatar{
    height: 200px;
    width: 100%;

    #preview {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #preview img {
     height: 100%;
    }

  }

  .form-update{
    margin: 30px auto;
    width: 500px;
  }
}
</style>