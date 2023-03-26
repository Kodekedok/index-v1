import '../css/input.css'
import { useEffect } from 'react'
import { RequireValidation } from '../utils/utils'

export default function input(props) {
  function main() {
    const input = document.getElementById(`${props.name}`)
    if (input == null || undefined) return
    if (input.classList.contains('valid')) {
      return RequireValidation(props.type, props.pola, input)
    }
    if (!props.pola) {
      input.oninput = (e) => {
        if (e.target.value !== '') {
          e.target.style.outlineColor = 'blue'
          return e.target.style.borderColor = 'blue'
        }
      }
    }
  }
  useEffect(() => {
    main()
  }, [])
  return (
    <div className='input-box'>
      <input className={props.className}
        type={props.type} name={props.name} id={props.name} htmlFor={props.for} placeholder={props.placeText}
        pattern={props.pola} />
    </div>
  )
}
