<template>
<div>
    <div class="banner" id="banner">
        <img src="../assets/img/top.png" alt="">
        <img src="../assets/img/splitbar.png" alt="">
        <div class="logo"><img src="../assets/img/logo2.png" alt=""></div>
        <div class="icon-title"><img src="../assets/img/training/cultivate.png" alt=""></div>
    </div>
    <div class="training">
        <div class="container" id="training">
            <div class="row">
                <div class="contents">
                    {{msg}}
                    <!-- <br><br>培训宣讲视频即将上传，敬请期待。 -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-md-3">
                    <div class="videoLogo">
                        <img src="../assets/img/training/video.png" alt="" class="bImg1">
                        <img src="../assets/img/training/btn.png" alt="" id="click1" data-toggle="modal" v-on:click.prevent="showlogin1"><!-- data-target="#login"-->
                    </div>
                    <div class="videoTitle">课程一 : GO语言开发</div>
                </div>
                <div class="col-xs-6 col-md-3">
                    <div class="videoLogo">
                        <img src="../assets/img/training/video.png" alt="" class="bImg2">
                        <img src="../assets/img/training/btn.png" alt="" id="click2" data-toggle="modal" v-on:click.prevent="showlogin2">
                    </div>
                    <div class="videoTitle">课程二 : Fabric</div>
                </div>
            </div>
            <div class="modal fade" tabindex="-1" role="dialog" id="login" data-backdrop="static" data-keyboard="false" style="display: none;">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title">用户登录</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <span class="tishi"></span>
                                <input type="text" class="form-control" id="loginName" placeholder="用户名" v-model="uname">
                                <input type="password" class="form-control" id="loginPasswod" placeholder="密码" v-model="upwd">
                                <input type="checkbox" class="selected"/>
                                <span style="font-size:14px;">下次自动登录</span>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn"  data-toggle="modal"  v-on:click.prevent="login">登录</button><!-- data-target="#video"-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" tabindex="-1" role="dialog" id="video1" data-backdrop="static" data-keyboard="false">
                <div class="modal-video" role="document" style="min-height:300px;">
                    <div class="modal-content">
                        <div class="innerContent">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click.prevent="close1">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div style="color:#4E96BD">课程一 : GO语言开发</div>
                            <video src="/tjvideogo?index=1" controls poster="../assets/img/training/video.png" id="showVideo1"></video>
                            <ul class="courseTitle" id="ul1"  v-on:click.prevent="selectV1">
                                <li class="active">GO语言开发1 : 第1-5章</li>
                                <li>GO语言开发2 : 第6-11章</li>
                                <li>GO语言开发3 : 第12-16章</li>
                            </ul>
                            <div style="clear:both;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" tabindex="-1" role="dialog" id="video2" data-backdrop="static" data-keyboard="false">
                <div class="modal-video" role="document" style="min-height:300px;">
                    <div class="modal-content">
                        <div class="innerContent">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click.prevent="close2">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div style="color:#4E96BD">课程二 : Fabric</div>
                            <video src="/tjvideofabric?index=1" controls poster="../assets/img/training/video.png" id="showVideo2"></video>
                            <ul class="courseTitle"  id="ul2" v-on:click.prevent="selectV2">
                                <li class="active">Fabric开发1 : 第1-2章</li>
                                <li>Fabric开发2 : 第3章</li>
                                <li>Fabric开发3 : 第4章</li>
                                <li>Fabric开发4 : 第5-6章</li>
                                <li>Fabric开发5 : 第7-8章</li>
                            </ul>
                            <div style="clear:both;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Training',
  data () {
    return {
      uname:'',
      upwd:'',
      msg: '为了给参赛队伍作品提供指导与参考，此次“链谷杯”首届全国高校区块链应用创新大赛的承办方苏州同济区块链研究院，将为参赛队伍提供线上培训视频与资料，以及实地考察学习“链谷”众创空间区块链团队及企业的机会，届时将由区块链项目负责人向参赛队员进行专业的项目培训。',
      videos:null
    }
  },
  methods:{
    showlogin1:function(){
        var savName=sessionStorage.getItem("savName");
        var savPassword=sessionStorage.getItem("savPassword");
        if(savName!=null && savPassword!=null){
            $("#video1").modal();
        }else{
            $("#login").modal();
            console.log(this.videos)
            this.videos=1;
        }
    },
    showlogin2:function(){
        var savName=sessionStorage.getItem("savName");
        var savPassword=sessionStorage.getItem("savPassword");
        if(savName!=null && savPassword!=null){
            $("#video2").modal();
        }else{
            $("#login").modal();
            this.videos=2;
        }
    },
    login:function(){
        // var name=$("#loginName").val();
        // var password=$("#loginPasswod").val();
        console.log(this.uname,this.upwd);
        $.ajax({
            url:"/login",
            type:"POST",   //提交的方式
            // dataType:'json',
            // contentType:'application/json',
            data:{ //发送的数据，以JSON数据传递    
                name: this.uname,
                password: this.upwd
            },
            success: (res)=>{   //成功之后执行的函数
                console.log(res[0]["count(*)"])
                if(res[0]["count(*)"]!=0){
                // if(name=='qw'&& password=='123'){
                    $("#login").modal('hide');
                    if(this.videos==1){
                        $("#video1").modal();
                    }else{
                        $("#video2").modal();
                    }
                    if($('.selected').prop('checked')==true){
                        sessionStorage.setItem("savName",this.uname);
                        sessionStorage.setItem("savPassword",this.upwd);//sessionsocket保存用户名与密码
                    }
                }else{
                    $(".tishi").text("请输入正确的用户名或密码")
                }   
            },
            error:function(){
                alert("网络故障")
            }
        });
    },
    close1:function(){
        $('#video1').on('hide.bs.modal', function () {
            $("#showVideo1").get(0).pause();
        })
    },
    close2:function(){
        $('#video2').on('hide.bs.modal', function () {
            $("#showVideo2").get(0).pause();
        })
    },
    selectV1:function(){
        $("#ul1").on("click","li",function(){  
        // 切换li列表样式  
            $(this).addClass("active");  
            $(this).siblings().removeClass("active");  
            // 获取当前点击li 的下标  
            let index1 = $(this).index() + 1; 
            // $("#showVideo1").prop({"src":"/tjgo"+index1+".mp4"});  
            $("#showVideo1").prop({"src":"/tjvideogo?index="+index1});
        }); 
    },
    selectV2:function(){
        $("#ul2").on("click","li",function(){  
            // 切换li列表样式  
            $(this).addClass("active");  
            $(this).siblings().removeClass("active");  
            // 获取当前点击li 的下标  
            let index2 = $(this).index() + 1; 
            // $("#showVideo2").prop({"src":"/tjfabric"+index2+".mp4"});  
            $("#showVideo2").prop({"src":"/tjvideofabric?index="+index2}); 
        }); 
    }
  },
//   mounted(){close1,close2,selectV1,selectV2事件}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>