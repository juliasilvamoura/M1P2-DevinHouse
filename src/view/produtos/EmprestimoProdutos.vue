<template>
  <div class="emprestimo">
      <div class="pesquisa">
<<<<<<< Updated upstream
          <label>Utilize a barra de pesquisa para buscar</label>
          <input type="text" :placeholder="'Digite o título do Item'" v-model="itemPesquisado">
          <button @click="pesquisar">Buscar</button>
=======
<<<<<<< Updated upstream
          <label>Utilize a barra de pesquisa para buscar</label>
          <input type="text" :placeholder="'Digite o título do Item'" v-model="itemPesquisado">
          <button @click="pesquisar">Buscar</button>
=======
          <label style="font-size: 120%">Utilize a barra de pesquisa para buscar</label>
          <input style="border: none; padding:5px; font-size: 100%" type="text" :placeholder="'Digite o nº do patrimonio do Item'" v-model.lazy="itemPesquisado">
          <button class="bntpesquisa" style="border: none; border-radius: 10%; background-color: #03038d; color:white;" @click="pesquisar">Buscar</button>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
          <td> Emprestado para</td>
          <td>
              <button @click="detalharProd(i.id)">Detalhes</button>
          </td>
        </tr>
      </tbody>
    </table>
<<<<<<< Updated upstream
=======
=======
          <td>{{i.nomeColab}}</td>
          <td> <button style="border: none; border-radius: 10%; background-color: #03038d; color:white; padding:5px" @click="emprestar(i.id)">Colaborador</button> </td>
        </tr>
      </tbody>
    </table>

    <!-- MODAL Colaborador -->
    <m-dialog
        v-model="show"
        title="Colaborador"
        >
        <select class="form-select" name="cargo" as="select" v-model="colaborador.id">
            <option selected>Nenhum</option>
            <option v-for="colab in cadastroColabs" :key="colab.id" :value="colab">{{ colab.nome }}</option>
        </select>

        <template v-slot:footer>
          <button class="m-dialog--cancel-btn" @click="show = false">Cancel</button>
          <button class="m-dialog--confirm-btn" @click="emprestimo(colaborador.id)">Ok</button>
        </template>
      </m-dialog>

      <!-- MODAL Pesquida -->
      <m-dialog class="dialog"
        v-model="pes"
        title="Resultado da Pesquisa"
        >
        <div class="tabela">
        <table class="table" style="width: 400px">
      <thead>
        <tr>
          <th>Patrimônio</th>
          <th>Título</th>
          <th>Emprestado para</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in itenPesquisado" :key="i.id">
          <td>{{ i.codigo }}</td>
          <td>{{ i.tituloItem }}</td>
          <td>{{i.nomeColab}}</td>
        </tr>
      </tbody>
    </table>
    </div>

        <template v-slot:footer>
          <button class="m-dialog--cancel-btn" @click="show = false">Cancel</button>
        </template>
      </m-dialog>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
export default {
    data(){
        return{
            itemPesquisado: null
<<<<<<< Updated upstream
=======
=======

export default {
    data(){
        return{
            itemPesquisado: null,
            titulo: "EMPRESTIMO", 
            show: false,
            colaborador: {},
            idItem:null, 
            pes: false,    
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        }
    },
    computed: {
        cadastroProds(){
<<<<<<< Updated upstream
            this.$store.state.cadProdutoModule.cadastroProds;
=======
<<<<<<< Updated upstream
            this.$store.state.cadProdutoModule.cadastroProds;
=======
            return this.$store.state.cadProdutoModule.cadastroProds;
        },
        cadastroColabs(){
          return this.$store.state.cadColaboradorModule.cadastroColabs;
        },
        emprestados(){
          return this.$store.state.cadProdutoModule.cadastroProds;
        },
        itenPesquisado(){
          return this.$store.state.cadProdutoModule.itemPesquisado;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        }
    },
    methods:{
        pesquisar(){
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
=======
            this.pes = !this.pes
            console.log("no empres" + this.itemPesquisado)
            this.$store.commit('cadProdutoModule/pesquisa', this.itemPesquisado)

        },
      emprestimo(ids){
        console.log(ids.nome)
        console.log(ids.id)
          const data = {
            idItem: this.idItem,
            idColab: ids.id,
            nomeColab: ids.nome,
          }
          console.log(this.idItem)

            this.$store.commit('cadProdutoModule/emprestimo', data)
            this.show=false;
            
        },
        emprestar(idCod){
          if(idCod){
            this.idItem = idCod
            this.show=!this.show
          }
        }
    },
    mounted(){
      this.$store.state.tituloModule.titulos = this.titulo;
      this.$store.commit('cadProdutoModule/quantidadeItens')
      this.$store.commit('cadColaboradorModule/quantidadeColab')
      this.$store.commit('cadProdutoModule/quantidadeEmp')
      this.$store.commit('cadProdutoModule/pesquisa')
    },
>>>>>>> Stashed changes
>>>>>>> Stashed changes

}
</script>

<<<<<<< Updated upstream
<style>
=======
<<<<<<< Updated upstream
<style>
=======
<style scoped>

.pesquisa{
  margin: 2%;
  display: flex;
  gap: 2%;
  
}
.m-dialog{
  width: 900px;
}
>>>>>>> Stashed changes
>>>>>>> Stashed changes

</style>