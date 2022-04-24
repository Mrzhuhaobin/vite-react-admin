export default {
  setLoginInfo(userName) {
    localStorage.setItem('isLogin', 1)
    localStorage.setItem('userName', userName)
  },
  removeLoginInfo() {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('userName')
  },
}