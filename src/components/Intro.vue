<template>
    <div class="header">
        <p id="logo">Welcome to URL Shortener</p>
    </div>
    <div class="container">
        <p class="text">Let's start</p>
    </div>
    <!--<button v-on:click="login">Login</button>-->
    <button v-on:click="signUp">SIGN UP FOR FREE</button>
    <div>
        <p>Already have an account?</p>
        <a v-on:click="login" href="#">Log in</a>
    </div>


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
#logo {
    font-family: verdana;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 60px;
    letter-spacing: 7px;
    color: #2c3e50;
}

.container{
    width: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
}

.text{
    font-family: 'arial black';
    font-size: 45px;
    color: #2c3e50;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-left: 50%;
    transform: translateX(-200%);
    opacity: 0;
    animation: slide-in-anim 1.5s ease-out forwards;
}

@keyframes slide-in-anim {
	20% {
		opacity: 0;
	}
	60% {
		transform: translateX(-45%);
	}
	75% {
		transform: translateX(-52%);
	}
	100% {
		opacity: 1;
		transform: translateX(-50%);
	}
}

button {
    width: 300px;
    height: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px black;
    letter-spacing: 2.5px;
    font-weight: 1000;
    color: #ffffff;
    background-color: #2ee5ba;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    }

button:hover {
    background-color: #2ee5ba;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    }
</style>