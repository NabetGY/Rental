
export default  () => ({
    status: (localStorage.getItem('token')) ? 'authenicated' :'no-authenicate',
    checking: true,
    username: (localStorage.getItem('username')) ? localStorage.getItem('username') :null,
    email: (localStorage.getItem('email')) ? localStorage.getItem('email') :null,
    token: (localStorage.getItem('token')) ? localStorage.getItem('token') :null,
    refreshToken: (localStorage.getItem('refreshToken')) ? localStorage.getItem('refreshToken') :null,
})