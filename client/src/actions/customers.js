import axios from '../config/axios'


import swal from 'sweetalert'

export const setCustomers = (customer) => {
    return {
        type: 'SET_CUSTOMERS',
        payload: customer
    }
}

export const startSetCustomers = () => {
    return (dispatch) => {
        axios.get('/api/customers',{
                    headers: {
                        'x-auth': localStorage.getItem('authToken')
                    }
                })
            .then(response=>{
                const customers = response.data
                dispatch(setCustomers(customers))
            })
            .catch(err=>{
                console.log(err)
            })

    }
}

export const removeCustomer = (customer) => {
    return {
        type: 'REMOVE_CUSTOMER',
        payload: customer
    }
}

export const startRemoveCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`/api/customers/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const customer = response.data
            dispatch(removeCustomer(customer))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const addCustomer = (customer) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: customer
    }
}

export const startAddCustomer = (customer,redirect) => {
    return (dispatch) => {
        axios.post('/api/customers',customer,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.errors){
                swal(`${response.data.message}`,"","error")
            } else {
                const customer = response.data
                redirect()
                dispatch(addCustomer(customer))
            }
        })
    }
}

export const editCustomer = (customer) => {
    return {
        type: 'EDIT_CUSTOMER',
        payload: customer
    }
}

export const startEditCustomer = (customer,redirect) => {
    return(dispatch) => {
        axios.put(`/api/customers/${customer.id}`,customer,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response => {
            console.log(response.data)
            if (response.data.errors) {
                swal(`${response.data.message}`,"","error")
            } else {
                const customer = response.data
                redirect()
                dispatch(editCustomer(customer))
              
            }
        })
    }
}


