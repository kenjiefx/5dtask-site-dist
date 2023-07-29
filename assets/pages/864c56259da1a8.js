const ay6=strawberry.create("app"); const lv4=ay6.factory,pg6=ay6.service,oi5=ay6.component; lv4('mu6',function(){return{root:'https://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});pg6('jb6',(mu6)=>{return{create:({emailAddress,taskDescription,todoItems,orderId})=>{return new Promise(function(resolve,reject){fetch(mu6.root+'/task/create',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order_id:orderId,task_description:taskDescription,todo_items:todoItems})}).then((response)=>response.json()).then((task)=>{resolve(task)}).catch(reject)})},get:{external_id:(internalTaskId)=>{return new Promise((resolve,reject)=>{fetch(mu6.root+'/tasks/get/external_id?task_id='+internalTaskId,{method:"GET",headers:{"Content-Type":"application/json"}}).then((response)=>response.json()).then((task)=>{resolve(task.external_id)}).catch(reject)})},internalAndEmail:(customerEmail,taskId)=>{return new Promise((resolve,reject)=>{fetch(mu6.root+'/public/get/task?task_id='+taskId+'&customer_email='+customerEmail,{method:"GET",headers:{"Content-Type":"application/json"}}).then((response)=>response.json()).then((task)=>{if(task.hasOwnProperty('message')){reject(new Error(task.message))
return}
resolve(task)}).catch(reject)})}},pay:({orderId,externalId})=>{return new Promise(function(resolve,reject){fetch(mu6.root+'/task/settle/unpaid',{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({order_id:orderId,external_id:externalId})}).then((response)=>response.json()).then((task)=>{resolve(task)}).catch(reject)})}}});lv4('mu6',function(){return{root:'https://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});pg6('ov8',()=>{function between(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
return{date:{toReadable:(date)=>{return moment(date).format('MMMM Do YYYY, h:mm:ss a');},toTimeAgo:(date)=>{return moment(date).fromNow();}},text:{toSnippet:(thisText,snippetLength)=>{if(thisText.length>snippetLength){return thisText.slice(0,snippetLength)+"...";}
return thisText;}},list:{count:(arrayItems)=>{if(!Array.isArray(arrayItems))return 0
return arrayItems.length}},generator:{id:()=>{return String(Date.now())+String(between(100,999))}}}});oi5('sb8',($scope,$patch,$block)=>{setTimeout(()=>{$block({name:'LoaderAnimation',each:(loader)=>{loader.$element.innerHTML='';document.getElementById('main').style.display='block';}});(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.crossOrigin='anonymous',e.nonce='iTsefUjH',e.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=273815325298461&autoLogAppEvents=1";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();},1500);});oi5('az8',($scope,$patch)=>{window.onscroll=function(e){const scrollIndicator=document.getElementById('static_header_scroll_indicator').getBoundingClientRect().top
if(scrollIndicator<-24){document.getElementById('static_header_container').removeAttribute('style')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.setAttribute('style','background-color:#404040;'))}else{document.getElementById('static_header_container').setAttribute('style','background-color:#1d1f27 ;color:white;')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.removeAttribute('style'))}}
$scope.isMenuOpen=false
$scope.toggleMenu=(menu)=>{if($scope.isMenuOpen){document.getElementById('static_header_menu_container').removeAttribute('style')
menu.removeClass('is-active')
$scope.isMenuOpen=false}else{document.getElementById('static_header_menu_container').setAttribute('style','margin-left:0px;')
menu.addClass('is-active')
$scope.isMenuOpen=true}}});oi5('jx3',($scope,$patch,jb6,ov8,mu6)=>{function isAlphaNumeric(str){var code,i,len;for(i=0,len=str.length;i<len;i++){code=str.charCodeAt(i);if(!(code>47&&code<58)&&!(code>64&&code<91)&&!(code>96&&code<123)){return false;}}
return true;};const currenyCode='USD'
const discountCode=null
const browserHeight=$(window).height()
const browserWidth=$(window).width()
const orderData={}
$scope.Utility={date:{toTimeAgo:ov8.date.toTimeAgo}}
$scope.keywords={}
$scope.state='login';$scope.loginTask=async(button)=>{try{document.getElementById('login_task_error_message').innerText=''
button.addClass('is-button-loading');if($scope.customerEmail.trim()==='')throw new Error('Please provide email address');if($scope.taskId.trim()==='')throw new Error('Please provide task pass key');if(!isAlphaNumeric($scope.taskId.trim()))throw new Error('Invalid task pass key');$scope.task=await jb6.get.internalAndEmail($scope.customerEmail,$scope.taskId);$scope.state='task';$scope.bottomLine={todos:{completed:0,pending:0,archived:0,total:0}}
$scope.task.todos.forEach((todo)=>{if(todo.status!=='archived'){$scope.bottomLine.todos.total++;}
$scope.bottomLine.todos[todo.status]++;});$scope.keywords.items=($scope.bottomLine.todos.total>1)?'items':'item';$patch();if($scope.task.status==='unpaid'){paypal.Buttons({style:{layout:'vertical',color:'gold',shape:'rect',label:'paypal'},createOrder:function(data){return fetch(mu6.root+"/paypal/order/create",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({tenant_id:mu6.tenantId,customer_id:$scope.task.customer_id,cart:[{variant_id:mu6.variantId,quantity:1}],currency_code:'USD',discount_code:'NODISCOUNT'})}).then(function(res){return res.json();}).then(function(data){orderData.id=data.order.id
orderData.paypalId=data.order.provider.id
return data.order.provider.id})},onApprove:function(data){return fetch(mu6.root+"/paypal/order/capture",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({order_id:orderData.id,provider_order_id:orderData.paypalId,browser_height:browserHeight,browser_width:browserWidth})}).then((response)=>response.json()).then(async(transaction)=>{const taskData=await jb6.pay({orderId:orderData.id,externalId:$scope.task.external_id})
$scope.task.status='new';$patch();});}}).render('#paypal-button-container')}}catch(error){console.log(error);button.removeClass('is-button-loading');document.getElementById('login_task_error_message').innerText='Sorry, your credentials are invalid.'}}});oi5('mt9',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 