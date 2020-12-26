<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="callRemote">click-me</button>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    callRemote(){

        const param = {'phone':'13100711029'}

        var timestam = Math.round(new Date()/1000);
        var nonce = Math.round(new Date()/1000);
        var sha256 = CryptoJS.SHA256(JSON.stringify(param));
        console.log("sha256--" + sha256);
        var hmacKey = "b6MVP4tRjjSwFI5pJYWEgrmaV9WbaKxK" + timestam + nonce + sha256;
        var signId =CryptoJS.HmacSHA256(nonce.toString(CryptoJS.enc.UTF8),hmacKey);
        console.log("signId--"+signId);

        const headers = {
          'App-Id': 'policyUser',
          'Timestamp': timestam,
          'Nonce': nonce,
          'Signature': signId
        }
        this.axios.post('http://127.0.0.1:9006/link/applet/enterprise/checkUser',param,{headers:headers})
    }
  },
  mounted () {
   console.log('init')
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
