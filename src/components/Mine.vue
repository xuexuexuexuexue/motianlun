<template>
	   <div class="userCenter-page">
    <div class="user-header">
      <div class="back-icon" @click="back"></div>
      <div class="header-text">个人中心</div>
    </div>
    <router-link to="/personal">
      <div class="user-profile" >
        <div class="user-icon" >
          <img src="../assets/tou.png">
        </div>
        <div class="phonenum">15712937752</div>
        <div class="user-arow"></div>
      </div>
    </router-link>
    <div class="my-orders">
      <router-link to="/myorder">
        <div class="shortcut-nav">
          <div class="left">我的订单</div>
          <div class="right">查看所有订单</div>
          <div class="user-arow"></div>
        </div>
      </router-link>
      <div class="status-orders">
         <router-link to="/myorder">
        <div class="image-holder">
          <img src="../assets/order1.png">
          <span class="active">{{ totalCount }}</span>
          <p>待付款</p>
        </div>
         </router-link>
        <div class="image-holder">
          <img src="../assets/order2.png">
          <p>待配票</p>
        </div>
        <div class="image-holder">
          <img src="../assets/order3.png">
          <p>配票中</p>
        </div>
        <div class="image-holder">
          <img src="../assets/order4.png">
          <p>待取票</p>
        </div>
      </div>
    </div>
    <div class="section">
    <router-link to="/myaddr">
        <div class="shortcut-nav">
          <img src="../assets/addr1.png">
          <div class="center">地址管理</div>
          <div class="right">你还没有添加地址</div>
          <div class="user-arow"></div>
        </div>
    </router-link>
      <div class="shortcut-nav">
        <img src="../assets/addr2.png">
        <div class="center">我的抵用券</div>
        <div class="right" style="margin-left: 10px"> 10张优惠券可用 </div>
        <div class="user-arow"></div>
      </div>
    </div>
    <div class="section">
      <div class="shortcut-nav">
        <img src="../assets/addr3.png">
        <div class="center">在线客服</div>
        <div class="user-arow" style="margin-left: 105px"></div>
      </div>
      <div class="shortcut-nav">
        <img src="../assets/addr4.png">
        <div class="center">客服电话</div>
        <div class="right" style="margin-left: 15px;color: #108ee9"> 400-636-2266 </div>
        <div class="user-arow"></div>
      </div>
    </div>
    <router-link to='/denglu'>
      <div class="logout-btn">退出登录</div>
      </router-link>
      <footer>
        <router-link to="/home">
            <div class="footer-icon"></div>
            <p class="footer-name">精选</p>
        </router-link>
        <router-link to="/show">
            <div class="footer-icon"></div>
            <p class="footer-name">演出</p>
        </router-link>
        <router-link to="/mine">
            <div class="footer-icon"></div>
            <p class="footer-name">我的</p>
        </router-link>
      </footer>
  </div>
</template>

<script>
	 import reset from '../../static/js/reset.js'
    export default{
       methods:{
      back(){
        // history.back();
        this.$router.go(-1)
      }
    },
    computed:{
      totalCount(){
        return this.$store.getters.totalCount;
      }
    }

  }
</script>

<style>
  @import '../../static/css/reset.css'
 
</style>

<style>
    /*个人中心头部*/
.user-header{
  height: 1.575rem;
  display: flex;
  align-items: center;
}

.user-header .back-icon{
  width: 0.625rem;
  height: 0.625rem;
  background: url(../assets/bg.png) -95px -232px no-repeat;
  background-size: 450px 300px;
  margin-left: 0.25rem;
}

.user-header .header-text{
  font-size: 0.425rem;
  width: 100%;
  color: #494949;
  text-align: center;
}

/*用户手机号*/
.user-profile{
  height: 2.7rem;
  border-top: 8px solid #f4f4f4;
  display: flex;
  align-items: center;
  position: relative;
}

.user-profile .user-icon img{
  width: 1.65rem;
  height: 1.65rem;
  margin: 0 0.5rem 0 0.5rem;
}

.user-profile .phonenum{
  color: #331511;
    font-size: 20px;
    font-weight: 700;
}

.user-arow{
    width: 10px;
    height: 10px;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    transform: rotateZ(-45deg) translateX(-5px) translateY(-2px);
}

.user-profile .user-arow{
  position: absolute;
  right: 0.25rem;
}

/*我的订单*/
.my-orders{
  height: 3.75rem;
  border-top: 8px solid #f4f4f4;
  margin-bottom: 0.25rem;
}

.my-orders .shortcut-nav{
  height: 1.25rem;
  display: flex;
  align-items: center;
}

.my-orders .shortcut-nav .left{
  width: 6.875rem;
  margin-left: 0.5rem;
  color: #494949;
  font-size: 0.35rem;
}

.my-orders .shortcut-nav .right{
  color: #aaa;
    font-size: 0.3rem;
    padding-right: 0.25rem;
}

.my-orders .status-orders{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5rem;
}

.my-orders .status-orders .image-holder{
  text-align: center;
  color: #494949;
}

.my-orders .status-orders .image-holder img{
  width: 1.3rem;
  height: 1.05rem;
}
/* 未付款订单的数量css*/
.image-holder{
  position: relative;
}

.image-holder .active{
  position: absolute;
  top:0;
  right:0.1rem;
  width: 0.45rem;
  height: 0.45rem;
  display: inline-block;
  background-color: #fc5a5a;
  border-radius: 10px;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.3rem;
  color: #fff;
}

/*地址管理*/
.section{
  height: 3.0rem;
  border-top: 8px solid #f4f4f4;
}

.section .shortcut-nav{
  height: 1.5rem;
  display: flex;
  align-items: center;
}

.section .shortcut-nav img{
  width: 0.725rem;
  height: 0.725rem;
  margin: 0 0.5rem 0 0.5rem;
}

.section .shortcut-nav .center{
  font-size: 0.35rem;
  color: #494949;
  width: 4.875rem;
}

.section .shortcut-nav .right{
  font-size: 0.3rem;
  color: #aaa;
  margin-right: 0.25rem;
}

.logout-btn{
  width: 8.5rem;
  height: 1.075rem;
  color: #fff;
  background-image: linear-gradient(to bottom,#ef6856,#ff5a57);
  text-align: center;
  line-height: 1.075rem;
  border-radius: 0.125rem;
  margin: 0.75rem;
  font-size: 0.35rem;
}

/*脚部菜单*/
  footer{
    width: 100%;
    height: 1.5rem;
    border-top: 1px solid #e4e4e4;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
  }

  footer a{
    display: inline-block;
    width: 3.1245rem;
    /*height: 100%;*/
    text-align: center;
  }

  footer a:first-child .footer-icon{
    width: 0.9rem;
    height: 0.9rem;
    background: url(../assets/bg.png);
    background-size: 8.05rem 5.425rem;
    background-position: 0.05rem 2.2rem;
    margin-left: 1.125rem;
  }

  footer a:nth-of-type(2) .footer-icon{
    width: 0.9rem;
    height: 0.9rem;
    background: url(../assets/bg.png);
    background-size: 8.05rem 5.425rem;
    background-position: -0.7rem 3.0rem;
    margin-left: 1.125rem;
  }

  footer a:nth-of-type(3) .footer-icon{
    width: 0.9rem;
    height: 0.9rem;
    background: url(../assets/bg.png);
    background-size: 8.05rem 5.425rem;
    background-position: -2.475rem 3.0rem;
    margin-left: 1.125rem;
  }

  footer a p{
    color: #333;
  }

</style>
