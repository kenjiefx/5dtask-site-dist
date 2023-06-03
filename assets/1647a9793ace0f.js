const rx4=strawberry.create("app"); const jk1=rx4.factory,sk8=rx4.service,aq6=rx4.component; jk1('su8',function(){return{root:'http://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});sk8('ku8',(su8)=>{return{create:{stage:(emailAddress)=>{return new Promise(function(resolve,reject){fetch(su8.root+'/customer/anonymous',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:su8.tenantId,email_address:emailAddress})}).then((response)=>response.json()).then((data)=>{resolve(data.customer.id)}).catch(reject)})}}}});jk1('su8',function(){return{root:'http://www.kryptonite-apis.cloud',tenantId:'80e28231798c479493ef6e252bca216f',variantId:'32ec4fd0a38f4b8b8bf2a24f4658e3a2'}});sk8('kp3',(su8)=>{return{create:({emailAddress,taskDescription,todoItems,orderId})=>{return new Promise(function(resolve,reject){fetch(su8.root+'/task/create',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order_id:orderId,task_description:taskDescription,todo_items:todoItems})}).then((response)=>response.json()).then((task)=>{resolve(task)}).catch(reject)})},get:{external_id:(internalTaskId)=>{return new Promise((resolve,reject)=>{fetch(su8.root+'/tasks/get/external_id?task_id='+internalTaskId,{method:"GET",headers:{"Content-Type":"application/json"}}).then((response)=>response.json()).then((task)=>{resolve(task.external_id)}).catch(reject)})}}}});sk8('ud4',(su8)=>{return{create:({taskId,todos,token})=>{return new Promise(function(resolve,reject){fetch(su8.root+'/todos/create',{method:"POST",headers:{"Content-Type":"application/json","X-Krypton-Token":token},body:JSON.stringify({task_id:taskId,todos:todos})}).then((response)=>response.json()).then((todoData)=>{resolve({})}).catch(reject)})}}});sk8('xt3',()=>{function between(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
return{date:{toReadable:(date)=>{return moment(date).format('MMMM Do YYYY, h:mm:ss a');},toTimeAgo:(date)=>{return moment(date).fromNow();}},text:{toSnippet:(thisText,snippetLength)=>{if(thisText.length>snippetLength){return thisText.slice(0,snippetLength)+"...";}
return thisText;}},list:{count:(arrayItems)=>{if(!Array.isArray(arrayItems))return 0
return arrayItems.length}},generator:{id:()=>{return String(Date.now())+String(between(100,999))}}}});aq6('by3',($scope,$patch,$block)=>{setTimeout(()=>{$block({name:'LoaderAnimation',each:(loader)=>{loader.$element.innerHTML='';document.getElementById('main').style.display='block';}});},1500);});aq6('ut3',($scope,$patch)=>{window.onscroll=function(e){const scrollIndicator=document.getElementById('static_header_scroll_indicator').getBoundingClientRect().top
if(scrollIndicator<-24){document.getElementById('static_header_container').removeAttribute('style')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.setAttribute('style','background-color:#404040;'))}else{document.getElementById('static_header_container').setAttribute('style','background-color:#00000094;color:white;')
document.querySelectorAll('.hamburger .hamburger-line').forEach(line=>line.removeAttribute('style'))}}
$scope.isMenuOpen=false
$scope.toggleMenu=(menu)=>{if($scope.isMenuOpen){document.getElementById('static_header_menu_container').removeAttribute('style')
menu.removeClass('is-active')
$scope.isMenuOpen=false}else{document.getElementById('static_header_menu_container').setAttribute('style','margin-left:0px;')
menu.addClass('is-active')
$scope.isMenuOpen=true}}});aq6('mr7',($scope,$patch)=>{$scope.say_hello='Hello World!';});aq6('vg9',($scope,$patch)=>{$scope.say_hello='Hello World!';});aq6('ku2',($scope,$patch)=>{$scope.say_hello='Hello World!';});aq6('ar2',($scope,$patch,xt3,$hide,$show,su8,kp3,ud4,ku8)=>{$scope.todos=[]
$scope.onStep=1
$scope.todoDescriptionError=null
$scope.taskDescriptionError=null
$scope.taskDescription=''
$scope.contactEmail=null
$scope.customerId=null
$scope.taskFinalPaneData={taskId:'',emailAddress:''}
$scope.allowNext=false
const patchComponent=function(){$scope.allowNext=false
const taskDescription=document.getElementById('task_description_input').value
if($scope.onStep===1){if(taskDescription!==null&&taskDescription.trim()!==''){if(taskDescription.trim().length>17){if($scope.todos.length>0){$scope.allowNext=true
$scope.taskDescriptionError=null}else{$scope.taskDescriptionError='';}}else{$scope.taskDescriptionError='Please provide a more detailed task description'}}else{$scope.taskDescriptionError='Task description cannot be empty'}}
$patch()
document.getElementById('task_description_input').value=taskDescription}
const patchTodoSorting=function(addTodoDescription=null){$scope.todos=[]
const sortWidget=document.getElementById('sortable')
const todoItemElements=sortWidget.querySelectorAll('.todo-item')
todoItemElements.forEach(function(todoItemElement){const todoDescription=todoItemElement.querySelector('.todo-description').innerText
$scope.todos.push({id:xt3.generator.id(),description:todoDescription})})
if(addTodoDescription!==undefined&&addTodoDescription!==null){$scope.todos.push({id:xt3.generator.id(),description:addTodoDescription})
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
try{$scope.customerId=await ku8.create.stage($scope.contactEmail)
if($scope.onStep===2){$scope.allowNext=false}
$patch()}catch(error){console.log(error)
return}
if($scope.onStep===2){const currenyCode='USD'
const discountCode=null
const browserHeight=$(window).height()
const browserWidth=$(window).width()
const orderData={}
paypal.Buttons({style:{layout:'vertical',color:'gold',shape:'rect',label:'paypal'},createOrder:function(data){document.querySelector('#payment_status_indicator').innerText='Please wait while we process your request...'
console.log($scope)
return fetch(su8.root+"/paypal/order/create",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({tenant_id:su8.tenantId,customer_id:$scope.customerId,cart:[{variant_id:su8.variantId,quantity:1}],currency_code:'USD',discount_code:'NODISCOUNT'})}).then(function(res){return res.json();}).then(function(data){console.log(data)
document.querySelector('#payment_status_indicator').innerText=''
orderData.id=data.order.id
orderData.paypalId=data.order.provider.id
return data.order.provider.id})},onApprove:function(data){document.querySelector('#payment_status_indicator').innerText='Please wait while we process your payment...'
return fetch(su8.root+"/paypal/order/capture",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({order_id:orderData.id,provider_order_id:orderData.paypalId,browser_height:browserHeight,browser_width:browserWidth})}).then((response)=>response.json()).then(async(transaction)=>{$scope.taskFinalPaneData.emailAddress=$scope.contactEmail??transaction.emailAddress
const todosPayload=[]
$scope.todos.forEach(todo=>{todosPayload.push({todo_description:todo.description,images:[],files:[]})})
const taskData=await kp3.create({orderId:transaction.orderId,emailAddress:$scope.taskFinalPaneData.emailAddress,taskDescription:$scope.taskDescription,todoItems:todosPayload})
const internalTaskId=taskData.task_id
$scope.taskFinalPaneData.taskId=await kp3.get.external_id(internalTaskId)
$scope.onStep=3
$patch()});}}).render('#paypal-button-container')}}
$scope.updateTaskDescription=function(){patchComponent()}});aq6('iv6',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 