const ay6=strawberry.create("app"); const lv4=ay6.factory,pg6=ay6.service,oi5=ay6.component; lv4('mu6',function(){return{root:'https://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});pg6('bw8',(mu6)=>{return{create:{stage:(emailAddress)=>{return new Promise(function(resolve,reject){fetch(mu6.root+'/customer/anonymous',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:mu6.tenantId,email_address:emailAddress})}).then((response)=>response.json()).then((data)=>{resolve(data.customer.id)}).catch(reject)})}}}});lv4('mu6',function(){return{root:'https://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});pg6('jb6',(mu6)=>{return{create:({emailAddress,taskDescription,todoItems,orderId})=>{return new Promise(function(resolve,reject){fetch(mu6.root+'/task/create',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order_id:orderId,task_description:taskDescription,todo_items:todoItems})}).then((response)=>response.json()).then((task)=>{resolve(task)}).catch(reject)})},get:{external_id:(internalTaskId)=>{return new Promise((resolve,reject)=>{fetch(mu6.root+'/tasks/get/external_id?task_id='+internalTaskId,{method:"GET",headers:{"Content-Type":"application/json"}}).then((response)=>response.json()).then((task)=>{resolve(task.external_id)}).catch(reject)})},internalAndEmail:(customerEmail,taskId)=>{return new Promise((resolve,reject)=>{fetch(mu6.root+'/public/get/task?task_id='+taskId+'&customer_email='+customerEmail,{method:"GET",headers:{"Content-Type":"application/json"}}).then((response)=>response.json()).then((task)=>{if(task.hasOwnProperty('message')){reject(new Error(task.message))
return}
resolve(task)}).catch(reject)})}},pay:({orderId,externalId})=>{return new Promise(function(resolve,reject){fetch(mu6.root+'/task/settle/unpaid',{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({order_id:orderId,external_id:externalId})}).then((response)=>response.json()).then((task)=>{resolve(task)}).catch(reject)})}}});pg6('ie6',(mu6)=>{return{create:({taskId,todos,token})=>{return new Promise(function(resolve,reject){fetch(mu6.root+'/todos/create',{method:"POST",headers:{"Content-Type":"application/json","X-Krypton-Token":token},body:JSON.stringify({task_id:taskId,todos:todos})}).then((response)=>response.json()).then((todoData)=>{resolve({})}).catch(reject)})}}});pg6('ov8',()=>{function between(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
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
$scope.isMenuOpen=true}}});oi5('xi1',($scope,$patch,ov8,$hide,$show,mu6,jb6,ie6,bw8)=>{$scope.todos=[]
$scope.onStep=1
$scope.todoDescriptionError=null
$scope.showAddToDoButton=true;$scope.taskDescription=''
$scope.contactEmail=null
$scope.customerId=null
$scope.taskFinalPaneData={taskId:'',emailAddress:''}
$scope.allowNext=false
const patchComponent=function(){$scope.allowNext=false
const taskDescription=document.getElementById('task_description_input').value
if($scope.onStep===1){if(taskDescription!==null&&taskDescription.trim()!==''){if(taskDescription.trim().length>17){if($scope.todos.length>0){$scope.allowNext=true
$scope.taskDescriptionError=null}else{$scope.taskDescriptionError='';}}else{$scope.taskDescriptionError='Please provide a more detailed task description'}}else{$scope.taskDescriptionError='Task description cannot be empty'}
if($scope.todos.length>7){$scope.showAddToDoButton=false;}}
$patch()
document.getElementById('task_description_input').value=taskDescription}
const patchTodoSorting=function(addTodoDescription=null){$scope.todos=[]
const sortWidget=document.getElementById('sortable')
const todoItemElements=sortWidget.querySelectorAll('.todo-item')
todoItemElements.forEach(function(todoItemElement){const todoDescription=todoItemElement.querySelector('.todo-description').innerText
$scope.todos.push({id:ov8.generator.id(),description:todoDescription})})
if(addTodoDescription!==undefined&&addTodoDescription!==null){$scope.todos.push({id:ov8.generator.id(),description:addTodoDescription})
return}
patchComponent()}
$scope.isTabActive=function(index){if(($scope.onStep+1)>index){return'active-step'}
return''}
$scope.isHiddenTabMobile=function(index){if(index!==$scope.onStep){return'tab-hidden-on-mobile'}
return''}
$scope.addTodoItem=function(){if($scope.newTodoDescription.trim()===''){$scope.todoDescriptionError='Todo description cannot be empty'
patchTodoSorting()
$("#sortable").sortable()
return}
if($scope.newTodoDescription.trim().length<18){$scope.todoDescriptionError='Please provide a more detailed todo description'
patchTodoSorting()
$("#sortable").sortable()
return}
$scope.todoDescriptionError=null
patchTodoSorting($scope.newTodoDescription)
$scope.newTodoDescription=''
patchComponent()
$("#sortable").sortable()}
$scope.deleteTodo=function(index){const newItems=[]
$scope.todos.filter(function(todo){if(todo.id!==index){newItems.push(todo)}})
$scope.todos=newItems
patchComponent()}
$scope.toNextStep=async function(button){button.addClass('is-button-loading')
if($scope.onStep===1){const taskDescription=document.getElementById('task_description_input').value
if(taskDescription!==null&&taskDescription.trim()!==''){if(taskDescription.trim().length>17&&$scope.todos.length>0){$scope.onStep=2
$scope.taskDescriptionError=null}else{$scope.taskDescriptionError='Please provide a more detailed task description'
$scope.allowNext=false}}else{$scope.taskDescriptionError='Task description cannot be empty'
$scope.allowNext=false}
$scope.taskDescription=taskDescription}
try{$scope.customerId=await bw8.create.stage($scope.contactEmail)
if($scope.onStep===2){$scope.allowNext=false}
$patch()}catch(error){console.log(error)
return}
if($scope.onStep===2){const currenyCode='USD'
const discountCode=null
const browserHeight=$(window).height()
const browserWidth=$(window).width()
const orderData={}
paypal.Buttons({style:{layout:'vertical',color:'gold',shape:'rect',label:'paypal'},createOrder:function(data){document.querySelector('#payment_status_indicator').innerText='Please wait while we process your request...'
return fetch(mu6.root+"/paypal/order/create",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({tenant_id:mu6.tenantId,customer_id:$scope.customerId,cart:[{variant_id:mu6.variantId,quantity:1}],currency_code:'USD',discount_code:'NODISCOUNT'})}).then(function(res){return res.json();}).then(function(data){document.querySelector('#payment_status_indicator').innerText=''
orderData.id=data.order.id
orderData.paypalId=data.order.provider.id
return data.order.provider.id})},onApprove:function(data){document.querySelector('#payment_status_indicator').innerText='Please wait while we process your payment...'
return fetch(mu6.root+"/paypal/order/capture",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({order_id:orderData.id,provider_order_id:orderData.paypalId,browser_height:browserHeight,browser_width:browserWidth})}).then((response)=>response.json()).then(async(transaction)=>{$scope.taskFinalPaneData.emailAddress=$scope.contactEmail??transaction.emailAddress
const todosPayload=[]
$scope.todos.forEach(todo=>{todosPayload.push({todo_description:todo.description,images:[],files:[]})})
const taskData=await jb6.create({orderId:transaction.orderId,emailAddress:$scope.taskFinalPaneData.emailAddress,taskDescription:$scope.taskDescription,todoItems:todosPayload})
const internalTaskId=taskData.task_id
$scope.taskFinalPaneData.taskId=await jb6.get.external_id(internalTaskId)
$scope.onStep=3
$patch()});}}).render('#paypal-button-container')}}
$scope.updateTaskDescription=function(){patchComponent()}});oi5('mt9',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 