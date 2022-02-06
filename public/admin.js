
async function addf (updatedBook) { 
  
    const response= await fetch('http://localhost:3001/updateBook', 
    { 
    method: 'PATCH', 
    headers:{ 'Content-Type': 'application/json' }, 
    body:JSON.stringify({id:3, title:"The Legends of Arathrae", quantity:input1.value})
   
})
 updatedBook=await response.json(); 
 console.log(updatedBook)
}
let div =document.createElement('div')
div.class='content'
document.body.append(div)
let label1=document.createElement('label')
label1.textContent='The Legends of Arathrae'
let input1=document.createElement('input')
input1.type='text'
let button1=document.createElement('button')
button1.textContent='save'
div.appendChild(label1)
div.appendChild(input1)
div.appendChild(button1)

button1.addEventListener('click',function()
{
      addf()
})