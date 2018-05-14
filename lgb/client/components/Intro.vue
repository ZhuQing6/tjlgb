<template>
  <div>
    <div class="banner" id="banner">
        <img src="../assets/img/top.png" alt="">
        <img src="../assets/img/splitbar.png" alt="">
        <div class="logo"><img src="../assets/img/logo2.png" alt=""></div>
        <div class="icon-title"><img src="../assets/img/intro/iconcompetition.png" alt=""></div>
    </div>
    <div class="intro">
        <div class="floor1">
            <div class="container">
                <div class="row">
                    <div class="icons text-center">参赛对象</div>
                    <div class="contents">
                        <div class="row text-center">
                            <img src="../assets/img/intro/iconstudent.png" alt="" style="width:6%;">
                            <img src="../assets/img/intro/+.png" alt="" style="margin:0 5%;width:4%;">
                            <img src="../assets/img/intro/iconteather.png" alt="" style="width:6%;">
                        </div>
                        <div class="row text-center" style="margin-top:3%;">全国高校师生团队</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor2">
            <div class="container">
                <div class="row">
                    <div class="icons text-center">大赛福利</div>
                    <div class="contents">
                        <ul>
                            <li v-for="(value,key) in list1" v-bind:key="key">{{list1[key]}}</li>
                            <ol class="sul">
                                <li v-for="(value,key) in list2" v-bind:key="key">{{list2[key]}}</li>
                            </ol>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor3">
            <div class="container">
                <div class="row">
                    <div class="icons text-center">大赛日程</div>
                    <div class="contents">
                        <img src="../assets/img/intro/tabledasairicheng.png" alt="" style="width:100%;margin-top:1%;">
                    </div>
                </div>
            </div>
        </div>
        <div class="floor4">
            <div class="container">
                <div class="row">
                    <div class="icons text-center">奖励设置</div>
                    <div class="contents">
                        <ol>
                            <li v-for="(value,key) in list3" v-bind:key="key">{{list3[key]}}</li>
                            <li>奖项设置
                                <p>本次区块链应用创新大赛设置一、二、三等奖，总奖金池29万元人民币。</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor5">
            <div class="container">
                <div class="row text-center contents">
                    <div class="col-xs-3" style="border-right:1px solid #fff;padding:2% 0;">
                        <img src="../assets/img/intro/award1.png" alt="" style="width:28%;">
                        <div style="margin:32% 0 15% 0">一等奖</div>
                        <div>100,000元+证书</div>
                        <div style="margin-top:35%">1队</div>
                    </div>
                    <div class="col-xs-3" style="border-right:1px solid #fff;padding:2% 0;">
                        <img src="../assets/img/intro/award2.png" alt="" style="width:28%;">
                        <div style="margin:32% 0 15% 0">二等奖</div>
                        <div>50,000元+证书</div>
                        <div style="margin-top:35%">2队</div>
                    </div>
                    <div class="col-xs-3" style="border-right:1px solid #fff;padding:2% 0;">
                        <img src="../assets/img/intro/award3.png" alt="" style="width:28%;">
                        <div style="margin:32% 0 15% 0">三等奖</div>
                        <div>20,000元+证书</div>
                        <div style="margin-top:35%">3队</div>
                    </div>
                    <div class="col-xs-3" style="padding:2% 0;">
                        <img src="../assets/img/intro/award4.png" alt="" style="width:28%;">
                        <div style="margin:32% 0 15% 0">四等奖</div>
                        <div>5,000元+证书</div>
                        <div style="margin-top:35%">6队</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor6">
            <div class="container">
                <div class="row text-center contents">
                    <img src="../assets/img/intro/iconattention.png" alt="" style="margin-bottom:2%;width:5%;">
                    <p>备注：奖励的设置会根据报名人数和参赛选手的总体数量做调整</p>
                </div>
            </div>
        </div>
        <div class="floor7">
            <div class="container">
                <div class="row contents">
                    5. 大赛评奖流程
                    <p>（1）初评</p>
                    <p>邀请评委会集中初评，筛选出入围作品，评审专家由研究院聘请的专业导师组成。</p>
                    <p>（2）决赛</p>
                    <p>经初评后，邀请优胜的参赛队伍在大赛现场进行作品演示，并邀请评委会老师对入围选手进行现场答辩，现场打分，后统计分数评出获奖作品。</p>
                </div>
            </div>
        </div>
        <div class="floor8">
            <div class="container">
                <div class="row">
                    <div class="icons text-center">竞赛规则</div>
                    <div class="contents" style="margin-top:7%;">
                        <ol>
                            <li>作品评选
                                <p>各参赛队伍可自行选择适合的应用场景，并发开相应的创新应用。参赛作品将根据评委评定得分依次排序，排名前15的参赛队伍为优胜团队，并进入全国总决赛。</p>
                            </li>
                            <li>现场决赛
                                <p>（1） 入围的队伍随机抽取答辩顺序，并派出代表参赛，展示环节时长15分钟，答辩环节10分钟；</p>
                                <p>（2） 现场评分采用评委现场打分，去掉最低得分与最高得分，加权平均（计分时小数点保留2位数），即为队伍的最终得分；</p>
                                <p>（3） 按照参赛队伍所得到的最终成绩，从高分到低分排列参赛队伍的名次（一等奖1名，二等奖2名，三等奖3名）；</p>
                                <p>（4） 由评审团商议决定“优秀创新奖”的获胜团队。</p>
                            </li>
                            <li>参赛提交内容
                                <p>（1） 作品方案文档（包括背景、意义、内容设计）；</p>
                                <p>（2） 作品技术资料（包括流程图、源代码、数据结构等）；</p>
                                <p>（3） 作品演示（包括PPT及Demo视频，仅决赛阶段作为评分项目）。</p>
                            </li>
                            <li>评分标准</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor9">
            <div class="container">
                <div class="row text-center">
                    <div class="icons text-center">初评评分标准</div>
                    <div class="contents">
                        <div class="col-xs-6 col-md-3" v-for="(tmp,key) in list4" v-bind:key="key">
                            <div class="juniorGrade">
                                <img src="../assets/img/intro/plan.png" alt="">
                                <div style="margin:12% 0;">{{tmp.numb}}</div>
                                <div class="dir"></div>
                                <div style="margin:10% 0;">{{tmp.sub1}}</div>
                                <div>分值<span style="color:#4f96bd;">{{tmp.count}}</span></div>
                                <div style="margin:10% 0 3% 0;">参考点</div>
                                <div style="color:#4f96bd; width:90%;margin:0 5%;">{{tmp.sub2}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor10">
            <div class="container">
                <div class="row text-center">
                    <div class="icons text-center" style="color:#fff;">决赛评分标准</div>
                    <div class="contents">
                        <div class="col-xs-6 col-md-3" v-for="(tmp,key) in list5" v-bind:key="key">
                            <div class="ultimateGrade">
                                <img src="../assets/img/intro/plan2.png" alt="" style="width:25%;">
                                <div style="margin:12% 0;">{{tmp.numb}}</div>
                                <hr>
                                <div style="margin:10% 0;">{{tmp.sub1}}</div>
                                <div>分值<span>{{tmp.count}}</span></div>
                                <div style="margin:10% 0 3% 0;">参考点</div>
                                <div style="width:90%;margin:0 5%;">{{tmp.sub2}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="floor11">
            <div class="container">
                <div class="row">
                    <div class="icons text-center">专家评委</div>
                    <div class="contents persons">
                        <pre v-for="(tmp,key) in list6" v-bind:key="key"><span>{{tmp.name}}</span>     {{tmp.sub}}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'Intro',
  data () {
    return {
      msg: '',
      list1:[
          "所有报名参赛团队均可获得线上培训的机会，以及区块链技术与应用的校园宣讲入门卷资料。",
          "对于组织参赛的团队或个人，根据所发动的有效参赛团队数目排名，前15名将由大赛方赞助旅费前往苏州“链谷”参观考察。",
          "此外，按照报名时间顺序，能够完整组队、且提交明确场景选题的前15位报名团队将获得以下福利："
      ],
      list2:["免费专业培训16小时课程（价值人民币5,000元）；","免费技术培训资料赠送；","特聘大咖导师面对面指导；","近距离考察顶尖区块链企业；","优秀作品可直接获得孵化、投资机会。"],
      list3:[
          "所有参加并最终成功提交完整作品的团队成员均可获得大赛参赛证明；",
          "进入决赛的参赛队可选派队员及指导老师亲临现场参赛，相关差旅费用均由大赛组委会承担（差旅报销标准将另行通知）；",
          "进入决赛的学生，可获得参加相关区块链企业的面试机会，一经通过即可获得实习机会，实习结束后公司将根据其表现考虑是否录取；"
      ],
      list4:[
          {numb:"评分项目1",sub1:"作品完成度",count:"20",sub2:"完整的产品或演示版本等"},
          {numb:"评分项目2",sub1:"创新性",count:"30",sub2:"应用创新，技术进步"},
          {numb:"评分项目3",sub1:"技术性",count:"30",sub2:"需求文档、测源代码、数据结构、产品原型"},
          {numb:"评分项目4",sub1:"商业前景",count:"20",sub2:"具备市场需求，与高铁新城场景的结合度"}
      ],
      list5:[
          {numb:"评分项目1",sub1:"创新性",count:"30",sub2:"应用创新，技术进步"},
          {numb:"评分项目2",sub1:"技术性",count:"30",sub2:"需求文档、测源代码、数据结构、产品原型"},
          {numb:"评分项目3",sub1:"商业前景",count:"20",sub2:"具备市场需求，与高铁新城场景的结合度"},
          {numb:"评分项目4",sub1:"现场陈述及答辩",count:"20",sub2:"商业及技术陈述，答辩质量"}
      ],
      list6:[
          {name:"马小峰",sub:"苏州同济区块链研究院院长，同济大学大数据与网络安全研究中心常务副主任"},
          {name:"周   平",sub:"工信部电子技术标准化研究院，软件评估中心主任。工信部区块链技术和产业发展论坛秘书长"},
          {name:"魏   凯",sub:"中国信息通信研究院技术与标准所移动互联网与大数据部副主任"},
          {name:"贺海武",sub:"中国科学院计算机网络信息中心 (CNIC/CAS)“百人计划”研究员"},
          {name:"白   硕",sub:"前上海证券交易所副总裁CTO"},
          {name:"李   鸣",sub:"工信部电子技术标准化研究院，软件评估中心区块链研究室主任"},
          {name:"卿苏德",sub:"中国信息通信研究院高级工程师"},
          {name:"夏   勇",sub:"IBM全球技术研究院院士"},
          {name:"张一锋",sub:"中钞智能卡研究院院长、数字货币和区块链领域专家"},
          {name:"李雪峰",sub:"众安科技CTO"},
          {name:"蔡   栋",sub:"万达网络科技集团总裁助理兼首席架构师、大数据中心总经理"},
          {name:"易   梅",sub:"海航科技集团技术研究院院长"},
          {name:"姚辉亚",sub:"微众银行创新研究负责人，金融区块链联盟(深圳)副秘书长"},
          {name:"徐义吉",sub:"前蚂蚁金服区块链平台技术负责人，Nebulas发起人，中国区块链社区缔造者"},
          {name:"吴锋海",sub:"联动优势副总裁"},
          {name:"陈龙强",sub:"京东金融战略研究部研究总监"},
          {name:"周   钰",sub:"中国银联电子支付研究院高级主管"},
          {name:"邬敏炜",sub:"上海银行科技部副总经理"},
          {name:"程晓松",sub:"中国外汇交易中心总经理助理"},
          {name:"张   哲",sub:"奥马电器副总裁、数字钱包执行董事"},
          {name:"糜万军",sub:"上海经信委顾问，上海经尔纬数据技术有限公司创始人"},
          {name:"邓   迪",sub:"太一云科技董事长"},
          {name:"董   宁",sub:"前IBM亚太区IT经济学高级顾问，现任智链科技CEO"},
          {name:"季宙栋",sub:"万达网络科技集团先进技术研究中心总经理"},
          {name:"余文兵",sub:"欧冶金融动产经营部副总经理"},
          {name:"达鸿飞",sub:"分布科技CEO"},
          {name:"杜   宇",sub:"万向区块链实验室负责人"},
          {name:"夏   平",sub:"翼帆董事长兼国际华人科技工商协会副主席"},
          {name:"陈   剑",sub:"IBM中国实验室高级架构师"},
          {name:"刘   胜",sub:"联动优势科技有限公司首席架构师"},
          {name:"沈陶磊",sub:"雷盈网络科技（上海）有限公司创始人兼CEO"},
          {name:"曾林钏",sub:"金丘股份区块链负责人"},
          {name:"曹   寅",sub:"能源区块链实验室创始合伙人"},
          {name:"钟馥百",sub:"前蚂蚁金服区块链平台部架构师"},
          {name:"马昊伯",sub:"北京好扑信息科技有限公司创始人兼CEO"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>