import { stateSetter } from './../../utils/form'
import { useState } from 'react';

import { toastSuccess, toastError } from "./../../utils/toasts"

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleInputChange(event) {
        stateSetter(event, setFormData)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        return;
        // Will submit to [..nextauth].js
        const res = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password
        });
        if (res?.error) {
            const error = JSON.parse(res?.error)
            toastError(error.message)
        } else {
            toastSuccess("Login succssfully!")
            setTimeout(() => {
                router.push('/')
            }, 3000)

        }
    }

    return <div className='login-page'>
        <div className='container login-container'>
            <form className='login-form' onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={formData.email} onChange={handleInputChange}
                        type="email" name="email" className="form-control" id="email" aria-describedby="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={formData.email} onChange={handleInputChange}
                        type="password" name="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
}