<template>
  <div class="contain">
    <AdminLayout/>
      <div class="avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWlyxzFm8V3X7sv_ekJfCTOiCRUO4KtX2yw&usqp=CAU" alt="">
      </div>
  </div>
</template>

<script>
import AdminLayout from "../layouts/AdminLayout";
export default {
  name: 'User',
  components: {
    AdminLayout
  },
}
</script>

<style scoped lang="scss">
.contain{
  .avatar{
    height: 200px;
    width: 100%;

    img{
      height: 100%;
      margin: 0 45%;
    }
  }
}
</style>