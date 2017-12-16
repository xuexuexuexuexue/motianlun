<template>
	<div class="checkcity-page">
		<div class="checkcity-header">
			<router-link to="/home">
				<div class="icon-back"></div>
			</router-link>
			<div class="title">选择城市</div>
		</div>
		<!-- 城市列表 -->
		<div class="selectCity">
			<div class="cityBox">
				<div class="city_img" style="background-image: url(https://img1.tking.cn/assets/img/2ra53tQTSZ.png)"></div>
				<div class="city_name_wrap">
					<p class="provinceName">
						上海<span>站</span>
					</p>
					<div class="city_list">
						<span class="city_name">上海</span>
						<span class="city_name">浙江</span>
						<span class="city_name">江西</span>
					</div>
				</div>
				<div class="city_selected"></div>
			</div>
			<div class="cityBox">
				<div class="city_img" style="background-image: url(https://img0.tking.cn/assets/img/yAKfFGBX3Z.png)"></div>
				<div class="city_name_wrap">
					<p class="provinceName">
						北京<span>站</span>
					</p>
					<div class="city_list">
						<span class="city_name">北京</span>
						<span class="city_name">黑龙江</span>
						<span class="city_name">吉林</span>
						<span class="city_name">河南</span>
						<span class="city_name">辽宁</span>
						<span class="city_name">山东</span>
						<span class="city_name">内蒙古</span>
						<span class="city_name">山西</span>
						<span class="city_name">天津</span>
						<span class="city_name">河北</span>
					</div>
				</div>
			</div>
			<div class="cityBox">
				<div class="city_img" style="background-image: url(https://img1.tking.cn/assets/img/BHMFshJF7z.png)"></div>
				<div class="city_name_wrap">
					<p class="provinceName">
						南京<span>站</span>
					</p>
					<div class="city_list">
						<span class="city_name">江苏</span>
						<span class="city_name">安徽</span>
					</div>
				</div>
			</div>
			<div class="cityBox">
				<div class="city_img" style="background-image: url(https://img1.tking.cn/assets/img/ysjxMs7DQt.png)"></div>
				<div class="city_name_wrap">
					<p class="provinceName">
						广州<span>站</span>
					</p>
					<div class="city_list">
						<span class="city_name">广东</span>
						<span class="city_name">福建</span>
						<span class="city_name">云南</span>
						<span class="city_name">广西</span>
						<span class="city_name">海南</span>
						<span class="city_name">香港</span>
						<span class="city_name">澳门</span>
					</div>
				</div>
			</div>
			<div class="cityBox">
				<div class="city_img" style="background-image: url(https://img2.tking.cn/assets/img/E7t6ixnTM6.png)"></div>
				<div class="city_name_wrap">
					<p class="provinceName">
						成都<span>站</span>
					</p>
					<div class="city_list">
						<span class="city_name">四川</span>
						<span class="city_name">湖南</span>
						<span class="city_name">湖北</span>
						<span class="city_name">重庆</span>
						<span class="city_name">贵州</span>
						<span class="city_name">甘肃</span>
						<span class="city_name">陕西</span>
						<span class="city_name">青海</span>
						<span class="city_name">西藏</span>
						<span class="city_name">新疆</span>
						<span class="city_name">宁夏</span>
					</div>
				</div>
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
.checkcity-header{
    width: 100%;
	height: 1.25rem;
	border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 5px #ccc;
    display: flex;
    line-height: 1.25rem;
    font-size: 0.425rem;
    color: #494949;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #fff;
}

.checkcity-header .icon-back{
	width: 26px;
    height: 25px;
    margin: 12px 0 0 10px;
    background: url(../assets/bg2.png) 7px -54px no-repeat;
    background-size: 210px 210px;
}

.checkcity-header .title{
    width: 100%;
    text-align: center;
}

/* 城市列表 */
.selectCity .cityBox{
    width: 9.0rem;
    height: 5.95rem;
    background: #FFF;
    box-shadow: 1px 4px 8px 0 rgba(242,89,63,.2);
    border-radius: 3px;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    position: relative;
}

.selectCity .cityBox:first-child{
    margin-top: 1.75rem;
}

.selectCity .cityBox .city_img{
    width: 6.35rem;
    height: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 1.0rem;
    left: 0.5rem;
}

.selectCity .cityBox .city_name_wrap{
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
}

.selectCity .cityBox .city_name_wrap .provinceName{
    font-size: 0.45rem;
    color: #F2593F;
    letter-spacing: -.19px;
    text-align: center;
}

.selectCity .cityBox .city_name_wrap .provinceName span{
    display: inline-block;
    border-bottom: 2px solid #F2593F;
}

.selectCity .cityBox .city_name_wrap .city_list{
    width: 2.1rem;
    color: #494949; 
    margin-top: 0.25rem;
    line-height: 0.5rem;
}

.selectCity .cityBox .city_name_wrap .city_list span{
    width: 1.0rem;
    height: 0.625rem;
    display: inline-block;
    text-align: left;
}

.selectCity .cityBox .city_selected{
    width: 1.1rem;
    height: 0.975rem;
    background: url(../assets/select.png);
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>