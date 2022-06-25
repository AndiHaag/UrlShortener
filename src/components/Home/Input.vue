<template>
    <h2>Paste the URL to be shortened</h2>
    <div class="input">
        <input type="url" placeholder="Get your URL here">
        <button>Shorten URL</button>
    </div>
    <div class="output">
        <p>Textbox for URL</p>
    </div>
</template>
<script>
export default{
    name:'Input',
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

.input button:hover{
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