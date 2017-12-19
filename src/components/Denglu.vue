<template>
  <div class="login">

   <div class="hf main-view ng-scope">
    <div class="login-page ng-scope">
      <div class="page-header">
        <router-link to="/home">
        <div class="back-icon">

          <span class="left-back-icon"></span>
          </div>
        </router-link>
          <div class="header-text">登录</div>
       </div>
      <div class="logo-container">
        <img src="../assets/img/dl-2.png" alt="">
       </div>
      <div class="input-container">
        <div class="input-row">
          <input type="text" name="" value="" placeholder="请输入手机号码" class="ng-pristine ng-untouched ng-valid" v-model="username">
          <div class="yzm-link">


           </div>

         </div>
        <div class="input-row">
          <input type="password" name="" value="" placeholder="请输入密码" class="ng-pristine ng-untouched ng-valid" v-model="password">

         </div>
         <div class="login-tip1">
           {{msg}}

         </div>
      </div>
      <div class="login-btn-wrapper">
        <button class="login-btn" @click='login()'>
          登录

        </button>
        <div class="login-tip">
          *未注册过的手机号将自动创建摩天轮账号

        </div>

        </div>

    </div>

  </div>
</div>
</template>

   <script>
     export default {
      // 对应class名字
       name: 'login',
       // 数据部分
      data () {
        return {
           msg: '',
           username: 'delicacylee',
           password: 'delicacylee'
       }
     },
       // 事件部分
      methods: {
           //点击调用登录的方法
        login () {
            //保存账号
            var name = this.username;
            //保存密码
            var pass = this.password;

          if (this.username !== '123' || this.password !== '123') {
           this.msg = '您的用户名和密码不正确'
           } else {
             //跳转到首页
              this.$router.push({
               path: '/home'
              })
           }
           //传入账号密码和保存天数三个参数
           this.setCookie(name,pass,7)
         },
         //设置cookie
         setCookie(c_name,c_pwd,exdays){
           //获取当前时间
           var exdate = new Date();
           //保存的天数
           exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);
           //字符串拼接cookie
           window.document.cookie="username"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
           window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();

         },
         //读取cookie
         getCookie:function(){
           if (document.cookie.length > 0) {
             //切割读取到的cookie
             var arr = document.cookie.split(';')
             console.log(arr);
             for (var i = 0; i < arr.length; i++) {
               //再次切割读取到的cookie
              var arr2 = arr[i].split('=')
              //判断查找相对应的值
              if (arr2[0] = 'userName') {
                //保存到数据保存的地方
                this.username = arr2[1];
              } else if(arr2[0] = 'userPwd') {
                this.password = arr2[1];

              }
             }
           }
         },

       //清除cookie
       clearCookie:function () {
         this.setCookie("","",-1)//修改2值都为空，天数为负1天就好了
       }
     },


     //页面加载调用获取cookie值
      mounted(){
       this.getCookie()
    }
  }

     </script>
    <style>
     @import '../../static/css/reset.css';
   </style>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   .login-page {
       background: url(../assets/img/dl-1.png) center center no-repeat;
       background-size: 100% 100%;
       width: 100%;
       height: 100vh;
       display: flex;
       -webkit-box-direction: normal;
       flex-direction: column;
       overflow-y: auto;
   }
   .page-header{
     height: 0.3rem;
     line-height: 0.3rem;
     position: absolute;
     width: 100%;
   }
    .back-icon{
     height: 100%;
     width: 10%;
     display: flex;
     align-items: center;
     justify-content: center;
     position: absolute;
     left: 0;
   }
   .left-back-icon {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    border-top:2px solid #d8d8d8;
    border-left:2px solid #d8d8d8;
    transform: rotate(-45deg);
    display: inline-block;
    margin-left: 0.43rem;
    margin-top: 1.2rem;
   }

   .header-text {
     width: 100%;
     text-align: center;
     /*overflow: hidden;*/
     text-overflow: ellipsis;
     white-space: nowrap;
     font-size: 0.42rem;
     display: inline-block;
     padding-top: .5rem;
     margin-bottom: 1rem;
   }





   .logo-container {
     margin: 25% auto 0;
     width: 3rem;
   }
   .logo-container img{
     width: 100%;
   }




   .input-container {
     width: 80%;
     position: absolute;
     left: 10%;
     bottom: 28%;
     font-size: 0.42rem;
     line-height: 0.51rem;
   }
    .input-row {
       margin-top: 0.32rem;
       width: 100%;
       border-bottom: 1px solid #e4e4e4;
       padding-bottom: 0.32rem;

       display: flex;
   }
   .input-row input {
       height: 1rem;
       line-height: 1rem;
       -webkit-box-flex: 1;
       -ms-flex: 1;
       flex: 1;
       border: none;
       outline: 0;
       color: #494949;
   }
   .yzm-link {
     font-size: 0.35rem;
     color: #fd6857;
     border-left: 1px solid #e4e4e4;
     padding-left: 0.5rem;
     height: 1rem;
     line-height: 1rem;
     white-space: nowrap;
   }
   .login-btn-wrapper {
       position: absolute;
       left: 10%;
       bottom: 7%;
   }
   .login-page .login-btn-wrapper .login-btn {
     width: 8rem;
     border: none;
     outline: none;
       height: 1.61rem;
       line-height: 1.61rem;
       color: #fff;
       text-align: center;
       background-color: #fd6857;
       box-shadow: 0 2px 5px 0 #fd6857;
       border-radius: 0.16rem;
       font-size: 0.42rem;
   }
   .login-page .login-btn-wrapper .login-tip {
       padding-top: 15px;
       color: #999;
       font-size: 0.3rem;
       text-align: center;
   }
   .login-tip1{
     color: #999;
     font-size: 0.3rem;


   }

   </style>
