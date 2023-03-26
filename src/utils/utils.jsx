import axios from "axios";

// verify user
const VerifyUser = async (token) => {
  const data = await axios.post('http://localhost:3000/verifyUser', {
    token: token
  })
    .then(res => res)
    .catch(e => {
      return false
    })
  return data
}

const Login = async (data) => {
  const email = data.email
  const password = data.password
  return await axios.post('http://localhost:3000/login', {
    email,
    password
  })
    .then(res => res)
    .catch(e => e.response)

}

const GetDataForm = (a) => {
  const form = document.getElementById(a)
  const inputs = form.querySelectorAll('input')
  const datas = []
  for (const input of inputs) {
    datas.push({
      name: input.name,
      value: input.value
    })
  }

  const newData = {}
  for (const data of datas) {
    newData[`${data.name}`] = data.value
  }
  return newData
}


// input validation
function RequireValidation(type, pattern, element) {
  switch (type) {
    case 'email': return emailValidation(pattern, element)
    case 'password': return paswordValidation(pattern, element)
    default: return
  }
}
// emailValidation
function emailValidation(pattern, element) {
  element.oninput = () => {
    const newPattern = new RegExp(pattern)
    const result = newPattern.test(element.value)

    if (!result) return changeColor(result, element)
    return changeColor(result, element)
  }
}

function changeColor(result, element) {
  if (!result) {
    element.style.outlineColor = 'red'
    return element.style.borderColor = 'red'
  }
  element.style.outlineColor = 'blue'
  return element.style.borderColor = 'blue'
}

function formValidation(element) {
  const inputs = element.querySelectorAll('input')
  const result = []
  for (const input of inputs) {
    if (input.classList.contains('require')) {
      if (input.value == '') {
        result.push(false)
      } else {
        result.push(true)
      }
    } else {
      result.push(true)
    }
  }
  return result
}



export {
  GetDataForm,
  VerifyUser,
  Login,
  RequireValidation,
  formValidation
}