<template>
	<div class="myaddr-page">
		<div class="addr-title">
			<router-link to="/mine">
				<div class="icon-back"></div>
			</router-link>
			<div class="title">我的地址</div>
		</div>
		<div class="addr-footer">
			<div class="pre-btn-icon">
				<span class="span1"></span>
				<span class="span2"></span>
			</div>
			<div class="addr-name">新增收货地址</div>
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
	.myaddr-page{
	height: 100vh;
	background: #F2f2f2;
}

/*我的地址头部*/
.addr-title{
	height: 1.55975rem;
	display: flex;
	align-items: center;
	background: #fff;
}

.addr-title .icon-back{
	width: 0.65rem;
	height: 0.65rem;
	background: url(../assets/bg.png) -95px -232px no-repeat;
	background-size: 450px 300px;
	margin-left: 0.25rem;
}

.addr-title .title{
	width: 100%;
	text-align: center;
	color: #494949;
	font-size: 0.425rem;
}

/*脚部*/
.addr-footer{
	width: 100%;
	height: 1.5rem;
	background: #fff;
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.addr-footer .pre-btn-icon .span1{
	content: "";
    position: absolute;
    height: 2px;
    background: #FD6857;
    left: 25%;
    top: 50%;
    width: 50%;
    transform: translateY(-50%);
}

.addr-footer .pre-btn-icon .span2{
    content: "";
    position: absolute;
    width: 2px;
    background: #FD6857;
    left: 50%;
    top: 25%;
    height: 50%;
    transform: translateX(-50%);
}

.addr-footer .pre-btn-icon {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 2rem;
    border: 2px solid #FD6857;
    position: relative;
    margin-right: 0.5rem;
}

.addr-footer .addr-name{
	color: #FD6857;
	font-size: 0.4rem;
	width: 2.4rem;
	height: 1.5rem;
	line-height: 1.5rem;
}
</style>