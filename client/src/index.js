import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import axios from './config/axios'
import {setUser} from './actions/user'
import {startSetCustomers} from './actions/customers'



const store = configureStore()

// console.log(store.getState())

// store.subscribe(()=>{
//         console.log(store.getState())
// })

if(localStorage.getItem('authToken')){
        axios.get('/users/account',{
             headers: {
                     'x-auth': localStorage.getItem('authToken')
             }
        })
        .then(response=>{
                const user = response.data
                store.dispatch(setUser(user))
                store.dispatch(startSetCustomers())
                 
        })             
}




const ele = (
        <Provider store = {store}>
            <App/>
        </Provider>
)


ReactDOM.render(ele, document.getElementById('root'))


