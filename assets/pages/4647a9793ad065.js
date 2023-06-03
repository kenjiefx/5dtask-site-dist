const rx4=strawberry.create("app"); const jk1=rx4.factory,sk8=rx4.service,aq6=rx4.component; jk1('su8',function(){return{root:'http://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});aq6('by3',($scope,$patch,$block)=>{setTimeout(()=>{$block({name:'LoaderAnimation',each:(loader)=>{loader.$element.innerHTML='';document.getElementById('main').style.display='block';}});},1500);});aq6('ut3',($scope,$patch)=>{window.onscroll=function(e){const scrollIndicator=document.getElementById('static_header_scroll_indicator').getBoundingClientRect().top
if(scrollIndicator<-24){document.getElementById('static_header_container').removeAttribute('style')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.setAttribute('style','background-color:#404040;'))}else{document.getElementById('static_header_container').setAttribute('style','background-color:#00000094;color:white;')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.removeAttribute('style'))}}
$scope.isMenuOpen=false
$scope.toggleMenu=(menu)=>{if($scope.isMenuOpen){document.getElementById('static_header_menu_container').removeAttribute('style')
menu.removeClass('is-active')
$scope.isMenuOpen=false}else{document.getElementById('static_header_menu_container').setAttribute('style','margin-left:0px;')
menu.addClass('is-active')
$scope.isMenuOpen=true}}});aq6('vl4',($scope,$patch)=>{$scope.say_hello='Hello World!';});aq6('th2',($scope,$patch,su8)=>{$scope.state='form'
$scope.toNextStep=(button)=>{button.addClass('is-button-loading')
if($scope.taskId.trim()===''||$scope.emailAddress.trim()===''||$scope.refundDescription.trim()===''){document.getElementById('refund_form_error').innerText='Please fill out all the fields above'
button.removeClass('is-button-loading')
return}
fetch(su8.root+"/refund/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task_external_id:$scope.taskId.trim(),email_address:$scope.emailAddress.trim(),description:$scope.refundDescription.trim()})}).then(function(res){return res.json();}).then(function(data){if(!data.hasOwnProperty('refund_internal_id')){document.getElementById('refund_form_error').innerText=data.message??'We encountered technical issue. Please try again later.'
button.removeClass('is-button-loading')
return}
$scope.taskRefundId=data.refund_internal_id
$scope.state='confirmation'
$patch()}).catch(function(error){console.log(error)})}});aq6('iv6',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 