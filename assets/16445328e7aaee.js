const qx9=strawberry.create("app"); const qg3=qx9.factory,wh3=qx9.service,ix7=qx9.component; wh3('gl3',()=>{function between(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
return{date:{toReadable:(date)=>{return moment(date).format('MMMM Do YYYY, h:mm:ss a');},toTimeAgo:(date)=>{return moment(date).fromNow();}},text:{toSnippet:(thisText,snippetLength)=>{if(thisText.length>snippetLength){return thisText.slice(0,snippetLength)+"...";}
return thisText;}},list:{count:(arrayItems)=>{if(!Array.isArray(arrayItems))return 0
return arrayItems.length}},generator:{id:()=>{return String(Date.now())+String(between(100,999))}}}});ix7('kw5',($scope,$patch,$block)=>{setTimeout(()=>{$block({name:'LoaderAnimation',each:(loader)=>{loader.$element.innerHTML='';document.getElementById('main').style.display='block';}});},1500);});ix7('ib4',($scope,$patch)=>{$scope.say_hello='Hello World!';});ix7('pj2',($scope,$patch)=>{$scope.say_hello='Hello World!';});ix7('qr8',($scope,$patch)=>{$scope.say_hello='Hello World!';});ix7('qk7',($scope,$patch,gl3,$hide,$show)=>{$scope.todos=[]
$scope.onStep=1
$scope.todoDescriptionError=null
$scope.taskDescriptionError=null
$scope.taskDescription=''
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
$scope.todos.push({id:gl3.generator.id(),description:todoDescription})})
if(addTodoDescription!==undefined&&addTodoDescription!==null){$scope.todos.push({id:gl3.generator.id(),description:addTodoDescription})
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
$scope.toNextStep=function(button){button.addClass('is-button-loading')
if($scope.onStep===1){const taskDescription=document.getElementById('task_description_input').value
if(taskDescription!==null&&taskDescription.trim()!==''){if(taskDescription.trim().length>17&&$scope.todos.length>0){$scope.onStep=2
$scope.taskDescriptionError=null}else{$scope.taskDescriptionError='Please provide a more detailed task description'
$scope.allowNext=false}}else{$scope.taskDescriptionError='Task description cannot be empty'
$scope.allowNext=false}
$scope.taskDescription=taskDescription}
if($scope.onStep===2){$scope.allowNext=false}
$patch()
if($scope.onStep===2){paypal.Buttons({style:{layout:'vertical',color:'gold',shape:'rect',label:'paypal'},createOrder:function(data){document.querySelector('#payment_status_indicator').innerText='Please wait while we process your request...'
return fetch("http://localhost:3000/paypal/orders/create",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({cart:[{sku:"YOUR_PRODUCT_STOCK_KEEPING_UNIT",quantity:"YOUR_PRODUCT_QUANTITY"}]})}).then(function(res){return res.json();}).then(function(data){console.log(data)
document.querySelector('#payment_status_indicator').innerText=''
return data.id;})},onApprove:function(data){document.querySelector('#payment_status_indicator').innerText='Please wait while we process your payment...'
return fetch("http://localhost:3000/paypal/orders/capture",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify({orderID:data.orderID})}).then((response)=>response.json()).then((orderData)=>{console.log('Capture result',orderData,JSON.stringify(orderData,null,2));const transaction=orderData.purchase_units[0].payments.captures[0];console.log(transaction)
$scope.onStep=3
$patch()});}}).render('#paypal-button-container')}}
$scope.updateTaskDescription=function(){patchComponent()}});ix7('ma7',($scope,$patch)=>{$scope.say_hello='Hello World!';}); 
