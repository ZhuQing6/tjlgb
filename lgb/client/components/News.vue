<template>
<div>
    <div class="banner" id="banner">
        <img src="../assets/img/top.png" alt="">
        <img src="../assets/img/splitbar.png" alt="">
        <!-- <div class="logo"><img src="../assets/img/logo2.png" alt=""></div> -->
        <div class="icon-title"><img src="../assets/img/news/dynamicstate.png" alt=""></div>
    </div>
    <div class="news">
        <div class="container" id="news">
            <div class="row">
                <div class="titles">关于“链谷杯” :</div>
                <div class="contents">
                    <ul>
                        <li v-for="(tmp,key) in list1" v-bind:key="key"><a v-bind:href="tmp.thisHref">{{tmp.title}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="titles">关于“链谷” :</div>
                <div class="contents">
                    <ul>
                        <li v-for="(tmp,key) in list2" v-bind:key="key"><a v-bind:href="tmp.thisHref">{{tmp.title}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'News',
  data(){
      return{
          list1:[
              {title:"继续出发 | “链谷杯”高校行——第七站 ，南京大学",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484598&idx=1&sn=4c1f300da18471b7865b7a95a39eef94&chksm=f974717dce03f86b4af535faa92d0cd0adbaf4309e892bdafa6f29814a2d3c326ae505a4f2e3#rd"},
              {title:"南大现场精彩回顾，“链谷杯”高校行开学首站圆满结束",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484663&idx=1&sn=e6a3914fb1e888e826a7498cadfe4b23&chksm=f974713cce03f82af475cff8bf38120b1ca0ab93fe3b4d665f87df5f3027a3ebe3ab47373fc5#rd"},
              {title:"“链谷杯”高校行在路上，东南大学现场报道",thisHref:"http://https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484694&idx=1&sn=f01def79951a6015ef7616a1831aead3&chksm=f97470ddce03f9cbbd67038925c8d44bdf46e838ef19f81e3c2c9bb65028faff80a33b41966a#rd"},
              {title:"“链谷杯”高校行第九站，走进南京信息工程大学",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484728&idx=1&sn=5aa5b6c5f5a2db79a839ba3a51703ffc&chksm=f97470f3ce03f9e53c7fed10dedfb0f1491a1469d4e8cd93b53a14109b86c126e5e232daf528#rd"},
              {title:"“链谷杯”高校行走进南航，同学们这样理解区块链——旧时王谢堂前燕，飞入寻常百姓家",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484774&idx=1&sn=a597ae3db3ed396a05d4a45eb2cbb21f&chksm=f97470adce03f9bb9ee1ed92f834655fa4ea8ca3fcf01bd00fb30efb1411bbfdd8c6a4e858c7#rd"},
              {title:"“链谷杯”高校行南京工业大学站开讲啦！",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484788&idx=1&sn=c8603b62741be33f34ba5c787edf4626&chksm=f97470bfce03f9a92fcfae10b94d6fbe334f9c2febe66aa339c7a6bf3e6e377373de3309cc66#rd"},
              {title:"南京高校行圆满收官：“链谷杯”高校行南财现场回顾",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484827&idx=1&sn=9ccde70e79be74cd67d17d1b9d7a4924&chksm=f9747050ce03f946a48ea7c53a27c5e0e3536773b4ef9bf8619127dac3035f6b1e5686f77271#rd"},
              {title:"原来你们是这样的西安邮电大学学子——“链谷杯”高校行第14站精彩现场",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484858&idx=1&sn=34fcf111791b3008271b3b7d03c6575b&chksm=f9747071ce03f967077999dc0f4494032c448bb333370963c15a704e97dd297a91431cad46cf#rd"},
              {title:"极具创业思维的西安交通大学学子们——“链谷杯”高校行第15站现场回顾",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484868&idx=1&sn=e51114c5a044f517c0b62d6d7aa59784&chksm=f974700fce03f91900ce6bfe24d3ee5b0a6a1342264be44a63e011f58db52d09d76387b80dbc#rd"},
              {title:"求知若渴的西安理工大学之夜——“链谷杯”高校行第17站精华回顾",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484881&idx=1&sn=96dca56cd7625df52d348415b001040a&chksm=f974701ace03f90c85e6d99a234175ca929b2116310d7d97473b17c4bc40bf1a8a434b8fa931#rd"},
              {title:"“链谷杯”东北之行：首站沈阳工业大学精彩开讲",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484901&idx=1&sn=8f92fe3c02433129485249811b6482c0&chksm=f974702ece03f938bcf7b5620b58ef734fcb49c6fec65bb041b929ed2dded31e376dccfbff56#rd"},
              {title:"从晴空到夜空，“链谷杯”在路上：沈阳化工大学与东北大学巡讲顺利结束",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484913&idx=1&sn=a4b21666fee134617f36c5b404c94e57&chksm=f974703ace03f92c420348ab2b7bfac56fc7a3835a8ab84e6511c96b42ad3110d94e65494ffd#rd"},
              {title:"穿过黎明追逐黄昏，“链谷杯”脚步不停——哈尔滨工程大学巡讲记",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484923&idx=1&sn=98d4d88a6c3a790abad01cbb43509bcf&chksm=f9747030ce03f926fbec986233f562ea145ddab9a5bae9999a1bc61fad9dee80fd143a663c64#rd"},
              {title:"东北之行收官站：“链谷杯”高校行走进哈尔滨工业大学",thisHref:"https://mp.weixin.qq.com/s?__biz=MzUxMTMzNzYzNg==&mid=2247484930&idx=1&sn=204a38a7fd893db41e7070b782a17c52&chksm=f97473c9ce03fadf84ba90b83ca758345d61b0c44401d690d89db128209beaba4c77e0a37825#rd"},
              {title:"“链谷杯”高校行山西之旅顺利收官，区块链将走进更多高校",thisHref:"http://www.tj-fintech.com/Data/View/177"},
              {title:"“链谷杯”高校行进同济，共探区块链应用场景",thisHref:"http://www.tj-fintech.com/Data/View/176"},
              {title:"区块链高校之旅正式起航，上财西浦完满收官",thisHref:"http://www.tj-fintech.com/Data/View/175"},
              {title:"“链谷杯”首届全国高校区块链应用创新大赛启动",thisHref:"http://www.tj-fintech.com/Data/View/166"}
          ],
          list2:[
              {title:"苏州高铁新城出台发展扶持政策构建区块创新创业高地",thisHref:"http://www.js.xinhuanet.com/2017-12/24/c_1122158797.htm"},
              {title:"苏州高铁新城成全国首个区块链技术黄金试验场",thisHref:"http://www.js.xinhuanet.com/2017-12/21/c_1122148625.htm"},
              {title:"“链谷”区块链政策闭门研讨会在高铁新城顺利召开",thisHref:"http://www.szxc.gov.cn/szxc/InfoDetail/Default.aspx?InfoID=e7e6f039-239c-402c-b727-06822c507579"},
              {title:"打造中国区块链“链谷”，苏州建设中国区块链产业聚集高地",thisHref:"http://www.cnii.com.cn/internetnews/2017-08/17/content_1882670.htm"},
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>