<template>
  <div class="contain">
    <el-table
      class="main"
      :data="tableData"
      style="width: 70%">
      <el-table-column prop="date" label=" 行业分类&简介" width="300"> </el-table-column>
      <el-table-column prop="name" label="在线咨询 (7*24小时)" width="300"> </el-table-column>
      <el-table-column prop="address" label="热线电话"> </el-table-column>
    </el-table>
    <el-button class="button" @click="handleBack" type="info">返回上一页</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '淘宝消费者',
        name: '在线咨询',
        address: '9510211'
      }, {
        date: '天猫消费者',
        name: '在线咨询',
        address: '0571-88157858'
      }, {
        date: '淘宝电影',
        name: '在线咨询',
        address: '400-860-8608'
      }, {
        date: '农资市场',
        name: '在线咨询',
        address: '400-843-2288'
      }]
    }
  },
  methods: {
    handleBack() {
      this.$router.push('/home')
    }
  },
}
</script>

<style lang="less">
.contain {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("../assets/image/connect.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .main {
    position: absolute;
    width: 700px;
    // height: 400px;
    // margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
  .button {
    position: absolute;
    top: 68%;
    left: 81%;
    transform: translate(-50%, -50%);
  }
}
</style>