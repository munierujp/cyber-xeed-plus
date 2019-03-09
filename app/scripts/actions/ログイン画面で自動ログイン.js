export default function () {
  window.addEventListener('load', () => {
    const companyCodeForm = getCompanyCodeFormElement()
    const employeeCodeForm = getEmployeeCodeFormElement()
    const passwordForm = getPasswordFormElement()
    const forms = [companyCodeForm, employeeCodeForm, passwordForm]
    if (forms.every(form => form.value)) {
      const loginLink = getLoginLinkElement()
      loginLink.click()
    }
  })
}

function getCompanyCodeFormElement () {
  return document.getElementsByName('DataSource')[0]
}

function getEmployeeCodeFormElement () {
  return document.getElementsByName('LoginID')[0]
}

function getPasswordFormElement () {
  return document.getElementsByName('PassWord')[0]
}

function getLoginLinkElement () {
  const loginButton = getLoginButtonElement()
  return loginButton.querySelector('a')
}

function getLoginButtonElement () {
  return document.getElementsByClassName('loginBtn')[0]
}
