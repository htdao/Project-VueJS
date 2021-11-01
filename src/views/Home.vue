<template>
  <div class="container">
    <AdminLayout/>
    <div>
      <el-row>
        <h3 class="title">TodoList Lorem Ipsum is simply dummy text of the printing and typesetting industry...</h3>
      </el-row>
      <el-row class="contain">
        <div class="todo-list">
          <el-row class="todo-header">
            <h3 class="title">Todo</h3>
            <el-dropdown class="menu">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item divided>
                  <i class="el-icon-s-order"></i> Chi tiết
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteTag">
                  <i class="el-icon-delete"></i> Xoá
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
          <div class="todo-item">
            <el-row>
              <div class="tag">
                <el-tag effect="dark">Tag 1</el-tag>
              </div>
              <el-dropdown class="drop-down">
                <i class="el-icon-edit"></i>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-dropdown-item divided>
                    <i class="el-icon-s-order"></i> Chi tiết
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="deleteTag">
                    <i class="el-icon-delete"></i> Xoá
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
            <div class="todo-title">Title 1</div>
            <el-row>
              <el-tag type="danger"><i class="el-icon-alarm-clock"></i> 2 tháng 11</el-tag>
              <el-checkbox v-model="checked" class="checkbox">2/6</el-checkbox>
            </el-row>
          </div>
          <div class="todo-item">
            <el-row>
              <div class="tag">
                <el-tag effect="dark" type="warning">Tag 2</el-tag>
              </div>
              <el-dropdown class="drop-down">
                <i class="el-icon-edit"></i>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-dropdown-item divided>
                    <i class="el-icon-s-order"></i> Chi tiết
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="deleteTag">
                    <i class="el-icon-delete"></i> Xoá
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
            <div class="todo-title">Title 2</div>
            <el-row>
              <el-tag type="success"><i class="el-icon-alarm-clock"></i> 1 tháng 11</el-tag>
              <el-checkbox v-model="checked" class="checkbox">6/6</el-checkbox>
            </el-row>
          </div>
          <div>
            <el-button class="btnAddTag"><i class="el-icon-plus"></i> Thêm thẻ</el-button>
          </div>
        </div>

        <div class="todo-list2">
          <el-row class="todo-header">
            <h3 class="title">Doing</h3>
            <el-dropdown class="menu">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item divided>
                  <i class="el-icon-s-order"></i> Chi tiết
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteTag">
                  <i class="el-icon-delete"></i> Xoá
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        <div class="todo-item">
          <el-row>
            <div class="tag">
              <el-tag effect="dark">Tag 1</el-tag>
            </div>
            <el-dropdown class="drop-down">
              <i class="el-icon-edit"></i>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item divided>
                  <i class="el-icon-s-order"></i> Chi tiết
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteTag">
                  <i class="el-icon-delete"></i> Xoá
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
          <div class="todo-title">Title 1</div>
          <el-row>
            <el-tag type="danger"><i class="el-icon-alarm-clock"></i> 2 tháng 11</el-tag>
            <el-checkbox v-model="checked" class="checkbox">2/6</el-checkbox>
          </el-row>
        </div>

        <div class="todo-item">
          <el-row>
            <div class="tag">
              <el-tag effect="dark" type="warning">Tag 2</el-tag>
            </div>
            <el-dropdown class="drop-down">
              <i class="el-icon-edit"></i>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item divided>
                  <i class="el-icon-s-order"></i> Chi tiết
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteTag">
                  <i class="el-icon-delete"></i> Xoá
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
          <div class="todo-title">Title 2</div>
          <el-row>
            <el-tag type="success"><i class="el-icon-alarm-clock"></i> 1 tháng 11</el-tag>
            <el-checkbox v-model="checked" class="checkbox">6/6</el-checkbox>
          </el-row>
        </div>

        <div class="todo-item">
          <el-row>
            <div class="tag">
              <el-tag effect="dark" type="warning">Tag 3</el-tag>
            </div>
            <el-dropdown class="drop-down">
              <i class="el-icon-edit"></i>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item divided>
                  <i class="el-icon-s-order"></i> Chi tiết
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteTag">
                  <i class="el-icon-delete"></i> Xoá
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
          <div class="todo-title">Title 3</div>
          <el-row>
            <el-tag type="success"><i class="el-icon-alarm-clock"></i> 1 tháng 11</el-tag>
            <el-checkbox v-model="checked" class="checkbox">6/6</el-checkbox>
          </el-row>
        </div>
          <div>
            <el-button class="btnAddTag"><i class="el-icon-plus"></i> Thêm thẻ</el-button>
          </div>
      </div>

        <div class="todo-list3">
          <el-row class="todo-header">
            <h3 class="title">Done</h3>
            <el-dropdown class="menu">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown" class="dropdown">
                <el-dropdown-item divided>
                  <i class="el-icon-s-order"></i> Chi tiết
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteTag">
                  <i class="el-icon-delete"></i> Xoá
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
          <div class="todo-item">
            <el-row>
              <div class="tag">
                <el-tag effect="dark">Tag 1</el-tag>
              </div>
              <el-dropdown class="drop-down">
                <i class="el-icon-edit"></i>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-dropdown-item divided>
                    <i class="el-icon-s-order"></i> Chi tiết
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="deleteTag">
                    <i class="el-icon-delete"></i> Xoá
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
            <div class="todo-title">Title 1</div>
            <el-row>
              <el-tag type="danger"><i class="el-icon-alarm-clock"></i> 2 tháng 11</el-tag>
              <el-checkbox v-model="checked" class="checkbox">2/6</el-checkbox>
            </el-row>
          </div>

          <div class="todo-item">
            <el-row>
              <div class="tag">
                <el-tag effect="dark" type="warning">Tag 2</el-tag>
              </div>
              <el-dropdown class="drop-down">
                <i class="el-icon-edit"></i>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-dropdown-item divided>
                    <i class="el-icon-s-order"></i> Chi tiết
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="deleteTag">
                    <i class="el-icon-delete"></i> Xoá
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
            <div class="todo-title">Title 2</div>
            <el-row>
              <el-tag type="success"><i class="el-icon-alarm-clock"></i> 1 tháng 11</el-tag>
              <el-checkbox v-model="checked" class="checkbox">6/6</el-checkbox>
            </el-row>
          </div>

          <div class="todo-item">
            <el-row>
              <div class="tag">
                <el-tag effect="dark" type="danger">Tag 3</el-tag>
              </div>
              <el-dropdown class="drop-down">
                <i class="el-icon-edit"></i>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-dropdown-item divided>
                    <i class="el-icon-s-order"></i> Chi tiết
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="deleteTag">
                    <i class="el-icon-delete"></i> Xoá
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
            <div class="todo-title">Title 3</div>
            <el-row>
              <el-tag type="success"><i class="el-icon-alarm-clock"></i> 1 tháng 11</el-tag>
              <el-checkbox v-model="checked" class="checkbox">6/6</el-checkbox>
            </el-row>
          </div>
          <div>
            <el-button class="btnAddTag"><i class="el-icon-plus"></i> Thêm thẻ</el-button>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
import AdminLayout from "../layouts/AdminLayout";
export default {
  name: 'Home',
  components: {
    AdminLayout
  },
  data(){
    return{
      checked: false,

    }
  },
  methods:{
    deleteTag(){
      this.$confirm('Dữ liệu không thể khôi phục. Tiếp tục?', 'Cảnh báo', {
        confirmButtonText: 'Xoá',
        cancelButtonText: 'Huỷ',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Xoá thành công'
        });
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  background-image: url("../assets/back.jpg");
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  left:0;

  .title{
    text-align: left;
    padding-left: 20px;
  }

  .contain{
    padding: 0 20px;
    width: 100%;

    .todo-list{
      padding: 10px;
      margin: 0 10px;
      width: 20%;
      background-color: #f6f8fc;
      border-radius: 5px;
      border-top: 5px solid #d77bb7;
      float: left;

      .todo-header{
        width: 100%;

        .title{
          width: 70%;
          float: left;
        }

        .menu{
          width: 20%;
          float: right;
        }
      }

      .todo-item{
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        border: 2px solid #f1f3f8;

        .todo-title{
          padding: 10px 0;
        }

        .tag{
          width: 90%;
          float: left;
        }

        .drop-down{
          width: 10%;
          float: right;
        }

        .checkbox{
          margin-left: 10px;
        }
      }

      .btnAddTag{
        border: none;
        background-color: #f6f8fc;
      }
    }

    .todo-list2{
      margin: 0 10px;
      float: left;
      padding: 10px;
      width: 20%;
      background-color: #f6f8fc;
      border-radius: 5px;
      border-top: 5px solid #de7698;
      float: left;

      .todo-header{
        width: 100%;

        .title{
          width: 70%;
          float: left;
        }

        .menu{
          width: 20%;
          float: right;
        }
      }

      .todo-item{
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        border: 2px solid #f1f3f8;

        .todo-title{
          padding: 10px 0;
        }

        .checkbox{
          margin-left: 10px;
        }

        .tag{
          width: 90%;
          float: left;
        }

        .drop-down{
          width: 10%;
          float: right;
        }
      }

      .btnAddTag{
        border: none;
        background-color: #f6f8fc;
      }
    }

    .todo-list3{
      margin: 0 10px;
      float: left;
      padding: 10px;
      width: 20%;
      background-color: #f6f8fc;
      border-radius: 5px;
      border-top: 5px solid #81d6b2;
      float: left;

      .todo-header{
        width: 100%;

        .title{
          width: 70%;
          float: left;
        }

        .menu{
          width: 20%;
          float: right;
        }
      }

      .todo-item{
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        border: 2px solid #f1f3f8;

        .todo-title{
          padding: 10px 0;
        }

        .checkbox{
          margin-left: 10px;
        }

        .tag{
          width: 90%;
          float: left;
        }

        .drop-down{
          width: 10%;
          float: right;
        }
      }

      .btnAddTag{
        border: none;
        background-color: #f6f8fc;
      }
    }
  }
}
</style>
