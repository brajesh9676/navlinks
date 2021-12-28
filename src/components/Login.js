import React,{useState} from 'react'
import {BrowserRouter,Routes,Route, Link, useNavigate } from 'react-router-dom'
import DashBoard from './DashBoard'
import Pagenotfound from './Pagenotfound'


export default function Login() {

let navigate=useNavigate('')


    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

let onBtnClick=async()=>
{
  
    let formdata=new FormData()
    formdata.append('registeredEmail', name)
    formdata.append('registeredPassword', password)
    formdata.append('funcName','verifyLogin')


    let req={
        method:'POST',
        body:formdata
    }


  let getServer=await fetch('https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php',req)
  let convertData= await getServer.json()

  if(convertData.loggedIn==="yes")
  {
    console.log(convertData)
    navigate('/dash' ,{state:{convertData}})


  }
  else
  {

      console.log(convertData.msg)

 }

}

    return (
        <div>
          
            <input  onInput={(e)=>
            {
                setName(e.target.value)

            }}/><br/>
            <input  onInput={(e)=>
            {
                setPassword(e.target.value)
            }}/><br/>
            <button onClick={onBtnClick}>LOG IN</button>
        </div>
    )
}
