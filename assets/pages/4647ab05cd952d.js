const dx2=strawberry.create("app"); const wf3=dx2.factory,fn6=dx2.service,aa1=dx2.component; wf3('cn9',function(){return{root:'https://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});aa1('fv9',($scope,$patch,$block)=>{setTimeout(()=>{$block({name:'LoaderAnimation',each:(loader)=>{loader.$element.innerHTML='';document.getElementById('main').style.display='block';}});},1500);});aa1('ne2',($scope,$patch)=>{window.onscroll=function(e){const scrollIndicator=document.getElementById('static_header_scroll_indicator').getBoundingClientRect().top
if(scrollIndicator<-24){document.getElementById('static_header_container').removeAttribute('style')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.setAttribute('style','background-color:#404040;'))}else{document.getElementById('static_header_container').setAttribute('style','background-color:#00000094;color:white;')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.removeAttribute('style'))}}
$scope.isMenuOpen=false
$scope.toggleMenu=(menu)=>{if($scope.isMenuOpen){document.getElementById('static_header_menu_container').removeAttribute('style')
menu.removeClass('is-active')
$scope.isMenuOpen=false}else{document.getElementById('static_header_menu_container').setAttribute('style','margin-left:0px;')
menu.addClass('is-active')
$scope.isMenuOpen=true}}});aa1('kf3',($scope,$patch)=>{$scope.say_hello='Hello World!';});aa1('ix5',($scope,$patch,cn9)=>{$scope.state='form'
$scope.toNextStep=(button)=>{button.addClass('is-button-loading')
if($scope.taskId.trim()===''||$scope.emailAddress.trim()===''||$scope.refundDescription.trim()===''){document.getElementById('refund_form_error').innerText='Please fill out all the fields above'
button.removeClass('is-button-loading')
return}
fetch(cn9.root+"/refund/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task_external_id:$scope.taskId.trim(),email_address:$scope.emailAddress.trim(),description:$scope.refundDescription.trim()})}).then(function(res){return res.json();}).then(function(data){if(!data.hasOwnProperty('refund_internal_id')){document.getElementById('refund_form_error').innerText=data.message??'We encountered technical issue. Please try again later.'
button.removeClass('is-button-loading')
return}
$scope.taskRefundId=data.refund_internal_id
$scope.state='confirmation'
$patch()}).catch(function(error){console.log(error)})}});aa1('gf4',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 