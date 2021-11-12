import store  from "@/store";


const isAuthenticatedGuard = async( to, from, next )  => {

    console.log(to, from)

    const { ok } = await store.dispatch('auth/checkAuthentication')

    if (ok) {
        next()
    } else {
        next({ name: 'login'})
    }
}

export default isAuthenticatedGuard