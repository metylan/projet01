<template>
<!--  <div v-for="(carac, index) in arme" :key="index">-->
<!--    -->
<!--  </div>-->
  <div>
    <h1>Detail de l'item {{ arme.name }}</h1>
    <input type="button" value="Ajouter" @click="addpanier">
    <div><img :src="arme.imgUrl"></div>
    <ul>
      <li>Nom de l'item : {{ arme.name }}</li>
      <li>Level de l'items : {{ arme.level }}</li>
      <li>Type d'item : {{ arme.type }}</li>
    </ul>
  </div>
</template>

<script>
import {getItem} from "../datas";
export default {
  async created() {
    const url = new URLSearchParams(window.location.search);

    this.arme = await getItem(url.get("id"));
    console.log(this.arme);
  },
  data(){
    return {arme :  []}
  },
  methods : {
    addpanier(){
      if(window.localStorage.getItem("panier")){
        const panier = JSON.parse(window.localStorage.getItem("panier"));
        panier.push(this.arme)
        window.localStorage.setItem("panier",JSON.stringify(panier))
      }else {
        window.localStorage.setItem("panier",JSON.stringify([this.arme]))
      }
    }
  }
}
</script>