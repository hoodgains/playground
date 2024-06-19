var overlayblocker = `
<div style="position:absolute;
	height:100%;width: 100%;
    background: rgba(200, 200, 200, 0.3);
	top:0;
    z-index: 999;"
	></div>
`;
var footer = `<div style='position:fixed;
	bottom:30px;
	line-height:30px;
	background:rgba(200,200,200,0.8);
	width:100%;
	text-align:center'
    >content is locked, <a class="shaker">click to unlock</a></div>`;
	
var injectF = ()=>{
  var target = $(".direct-print-settings-content");
  if(target.length > 0){
	var $overlayblocker = $(overlayblocker);
	$overlayblocker.appendTo(target);
    var $footer = $(footer);
	$footer.appendTo(target);
	$overlayblocker.click(()=>{
		$("a.shaker").addClass("animate__animated animate__shakeX");
	});
  }else{
    console.log("no")
  }
}
setTimeout(function() {
  injectF()
}, 5000);