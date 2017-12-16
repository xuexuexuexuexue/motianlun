<template>
	<div class="personal-page">
		 <div class="personal-title">
		 	<router-link to="/mine">
		 		<div class="left-back-icon"></div>
		 	</router-link>
		 	<div class="personal-text">个人资料</div>
		 </div>
		 <div class="main-content">
		 	<div class="profile profile-head">
		 		<div class="label">头像</div>
		 		<div class="value">
		 			<img src="../assets/tou.png">
		 			<div class="right-row"></div>
		 		</div>
		 	</div>
		 	<div class="profile">
		 		<div class="label">昵称</div>
		 		<div class="value">
		 			<div class="check">请选择</div>
		 			<div class="right-row"></div>
		 		</div>
		 	</div>
		 	<div class="profile">
		 		<div class="label">性别</div>
		 		<div class="value">
		 			<div class="sex">男</div>
		 			<div class="right-row"></div>
		 		</div>
		 	</div>
		 	<div class="profile">
		 		<div class="label">生日</div>
		 		<div class="value">
		 			<div class="date">年 /月/日</div>
		 		</div>
		 	</div>
		 	<div class="profile">
		 		<div class="label">居住城市</div>
		 		<div class="value">
		 			<div class="check">请选择</div>
		 			<div class="right-row"></div>
		 		</div>
		 	</div>
		 </div>
		 <div class="profile phone">
	 		<div class="label">手机号</div>
	 		<div class="value">
	 			<div class="phonenum">157****7752</div>
	 		</div>
	 	</div>
	 	<div class="profile-tip">手机号不可修改</div>
	</div>
</template>

<script>
	import reset from '../../static/js/reset.js'
</script>

<style>
	@import '../../static/css/reset.css'
</style>

<style>
/*头部*/
.personal-page{
	height: 100vh;
	background: #F2f2f2;
}

.personal-title{
	height: 1.6rem;
	display: flex;
	align-items: center;
	background: #fff;
	color: #494949;
}

.personal-title .left-back-icon{
	width: 0.65rem;
	height: 0.65rem;
	background: url(../assets/bg.png) -95px -232px no-repeat;
	background-size: 450px 300px;
}

.personal-title .personal-text{
	width: 100%;
	text-align: center;
	font-size: 0.45rem;
	color: #494949;
}

/*信息列表*/
.main-content{
	background: #fff;
	margin-top: 0.25rem;
}

.profile{
	height: 1.4rem;
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    align-items: center;
   	font-size: 0.35rem;
}

.main-content .profile-head{
	height: 2.0rem;
}

.value{
	display: flex;
	align-items: center;
	padding-right: 0.375rem;
}

.label{
	padding-left: 0.375rem;
	font-size: 0.35rem;
}

.main-content .value img{
	width: 1.1rem;
	height: 1.1rem;
}

.main-content .value .right-row{
	width: 0.5rem;
	height: 0.625rem;
	background: url(../assets/bg.png);
	background-size: 450px 300px;
	background-position: -114px -232px;
}

.main-content .check{
	color: #aaa;
}

.phone{
	background: #fff;
	margin-top: 0.25rem;
}

.phone .phonenum{
	color: #aaa;
}

.profile-tip{
	margin: 0.25rem 0 0 0.375rem;
	color: #aaa;
}


</style>