<template>
<div>
   <div class="banner" id="banner">
        <img src="../assets/img/top.png" alt="">
        <img src="../assets/img/splitbar.png" alt="">
        <div class="logo"><img src="../assets/img/logo2.png" alt=""></div>
        <div class="icon-title"><img src="../assets/img/apply/apply.png" alt=""></div>
    </div>
    <div class="apply">
        <div class="container">
            <div class="row">
                <div class="icons">
                    <div class="icon-titles"></div>
                </div>
                <div class="contents" id="apply">
                    <ol>
                        <li>报名时间:2017年11月13日—2018年4月27日</li>
                        <li>报名须知
                            <p v-for="(value,key) in list1" v-bind:key="key">{{list1[key]}}</p>
                        </li>
                        <li>组队方式
                            <p v-for="(value,key) in list2" v-bind:key="key">{{list2[key]}}</p>
                        </li>
                        <li>相关表格
                            <p v-for="(tmp,key) in list3" v-bind:key="key"><a v-bind:href="tmp.thisHref" target="_blank">{{tmp.title}}</a></p>
                        </li>
                        <li>在线报名
                            <div class="button text-left" onclick='window.open("http://tj-fintech.mikecrm.com/uLFQkTO","_self")'></div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Apply',
  data(){
      return{
        list1:[
            "（1）欲参加比赛，请自行访问“链谷杯”首届全国高校区块链应用创新大赛官方网站，在线填写并提交报名表；",
            "（2）需要参考应用场景的参赛选手可下载《区块链应用场景参考》（附件1）；",
            "（3）初赛作品（作品方案文档、作品技术资料）请发送至官方邮箱：liangubei@tj-fintech.com ；",
            "（4）进入决赛的队伍请下载《大赛承诺书》（附件2），并将其带至决赛现场；",
            "（5）提交报名信息后，请添加大赛小助手微信：liangubei 进行报名确认审核，从而进入参赛群获取进一步讯息，也可咨询大赛相关问题；",
            "（6）关注“链谷之声”微信公众号，相关大赛信息将在公众号及时通知。"
            ],
        list2:[
            "（1）每支参赛队伍要求至少3名参赛成员。为了确保竞争实力，建议跨专业组队；",
            "（2）参赛队伍队伍可根据需要邀请1-2名指导老师，但每支队伍至多不能超过2位指导老师。"
        ],
        list3:[
            {title:"附件1.区块链应用场景参考",thisHref:"./static/pdf/scene.pdf"},
            {title:"附件2.大赛承诺书",thisHref:"./static/pdf/promise.pdf"}
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>