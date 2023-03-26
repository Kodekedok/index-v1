import Input from './input'
import '../css/formRegister.css'
export default function FormRegister() {
 return (
  <div className="form-register-box">
   register
   REGISTER
   <div className="form-box">
    <form className="form-register">
     <Input />
     <Input />
     <Input />
     <div className='select-box'>
      <div className='container'>
       <Input />
      </div>
      <div className='container'>
       <Input />
      </div>
     </div>
    </form>
   </div>
  </div>
 )
}
