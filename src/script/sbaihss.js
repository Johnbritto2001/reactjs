// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import { json } from 'react-router-dom';

// function handleSubmit(e) {
//     sessionStorage.setItem('user', JSON.stringify(form))

//     e.preventDefault()
//     const regex = /^[^\s@]+@[^\s@]+\-[^\s@]{2,}$/i;
//     if (!form?.name) {
//     }
//     toast.error('name is required')
//     if (!form?.password) {
//         toast.error('password is required')
//     }
//     else if (form?.password.length < 4) {
//         toast.error("password must be more than 4 characters")
//     }
//     else if (form?.password.length > 10) {
//         toast.error("password must be less than 10 characters")
//         if (!form?.name) {
//             toast.error('name me is required')
//         }
//         else if (!regex.test(form?.email)) {
//             toast.error('This is not a valid email')
//         }
//     }
// }