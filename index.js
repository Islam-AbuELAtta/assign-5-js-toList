 /*
 
 let addToDO = document.getElementById("addToDO")
 let apiKey = "667b455d60a208ee1fdc03b5";
 let input = document.querySelector("input")
 let allData= [ ];

 addToDO.addEventListener("click", function(){
        addToDoList();
 })



 async function addToDoList(){
        let x= await fetch("https://todos.routemisr.com/api/v1/todos" ,
            {
                method : "POST" ,
                body : JSON.stringify({

                        "title":input.value,
                        apiKey ,
                }),
                headers : {"Content-Type" : "application/json"}
            }
        )

        let response = await x.json();
        displayToDoList()

  }
  displayToDoList()

        async function displayToDoList(){
            let x =await fetch(`https://todos.routemisr.com/api/v1/todos/${apiKey}`) ;

            let responde = await x.json();

            allData = responde.todos
                let container= ""
            for (let i = 0; i < allData.length; i++) {
                
                container+=`<div class="d-flex justify-content-between px-3">
                            <p class=" fs-5 mb-0 fw-medium me-4" >${allData[i].title}</p>
                            <div class=" fs-5">
                                <i class="fa-solid fa-trash-alt text-danger me-2" onclick='deleteToDO("${allData[i]._id }")'></i>
                                <i class="fa-solid fa-edit text-warning"></i>
                            </div>
                        </div>
                `
            }

            document.getElementById("moka").innerHTML= container ;
            
        }


       async function deleteToDO(id){
            let x = await fetch("https://todos.routemisr.com/api/v1/todos" ,
                {
                    method : "DELETE",
                    body : JSON.stringify({
                        "todoId": id ,
                    }),
                    headers : {"Content-Type" : "application/json"}
                }
            )

            addToDoList()
        }

        */


        let apiKey = "667b455d60a208ee1fdc03b5"; 
        let addToDO = document.getElementById("addToDO" );
        let input = document.querySelector("input") ;
        let allData= [];


  addToDO.addEventListener("click" , function (){
           addTodoData() ;
  })      


  async function addTodoData(){

           let x = await fetch("https://todos.routemisr.com/api/v1/todos",
               {method : "POST" ,
                body : JSON.stringify({
                   "title":input.value,
                   "apiKey":apiKey
               }),
                 headers : {"Content-Type" : "application/json"}
               }
           )

           let response = await x.json();

           displayTodo()
  }

       
       displayTodo()
  async function displayTodo(){
           let x = await fetch(`https://todos.routemisr.com/api/v1/todos/${apiKey}`) ;
           let data = await x.json();
           allData = data.todos
           let cartona =''

           for (let i = 0; i < allData.length; i++) {
               cartona+=`<div class="d-flex justify-content-between px-3 align-content-center">
                           <p class=' fs-5 mb-0 fw-medium me-4 ${allData[i].completed ? "text-warning" : "" }'>${allData[i].title}</p>
                           <div class=" fs-5">
                               <i class="fa-solid fa-trash-alt text-danger me-2" onclick="deleteToDO('${allData[i]._id}')"></i>
                               <i class="fa-solid fa-circle-check text-warning" onclick="toDoDone('${allData[i]._id}')" ></i>
                           </div>
                       </div>
               `
               
           }

               console.log(allData);
           document.getElementById('yoyo').innerHTML= cartona ;

   }


 async function deleteToDO( id){

       let x = await fetch("https://todos.routemisr.com/api/v1/todos" ,
           {
               method : "DELETE",
               body : JSON.stringify({
                   "todoId" :  id}) ,
              
               headers : {"Content-Type" : "application/json"}
           }
       )

       addTodoData() ;
 }


 async function toDoDone(id){
       let x = await fetch("https://todos.routemisr.com/api/v1/todos",
           {method : "PUT",
            body : JSON.stringify({
               "todoId":id
           }) ,
           headers : {"Content-Type" : "application/json"}
           }
       )

       let data = await x.json();
       addTodoData() ;

 }