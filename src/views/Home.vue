<template>
  <div class="homecover">
    <!-- 广告区域 -->
    <!-- <div class="header"></div> -->
    <!-- 顶部信息栏 -->
    <div class="topBanner">
      <!-- logo -->
      <span class="logo"></span>
      <!-- search检索 -->
      <div class="searchArea">
        <div class="searchInput">
          <el-input placeholder="请输入内容" v-model="name">
            <el-button slot="append" icon="el-icon-search" type="danger" v-on:click="toSearch()"></el-button>
          </el-input>
        </div>
        <div class="hotKey">
          <span class="hotHead">热门搜索：</span>
          <ul class="hotList">
            <li
              v-for="(item,index) in hotKeyList"
              v-bind:key="index"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- person -->
      <div class="banner_right">
        <div class="personInfo" v-on:click="toUserPage">
          <span class="userHead"></span>
        </div>
        <div class="to_shopCar" v-on:click="toShopCar"><span class="goodNum" v-if="dataList.length != 0">{{dataList.length}}</span></div>
        <div class="to_admin" v-on:click="toAdmin"></div>
        <div class="go_back" v-on:click="goBack"><i class="el-icon-refresh-left" v-on:click="goBack"></i></div>
      </div>
    </div>
    <!-- tab展开区域 -->
    <div class="slideBar">
      <div class="leftArea">
        <span
          class="leftItem"
          v-bind:class="index==slideIndex?'active':''"
          v-for="(item,index) in leftList"
          v-bind:key="index"
          v-on:click="chooseSlide(index, item)"
        >{{item}}</span>
      </div>
      <div class="rightArea">
        <!-- 内容区 -->
        <div class="itemCover">
          <div
            v-loading="loading"
            class="itemDetail"
            v-for="(item,index) in list1"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="itemImage" :style="{backgroundImage:'url('+item.image+')'}"></div>
            <div class="itemIntro">
              <span class="itemPrice">￥{{item.price}}</span>
              <span class="itemText">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐区 -->
    <div class="recommend">
      <span class="recommend_title">爆款推荐</span>
      <div class="recomment_content">
        <div class="item_cover">
          <div class="item_type">热卖</div>
          <div
            class="item_content"
            v-for="(item,index) in list2"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.image+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
        <!-- <div class="item_cover">
          <div class="item_type">AJ13</div>
          <div
            class="item_content"
            v-for="(item,index) in aj13"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <span class="recomment_name">{{item.name}}</span>
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div> -->
      </div>
      <span class="recommend_title">大牌云集</span>
      <div class="recomment_content">
        <div class="item_cover">
          <div class="item_type">手机</div>
          <div
            class="item_content"
            v-for="(item,index) in list3"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.image+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
        <div class="item_cover">
          <div class="item_type">笔记本</div>
          <div
            class="item_content"
            v-for="(item,index) in list4"
            v-bind:key="index"
            v-on:click="toDetail(item)"
          >
            <div class="item_image" :style="{backgroundImage:'url('+item.image+')'}"></div>
            <!-- 名字 -->
            <span class="recomment_name">{{item.name}}</span>
            <!-- 价格 -->
            <span class="recomment_price">￥{{item.price}}</span>
          </div>
        </div>
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
          <li v-on:click="toConnect()">关于我们</li>
          <i></i>
          <li v-on:click="toConnect()">联系我们</li>
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

<script>
export default {
  data() {
    return {
      // 搜索区域
      name: "",
      hotKeyList: ["电风扇", "电视", "小米手机", "乐视电视", "动漫周边"],
      hotKey: "",
      userName: "李嘉诚",
      // 侧栏展开区
      leftList: [
        "家用电器",
        "儿童玩具",
        "精美服装",
        "猎奇百货"
      ],
      slideIndex: 0,
      // rightList: [],
      rightValue: "",
      // 分页
      pageNum: 1, //初始页
      pageSize: 12,
      total: '',
      loading: true,
      // 数据
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      dataList: [],
    };
  },
  methods: {
    // 获取到点击的热键
    getKey: function(param) {
      this.hotKey = param;
    },
    toUserPage: function() {
      // 跳转到用户信息页
      console.log("跳转用户信息页...");
      this.$router.push("/person");
    },
    toShopCar: function(param) {
      this.$router.push("/shopCar");
    },
    toAdmin:function(param) {
      this.$router.push("/admin")
    },
    // 侧边栏点击
    async chooseSlide(index, item) {
      this.slideIndex = index
      const res = await this.$http.post('api/product/selectProductAndType', { type: index })
      const { data, code, message } = res.data
      if (code === 200) {
        this.list1 = data.list
      } else {
        this.$message.error(message)
      }
    },
    // 向后台请求侧边栏对应详情数据
    getSlideDetail: function(param) {
      // 侧边栏对应index，根据对应的index获取对应的数据
      var index = param;
      // 发起请求-》 获取数据
      // 根据返回的结果赋值 -> 赋值给this.rightList
    },
    // 分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val;
      this.pageNum = 1;
      this.getData()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.pageNum = val;
      this.getData()
    },
    // 跳转详情页
    toDetail: function(param) {
      this.$router.push("/GoodDetail");
      localStorage.removeItem("good");
      localStorage.setItem("good", JSON.stringify(param));
    },
    // 跳转搜索页
    toSearch() {
      if (this.name) {
        localStorage.removeItem("searchValue");
        localStorage.setItem("searchValue", JSON.stringify(this.name));
        this.$router.push("/search");
      } else {
        this.$message.warning("请输入搜索值");
      }
    },
    // 跳转到联系我们页面
    // 联系我们页面跳转
    toConnect() {
      this.$router.push('/connect')
    },
    goBack() {
      console.log('login')
      this.$router.push('/login')
    },
    // 获取数据
    async getData() {
      const page = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }
      // 发起请求---获取第一页的数据---赋值给rightList
      const res = await this.$http.get('api/product/list', page)
      console.log(res)
      const { data, code, message } = res.data
      if (code === 200) {
        this.$message.success(message)
        this.list1 = data.list1
        this.list2 = data.list2
        this.list3 = data.list3
        this.list4 = data.list4
        // this.pageNum = data.pageNum
        // this.pageSize = data.pageSize
        // this.total = data.total
        this.loading = false
      } else {
        this.$message.error(message)
      }
    }
  },
  beforeCreate() {
  }, 
  beforeMount: function() {
    this.getData()
    if (localStorage.getItem("goodList")) {
      this.dataList = JSON.parse(localStorage.getItem("goodList"));
      this.dataList.forEach(val => {
        val.choose = false;
      });
    } else {
      this.dataList = [];
    }
    // 发起请求，获取第一组数据，然后赋值
    // this.rightValue = this.leftList[0];
    // this.rightList = this.newValue;
  },
};
</script>

<style lang='less' scoped='' type='text/css'>
@import "../css/footer.less";
.homecover {
  width: 100%;
  background-color: #fff;
  position: relative;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 400px);
    height: 100px;
    padding: 0 200px;
    background-color: #000000;
    background-image: url("../assets/image/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .topBanner {
    width: calc(100% - 400px);
    padding: 0 200px;
    height: 80px;
    background-color: rgb(0, 0, 0);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    color: #fff;
    .logo {
      width: 14%;
      height: 80px;
      display: inline-block;
      background-image: url("../assets/image/logo.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
    }
    .searchArea {
      width: 500px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      .searchInput {
        width: 100%;
        height: 40%;
      }
      .hotKey {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        .hotHead {
          display: inline-block;
          color: #ff0000;
          font-weight: 400;
          font-size: 12px;
        }
        .hotList {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            display: inline-block;
            font-size: 12px;
            margin-right: 15px;
            cursor: pointer;
            &:hover {
              color: rgb(255, 0, 0);
            }
          }
        }
      }
    }
    .banner_right {
      width: 18%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      .personInfo {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        margin-right: 30px;
        .userHead {
          display: block;
          width: 100%;
          height: 100%;
          background-image: url("../assets/image/index_user.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .userTips {
          font-size: 14px;
          color: #a2a2a2;
          font-weight: 400;
        }
      }
      .to_shopCar {
        width: 100%;
        height: 100%;
        background-image: url("../assets/image/index_shopCar.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin-right: 30px;
        position: relative;
        .goodNum {
          display: block;
          padding: 0 5px;
          background-color: #f56c6c;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          position: absolute;
          right: -10px;
          top: 20px;
        }
      }
      
      .to_admin {
        width: 100%;
        height: 100%;
        background-image: url("../assets/image/project.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin-right: 30px;
      }
      .go_back {
        width: 100%;
        height: 100%;
        cursor: pointer;
        font-size: 30px;
        line-height: 80px;
      }
    }
  }
  .slideBar {
    width: calc(100% - 400px);
    padding: 0 200px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    .leftArea {
      width: 100%;
      height: 50px;
      padding: 0 0 0;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      .leftItem {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        background-color: #fff;
        color: #000;
        font-weight: 400;
        animation: show 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #818181;
          color: #fff;
        }
        &.active {
          background-color: #000000;
          color: #fff;
        }
      }
    }
    .rightArea {
      width: calc(100% - 2px);
      border: 1px solid #aaa;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .itemCover {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 0;
        .itemDetail {
          width: calc(21% - 2px);
          margin: 20px 2%;
          height: 150px;
          border: 1px solid #ccc;
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          &:hover {
            animation: show 0.3s ease-in-out;
            animation-fill-mode: forwards;
          }
          .itemImage {
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 100px;
            background-color: #fff;
            border-radius: 10px 10px 0 0;
          }
          .itemIntro {
            width: calc(100% - 20px);
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            padding: 0 10px;
            .itemText {
              width: 100%;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              color: #a2a2a2;
              text-align: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .itemPrice {
              width: 100%;
              height: 30px;
              line-height: 30px;
              font-size: 20px;
              color: #ff0000;
              font-weight: 100;
              text-align: left;
            }
          }
        }
      }
      .paging {
        width: 100%;
        height: 50px;
        position: relative;
        .el-pagination {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .recommend {
    width: calc(100% - 400px);
    background-color: #fff;
    padding: 10px 200px 50px;
    position: relative;
    .recommend_title {
      display: block;
      width: 100%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      color: rgb(14, 13, 13);
      border-radius: 1px;
      position: relative;
      font-weight: bold;
      margin: 50px 0;
      &::after {
        content: "";
        width: 45%;
        height: 2px;
        background: #000;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &::before {
        content: "";
        width: 45%;
        height: 2px;
        background: #000;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    .recomment_content {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      .item_cover {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        border-radius: 20px;
        .item_type {
          width: 160px;
          height: 180px;
          line-height: 180px;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          color: #fff;
          background-color: #000;
          text-shadow: 0 3px 3px rgb(250, 183, 0);
        }
        .item_content {
          width: 20%;
          height: 180px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 4px #ccc;
          border-radius: 20px;
          cursor: pointer;
          &:hover {
            animation: show 0.3s ease-in-out;
            animation-fill-mode: forwards;
          }
          .item_image {
            width: 100%;
            height: 120px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          .recomment_name {
            display: block;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            color: #aaa;
            text-align: center;
          }
          .recomment_price {
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 22px;
            line-height: 40px;
            color: #ff0000;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
    .shoes {
      .AJ1 {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        .AJ1_item {
          width: 18%;
          height: 100%;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
@keyframes show {
  0% {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: translateY(2px);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
  }
}
</style>
