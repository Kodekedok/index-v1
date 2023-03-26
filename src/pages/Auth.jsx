import FormLogin from '../component/formLogin'
import FormRegister from '../component/FormRegister'
import ButtonMd from '../component/ButtonMd'
import { useState, useContext, useEffect } from 'react'
import { UserContexts } from '../context/Context'
import '../css/auth.css'

function Auth(props) {
	const [data, setData] = useState()
	const newData = (newData) => {
		return setData(newData)
	}
	const [regBox, setRegbox] = useState(false)

	useEffect(() => {
		if (data === undefined) return
		const newPage = props.setPage
		const newUser = props.setUser
		newUser(data)
		return newPage('home')
	}, [data])

	useEffect(() => {
		const AuthPage = document.getElementById(props.id)
		const button = AuthPage.querySelector('#btn-register')
		button.onclick = () => {
			setRegbox(true)
			console.log('ok');
		}
	}, [])
	return (
		<>
			<div className='auth-container' id={props.id}>
				<div className="login-container">
					<div className="right-side-box">
						<div className="form-box">
							<FormLogin newData={newData} id='form-login' />
							<div className='buttonMd-box'>
								<ButtonMd name='register' id='btn-register' type='button' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Auth
