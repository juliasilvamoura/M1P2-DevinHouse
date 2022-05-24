<template>
  <div class="emprestimo">
      <div class="pesquisa">
          <label>Utilize a barra de pesquisa para buscar</label>
          <input type="text" :placeholder="'Digite o título do Item'" v-model="itemPesquisado">
          <button @click="pesquisar">Buscar</button>
      </div>
         <!-- <div v-show="reservas.length === 0">Não há reservas cadastradas</div> -->

    <table class="table">
      <thead>
        <tr>
          <th>Patrimônio</th>
          <th>Título</th>
          <th>Categoria</th>
          <th>Emprestado para</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in cadastroProds" :key="i.id">
          <td>{{ i.codigo }}</td>
          <td>{{ i.tituloItem }}</td>
          <td>{{ i.categoria }}</td>
          <td> Emprestado para</td>
          <td>
              <button @click="detalharProd(i.id)">Detalhes</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            itemPesquisado: null
        }
    },
    computed: {
        cadastroProds(){
            this.$store.state.cadProdutoModule.cadastroProds;
        }
    },
    methods:{
        pesquisar(){
            cadastroProds.forEach(item => {
                if(item.tituloItem === this.itemPesquisado){
                    return item
                }                
            });

        },
        detalharProd(id){
            // criar logica

        }
    }

}
</script>

<style>

</style>