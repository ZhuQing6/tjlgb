/* eslint-disable */
var savName=sessionStorage.getItem("savName");
var savPassword=sessionStorage.getItem("savPassword");
console.log(savName,savPassword);
var videos=1;

$("#click1,.bImg1").on("click touchend",
    function(e){
        e.preventDefault();
        if(savName!=null && savPassword!=null){
            $("#video1").modal();
        }else{
            $("#login").modal();
            videos=1;
        }
    }
)

$("#click2,.bImg2").click(
    function(){
        if(savName!=null && savPassword!=null){
            $("#video2").modal();
        }else{
            $("#login").modal();
            videos=2;
        }
    }
)

$(".btn").click(
    function(){
        var name=$("#loginName").val();
        var password=$("#loginPasswod").val();
        console.log(name,password);
        $.ajax({
            url:"/login",
            type:"POST",   //提交的方式
            // dataType:'json',
            // contentType:'application/json',
            data:{ //发送的数据，以JSON数据传递    
                name: name,
                password: password
            },
            success: function(res){   //成功之后执行的函数
                console.log(res[0]["count(*)"])
                if(res[0]["count(*)"]!=0){
                    $("#login").modal('hide');
                    if(videos==1){
                        $("#video1").modal();
                    }else{
                        $("#video2").modal();
                    }
                    if($('.selected').prop('checked')==true){
                        sessionStorage.setItem("savName",name);
                        sessionStorage.setItem("savPassword",password);//sessionsocket保存用户名与密码
                    }
                }else{
                    $(".tishi").text("请输入正确的用户名或密码")
                }
                
            },
            error:function(){
                alert("网络故障")
            }
        });
    }
)
$('#video1').on('hide.bs.modal', function () {
    $("#showVideo1").get(0).pause();
})
$('#video2').on('hide.bs.modal', function () {
    $("#showVideo2").get(0).pause();
})

$("#ul1").on("click","li",function(){  
    // 切换li列表样式  
    $(this).addClass("active");  
    $(this).siblings().removeClass("active");  
    // 获取当前点击li 的下标  
    let index1 = $(this).index() + 1; 
    $("#showVideo1").prop({"src":"/tjgo"+index1+".mp4"});  
}); 

$("#ul2").on("click","li",function(){  
    // 切换li列表样式  
    $(this).addClass("active");  
    $(this).siblings().removeClass("active");  
    // 获取当前点击li 的下标  
    let index2 = $(this).index() + 1; 
    $("#showVideo2").prop({"src":"/tjfabric"+index2+".mp4"});  
}); 