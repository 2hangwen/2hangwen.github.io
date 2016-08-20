       function add_loghtml(path,text,img){
       	  //产生随机浮点，然后转为整形，为rgb（不是rgba）取色做准备
           var r=parseInt(Math.random()*2);
           var g=parseInt(Math.random()*255);
           var b=255;
           var a=parseInt(Math.random()*100);
           var rgb=" background: linear-gradient(to right,#ffffff,rgb("+r+","+g+","+b+")) ";
           //添加hr标签，一条线
           var line_hr="<hr width="+a+"% align=left style='background-color:rgb("+r+","+g+","+b+") ' //>"
          // console.log(rgb);
           var tag="<br/><a target=view_window  style=text-decoration: none href="+path+"><img style=width:40%;height=20% data-title="+text+" src="+img+"></a>";
          // console.error(tag);
          //区分log与issues
          // if(tag.indexOf("some_log") > 0){
           	$("div#log").append(tag);
          // }else{
          //      $("div#issues").append(tag);
          // }
       }


  //获取加载了iframe里的内容  
  function get_iframe(t) {
            var key = "iframe#" + t;
            var tit="";
            var img="";
            //console.log($(key).contents().find("title").prop("text"));
            if($(key).contents().find("h1").eq(0).text() == "404" ){
               $(key).remove();
               //return 0;
            }else{
             //获取iframe的document,查找title标签并获取内容，这里用了？：;	
              var tit = $(key).contents().find("title").length ? $(key).contents().find("title").prop("text") : false;
              var img = $(key).contents().find("img").length ? $(key).contents().find("img").eq(0).prop("src") : "2012.jpg";
              console.log(img);
             // if (tit){
              // alert(tit);
               add_loghtml($(key).prop("src"),tit,img);
               //清空iframe里的数据
               //$(key).prop("src","");
               $(key).remove();
            //  }
            } 
  }


function read_log(){
  for(i=1;i<30;++i){
     var filename=i+".html";
     var tag="<iframe id="+i+" src=some_log/"+filename+" onload=get_iframe(this.id)  style=display:none ><iframe>";
     console.log(tag);
    // $("body").append(tag);
     $(tag).insertBefore("iframe#music163");
  }
} 

$(function(){
  read_log();
  
 })
