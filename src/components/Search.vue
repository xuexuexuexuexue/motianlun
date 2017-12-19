<template>
	<div class="search-page">
		<div class="search-row">
			<form>
				<input type="search" placeholder="搜索明星、演出、场馆" name="" class="search-input" v-model="title"  @keyup="search">
			</form>
			<div class="search-icon"></div>	
			<router-link to="/home" class="search-option">取消</router-link>
		</div>
		<div class="section-name">
			历史搜索
			<div class="clear">清除</div>
		</div>
		<div class="section-record">
			<p>没有历史记录！</p>
		</div>
		<div class="section-name">热门搜索</div>
		<div class="section-content">
			<div class="keyword-tag" v-for="item in showNamesList">{{ `${item.keyword}` }}</div>
		</div>
	</div>
</template>

<script>
	import reset from '../../static/js/reset.js'

	export default {
		data(){
			return {
				showNamesList: [],
				title:''
			}
		},
		created(){
			// 使用axios插件请求数据
			this.$http.get("./static/data/showNames.json", {}).then((res)=>{
				this.showNamesList = res.data.result.data;
			});

		}
		// methods:{
		// 	search(){
		// 		var _self = this;
		// 		this.$http.get("https://m.tking.cn/prodapi/page/index",{offset:1,length:10,keyword:_self.title}).then((res)=>{
		// 			console.log(_self .title)
		// 		// this.showNamesList = res.data.result.data;
		// 	});
		// 	}
		// }
	}
	
</script>

<style>
	@import '../../static/css/reset.css'
</style>

<style>
	/*搜索框*/
	.search-row{
		height: 1.375rem;
		font-size: 0.35rem;
		background-color: #fff;
	    border-bottom: 1px solid #ccc;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}

	.search-row .search-input{
		width: 7.318rem;
		height: 0.75rem;
		line-height: 0.75rem;
	    background-color: #EDEDED;
	    border: none;
	    border-radius: 0.75rem;
	    padding-left: 0.75rem;
	    position: relative;
	}

	.search-row .search-icon{
	    background-image: url(../assets/search.png);
		background-size: 0.35rem 0.4rem;
	    width: 0.53975rem;
	    height: 0.75rem;
	    background-repeat: no-repeat;
	    background-position: left center;
	    position: absolute;
	    right: 2.1rem;
	    top: 0.3rem;
	}

	.search-row .search-option{
		width: 1.06675rem;
		height: 0.75rem;
		text-align: center;
		line-height: 0.75rem;
		font-size: 0.35rem;
		color: #777;
	    margin-left: 0.375rem;
	}

	/*历史搜索*/
	.section-name{
		height: 1.6rem;
	    color: #777;
	    background-color: #EDEDED;
	    line-height: 1.6rem;
	    padding-left: 0.5rem;
	    font-size: 0.35rem;
	}

	.section-name .clear{
	    float: right;
	    padding-right: 0.5rem;
	}

	/*历史记录*/
	.section-record{
	    height: 1.075rem;
	    line-height: 1.075rem;
	    padding-left: 0.5rem;
	} 

	.section-content .keyword-tag{
	    padding: 0.2rem 0.575rem;
	    border-radius: 0.1rem;
	    border: 1px solid #E4E4E4;
	    display: inline-block;
	    margin-top: 0.375rem;
	    margin-left: 0.375rem;
	}
</style>