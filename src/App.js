import { useState } from "react";
import UserTable from "./Tables/UserTable";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";

function App() {
const UserData = [ 
  {id:1,name:'Logesh',username:'Logesh@'},
  {id:2,name:'Srithick',username:'Srithick@'},
  {id:3,name:'Saran',username:'Saran@'},

];
const addUser = (user)=>{
  user.id = users.length + 1;
  setUsers([...users, user])

}

const deleteUser = (id) =>{
  setUsers(users.filter((user)=>user.id!==id))
}
const [users,setUsers]=useState(UserData);
const [editing,setEditing]=  useState(false);


const initialFormState = {id:null,name:'', username:''}
const [currentuser,setCurrentuser]=useState(initialFormState);

const editRow = (user) =>{
  setEditing(true);
  setCurrentuser({id:user.id,name:user.name,username:user.username});
}
const updateUser = (id,updateUser)=>{
  setEditing(false);
  setUsers(users.map((user)=>(user.id===id?updateUser:user)))
}


  return (
    <div className="Container">
     <h1 className="text-center">Class Admisson</h1>
     <div className="flex-row">
     <div className="flex-large">
     {editing?(<div>
          <h2>Students detail</h2>
          <EditUserForm
          setEditing = {setEditing}
          currentuser = {currentuser}
          updateUser = {updateUser}
          />

          
      </div>):(<div> 
        <h2>Add Students</h2>
      <AddUserForm addUser={addUser}/>
      </div>)
      }
    
      </div>
      <div className="flex-large">
      <h2>View User</h2>
      <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
     </div>
     </div>
    </div>
  );
}

export default App;
