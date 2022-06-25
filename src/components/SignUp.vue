<template>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter E-Mail" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="singUp">Sign up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Sign Up',
    data ()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async singUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                password:this.password,
                name:this.name
            });

            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>