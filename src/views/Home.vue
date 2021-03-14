<template>
  <div class="container">
    <b-card id="dark">
      <h1>Customer</h1>
      <div class="row">
        <b-label class="col-3">CustomerID : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="id"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="n"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">LastName : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="ln"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">IDCardNumber : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="cn"></b-input>
      </div>
      <br />
      <b-button variant="success" @click="addData()">Submit</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      CustomerID : "",
      Name : "",
      LastName : "",
      IDCardNumber: "",
    };
  },
  methods: {
    addData() {
      alert("compelet");
      const data = {
        CustomerID: this.id,
        Name: this.n,
        LastName: this.ln,
        IDCardNumber: this.cn,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function () {
          console.log("Ducument successfully written! -> MyFrom");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      const dataText = {
       CustomerID: this.id,
        Name: this.n,
        LastName: this.ln,
        IDCardNumber: this.cn,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Ducument successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
