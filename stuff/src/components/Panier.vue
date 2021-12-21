<template>
  <div>
    <h1>Mon panier</h1>
    <table>
      <tr>
        <th>Nom</th>
        <th>Type</th>
        <th>Niveau</th>
        <th></th>
        <th></th>
      </tr>
      <tr class="jumbotron" v-for="(arme, index) in monPanier" :key="index">
        <td>{{ arme.name }}</td>
        <td>{{ arme.type }}</td>
        <td>{{ arme.level }}</td>
        <td>
          <form action="/item">
            <input type="hidden" name="id" :value="arme.ankamaId">
            <input type="submit" VALUE="Detail">
          </form>
        </td>
        <td>
            <input type="button" value="supprimer" @click="suppArme(arme.ankamaId)">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    if(window.localStorage.getItem("panier")){
      this.monPanier = JSON.parse(window.localStorage.getItem("panier"))
    }
    console.log(this.monPanier);
  },
  data(){
    return {
      monPanier : []
    }
  },
  methods : {
    suppArme(id){
      if(window.localStorage.getItem("panier")){
        const panier = JSON.parse(window.localStorage.getItem("panier"));
        window.localStorage.setItem("panier",JSON.stringify(panier.filter(el => el.ankamaId !== id)))
      }
      this.monPanier = this.monPanier.filter(el => el.ankamaId !== id);
    }
  }
}
</script>