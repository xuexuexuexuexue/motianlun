<template>
	<div class="chktic-page">
		<div class="tic-title">
			<router-link to="/showinfo">
				<div class="icon-back"></div>
			</router-link>
			<div class="title">【北京站】锐舞音乐嘉年华 SUPER RAVE</div>
		</div>
		<div class="calender-container">
			<div class="session-name">
				2017-11-11<br />
				 星期六 20:00
			</div>
		</div>
		<div class="ticket-container">
			<div class="section-name">票面</div>
			<div class="ticket-list">
				<div class="ticket-active">
					<div class="price">280票面</div>
					<div class="other-info">预售</div>
				</div>
				<div class="ticket-active ticket">
					<div class="price">480票面</div>
					<div class="other-info">两日预售通票</div>
				</div>
			</div>
		</div>
		<div class="amount-container">
			<div class="amount-label">选择数量</div>
			<div class="amount-value">
				<div class="minus">
					<span></span>
				</div>
				<div class="number">1</div>
				<div class="plus">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="tip-item">
			<div class="mark">
				<span>*注：</span>
				3张以内为连坐，3张以上尽量连坐
			</div>
			<div class="tip-item">本演出限购6张</div>
			<div class="tip-item">不同张数、不同时间,票价可能不同</div>
		</div>
		<div class="ticket-footer">
			<div class="text-content">
				<div>合计：</div>
				<div class="price">
					<div class="count">146</div>
					<div class="unit">元</div>
				</div>
				<div class="single-price">146元/张</div>
			</div>
			<router-link to="/confirmorder" class="button">
				下一步
			</router-link>
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
	/*选择票面头部*/
.tic-title{
	height: 1.55975rem;
	display: flex;
	align-items: center;
}

.tic-title .icon-back{
	width: 0.65rem;
	height: 0.65rem;
	background: url(../assets/bg.png) -95px -232px no-repeat;
	background-size: 450px 300px;
	margin-left: 0.25rem;
}

.tic-title .title{
	width: 100%;
	text-align: center;
	color: #494949;
	font-size: 0.425rem;
}

/*日期条*/
.calender-container{
	height: 1.55975rem;
	box-shadow: 0 0 10px 0 rgba(204,204,204,.45);
}

.calender-container .session-name{
	width: 3.15rem;
	height: 1.55rem;
	border-bottom: 3px solid #FD6857;
	color: #FD6857;
	font-size: 0.4rem;
	text-align: center;
	line-height: 0.625rem;
}

/*票面*/
.ticket-container .section-name{
	width: 8.5rem;
	height: 1.225rem;
	line-height: 1.225rem;
	margin: 0.25rem 0 0 1rem;
	color: #494949;
	font-size: 0.35rem;
}

.ticket-container .ticket-list .ticket-active{
	width: 3.8rem;
	height: 1.5rem;
	border: 1px solid #FD6857;
	text-align: center;
	color: #FD6857;
	font-size: 0.35rem;
	line-height: 0.625rem;
	border-radius: 0.125rem;
}

.ticket-container .ticket-list{
	display: flex;
	justify-content: space-around;
}

.ticket-container .ticket-list .ticket{
	border: 1px solid #D8D8D8;
}

.ticket-container .ticket-list .ticket .price{
	color: #494949;
}

.ticket-container .ticket-list .ticket .other-info{
	color: #777;
}

.ticket-container{
	border-bottom: 1px solid #E4E4E4;
	padding-bottom: 0.375rem;
}

/*选择数量*/
.amount-container{
	height: 1.5rem;
	line-height: 1.5rem;
	border-bottom: 1px solid #E4E4E4;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.amount-container .amount-label{
	font-size: 0.35rem;
	color: #494949;
	margin-left: 0.7rem;
}

.amount-container .amount-value{
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
	width: 3.0rem;
	justify-content: space-between;
}

.amount-container .amount-value .minus{
	width: 0.9rem;
	height: 0.9rem;
    border: 1px dashed #ccc;	
    position: relative;
}

.amount-container .amount-value .minus span{
	content: "";
    position: absolute;
    border-top: 1px solid #494949;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}

.amount-container .amount-value .plus{
	width: 0.9rem;
	height: 0.9rem;
    border: 1px solid #CCC;	
    position: relative;
}

.amount-container .amount-value .plus span:first-child{
	content: "";
    position: absolute;
    border-top: 1px solid #494949;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}

.amount-container .amount-value .plus span:nth-of-type(2){
	content: "";
    position: absolute;
    border-top: 1px solid #494949;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) rotateZ(90deg);
}

/*注意*/
.tip-item{
	margin: 0.4rem 0 0 0.4rem;
	color: #494949;
}

.tip-item .tip-item{
	text-indent: 1.5em;
}

/*底部*/
.ticket-footer{
	width: 100%;
	height: 1.5rem;
	border-top: 1px solid #CCC;
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
}

.ticket-footer .text-content{
	width: 70%;
	height: 100%;
	display: flex;
	align-items: baseline;
	justify-content:center;
}

.ticket-footer .text-content .price{
	width: 1.55rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.ticket-footer .text-content .price .count{
	font-size: 0.625rem;
    color: #FD6857;
}

.ticket-footer .text-content .price .unit{
	font-size: 0.3rem;
	color: #FD6857;
	margin-top: 0.175rem;
}

.ticket-footer .text-content .single-price{
	font-size: 0.3rem;
	color: #aaa;
	padding-left: 0.25rem;
}

.ticket-footer .button{
	width: 30%;
	height: 100%;
	background-image: linear-gradient(-45deg,#FF8773 0,#F2593F 100%);
	text-align: center;
	line-height: 1.5rem;
	font-size: 0.4rem;
	color: #fff;
}
</style>