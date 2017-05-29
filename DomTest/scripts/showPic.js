/**
 * Created by 叶显明 on 2017/5/29.
 */

function showPic(whichpic){
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}



/*function countBodyChildren(){
    var x=document.getElementsByTagName("body")[0].childNodes;

  /!*!//打印body的nodeType的属性值
      alert(x.nodeType);

    //打印所有body子节点的nodeType属性值
    for(var y=0;y<x.length;y++){
        alert(x[y].nodeType);
    }*!/
}
window.onload=countBodyChildren;*/
