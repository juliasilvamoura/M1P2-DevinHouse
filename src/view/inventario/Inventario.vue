<template>
  <div class="inventario">
      <label class="titulo">Estatísticas do Sistema</label>
      <hr>
      <div class="estatisticas">
          
          <div class="colab">
              <div class="imgValor">
              <h2>{{ colaboradores }}</h2>
              <img class="imgEstatistica" src="./../../assets/colaborativo.png" alt="Colaboradores">
              </div>
              <p>Colaboradores</p>
          </div>
          <div class="itens">
              <div class="imgValor">
              <h2>{{ itens }}</h2>
              <img class="imgEstatistica" src="./../../assets/itens.png" alt="Itens">
              </div>
              <p>Itens</p>
          </div>
          <div class="valorProd">
              <div class="imgValor">
              <h2>{{ valor }}</h2>
              <img class="imgEstatistica" src="./../../assets/valor.png" alt="Valor">
              </div>
              <p>Valor em Produtos</p>
          </div>
          <div class="emprestimos">
              <div class="imgValor">
              <h2>{{ emprestimo }}</h2>
              <img class="imgEstatistica" src="./../../assets/quadrados.png" alt="Emprestimo">
              </div>
              <p>Empréstimos</p>
          </div>
      </div>
      <hr>
      <div class="pesquisa">
          <label>Utilize a barra de pesquisa para buscar</label>
          <input class="inputPesquisa" type="text" :placeholder="'Digite o nome do Item'" v-model="itemPesquisado">
          <button class="btnPesquisa" @click="pesquisar">Buscar</button>
      </div>
      <div class="produtos">
          <CardProduto
          v-for="i in cadastroProds" :key="i.id"
          />
      </div>
  </div>
</template>

<script>
import CardProduto from '@/components/CardProduto.vue'
export default {
    components:{
        CardProduto
    },
    data(){
        return{
            pagina: "INVENTÁRIO",
            itemPesquisado: null,
            colaboradores: 0,
            itens: 0,
            valor: 0,
            emprestimo: 0
        }
    },
    computed: {
        cadastroProds(){
            this.$store.state.cadProdutoModule.cadastroProds;
        }
    },

}
</script>

<style scoped>
.inventario{
    margin: 2%;
    font-family: Arial, Helvetica, sans-serif;
}
/* Titulo */

.titulo{
    font-size: 150%;
    font-weight: bolder;
}

/* Seção Estátistica */
.estatisticas{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.colab, .itens, .valorProd, .emprestimos{
    border: solid 0.15em black;
    border-radius: 5%;
    width: 15%;
    height: 10%;
    padding: 0.5%;
}
.imgValor{
    display: flex;
    flex: row;
    justify-content: space-between;
}
.imgEstatistica{
    width: 30%;
    height: 30%;
}

/* Seção Pesquisa */


.pesquisa{
    font-size: 100%;
}

.inputPesquisa{
    border-radius: 2%;
    border: none;
    margin: auto 2% auto 2%;
    padding: 0.5%;
}

.btnPesquisa{
    border-radius: 15%;
    border: none;
    padding: 0.65%;
    background-color: rgb(10, 10, 139);
    color: white;
}

/* Seção Itens Card */


</style>