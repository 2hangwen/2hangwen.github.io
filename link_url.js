function create_link_bycss(){
       $("style").eq(0).append("div#menu span div#link_url{float: left;width: 100px;height: 100px;background: deepskyblue;border-radius: 100px;}");
       $("div#menu").append("<span> <div id=link_url ><div style=text-align:center;line-height:100px >好友链接</div> </div></span>");
       $("div#menu span div#link_url").click(function(){$("div#linl_url").toggle()});
       $("div#menu span div#link_url").append("<a href='http://www.pandablessing.com' >pandablessing</a>");
}
