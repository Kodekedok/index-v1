import Input from './input'
import ButtonLg from './buttonLg'
import { GetDataForm, Login, formValidation } from '../utils/utils'
import { useEffect } from 'react'
import '../css/form.css'

export default function FormLogin(props) {

  const sendData = async (datas) => {
    const result = await Login(datas)

    if (result.status === 200) {
      const newData = props.newData
      newData(result.data)
      return console.log("you're login");
    }
    if (result.status === 401) {
      return console.log('email  kamu belum terdaftar');
    }
    if (result.status === 403) {
      return console.log('password kamu salah');
    }
    if (result.status === 400) {
      return console.log('harap masukan email');
    }
    return console.log("we're now busy");
  }

  const main = () => {
    const form = document.getElementById(props.id)
    const button = form.querySelector('#login')
    const inputs = form.querySelectorAll('input')
    form.noValidate = true
    const validasi = formValidation(form)
    console.log(validasi);
    button.onclick = (e) => {
      e.preventDefault()
      sendData(GetDataForm('form-login'))
    }
  }

  useEffect(() => {
    main()
  }, [])
  return (
    <div className='form-container'>
      <form className="login" method='post' id='form-login'>
        <Input className='input valid require' name='email' type='email' placeText='masukan email kamu' pola='^([a-z]{8,}[\d]{1,4}[@])' />
        <Input className='input require' name='password' type='password' placeText='masukan password kamu' />
        <ButtonLg name='login' type='button' id='login' />

        <div className='lupa-sandi'>
          <a className='link-to-lupa-sandi'>lupa kata sandi?
          </a>
        </div>
      </form>
    </div>
  )
}
