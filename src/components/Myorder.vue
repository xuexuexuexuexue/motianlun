<template>
	<div class="myorder-page">
		<div class="order-title">
			<router-link to="/mine">
				<div class="icon-back"></div>
			</router-link>
			<div class="title">我的订单</div>
			<div class="pull-right">
				<a href="#">抵用券</a>
			</div>
		</div>
		<div class="strip"></div>
		<ul class="nores">
			<li>
				<img src="../assets/order.png">
			</li>
			<li>～哞～木有任何订单哟～</li>
		</ul>
	</div>
</template>

<script>
	import reset from '../../static/js/reset.js'
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

.order-title .pull-right a{
	font-size: 0.35rem;
	color: #494949;
	margin-right: 0.25rem;
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
</style>