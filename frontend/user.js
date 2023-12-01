const form = document.getElementById("MyForm");
const list = document.getElementById("usersList"); 

form.addEventListener('submit', signup);


async function signup(e) {
  e.preventDefault();
  const fullName = e.target.name.value;
  const contact = e.target.contact.value;
  const email = e.target.mail.value;

  let formData = {
      name: fullName,
      contact: contact,
      email: email,
  }
  try{
    const res= await axios.post("http://localhost:3000/add-user",formData)
    addToList(res.data);
    form.reset();
  }
  
  catch(err){console.log(err)};

}

function addToList(formData){
  const li = document.createElement('li');
  
  li.id = formData.id;
  li.innerHTML= `<span>${formData.name}- ${formData.email}- ${formData.contact}</span>
  <button class = "edit btn-sm btn-dark" onclick="edit('${formData.id}')">Edit </button>  <button class="delete btn-sm btn-danger" onclick="remove('${formData.id}')">Delete</button>`;
  //console.log(formData);
  list.appendChild(li);
}

window.addEventListener('DOMContentLoaded',async()=>{
  try{
    const res = await axios.get("http://localhost:3000/add-user")
    res.data.forEach(i=>{
      //console.log(i);
      addToList(i);
    })
  }
  catch(err){console.log(err)}
})

async function remove(id){
  try{
    const res = await axios.delete(`http://localhost:3000/delete-user/${id}`)
    console.log(res);
    list.removeChild(document.getElementById(id));
  }
  catch(err){console.log(err)};
}

async function edit(id){
  console.log(id);
  const li = document.getElementById(id);
  const userDetails = li.firstElementChild.innerHTML.split('-');
  console.log(userDetails);
  document.getElementById('name').value = userDetails[0];
  document.getElementById('mail').value = userDetails[1];
  document.getElementById('contact').value = userDetails[2];

  remove(id);
}