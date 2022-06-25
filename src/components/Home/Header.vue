<template>
    <div class="nav">
        <a href="#">Home</a>
        <a id="logoutBtn" v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default{
    name:'Header',
    methods: {
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    },
}
</script>

<style>
.nav {
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>