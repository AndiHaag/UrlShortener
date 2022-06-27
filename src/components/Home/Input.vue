<template>
    <h2>Paste the URL to be shortened</h2>
    <div class="input">
        <input v-model="url" placeholder="Get your URL here">

        <button v-on:click="shorten_url">Shorten URL</button>
    </div>

    <div class="output" v-if="posts !== undefined">
        {{posts.result.full_short_link}} <br />
        {{posts.result.full_short_link2}} <br />
        {{posts.result.full_short_link3}}
    </div>
    <div class="output" v-if="posts == undefined">
        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>
<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                posts: undefined,
                errors: [],
                url: ""
            }
        },

        methods: {
            shorten_url: function (event) {
                console.log("1")
                this.apicall()
            },

            apicall: function () {
                const urlstring = "https://api.shrtco.de/v2/shorten?url=" + this.url
                axios.get(urlstring).then(response => {
                    this.posts = response.data
                }).catch(e => {
                    this.errors.push(e)
                })
            }
        }
    }

</script>

<style>
    input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 3px solid skyblue;
    }

    button {
        width: 125px;
        height: 47px;
        border: 3px solid skyblue;
        overflow: hidden;
    }

    .input button:hover {
        background: #ddd;
        color: #333;
    }

    .output {
        margin-top: 25px;
        margin-left: 35%;
        margin-right: 35%;
        font-size: largerfdff;
        font-weight: bolder;
        border: 3px solid skyblue;
    }
</style>