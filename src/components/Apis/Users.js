// class component using state

import {Component} from "react"
const axios = require('axios');
const instance = axios.create({
    baseURL: 'https://reqres.in/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default class Users extends Component{
    componentDidMount(){
        this.GetUsers()
    }
    constructor() //constructor ocurrent class
    {
            super(); 
            this.state = { users : []} 
            this.setState({
                users: this.GetUsers
            });
    }
    GetUsers = () =>{
        instance.get('/api/users?page=2')
            .then(res => {
                this.setState({
                    users: res.data.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    render(){
     return  (<div>
                    <h3> Users </h3>
                    {this.state.users.map(item=>(
                       <li>
                          <div> id={item.id}  text={item.first_name} </div>
                       </li>
                     ))
                    }
              </div>  
              )
    }
} 
