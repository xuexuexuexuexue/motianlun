<template>
	<div class="confirm-page">
		<div class="confirm-title">
			<router-link to="/checkticket">
				<div class="icon-back"></div>
			</router-link>
			<div class="title">确认订单</div>
		</div>
		<div class="show-description">
			<div class="show-source">本票由博雅文化提供</div>
			<div class="show-detail">
				<div class="show-img"></div>
				<div class="text-detail">
					<div class="name">【北京站】锐舞音乐嘉年华 SUPER RAVE</div>
					<div class="time">2017-11-11 星期六 20:00</div>
					<div class="place">北京 AMG LIVE(合纵现场)</div>
					<div class="ticket">280元票面  &nbsp; x1张  </div>
				</div>
			</div>
		</div>
		<div class="gap"></div>
		<div class="delivery">
			<div class="row-input">
				<div class="label">取票人姓名</div>
				<input type="text" placeholder="请输入姓名" name="">
			</div>
			<div class="row-input">
				<div class="label">取票人手机号</div>
				<input type="text" placeholder="请输入手机号" name="">
			</div>
			<div class="row-noinput">
				<div class="label">取票时间:</div> 
				<div class="content">演出开场前1小时</div> 
			</div>
			<div class="row-noinput">
				<div class="label">取票地点:</div> 
				<div class="content">演出场馆</div> 
			</div>
			<div class="row-noinput">
				<div class="label">取票说明:</div> 
				<div class="content">凭手机短信取票码取票。客服热线: tel:4006362266</div> 
			</div>
		</div>
		<div class="gap"></div>
		<div class="vouchers">
			<div>抵用券</div>
			<div>
				无可用优惠券
				<span class="forward-icon"></span>
			</div>
		</div>
		<div class="gap"></div>
		<div class="tips">
			<div>购票须知: </div>
			<div>
				根据演出火爆情况，摩天轮可能会将您所选的快递送票、上门自取等取票方式调整为现场取票(已支付的快递费会退还），敬请谅解。 
			</div>
			<div>现场无票退一赔一。</div>
		</div>
		<div class="confirm-footer">
			<div class="agreement-row"> 我已阅读<a class="agreement-link">《第三方商品平台交易服务协议》</a> </div>
			<div class="footer-text">
				<div class="money">
					合计：
					<span class="total">128</span>
					元
					<div class="word">不支持无理由退换货</div>
				</div>
				<div class="submit-btn">同意以上协议并提交订单</div>
			</div>
		</div>
	</div>
</template>

<script>
	import reset from '../../static/js/reset.js'
</script>

<style>
   @import '../../static/css/reset.css'
</style>

<style>
	/*确认订单头部*/
.confirm-title{
	width: 100%;
	height: 1.55975rem;
	display: flex;
	align-items: center;
	background: #fff;
	border-bottom: 1px solid #e4e4e4;
	position: fixed;
	top: 0;
	left: 0;
}

.confirm-title .icon-back{
	width: 0.65rem;
	height: 0.65rem;
	background: url(../assets/bg.png) -95px -232px no-repeat;
	background-size: 450px 300px;
	margin-left: 0.25rem;
}

.confirm-title .title{
	width: 100%;
	text-align: center;
	color: #494949;
	font-size: 0.425rem;
}

/*订单描述*/
.show-description{
	height: 4.3rem;
	margin-top: 1.6rem;
}

.show-description .show-source{
	font-size: 0.3rem;
	color: #aaa;
	margin: 0.25rem 0 0.25rem 0.5rem;
}

.show-description .show-detail{
	display: flex;
	justify-content: space-around;
}

.show-description .show-detail .show-img{
	width: 2.7rem;
	height: 3.1rem;
	background-image: url(https://img2.tking.cn/assets/img/N8i3wcpJb6.jpg);
	background-size: 2.7rem 3.1rem;
	border-radius: 0.175rem;
}

.show-description .show-detail .text-detail .name{
	font-size: 0.35rem;
	width: 5.325rem;
	height: 1.2rem;
	line-height: 0.625rem;
	color: #331511;
}

.show-description .show-detail .text-detail .time{
	color: #aaa;
	line-height: 0.625rem;
} 

.show-description .show-detail .text-detail .place{
	color: #aaa;
	line-height: 0.625rem;
}

.show-description .show-detail .text-detail .ticket{
	color: #331511;
	line-height: 0.625rem;
}

/*间隔*/
.gap{
	height: 0.25rem;
	background: rgba(246,246,246,.95);
}

/*取票人信息*/
.delivery{
	margin-top: 0.5rem;
}

.delivery .row-input{
	height: 1.5rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.delivery .row-input .label{
	font-size: 0.35rem;
	color: #494949;
}

.delivery .row-input input{
	width: 5.5rem;
	height: 1.2rem;
	border: 1px solid #e4e4e4;
	text-indent: 2em;
	border-radius: 0.125rem;
}

.delivery .row-noinput{
	display: flex;
	margin: 0.25rem 0 0.25rem 0.7rem;
	color: #aaa;
	font-size: 0.3rem;
}

/*抵用券*/
.vouchers{
	height: 1.375rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.35rem;
	color: #494949;
}

.vouchers .forward-icon{
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  border-bottom:1px solid #d8d8d8;
  border-right:1px solid #d8d8d8;
  transform: rotate(-45deg);
}

.vouchers div:first-child{
	margin-left: 0.55rem;
}

.vouchers div:nth-of-type(2){
	margin-right: 0.55rem;
}

/*购票须知*/
.tips{
	padding: 0.5rem 0 0.75rem 0.625rem;
	width: 9.5rem;
	font-size: 0.3rem;
	color: #aaa;
	line-height: 0.625rem;
	margin-bottom: 2.5rem;
}

/*底部*/
.confirm-footer{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #fff;
}

.confirm-footer .agreement-row{
	height: 0.975rem;
	line-height: 0.975rem;
	border-top: 1px solid #e4e4e4;
	padding-left: 0.5rem;
	color: #aaa;
}

.confirm-footer .agreement-row a{
	color: skyblue;
}

.confirm-footer .footer-text{
	height: 1.5rem;
	border-top: 1px solid #e4e4e4;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.confirm-footer .footer-text .money {
	width: 50%;
	height: 100%;
	padding: 0.25rem 0 0 0.75rem;
	font-size: 0.35rem;
}

.confirm-footer .footer-text .money .total{
	font-size: 0.5rem;
	color: #FD6857;
}

.confirm-footer .footer-text .money .word{
	font-size: 0.3rem;
	color: #aaa;
}

.confirm-footer .footer-text .submit-btn{
	-webkit-box-flex: 1;
    flex: 1;
    color: #fff;
    background-color: #FD6857;
    background-image: linear-gradient(to right,#ef6856,#ff3165);
    height: 100%;
    line-height: 1.5rem;
    text-align: center;
    font-size: 0.35rem;
}
</style>
