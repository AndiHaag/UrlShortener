<template>
    <h1>Welcome to our Site</h1>
    <h2>Do you already have an account?</h2>
    <button v-on:click="login">Login</button>
    <h2>If not you can register here</h2>
    <button v-on:click="signUp">SingUp</button>


</template>

<script>
export default{
    name:'Intro',
    methods: {
        signUp()
        {
            this.$router.push({name:'SignUp'})
        },
        login()
        {
            this.$router.push({name:'Login'})
        }
    },
}
</script>

<style>

</style>