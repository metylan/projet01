<template>
<div>
  <h1>Bienvenu sur le referencement arme de Dofus</h1>
  <table>
    <tr>
      <th>Nom</th>
      <th>Type</th>
      <th>Niveau</th>
      <th></th>
    </tr>
    <tr v-for="(arme, index) in armes" :key="index">
      <td>{{ arme.name }}</td>
      <td>{{ arme.type }}</td>
      <td>{{ arme.level }}</td>
      <td>
        <form action="/item">
          <input type="hidden" name="id" :value="arme.ankamaId">
          <input type="submit" VALUE="Detail">
        </form>
      </td>
    </tr>
  </table>
</div>
</template>
<script>
import {getItems} from "../datas";
export default {
  async created() {
    this.armes = await getItems();
    console.log(this.armes);
  },
  data(){
    return {armes :  []}
  }
}
</script>