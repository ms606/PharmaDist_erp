import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
    const [companyName, setCompanyName] = useState('')
    const [userName, setUserName] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    useEffect(() => {
        getCompanyName()    
        if (userInfo) {
            const uname = userInfo.UNAME;
            setUserName(uname)
        }
    }, [userInfo])

      const  getCompanyName = async () => {
      const res = await axios.get('http://localhost:3000/api/companyprofile') 
      var data = res.data
      setCompanyName(data[0].TITLE)       
    }
    
    return (
        <div>
            <h1>Welcome to {companyName}</h1> 
            <br />
            <h3>Hello {userName} hope you are having a good day. </h3>         
        </div>

    )
}

export default HomeScreen
