import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import NavBar from '../Components/Navbar';
import styled from 'styled-components';

const FormFields = styled.form`
    display:flex;
    flex-direction:column;
    width:50%;
    margin:auto;
    bottom:10px;
`;
const UserList = styled.ul`
  list-style: none;
  padding: 0;
  width: 400px;
  margin: auto;
`;

const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f4f4;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;

  svg {
    cursor: pointer;
    transition: 0.3s ease;
  }

  svg:hover {
    color: #007bff;
  }
`;
const FormContainer = styled.div`
margin:10px;
`;
function App() {
  const pathSegments = window.location.pathname.split("/"); 
  const hotelName = decodeURIComponent(pathSegments[pathSegments.length - 1]);
  const [users, setUsers] = useState([]);
  const [createName, setCreateName] = useState("");
  const [createEmail, setCreateEmail] = useState("");

  // State for the "Update User" form
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [id,setId] = useState(null);

  useEffect(()=>{
    const fetchUsers = async () =>{
      const users = await axios.get('http://localhost:3001/users');
      const filteredUsers = users.data.filter((user)=>user.hotelName === hotelName);
      setUsers(filteredUsers);
    }
    fetchUsers();
  },[]);

  const handleCreateUser = async (event) =>{
    event.preventDefault();
    const user = await axios.post('http://localhost:3001/user',{hotelName:hotelName,name:createName,email:createEmail});
    console.log("user=====",user);
    setUsers([...users,user.data]);
    setCreateName('');
    setCreateEmail('');
  }

  const handleUpdateUser = async(event)=>{
    event.preventDefault();
    const user1 = await axios.put(`http://localhost:3001/user/${id}`,{name:updateName,email:updateEmail});
    setUsers(users.map((user)=>user.id === id ? user = user1.data : user));
    setUpdateName('');
    setUpdateEmail('');
    setId(null);
  }

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:3001/user/${id}`);
    setUsers(users.filter((user)=>user.id !== id));
  }
  return (
   <>
    <NavBar/>
    <UserList>
      {users.map((user) => (
        <UserItem key={user.id}>
          <UserInfo>
           {user.hotelName} - {user.name} - {user.email}
          </UserInfo>
          <IconWrapper>
            <EditIcon onClick={() => setId(user.id)} />
            <DeleteIcon onClick={() => deleteUser(user.id)} />
          </IconWrapper>
        </UserItem>
      ))}
    </UserList>
    <FormContainer>
      {!id && (  // Hide create form when updating a user
          <FormFields onSubmit={handleCreateUser}>
              <TextField variant="standard" label="Hotel Name"value={hotelName} InputProps={{ readOnly: true }}/>
              <TextField variant="standard" label="Name" required type="text" value={createName} onChange={(event)=>setCreateName(event.target.value)}/>
              <TextField variant="standard" label="Email" required type="email" value={createEmail} onChange={(event)=>setCreateEmail(event.target.value)}/>
              <Button style={{marginTop:"10px"}}variant="contained" type="submit">Create</Button>
          </FormFields>
      )}
        {id && (
          <FormFields onSubmit={handleUpdateUser}>
            <TextField variant="standard" label="Hotel Name"value={hotelName} InputProps={{ readOnly: true }}/>
            <TextField variant="standard" label="Name" required  type="text" value={updateName} onChange={(event) => setUpdateName(event.target.value)} />
            <TextField variant="standard" label="Email" required  type="email" value={updateEmail} onChange={(event) => setUpdateEmail(event.target.value)} />
            <Button variant="contained" style={{marginTop:"10px"}} type="submit">Update User</Button>
          </FormFields>
        )}
    </FormContainer>
   </>
  );
}

export default App;
