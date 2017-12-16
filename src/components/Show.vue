<template>
		<div class="showInfo-page">
    <div class="showInfo-title">
      <div class="showInfo-header">
        <div class="site-dropdown">
          <div class="cur-site">北京</div>
          <div class="triangle"></div>
        </div>
        <form>
          <router-link to="/search">
          <input type="search" placeholder="搜索明星、演出、场馆" name="" class="search-input">
          </router-link>
        </form>
        <div class="search-icon"></div>
      </div>
      <div class="showInfo-nav">
        <div class="list-type-nav">
          <div class="type-nav">全部</div>
          <div class="type-nav">演唱会</div>
          <div class="type-nav">话剧歌剧</div>
          <div class="type-nav">体育赛事</div>
          <div class="type-nav">音乐会</div>
          <div class="type-nav">儿童亲子</div>
          <div class="type-nav">舞蹈芭蕾</div>
          <div class="type-nav">展览休闲</div>
          <div class="type-nav">曲艺杂谈</div>
        </div>
      </div>
      <div class="filters">
        <div class="filter">
          按热度
          <span class="arrow"></span>
        </div>
        <div class="filter">
          全部时间
          <span class="arrow"></span>
        </div>
      </div>
    </div>
    <div  class="recommend-list">
      <!-- <router-link to="/showinfo"> -->
        <div class="normal-content" v-for="item in showInfo" @click="changeDetail(item.showOID)">
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
    <footer>
        <router-link to="/home">
            <div class="footer-icon"></div>
            <p class="footer-name">精选</p>
        </router-link>
        <router-link to="/show">
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
              showInfo: []
          }
        },
        created(){
            // 使用axios插件请求数据
            this.$http.get("./static/data/showInfo.json",{}).then((res)=>{
              this.showInfo = res.data.result.data;
            });
        },
				methods:{
					// 路由编程式传参  在方法中进行路由跳转，并传递参数
		            changeDetail(showOID){
		               this.$router.push("./showinfo/"+showOID)
				   }
				}
  	}
</script>

<style>
   @import '../../static/css/reset.css'
</style>

<style>
.showInfo-title{
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 100;
}

/*演出列表头部*/
.showInfo-header{
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.site-dropdown{
  display: flex;
}

.site-dropdown .cur-site{
  font-size: 0.35rem;
  color: #282828;
}

.site-dropdown .triangle{
    background-size: 300px 200px;
    width: 0.25rem;
    height: 0.25rem;
    background-image: url(../assets/bg.png);
    background-position: -20px -160px;
    margin: 0.2rem 0 0 0.25rem;
}

.search-input{
  width: 7.318rem;
  height: 0.75rem;
  line-height: 0.75rem;
  background-color: #EDEDED;
  border: none;
  border-radius: 0.75rem;
  padding-left: 1rem;
  position: relative;
  font-size: 0.3rem;
  color: #aaa;
}

.showInfo-header .search-icon{
    background-image: url(../assets/search.png);
    background-size: 0.35rem 0.4rem;
    width: 0.53975rem;
    height: 0.75rem;
    background-repeat: no-repeat;
    background-position: left center;
    position: absolute;
    left: 2.7rem;
    top: 0.2rem;
}

/*导航*/
.showInfo-nav{
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid #E4E4E4;
    color: #494949;
    font-size: 0.35rem;
}

.showInfo-nav .list-type-nav{
  width: 180%;
  display: flex;
}

.showInfo-nav .type-nav{
  width: 1.65rem;
  height: 1.5rem;
  margin-right: 0.25rem;
}

/*分类菜单*/
.filters{
  height: 1.2rem;
  border-bottom: 1px solid #E4E4E4;
  display: flex;
  align-items: center;
}

.filters .filter{
  width: 50%;
  text-align: center;
  font-size: 0.35rem;
  border-right: 1px solid #E4E4E4;
}

.filters .filter .arrow{
  border-top: 4px solid #333;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    position: relative;
    left: 10px;
    display: inline-block;
    top: -.25em;
}

/*歌曲列表*/
.showInfo-page .recommend-list{
  margin-top: 1.0rem;
  margin-bottom: 1.5rem;
  padding: 0 0.375rem 0.375rem;
  margin-top: 4.5rem;
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
</style>
