const tr3=strawberry.create("app"); const ic4=tr3.factory,ps3=tr3.service,ty8=tr3.component; ic4('hn2',function(){return{root:'https://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});ty8('lr1',($scope,$patch,$block)=>{setTimeout(()=>{$block({name:'LoaderAnimation',each:(loader)=>{loader.$element.innerHTML='';document.getElementById('main').style.display='block';}});(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.crossOrigin='anonymous',e.nonce='iTsefUjH',e.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=273815325298461&autoLogAppEvents=1";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();},1500);});ty8('ah2',($scope,$patch)=>{window.onscroll=function(e){const scrollIndicator=document.getElementById('static_header_scroll_indicator').getBoundingClientRect().top
if(scrollIndicator<-24){document.getElementById('static_header_container').removeAttribute('style')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.setAttribute('style','background-color:#404040;'))}else{document.getElementById('static_header_container').setAttribute('style','background-color:#1d1f27 ;color:white;')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.removeAttribute('style'))}}
$scope.isMenuOpen=false
$scope.toggleMenu=(menu)=>{if($scope.isMenuOpen){document.getElementById('static_header_menu_container').removeAttribute('style')
menu.removeClass('is-active')
$scope.isMenuOpen=false}else{document.getElementById('static_header_menu_container').setAttribute('style','margin-left:0px;')
menu.addClass('is-active')
$scope.isMenuOpen=true}}});ty8('qo9',($scope,$patch)=>{$scope.say_hello='Hello World!';});ty8('hs9',($scope,$patch,hn2)=>{$scope.state='form'
$scope.toNextStep=(button)=>{button.addClass('is-button-loading')
if($scope.taskId.trim()===''||$scope.emailAddress.trim()===''||$scope.refundDescription.trim()===''){document.getElementById('refund_form_error').innerText='Please fill out all the fields above'
button.removeClass('is-button-loading')
return}
fetch(hn2.root+"/refund/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task_external_id:$scope.taskId.trim(),email_address:$scope.emailAddress.trim(),description:$scope.refundDescription.trim()})}).then(function(res){return res.json();}).then(function(data){if(!data.hasOwnProperty('refund_internal_id')){document.getElementById('refund_form_error').innerText=data.message??'We encountered technical issue. Please try again later.'
button.removeClass('is-button-loading')
return}
$scope.taskRefundId=data.refund_internal_id
$scope.state='confirmation'
$patch()}).catch(function(error){console.log(error)})}});ty8('oz1',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 