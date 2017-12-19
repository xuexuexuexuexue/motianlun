<template>
	<div class="myorder-page">
		<div class="order-title">
			<!-- <router-link to="/mine"> -->
				<div class="icon-back" @click="back"></div>
			<!-- </router-link> -->
			<div class="title">我的订单</div>
			<div class="pull-right">
				<a href="#">抵用券</a>
			</div>
		      <div class="unpay" v-if="totalPrice>0">(待付款)</div>
		</div>
		<div class="strip" v-show="show" v-if="totalPrice<=0"></div>
		<ul class="nores" v-if="totalPrice<=0">
			<li>
				<img src="../assets/order.png">
			</li>
			<li>～哞～木有任何订单哟～</li>
		</ul>
		<div class="main_ding">	
		<div class="ding" v-if="totalPrice>0" v-for="(item, index) in unpayList" :key="item.showOID">
			<p><span>订单编号:12345677</span><a href="">待付款</a></p>
			<div class="ding_1">
				<img :src=" item.srcImg ">
				<div class="right">
					<h3>{{ item.showName }} </h3>
					<p><span>时间:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.time }}</p>
					<p><span>票面价:</span>&nbsp;&nbsp;&nbsp;{{ item.price}}元</p>
					<p><span>数量:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.count }}张</p>
					<p style="color: red"><span >订单总价:</span>{{ item.price * item.count }}元</p>
				</div>    
			</div>
			<div class="sureDing"> <a href="" style="background-color:#fc5a5a" @click="remove(item.showOID)">取消订单</a><a href="" style="background-color:#03A9F4">确认订单</a></div>
		  </div>
		</div>
         <div class="lightBox" v-if="unshow>0">
          <div class="qieDel">
              <p> 是否删除此件商品</p>
              <p  @click="sureBtn"><button style="background-color: #fc5a5a" :data-index="1">取消</button><button style="background:#03A9F4;margin-left:25px;" :data-index="2">确定</button></p>
          </div>
    </div> 


	</div>
</template>

<script>
	
	import reset from '../../static/js/reset.js'
	 export default{
	 
  	  data(){
  		return {
         unshow:false,
         show:true,
         _title:''
  		}
  	},
  	create(){
          this.unshow = false
  	},
  	methods:{
  		remove(showOID){
             this.unshow = true;
             if (this._title == 1) {
             	console.log("hahah")
             	this.$store.dispatch('remove',showOID);
             }
  		     
  		},
  		sureBtn($event){
  			this.unshow = true;
	          this._title = $event.target.dataset.index;
	          this.unshow = false;
	          console.log(this._title);
  		},
  		back(){
  			history.back();
  		}
       
  	},
  	computed:{
  		totalPrice(){
       		return this.$store.getters.totalPrice; 
       	},
       	unpayList(){
       		return this.$store.state.unPayList;
       	}
  	}
  }
</script>

<style>
  @import '../../static/css/reset.css'


</style>

<style>
/*我的订单头部*/
.order-title{
	height: 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 5px #ccc;
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: #fff;
}

.order-title .icon-back{
	width: 0.65rem;
	height: 0.65rem;
	background: url(../assets/bg.png) -95px -232px no-repeat;
	background-size: 450px 300px;
	margin-left: 0.25rem;
}

.order-title .title{
	font-size: 0.45rem;
	color: #494949;
} 
.main_ding{
	position: absolute;
	margin-top: 1.2rem;
}
.order-title .pull-right a{
	font-size: 0.35rem;
	color: #494949;
	margin-right: 0.25rem;
}
.unpay{
	position: absolute;
	top:0.33rem;
	left:57%;
	font-size: 0.45rem;
	color: #494949;
}
.ding{
width: 100%;
height: 5.8rem;
}
.ding>p{
	width: 100%;	
	height: 0.8rem;
	margin-top: 10px;
}
.ding>p span{
	float: left;
	margin-left: 0.5rem;
	font-size: 0.35rem;
	color: #494949;
	line-height: 0.8rem;
}
.ding>p a{
	float: right;
	margin-right: 0.5rem;
	font-size: 0.35rem;
	line-height: 0.8rem;
	color: red;
	overflow: hidden;
}

.ding_1{
	width: 90%;
	margin:auto;
	margin-top: 5px;
	border-top: 1px solid #E4E4E4;
}
.ding_1>img{
	float: left;
	width: 25%;
    margin-top: 20px;
}
.right{
	float: left;
	margin-top: 20px;
	margin-left: 17px;
	overflow: hidden;
}
.right h3{
	width: 5rem;
	font-size: 0.4rem;
	color: #494949;
	height: 0.6rem;
	margin-bottom: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.right p{
	line-height: 0.6rem;
}
.right p span{
	margin-right: 10px;
	color: #999;
}
.sureDing{
  width: 50%;
  height: 0.8rem;
  line-height: 0.8rem;
  float: right;
  margin-top: 10px;
}
.sureDing a{
	display: inline-block;
	width: 2rem;
	height: 0.7rem;
	line-height: 0.7rem;
	text-align: center;
    margin-left: 10px;
    font-size: 0.4rem;
    color: white;
    border-radius: 5px;
}

/*过度条*/
.strip{
	height: 1.0rem;
	background: #F2f2f2;
}

.nores{
	text-align: center;
	margin-top: 5.0rem;
}

.nores li:nth-of-type(2){
	font-size: 0.45rem;
	color: #747576;
	line-height: 1.0rem;
}

/*模态弹窗*/
.lightBox{
      position:fixed;
      width:100%;
      height:100%;
      top: 0;
      left: 0;
      z-index: 100;
      background:rgba(0,0,0,.3);
  }
  .qieDel{
      width:62%;
      height:2.5rem;
      position:absolute;
      top:40%;
      left:50%;
      background:#fff;
      transform:translate(-50%,-40%);
      border-radius:5px;
  }
  .qieDel p{
      width:100%;
      margin-top:10px;
      line-height:0.8rem;
      text-align:center;
      font-size: 0.4rem;
  }
  .qieDel p button{
      background:#fff;
      width:1.5rem;
      line-height:0.7rem;
      text-align:center;
      outline:none;
      margin-right:15px;
      border:none;
      border-radius: 5px;
      color: #fff;
  }

</style>