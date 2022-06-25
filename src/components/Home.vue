<template>
<Header />
<h1>URL Shortener Homepage</h1>
<Input />
<Footer />
</template>

<script>
import Header from './Home/Header.vue'
import Input from './Home/Input.vue'
import Footer from './Home/Footer.vue'
export default {
    name:'Home',
    components: {
        Header,
        Input,
        Footer
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>