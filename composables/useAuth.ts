export function useAuth() {
  const config = useRuntimeConfig()
  const isLoggedIn = useState<boolean>('auth:loggedIn', () => {
    if (import.meta.client) {
      return sessionStorage.getItem('auth:loggedIn') === 'true'
    }
    return false
  })

  const userName = useState<string>('auth:userName', () => {
    if (import.meta.client) {
      return sessionStorage.getItem('auth:userName') ?? ''
    }
    return ''
  })

  function login(email: string, password: string): boolean {
    const validEmail = config.public.userEmail
    const validPassword = config.public.userPassword

    if (email.trim().toLowerCase() === validEmail.toLowerCase() && password === validPassword) {
      isLoggedIn.value = true
      // Extrair nome do e-mail (parte antes do @)
      const namePart = email.split('@')[0]
      const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1)
      userName.value = displayName

      if (import.meta.client) {
        sessionStorage.setItem('auth:loggedIn', 'true')
        sessionStorage.setItem('auth:userName', displayName)
      }
      return true
    }
    return false
  }

  function logout() {
    isLoggedIn.value = false
    userName.value = ''
    if (import.meta.client) {
      sessionStorage.removeItem('auth:loggedIn')
      sessionStorage.removeItem('auth:userName')
    }
    navigateTo('/')
  }

  return { isLoggedIn, userName, login, logout }
}
