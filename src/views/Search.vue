<template>
  <div class="cover">
    <!-- 顶部导航栏 -->
    <div class="topBanner">
      <div class="topLeft">
        <span class="logo"></span>
        <span class="toIndex" v-on:click="toHome">首页</span>
      </div>
      <div class="topRight">
        <span class="toUser" v-on:click="toPerson"></span>
        <span class="toShopCar"></span>
      </div>
    </div>
    <div class="content_search">
      <el-input placeholder="页内搜索..." v-model="newSearch" class="input-with-select" @input="change">
        <el-button slot="append" icon="el-icon-search" :disabled="hasValue" v-on:click="toSearch"></el-button>
      </el-input>
    </div>
    <!-- 内容展示区 -->
    <div class="contentArea">
      <!-- 有数据 -->
      <div class="data_has" v-if="hasData">
        <div class="data_item" v-for="(item,index) in dataList" v-bind:key="index">
          <div class="item_img" :style="{backgroundImage:'url('+item.image+')'}"></div>
          <div class="item_msg">
            <span class="item_name">{{item.name}}</span>
            <span class="item_price">￥{{item.price}}</span>
            <div class="handleArea">
              <span class="btn_detail" v-on:click="lookDetail(item)">查看详情</span>
              <span class="btn_shop">加入购物车</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 数据为空 -->
      <div class="data_empty" v-else>
        <span class="empty_tips">很抱歉，未检索到相关数据...</span>
      </div>
    </div>
    <!-- 底栏 -->
    <div class="footer">
      <ul class="JD_banner">
        <li>
          <span class="icon_JD one"></span>
          <span class="text_JD">品类齐全，轻松购物</span>
        </li>
        <li>
          <span class="icon_JD two"></span>
          <span class="text_JD">多仓直发，极速配送</span>
        </li>
        <li>
          <span class="icon_JD three"></span>
          <span class="text_JD">正品行货，精致服务</span>
        </li>
        <li>
          <span class="icon_JD four"></span>
          <span class="text_JD">天天低价，畅选无忧</span>
        </li>
      </ul>
      <div class="bottomPart">
        <ul class="bottom_list">
          <li>关于我们</li>
          <i></i>
          <li>联系我们</li>
          <i></i>
          <li>联系客服</li>
          <i></i>
          <li>合作招商</li>
          <i></i>
          <li>商家帮助</li>
          <i></i>
          <li>营销中心</li>
          <i></i>
          <li>手机京东</li>
          <i></i>
          <li>友情链接</li>
          <i></i>
          <li>销售联盟</li>
          <i></i>
          <li>京东社区</li>
          <i></i>
          <li>风险监测</li>
          <i></i>
          <li>隐私政策</li>
          <i></i>
          <li>京东公益</li>
          <i></i>
          <li>English Site</li>
        </ul>
        <ul class="bottom_list2">
          <li>
            <span>京公网安备11000002000088号</span>
            <span>京CP证070359号</span>
            <span>互联网药品信息服务资格证编号(京)-经营性-2014-0008</span>
            <span>新出发京季字第大120007号</span>
          </li>
          <li>
            <span>互联网出版许可证编号新出网证(京)字150号</span>
            <span>出版物经营许可证</span>
            <span>网络文化经营许可证京网文(2014)2148-348号</span>
            <span>违法和不良信息举报电话:4006561155</span>
          </li>
          <li>
            <span>CopyrightC2004-2019京东JD.com版权所有</span>
            <span>消费者维权热线:40060</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      searchValue: "",
      hasData: false,
      dataList: [],
      newSearch: "",
      sortIndex: 0,
      hasSearch: true,
      // 搜索
      hasValue: true
    };
  },
  methods: {
    // 回到首页
    toHome: function(params) {
      this.$router.push("/home");
    },
    // 跳转到用户信息页
    toPerson: function(params) {
      this.$router.push("/person");
    },
    // 跳转详情
    lookDetail: function(param) {
      console.log(param);
      this.$router.push("/GoodDetail");
      localStorage.removeItem("good");
      localStorage.setItem("good", JSON.stringify(param));
    },
    sortChoose: function(e) {
      const keyWord = e.target.id;
      if (keyWord == "base") {
        this.sortIndex = 0;
      } else if (keyWord == "price") {
        this.sortIndex = 1;
      } else {
        this.sortIndex = 2;
      }
    },
    // 分页
    handleSizeChange: function(pageSize) {
      console.log(pageSize);
    },
    handleCurrentChange: function(pageNum) {
      console.log(pageNum);
    },
    // 搜索
    async toSearch() {
      this.sortIndex = 0;
      const keyWord = this.newSearch;
      this.pageNum = 1;
      this.hasSearch = false;
      this.$nextTick(() => {
        this.hasSearch = true;
      });
      // 发起请求-重新赋值
      localStorage.removeItem("searchValue");
      const datas = {
        name: this.newSearch,
        pageNum: 1,
        pageSize: 10,
      }
      const res = await this.$http.post('api/product/selectProductAndType', datas)
      const { data, code, message } = res.data
      if (code === 200) {
        this.hasData = true
        this.dataList = data.list
        this.loading = false
        this.$message.success(message)
      } else {
        this.$message.error(message)
      }
    },
    // 控制搜索按钮的开启和禁用
    change: function(param) {
      if (param) {
        this.hasValue = false;
      } else {
        this.hasValue = true;
      }
    },
    // 获取Home组件search内容
    async getSearchData() {
      this.searchValue = JSON.parse(localStorage.getItem("searchValue"));
      const datas = {
        name: this.searchValue,
        pageNum: 1,
        pageSize: 10,
      }
      const res = await this.$http.post('api/product/selectProductAndType', datas)
      const { data, code, message } = res.data
      if (code === 200) {
        this.hasData = true
        this.dataList = data.list
        this.loading = false
      } else {
        this.$message.error(message)
      }
    }
  },
  beforeCreate() {},
  beforeMount() {
    this.searchValue = JSON.parse(localStorage.getItem("searchValue"))
    if (this.searchValue) {
      console.log('检索')
      this.getSearchData()
    } else {
      console.log('查找')
    }
  }
};
</script>

<style lang='less' scoped='' type='text/css'>
@import "../css/footer.less";
@import "../css/topBanner.less";
.cover {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .content_search {
    width: calc(100% -400px);
    padding: 10px 200px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    .el-input {
      width: 400px;
    }
    .sortArea {
      width: 400px;
      padding: 10px 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      color: #a5a5a5;
      .sortBtn {
        display: block;
        width: 100px;
        cursor: pointer;
        &:hover {
          color: #000;
          font-weight: bold;
        }
        &.active {
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
  .contentArea {
    width: calc(100% - 400px);
    min-height: calc(100% - 390px);
    margin: 0 200px;
    position: relative;
    .data_has {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .data_item {
        // flex: 3;
        width: 30%;
        height: 300px;
        background-color: #fff;
        margin-bottom: 50px;
        border: 2px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        transition: all 0.3s;
        cursor: pointer;
        padding-left: 1%;
        padding-right: 1%;
        .item_img {
          width: 48%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .item_msg {
          width: 45%;
          height: 300px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: flex-start;
          .item_name {
            font-size: 20px;
            margin-top: 30px;
            width: 170px;
            font-size: 20px;
            margin-top: 30px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; 
          }
          .item_price {
            font-size: 20px;
            font-weight: bold;
            margin: 20px 0;
            color: rgb(255, 60, 0);
          }
          .handleArea {
            width: 100%;
            margin: 20px 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            .btn_detail {
              width: 150px;
              padding: 10px;
              border: 2px solid #000;
              color: #000;
              font-size: 16px;
              margin-bottom: 20px;
              cursor: pointer;
              transition: all 0.3s;
              &:hover {
                color: #fff;
                background-color: #000;
              }
            }
            .btn_shop {
              width: 150px;
              padding: 10px;
              border: 2px solid #000;
              color: #fff;
              font-size: 16px;
              background-color: #000;
              cursor: pointer;
            }
          }
        }
        &:hover {
          box-shadow: 0px 7px 7px rgb(126, 126, 126);
          transform: translateY(-2px);
        }
      }
    }
    .data_empty {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("../assets/image/data_empty.png");
      background-size: 300px 200px;
      background-position: center;
      background-repeat: no-repeat;
      .empty_tips {
        display: block;
        width: 100%;
        height: 30px;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #a5a5a5;
        position: absolute;
        bottom: 20%;
      }
    }
  }
}
</style>