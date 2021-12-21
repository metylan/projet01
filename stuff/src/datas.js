import axios from "axios";


export async function getItems(){
    let datas = [];
    await axios.get('https://fr.dofus.dofapi.fr/weapons').then(result => datas = result.data).catch(error => console.log(error))
    return datas
}
export async function getItem(id){
    let datas = [];
    await axios.get(`https://fr.dofus.dofapi.fr/weapons/${id}`).then(result => datas = result.data).catch(error => console.log(error))
    return datas
}