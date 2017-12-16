<template>
	<div class="show-page">
		<div class="show-detail">
			<div class="show-header" >
				<!-- <img src="https://img2.tking.cn/assets/img/N8i3wcpJb6.jpg"> -->
				<img :src= 'product.posterURL'>
				<div class="detail">
					<!-- <div class="show-name">【北京站】锐舞音乐嘉年华 SUPER RAVE</div> -->
					<div class="show-name">{{ product.showName }}</div>
					<div class="tag">{{ product.showStatus.displayName}}</div>
					<div class="price">
						<div class="number">{{ product.favour}}</div>
						<div class="text">{{ product.minPrice}}元起</div>
					</div>
				</div>
				<div class="serration"></div>
			</div>
			<div class="discount">
				<div class="number">{{ (product.discount)*10 }}</div>
				折起
			</div>
			<div class="coupon-row">
				<div class="row-flex row1">
					<div class="pre-icon"></div>
					【满额减】满150减10,满5000减60
				</div>
				<span class="forward-icon"></span>
			</div>
			<div class="coupon-row">
				<div class="row-flex row-flex2">
					<div class="pre-icon2"></div>
					{{ product.firstShowTime }} - {{ product.lastShowTime }}
				</div>
			</div>
			<div class="coupon-row">
				<div class="row-flex row-flex2">
					<div class="pre-icon3"></div>
			      {{ product.venueName }}
				</div>
			</div>
			<div class="addr">{{ product.venueAddr }}</div>
			<div class="coupon-row">
				<div class="row-flex row-flex2">
					<div class="pre-icon4"></div>
					支持现场取票，再也不怕买晚了
				</div>
			</div>
			<div class="coupon-row">
				<div class="row-flex">
					<div class="pre-icon5"></div>
					<div class="promise-text">保证真票</div>
				</div>
				<div class="row-flex">
					<div class="pre-icon5"></div>
					<div class="promise-text">出票保障</div>
				</div>
				<div class="row-flex">
					<div class="pre-icon5"></div>
					<div class="promise-text">无忧配送</div>
				</div>
				<span class="forward-icon"></span>
			</div>
			<div class="splitor">
				<div class="left-con"></div>
				<div class="right-con"></div>
			</div>
			<div class="show-intro">
				<div class="section-title">演出介绍</div>
				<div class="show-intro-info">
					<span>
						<b>北京的Raver们，让你们久等了！</b><br />
						<b>京城最燥的电子嘉年华 即将来临！</b><br />
						<b>北京的Raver们，你们还记得有多久没好好的Rave一番了？</b>
					</span>
				</div>
			</div>
			<div class="view-detail">
				查看详情
				<span class="view-icon"></span>
			</div>
			<div class="purchase-tips">
				<div class="section-title">购票提示</div>
				<div class="tips-content">
					<div class="tip-item">1、演出详情仅供参考，具体信息以主办方公布信息及现场为准，请准时到场以免错过演出。</div>
					<div class="tip-item">2、鉴于文体演出票品特殊性（具有时效性、唯一性等特征），一旦用户与卖家达成有效订单代表交易协议生效，用户不能主动要求取消交易（因演出活动被取消或延期除外）。</div>
					<div class="tip-item">3、鉴于票品的不可复制性与稀缺性，本平台对本演出（活动）限购数量为6张，平台有权无理由取消任何用户超过限购数量的交易，平台识别同一用户的方式包括但不限于同一注册手机。</div>
					<div class="tip-item">4、本平台尽最大努力促使卖家对交易协议的履行，如果卖家付票过程中发生问题，本平台可寻求其它卖家提供更高票面或相同票面更好位置票品代替，否则，平台将全额退款并按订单上约定的赔付方式与金额向用户进行赔付，详细规则请见《常见问题-无票赔付》 。</div>
				</div>
			</div>
			<div class="show-with">
				<div class="section-title">相关演出</div>
				<div class="recommend-list">
					<div class="normal-content">
						<div class="left-column">
							<img src="https://img1.tking.cn/assets/img/KR77JdAiNA.jpg">
							<div class="discount">
								<div class="number">4.7</div>
								折起
							</div>
						</div>
						<div class="right-column">
							<div class="show-name">【北京站】周汤豪帅到分手巡演</div>
							<div class="show-time">2017.11.11 19:30</div>
							<div class="show-avenue">汇源空间（M空间）</div>
							<div class="other-detail">
								<div class="left-part">售票中</div>
								<div class="right-part">
									<span>273</span>&nbsp;
									元起
								</div>
							</div>
						</div>
					</div>
					<div class="normal-content">
						<div class="left-column">
							<img src="https://img1.tking.cn/assets/img/KR77JdAiNA.jpg">
							<div class="discount">
								<div class="number">4.7</div>
								折起
							</div>
						</div>
						<div class="right-column">
							<div class="show-name">【北京站】周汤豪帅到分手巡演</div>
							<div class="show-time">2017.11.11 19:30</div>
							<div class="show-avenue">汇源空间（M空间）</div>
							<div class="other-detail">
								<div class="left-part">售票中</div>
								<div class="right-part">
									<span>273</span>&nbsp;
									元起
								</div>
							</div>
						</div>
					</div>
					<div class="normal-content">
						<div class="left-column">
							<img src="https://img1.tking.cn/assets/img/KR77JdAiNA.jpg">
							<div class="discount">
								<div class="number">4.7</div>
								折起
							</div>
						</div>
						<div class="right-column">
							<div class="show-name">【北京站】周汤豪帅到分手巡演</div>
							<div class="show-time">2017.11.11 19:30</div>
							<div class="show-avenue">汇源空间（M空间）</div>
							<div class="other-detail">
								<div class="left-part">售票中</div>
								<div class="right-part">
									<span>273</span>&nbsp;
									元起
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部 -->
		<div class="show-footer">
			<div class="customer-service">
				<div class="icon"></div>
				<div class="label">客服</div>
			</div>
			<div class="favourate">
				<div class="icon"></div>
				<div class="label">想看</div>
			</div>
			<div style="flex: 1"></div>
			<router-link to="/checkticket">
				<div class="choose-ticket">选择票面</div>
			</router-link>
		</div>
	</div>

</template>

<script>
	import reset from '../../static/js/reset.js'
	export default{
		data(){
       return {
        showList:[],
	    recommendList:[],
			showInfo:[]

			 }
		},
		created(){
			// 使用axios插件请求数据
      // 近期热点数据
			this.$http.get("../../static/data/hotShow.json", {}).then((res)=>{
				this.showList = res.data.result.data.recentShows;
				// console.log(this.showList);
			});
      // 为你推荐数据
		 this.$http.get("../../static/data/recommend.json", {}).then((res)=>{
				this.recommendList = res.data.result.data;
			});
      // 演唱会数据
			this.$http.get("../../static/data/showInfo.json",{}).then((res)=>{
				this.showInfo = res.data.result.data;
			});
		},
		methods:{

		},
		computed:{
			product(){
				console.log(this.$route.params.showOID);
				for (var item of this.showList) {
				 if (this.$route.params.showOID == item.showOID) {
				 	   return item;
				 }
				}
				for (var items of this.recommendList) {
				 if (this.$route.params.showOID == items.showOID) {
				 	   return items;
				 }
				}
				for (var items of this.showInfo) {
				if (this.$route.params.showOID == items.showOID) {
						return items;
				}
			 }


			}
		}
	}


</script>

<style>
	@import '../../static/css/reset.css'
</style>

<style>
.show-page{
	overflow: hidden;
}

/*演出界面头部*/
.show-page .show-header{
	height: 5.66rem;
	background-color: rgba(0,0,0,.3);
	position: relative;
}

.show-page .show-header img{
	width: 3.36rem;
	height: 4.38rem;
	border-radius: 0.25rem;
	margin: 0.6rem 0.125rem 0 0.9rem;
	float: left;
}

.show-page .show-header .detail{
	width: 3.35rem;
	float: left;
	margin: 1rem 0 0 0.5rem;
}

.show-page .show-header .detail .show-name{
	color: #fff;
	font-size: 0.375rem;
	line-height: 0.625rem;
}

.show-page .show-header .detail .tag{
	color: #fff;
	border:0.025rem solid #fff;
	width: 1.3rem;
	text-align: center;
	border-radius: 0.25rem;
	margin-top: 0.125rem;
}

.show-page .show-header .detail .price{
	width: 3.0rem;
	height: 0.925rem;
	display: flex;
	align-items: baseline;
	margin-top: 0.5rem;
	color: #fff;
}

.show-page .show-header .detail .price .number{
	font-size: 0.625rem;
	margin-right: 0.25rem;
}

.show-page .show-header .detail .price .text{
	font-size: 0.3rem;
}

.show-page .show-header .serration{
	background: url(../assets/bg-border.png);
    background-size: 100% 100%;
    width: 100%;
    height: 0.35rem;
    position: absolute;
    bottom: 0;
}

.show-page .discount{
	width: 1.6rem;
	height: 1.6rem;
	background: linear-gradient(to bottom,#ef6856,#ff3165);
	border-radius: 50%;
	text-align: center;
	color: #fff;
	position: absolute;
	top: 4.375rem;
	right: 0.55rem;
}

.show-page .discount .number{
	font-size: 0.625rem;
	padding-top: 0.125rem;
}

/*购票信息*/
.show-page .coupon-row{
	width: 85%;
	height: 0.95rem;
	display: flex;
	align-items: center;
	margin-left: 1.0rem;
	justify-content: space-between;
}

.show-page .coupon-row .row-flex{
	display: flex;
	align-items: center;
}

.show-page .coupon-row .row1{
	color: #FD6857;
}

.show-page .coupon-row .row-flex .pre-icon{
	width: 0.7rem;
	height: 0.4rem;
	background: url(../assets/pre.png) no-repeat;
	background-size: 0.4rem 0.4rem;
}

.show-page .coupon-row .forward-icon{
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  border-bottom:1px solid #d8d8d8;
  border-right:1px solid #d8d8d8;
  transform: rotate(-45deg);
}

.show-page .coupon-row .pre-icon2{
	width: 0.7rem;
	height: 0.4rem;
	background: url(../assets/pre2.png) no-repeat;
	background-size: 0.4rem 0.4rem;
}

.show-page .coupon-row .row-flex2{
	color: #333;
}

.show-page .coupon-row .pre-icon3{
	width: 0.7rem;
	height: 0.5rem;
	background: url(../assets/pre3.png) no-repeat;
	background-size: 0.5rem 0.5rem;
}

.show-page .addr{
	margin-left: 1.95rem;
	color: #777;
}

.show-page .coupon-row .pre-icon4{
	width: 0.7rem;
	height: 0.5rem;
	background: url(../assets/pre4.png) no-repeat;
	background-size: 0.5rem 0.5rem;
}

.show-page .coupon-row .pre-icon5{
	width: 0.7rem;
	height: 0.5rem;
	background: url(../assets/pre5.png) no-repeat;
	background-size: 0.5rem 0.5rem;
}

.show-page .promise-text{
	color: #333;
}

/*过度线*/
.show-page .splitor {
    position: relative;
    height: 0.8rem;
    border-bottom: 1px dashed #e4e4e4;
    position: relative;
}

.show-page .splitor .left-con{
	position: absolute;
    border-radius: 50%;
    height: 0.4rem;
    width: 0.4rem;
    background-color: #e4e4e4;
    bottom: -7px;
    left: -7px;
    content: "";
}

.show-page .splitor .right-con{
	position: absolute;
    border-radius: 50%;
    height: 0.4rem;
    width: 0.4rem;
    background-color: #e4e4e4;
    bottom: -7px;
    right: -7px;
    content: "";
}

/*演出介绍*/
.show-page .show-intro{
	margin-top: 0.75rem;
}

.show-page .section-title{
	border-left: 3px solid #331511;
    padding-left: 0.375rem;
    color: #331511;
    font-size: 0.35rem;
    line-height: 0.55rem;
    width: 90%;
    margin-left: 0.75rem;
}

.show-page .show-intro .show-intro-info{
	color: #777;
    font-size: 0.3rem;
    line-height: 0.625rem;
   	margin: 0.25rem 0 0 0.75rem;
}

/*查看详情*/
.show-page .view-detail{
	height: 0.65rem;
	line-height: 0.65rem;
	margin-top: 1.1rem;
	font-size: 0.3rem;
	color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
}

.show-page .view-detail .view-icon{
	display: inline-block;
	content: "";
    right: -2rem;
    border-left: 2px solid #333;
    border-bottom: 2px solid #333;
    width: 0.175rem;
    height: 0.175rem;
    transform: rotateZ(-45deg);
    top: 20%;
    margin-left: 0.5rem;
}

/*购票提示*/
.show-page .purchase-tips{
	margin-top: 0.75rem;
}

.show-page .purchase-tips .tips-content{
	width: 90%;
	margin: 0.25rem 0 0 0.5rem;
}

.show-page .purchase-tips .tips-content .tip-item{
	font-size: 0.3rem;
	line-height: 0.75rem;
    color: #494949;
}

/*相关演出*/
.show-page .show-with{
	margin-top: 0.75rem;
}

.show-page .recommend-list{
	margin-top: 1.0rem;
	padding: 0 0.375rem 0.7rem;
}

.show-page .normal-content{
	width: 100%;
	height: 4.0rem;
    border-bottom: 1px solid #E4E4E4;
    display: flex;
    margin-top: 0.375rem;
}

.show-page .show-with .left-column{
	position: relative;
}

.show-page .left-column img{
	width: 2.7rem;
	height: 3.6rem;
	border-radius: 0.2rem;
}

.show-page .show-with .discount{
	width: 1.2rem;
	height: 1.2rem;
	background: linear-gradient(-180deg,#EF6856 0,#FF3165 100%);
	border-radius: 50%;
	position: absolute;
	top: 2.0rem;
	right: -0.5rem;
	color: #fff;
	text-align: center;
}

.show-page .show-with .discount .number{
	font-size: 0.4rem;
	font-weight: 700;
	padding-top: 0.125rem;
}

.show-page .show-with .right-column .show-name{
	color: #131313;
	font-size: 0.35rem;
    height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-left: 0.75rem;
}

.show-page .show-with .right-column .show-time{
	font-size: 0.3rem;
	color: #AAA;
	margin-left: 0.75rem;
}

.show-page .show-with .right-column .show-avenue{
	height: 1.10975rem;
	font-size: 0.3rem;
	color: #AAA;
	margin: 0.25rem 0 0 0.75rem;
}

.show-page .show-with .other-detail .left-part{
    color: #FD6857;
    border: 1px solid #FD6857;
    width: 1.35rem;
    height: 0.47975rem;
    text-align: center;
    border-radius: 0.125rem;
    margin-left: 0.75rem;
    float: left;
}

.show-page .show-with .other-detail .right-part{
	float: right;
	color: #F2593F;
}

.show-page .show-with .other-detail .right-part span{
	font-size: 0.5rem;
}

.show-page .show-with .normal-content:last-child{
	margin-bottom: 0.8rem;
}

/*底部*/
.show-page .show-footer{
	width: 100%;
	height: 1.5rem;
	border-top: 1px solid #e4e4e4;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #fff;
	display: flex;
	z-index: 100;
}

.show-page .show-footer .customer-service,.favourate{
	width: 2.3rem;
	height: 100%;
	border-right: 1px solid #e4e4e4;
	text-align: center;
}

.show-page .show-footer .customer-service .icon{
	width: 100%;
	height: 0.75rem;
	background: url(../assets/ser.png) no-repeat;
	background-size: 22px 22px;
	margin-left: 0.875rem;
	margin-top: 0.25rem;
}

.show-page .show-footer .label{
	font-size: 0.3rem;
	color: #aaa;
}

.show-page .show-footer .favourate .icon{
	width: 100%;
	height: 0.75rem;
	background: url(../assets/favorite.png) no-repeat;
	background-size: 22px 22px;
	margin-left: 0.875rem;
	margin-top: 0.25rem;
}

.show-page .show-footer .choose-ticket{
	width: 3.3rem;
	height: 100%;
	float: right;
	background-image: linear-gradient(to right,#ef6856,#ff3165);
	color: #fff;
	font-size: 0.4rem;
	line-height: 1.475rem;
	text-align: center;
}
</style>
