<template>
	<div class="homepage">
		<div class="swiper-container">
			<router-link to="/showinfo">
			    <swiper :options="swiperOption" ref="mySwiper">
			    	<!-- slides -->
			    	<swiper-slide><img src="../assets/banner1.jpg" alt=""></swiper-slide>
			    	<swiper-slide><img src="../assets/banner2.jpg" alt=""></swiper-slide>
			    	<swiper-slide><img src="../assets/banner3.jpg" alt=""></swiper-slide>
			    	<!-- Optional controls -->
			    	<!-- <div class="swiper-pagination"  slot="pagination"></div>
				    <div class="swiper-button-prev" slot="button-prev"></div>
				    <div class="swiper-button-next" slot="button-next"></div>
				    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
			    </swiper>
		    </router-link>
	    </div>
	    <router-link to="/checkcity">
			<div class="changeCity">
				<div class="location-icon"></div>
				<div class="city-name">北京</div>
			</div>
		</router-link>
		<!-- </div> -->
		<!-- 搜索框 -->
		<router-link to="/search" class="search-box">
			<div class="search-icon"></div>
			<div class="search-placeholder">共有3862场折扣演出在售</div>
		</router-link>
		<!-- <router-link to="/show"> -->
			<div class="nav-list" @click="show">
				<div class="nav-item">
					<div class="YanChangHui" :data-inde="1"></div>
					<p  :data-inde="1">演唱会</p>
				</div>
				<div class="nav-item" >
					<div class="HuaJuGeJu" :data-inde="2"></div>
					<p :data-inde="2">话剧歌剧</p>
				</div>
				<div class="nav-item">
					<div class="YinYueHui" :data-inde="4"></div>
					<p :data-inde="4">音乐会</p>
				</div>
				<div class="nav-item" >
					<div class="TiYuSaiShi" :data-inde="3"></div>
					<p :data-inde="3">体育赛事</p>
				</div>
				<div class="nav-item" >
					<div class="more" :data-inde="0"></div>
					<p :data-inde="0">更多</p>
				</div>
			</div>
		<!-- </router-link> -->
		<div class="hot-show">
			<div class="section-title">
				近期热门&nbsp;&nbsp;&nbsp;
				<i class="icon-arrow"></i>
			</div>
			<div class="hot-show-list" id="hotShow" >
				<div class="show-content" v-for="item in showList"  @click="changeDetail(item.showOID)">
					<img :src='item.posterURL'>
					<div class="number">
						<span>{{ `${(item.discount)*10}` }}</span>折
					</div>
					<p class="show-name">{{ `${item.showName}` }}</p>
					<p class="show-time">{{ `${item.lastShowTime}` }}</p>
				</div>
			</div>
		</div>
		<div class="shortcuts">
			<div class="shortcuts-scope">
				<div class="shortcuts-title">限时秒杀</div>
				<div class="shortcuts-tip">预约</div>
				<div class="shortcuts-time">11-08 15:30</div>
				<img src="https://img0.tking.cn/assets/img/Fm5wJXwQPE_.jpg">
			</div>
			<div class="shortcuts-right">
				<div class="shortcut">
					<div class="shortcut-left">
						<div class="title">演出日历</div>
						<div class="time">11月07日</div>
					</div>
					<div class="shortcut-right">
						<img src="https://img2.tking.cn/assets/img/ZwcwdtkWth.jpg">
					</div>
				</div>
				<div class="shortcut" style="margin-top: 10px">
					<div class="shortcut-left">
						<div class="title">超值折扣</div>
						<div class="time">1元起</div>
					</div>
					<div class="shortcut-right">
						<img src="https://img0.tking.cn/assets/img/DYbNdwBTF8.jpg">
					</div>
				</div>
			</div>
		</div>
		<div class="recommend">
			<div class="section-title">为您推荐</div>
			<div class="section-img">
				<img src="https://img1.tking.cn/assets/img/pC2h7xBFGN.jpg">
			</div>
			<div  class="recommend-list">
				<!-- <router-link to="/showinfo"> -->
					<div class="normal-content" v-for="item in recommendList" @click="changeDetail(item.showOID)">
						<div class="left-column">
							<img :src="item.posterURL">
							<div class="discount">
								<div class="number">{{ `${(item.discount)*10}` }}</div>
								折起
							</div>
						</div>
						<div class="right-column">
							<div class="show-name">{{ `${item.showName}` }}</div>
							<div class="show-time">{{ `${item.firstShowTime}-${item.lastShowTime}` }}</div>
							<div class="show-avenue">{{ `${item.venueName}` }}</div>
							<div class="other-detail">
								<div class="left-part">{{ `${item.showStatus.displayName}` }}</div>
								<div class="right-part">
									<span>{{ `${item.minPrice}` }}</span>&nbsp;
									元起
								</div>
							</div>
						</div>
					</div>
				<!-- </router-link> -->
			</div>
		</div>
		<footer>
	        <router-link to="/home">
	            <div class="footer-icon"></div>
	            <p class="footer-name">精选</p>
	        </router-link>
	        <router-link to="/show/0">
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

	export default {
		data(){
			return {
				showList: [],
				recommendList: [],
				index:0,
				swiperOption: {
					pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplay: 2500,
			        autoplayDisableOnInteraction: false,
			  		notNextTick: true,
			        grabCursor : true,
			        setWrapperSize :true,
			        autoHeight: true
			    //       pagination : '.swiper-pagination',
			    //       paginationClickable :true,
			    //       prevButton:'.swiper-button-prev',
			    //       nextButton:'.swiper-button-next',
			    //       scrollbar:'.swiper-scrollbar',
			    //       mousewheelControl : true,
			    //       observeParents:true
				}
			}
		},
		methods:{
			// 路由编程式传参  在方法中进行路由跳转，并传递参数
        changeDetail(showOID){
               this.$router.push("./showinfo/"+showOID)
		   },
			 show($event){
				this.index = $event.target.dataset.inde;
				 // console.log(this.index);
				  this.$router.push("./show/"+this.index);
			 }

		},
		created(){
			// 使用axios插件请求数据
			this.$http.get("./static/data/hotShow.json", {}).then((res)=>{
				this.showList = res.data.result.data.recentShows;
			});



			this.$http.get("./static/data/recommend.json", {}).then((res)=>{
				this.recommendList = res.data.result.data;
			});

		}
	}
	// document.querySelector("footer").style.display = "none";
</script>

<style>
	@import '../../static/css/reset.css'
	/*@import '../../static/css/swiper-3.4.2.min.css'*/
</style>

<style>

	.homepage{
		width: 100%;
	}

	/*轮播图*/
	.swiper-container{
		overflow: hidden;
	}

	.swiper-slide{
		float: left;
	}

	.swiper-container img{
		width: 100%;
		height: 6.0rem;
	}

	/*切换城市*/
	.changeCity{
		width: 2rem;
		height: 0.75rem;
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		z-index: 100;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.location-icon{
		width: 0.6rem;
		height: 0.75rem;
		background: url(../assets/bg.png);
		background-position: -215px -174px;
		background-size: 450px 300px;
	}

	.city-name{
		color: #fff;
	    text-align: center;
	    font-size: 0.35rem;
	}

	/*搜索框*/
	.search-box{
		z-index: 100;
		position: absolute;
	    left: 50%;
	    top: 5.3rem;
	    border-radius: 4rem;
	    transform: translateX(-50%);
	    width: 6.6rem;
	    height: 1.2rem;
	    line-height: 1.2rem;
	    color: #fff;
	    background-color: #fff;
	    box-shadow: 0 0.3rem 0.3rem -5px rgba(253,104,87,.3);
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}

	.search-icon{
		display: inline-block;
	    background-image: url(../assets/search.png);
		background-size: 0.35rem 0.4rem;
	    width: 0.53975rem;
	    height: 0.75rem;
	    background-repeat: no-repeat;
	    background-position: left center;
	}

	.search-placeholder{
		width: 4.296rem;
		height: 1.2rem;
		line-height: 1.2rem;
		color: #aaa;
		text-align: center;
		font-size: 0.35rem;
	}

	/*导航栏*/
	.nav-list{
		display: flex;
		height: 2.05rem;
		margin-top: 1.5rem;
	}

	.nav-item{
		width: 20%;
		text-align: center;
	}

	.YanChangHui{
		width: 1.43975rem;
		height: 1.43975rem;
		margin-left: 0.375rem;
		background: url(../assets/bg.png);
		background-size: 489px 400px;
		background-position: -40px 0;
	}

	.HuaJuGeJu{
		width: 1.43975rem;
		height: 1.43975rem;
		margin-left: 0.375rem;
		background: url(../assets/bg.png);
		background-size: 489px 400px;
		background-position: -92px 0;
	}

	.YinYueHui{
		width: 1.43975rem;
		height: 1.43975rem;
		margin-left: 0.375rem;
		background: url(../assets/bg.png);
		background-size: 489px 400px;
		background-position: -152px 0;
	}

	.TiYuSaiShi{
		width: 1.43975rem;
		height: 1.43975rem;
		margin-left: 0.375rem;
		background: url(../assets/bg.png);
		background-size: 489px 400px;
		background-position: -214px 0;
	}

	.more{
		width: 1.43975rem;
		height: 1.43975rem;
		margin-left: 0.375rem;
		background: url(../assets/bg.png);
		background-size: 489px 400px;
		background-position: 7px 0;
	}

	/*近期热门*/
	.hot-show{
		margin-top: 0.75rem;
	}

	.homepage .section-title{
		height: 0.7rem;
		font-size: 0.45rem;
	    font-weight: 700;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}

	.icon-arrow{
		width: 0.3rem;
		height: 0.53975rem;
		display: inline-block;
		background: url(../assets/bg.png);
		background-position: -140px -232px;
	    background-size: 450px 300px;
	}

	.hot-show-list{
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		margin-top: 0.5rem;
	}

	.show-content{
		width: 3.0rem;
		margin-left: 0.3rem;
		position: relative;
	}
    .hot-show-list::-webkit-scrollbar{
        display:none;
	}
	.show-content img{
		width: 2.85rem;
		height: 4.2rem;
		border-radius: 5%;
	}

	.show-content .number{
		width: 1.625rem;
		height: 0.675rem;
		background: url(../assets/zhe.png) -0.1rem -0.1rem no-repeat;
		background-size: 1.625rem 0.8rem;
		font-size: 0.35rem;
		color: #fff;
		border-radius: 0.1rem;
		line-height: 0.75rem;
		padding-left: 0.15rem;
		position: absolute;
		top: 0;
		left: 0;
	}

	.show-content .show-name{
		padding-top: 0.125rem;
	    color: #131313;
	    line-height: 0.5rem;
	    height: 0.6rem;
	    overflow:hidden;
	    text-overflow:ellipsis;
	    white-space: nowrap;
	}

	.show-content .show-time{
		color: #aaa;
		line-height: 0.75rem;
	}

	/*限时秒杀*/
	.shortcuts{
		height: 5.7rem;
		margin-top: 0.75rem;
		display: flex;
		align-items: center;
	}

	.shortcuts-scope{
		width: 4.22625rem;
		height: 5.7rem;
		box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
		margin: 0.75rem 0.5rem 0.0125rem 0.5rem;
	}

	.shortcuts-title{
		color: #FD6857;
		font-size: 0.4rem;
		margin: 0.5rem 0 0.25rem 0.5rem;
	}

	.shortcuts-tip{
		color: #a0a0a0;
	    font-size: 0.3rem;
	    margin: 0 0 0.25rem 0.5rem;
	}

	.shortcuts-time{
		color: #494949;
		margin: 0 0 0.25rem 0.5rem;
		font-size: 0.4rem;
	}

	.shortcuts-scope img{
		width: 3.32625rem;
		height: 1.47825rem;
		margin-left: 0.5rem;
	}

	.shortcuts-right{
		margin-top: 0.5rem;
	}

	.shortcut{
		width: 4.22625rem;
		height: 2.7rem;
		box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.shortcut-left .title{
		font-size: 0.4rem;
		color: #131313;
	    font-weight: 700;
	}

	.shortcut-left .time{
		width: 1.8rem;
		height: 0.6rem;
		border-radius: 2rem;
	    border: 1px solid #FD6857;
	    color: #FD6857;
	    text-align: center;
	    line-height: 0.6rem;
	    margin-top: 0.25rem;
	}

	.shortcut-right img{
		width: 1.95rem;
		height: 1.95rem;
		border-radius: 50%;
	}

	/*为您推荐*/
	.recommend{
		margin-top: 1.0rem;
		margin-bottom: 1.5rem;
	}

	.section-img{
		width: 100%;
		text-align: center;
	}

	.section-img>img{
		width: 92%;
		height: 2.25rem;
		margin-top: 0.375rem;
		border-radius: 0.2rem;
	}

	.recommend-list{
		margin-top: 1.0rem;
		padding: 0 0.375rem 0.375rem;
	}

	.normal-content{
		width: 100%;
		height: 4.0rem;
	    border-bottom: 1px solid #E4E4E4;
	    display: flex;
	    margin-top: 0.375rem;
	}

	.left-column{
		position: relative;
	}

	.left-column img{
		width: 2.7rem;
		height: 3.6rem;
		border-radius: 0.2rem;
	}

	.discount{
		width: 1.2rem;
		height: 1.2rem;
		background: linear-gradient(-180deg,#EF6856 0,#FF3165 100%);
		border-radius: 50%;
		position: absolute;
		bottom: 0.75rem;
		right: -0.5rem;
		color: #fff;
		text-align: center;
	}

	.discount .number{
		font-size: 0.4rem;
		font-weight: 700;
		padding-top: 0.125rem;
	}

	.right-column .show-name{
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

	.right-column .show-time{
		font-size: 0.3rem;
		color: #AAA;
		margin-left: 0.75rem;
	}

	.right-column .show-avenue{
		height: 1.10975rem;
		font-size: 0.3rem;
		color: #AAA;
		margin: 0.25rem 0 0 0.75rem;
	}

	.other-detail .left-part{
	    color: #FD6857;
	    border: 1px solid #FD6857;
	    width: 1.35rem;
	    height: 0.47975rem;
	    text-align: center;
	    border-radius: 0.125rem;
	    margin-left: 0.75rem;
	    float: left;
	}

	.other-detail .right-part{
		float: right;
		color: #F2593F;
	}

	.other-detail .right-part span{
		font-size: 0.5rem;
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
/* .router-link-active{
 	width: 0.9rem;
	height: 0.9rem;
  	background: red;
 

  }*/
</style>
