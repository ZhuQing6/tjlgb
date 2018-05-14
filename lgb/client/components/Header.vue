<template>
    <div class="navbar navbar-fixed-top" id="header">
        <div class="navbar-header">
            <a href="#"><img src="../assets/img/logo.png" alt=""></a>
            <a class="navbar-toggle" data-toggle="collapse" href="#menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>
        <div id="menu" class="collapse  navbar-collapse">
            <ul class="nav navbar-nav" id="headerLi">
                <li><router-link to="/">首页</router-link></li><!--<a v-bind:href="href" v-bind:class="{active: isActive }">-->
                <li><router-link to="/intro">关于大赛</router-link></li>
                <li><router-link to="/training">项目培训</router-link></li>
                <li><router-link to="/news">大赛动态</router-link></li>
                <li><router-link to="/apply">大赛报名</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Header',
  methods:{
    // select:function(){    
    // }
  },
  mounted(){
        $("#headerLi").on("click","li",function(){  
            // 切换li列表样式  
            $(this).addClass("active");  
            $(this).siblings().removeClass("active");
            $("#menu").removeClass("in");
        }); 
  }
//   props: {//页面跳转及添加class样式
//     href: String,
//     required: true
//   },
//   computed: {
//     isActive () {
//     return this.href === window.location.pathname
//     }
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
