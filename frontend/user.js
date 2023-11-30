const form = document.getElementById("MyForm");
const list = document.getElementById("usersList");
// list.addEventListener('click', change)

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
    //addToList(res.data);
    form.reset();
  }
  
  catch(err){console.log(err)};


}



