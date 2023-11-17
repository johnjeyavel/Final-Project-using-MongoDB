import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

function App() {

const [user,setuser]=useState([])

useEffect(()=>{
  axios.get("http://localhost:3001/getUsers")
  .then(users => setuser(users.data))
  .catch(err=>console.log(err))
},[])

  return (
    <div>
<div class="table-responsive">
  <table class="table table-primary">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Age</th>
      </tr>
    </thead>
    <tbody>
{
  user.map(value => {
   return <tr>
<td>{value.name}</td>
<td>{value.email}</td>
<td>{value.age}</td>
    </tr>
  })
}
   
    </tbody>
  </table>
</div>

    </div>
  );
}

export default App;
