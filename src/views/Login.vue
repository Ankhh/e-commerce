<template>
  <div class="cover">
    <div class="right_cell">
      <div class="topBanner">
        <span class="bannerBtn" v-bind:class="{ active: isLogin }" v-on:click="chooseType">登录</span>
        <el-divider direction="vertical"></el-divider>
        <span class="bannerBtn" v-bind:class="{ active: !isLogin }" v-on:click="chooseType">注册</span>
      </div>
      <div class="bottomArea">
        <!-- 登录 -->
        <div v-if="isLogin" class="content">
          <el-form :label-position="labelPosition" label-width="80px" :model="loginMsg">
            <el-form-item label="用户名：">
              <el-input placeholder="请输入用户名" v-model="loginMsg.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input placeholder="请输入密码" v-model="loginMsg.password"></el-input>
            </el-form-item>
          </el-form>
          <div class="loginBtn" v-on:click="login">登录</div>
        </div>
        <!-- 注册 -->
        <div v-else class="content">
          <el-form :label-position="labelPosition" label-width="80px" :model="register">
            <el-form-item label="用户名：">
              <el-input placeholder="请输入用户名" v-model="register.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input placeholder="请输入密码" v-model="register.password"></el-input>
            </el-form-item>
            <el-form-item label="年龄：">
              <el-input placeholder="请输入密码" v-model="register.age"></el-input>
            </el-form-item>
            <el-form-item label="性别：">
              <el-input placeholder="请输入密码" v-model="register.sex"></el-input>
            </el-form-item>
            <!-- <el-form-item label="电话：">
              <el-input placeholder="请输入电话" v-model="register.tel"></el-input>
            </el-form-item> -->
          </el-form>
          <div class="loginBtn" v-on:click="toRegister">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      // 登录
      loginMsg: {
        username: "",
        password: ""
      },

      // 注册
      labelPosition: "left",
      register: {},
      isLogin: true
    };
  },
  methods: {
    // 选择tab
    chooseType: function(e) {
      e.target.innerText == "登录"
        ? (this.isLogin = true)
        : (this.isLogin = false);
      this.loginUername = "";
      this.loginPassword = "";
    },
    // 登录
    async login() {
      // console.log(this.loginMsg)
      const res = await this.$http.post("api/user/login", this.loginMsg)
      console.log(res)
      const { data, code, message } = res.data
      if (code === 200) {
        this.$message.success(message)
        console.log(data.id)
        localStorage.setItem('userId', data.id)
        this.$router.push('home')
      } else {
        this.$message.error(message)
      }
    },
    // 注册
    async toRegister() {
      // console.log(this.register);
      const res = await this.$http.post('api/user/add', this.register)
      // console.log(res)
      const { data, code, message } = res.data
      if (code === 200) {
        this.$message.success(message)
      } else {
        this.$message.error(message)
      }
    },
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
.cover {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/login_bg1.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  .right_cell {
    width: calc(30% - 100px);
    height: calc(50% - 60px);
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
    border-radius: 20px;
    padding: 20px 50px;
    .topBanner {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      .bannerBtn {
        font-size: 20px;
        color: #8a8a8a;
        cursor: pointer;
        &.active {
          color: #000;
          position: relative;
          &:after {
            content: "";
            width: 40px;
            height: 2px;
            border-radius: 1px;
            background-color: #000;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            animation: toshow 0.5s ease-in-out;
          }
        }
      }
    }
    .bottomArea {
      width: 100%;
      height: calc(100% - 150px);
      margin-top: 5%;
      .content {
        width: 100%;
        height: 120%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .el-form {
          width: 100%;
        }
        .loginBtn {
          width: 200px;
          height: 50px;
          line-height: 50px;
          background-color: rgb(6, 107, 240);
          border-radius: 20px;
          color: #f2f2f2;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
          margin-top: -10px;
        }
      }
    }
  }
}
@keyframes toshow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>