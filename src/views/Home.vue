<template>
  <div>
    <AdminLayout/>
    <div>
      <el-row>
        <el-col :span="8">
          <SideBar></SideBar>
        </el-col>
        <el-col :span="16">
          <ListTask></ListTask>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import AdminLayout from "../layouts/AdminLayout";
import SideBar from "../components/Home/SideBar";
import ListTask from "../components/Home/ListTask";
export default {
  name: 'Home',
  components: {
    ListTask,
    SideBar,
    AdminLayout
  },
}
</script>

<style scoped lang="scss">

</style>
