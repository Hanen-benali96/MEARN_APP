
import React,{useState} from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { Button,FormControl,Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";
import EditProfile from "./EditProfile";

const Profile =()=> {

  
  const user = useSelector(state => state.authReducer.user)
    const [imageProfile,setImageprofile]= useState(null)
    const[name,setName]=useState('')
    const[address1,setAddress1]=useState('')
    const[address2,setAddress2]=useState('')
    const[phone,setPhone]=useState('')
    const[zipCode,setZipCode]=useState('')
  
const editProfile= async ()=>{
 
    const data= new FormData();
    data.append('ImgProfile',imageProfile);
  data.append("name",name)
  data.append("address1",address1)
  data.append("address2",address2)
  data.append("phone",phone)
  data.append("zipCode",zipCode)
  
    const config={
        headers:{
            authorization:localStorage.getItem("token"),
          
        },
      }
      try {
        const res = await axios.put("/api/profile/update",data,config)
        console.log(res.data);
      } catch (error) {
        console.log(error)
        
      }}
     
  return (
  
<div className="container-xl px-4 mt-4 ">

    <div className="row display-flex justify-content-center">
        <div className="col-xl-4">
           
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                   
                <img
                    src={user&&user.imageUrl? `uploads/${user.imageUrl}`:'http://bootdey.com/img/Content/avatar/avatar1.png'}
                    alt='Admin'
                    className='rounded-circle'
                    width={190}
                  />
                    
            
                    <input type='file'onChange={e=>setImageprofile(e.target.files[0])}></input>
                    
                    <button className="btn btn-primary" onClick={editProfile}>edit</button>
                </div>
                <h6>{user.name}</h6>
                <h6>{user.email}</h6>
                <h6>{user.address1}</h6>
               <h6>{user.address2}</h6>
                <h6>{user.phone}</h6>
                <h6>{user.zipCode}</h6>
                
         
           
                   </div>
                   <div>
                   <Card style={{ width: "30rem", marginLeft: "30%", marginTop: "20%" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>EDIT YOUR NAME</Card.Title>

        <Card.Text>
          <FormControl
            placeholder='Your name here'
            name='name'
            onChange={(e)=>setName (e.target.value)}
          />
      
        </Card.Text>
        <Card.Text>
          <FormControl
            placeholder='Your address1 here'
            name='address1'
            onChange={(e)=>setAddress1 (e.target.value)}
          />
      
        </Card.Text>
        <Card.Text>
          <FormControl
            placeholder='Your address2 here'
            name='address2'
          onChange={(e)=>setAddress2 (e.target.value)}
          />
      
        </Card.Text>
        <Card.Text>
          <FormControl
            placeholder='Your phone'
            name='phone'
            onChange={(e)=>setPhone(e.target.value)}
          />
      
        </Card.Text>
        <Card.Text>
          <FormControl
            placeholder='Your name here'
            name='zipCode'
            onChange={(e)=>setZipCode(e.target.value)}
          />
      
        </Card.Text>
        <Button
          variant='outline-success'
          style={{ width: "100%" }}
          onClick={editProfile}
        >
          Save Changes
        </Button>
      </Card.Body>
    </Card>
                   </div>
                  
                </div>
            </div>
            
        </div>

             
  )
}


export default Profile