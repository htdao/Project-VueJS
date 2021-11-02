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
                <el-dropdown-item divided @click.native="dialogAddTag=true">
                  <i class="el-icon-plus"></i> Thêm thẻ
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
                  <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
                  <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
                <el-dropdown-item divided @click.native="dialogAddTag=true">
                  <i class="el-icon-plus"></i> Thêm thẻ
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
                <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
                <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
                <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
                <el-dropdown-item divided @click.native="dialogAddTag=true">
                  <i class="el-icon-plus"></i> Thêm thẻ
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
                  <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
                    <i class="el-icon-s-order" @click.native="dialogDetailTag=true"></i> Chi tiết
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
                  <el-dropdown-item divided @click.native="dialogDetailTag=true">
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
    <el-dialog
        title="Thêm thẻ"
        :visible.sync="dialogAddTag"
        width="30%">
      <div class="inputWarp">
        <label>Tiêu đề thẻ <span class="required">*</span></label>
        <el-input type="text" v-model="titleTag"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogAddTag = false">Huỷ</el-button>
      <el-button type="primary" @click="dialogAddTag = false">Thêm mới</el-button>
    </span>
    </el-dialog>
    <el-dialog
        title="Todo"
        :visible.sync="dialogDetailTag"
        width="60%"
        center>
      <el-row>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <div class="inputWarp">
              <label>Nhãn</label>
            </div>
            <div class="inputWarp">
              <label>Mô tả</label>
            </div>
            <div class="inputWarp">
              <label>Tệp đính kèm</label>
            </div>
            <div class="inputWarp">
              <label>Việc cần làm</label>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <el-menu>
              <el-menu-item index="1" @click="dialogTag=true">
                <i class="el-icon-menu"></i>
                <span>Nhãn</span>
              </el-menu-item>
              <el-menu-item index="2" @click="dialogWork=true">
                <i class="el-icon-menu"></i>
                <span>Việc cần làm</span>
              </el-menu-item>
              <el-menu-item index="3" @click="dialogDeadline=true">
                <i class="el-icon-document"></i>
                <span>Ngày</span>
              </el-menu-item>
              <el-menu-item index="4" @click="dialogFile=true">
                <i class="el-icon-setting"></i>
                <span>Đính kèm</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDetailTag = false">Huỷ</el-button>
        <el-button type="primary" @click="dialogDetailTag = false">Xác nhận</el-button>
      </span>
    </el-dialog>
    <el-dialog
        title="Nhãn"
        :visible.sync="dialogTag"
        width="30%">
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogTag = false">Huỷ</el-button>
      <el-button type="primary" @click="dialogTag = false">Xác nhận</el-button>
    </span>
    </el-dialog>
    <el-dialog
        title="Việc cần làm"
        :visible.sync="dialogWork"
        width="30%">
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogWork = false">Huỷ</el-button>
      <el-button type="primary" @click="dialogWork = false">Xác nhận</el-button>
    </span>
    </el-dialog>
    <el-dialog
        title="Ngày hết hạn"
        :visible.sync="dialogDeadline"
        width="30%">
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogDeadline = false">Huỷ</el-button>
      <el-button type="primary" @click="dialogDeadline = false">Xác nhận</el-button>
    </span>
    </el-dialog>
    <el-dialog
        title="Tệp đính kèm"
        :visible.sync="dialogFile"
        width="30%">
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFile = false">Huỷ</el-button>
      <el-button type="primary" @click="dialogFile = false">Xác nhận</el-button>
    </span>
    </el-dialog>
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
      titleTag: '',
      dialogAddTag: false,
      dialogDetailTag: false,
      dialogFile: false,
      dialogDeadline: false,
      dialogTag: false,
      dialogWork: false,
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
.inputWarp{
  margin: 20px 0;
}
</style>
