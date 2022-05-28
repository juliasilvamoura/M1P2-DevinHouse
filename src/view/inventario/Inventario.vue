<template>
  <div class="inventario">
<<<<<<< Updated upstream
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
=======
    <label class="titulo">Estatísticas do Sistema</label>
    <hr />
    <div class="estatisticas">
      <div class="colab">
        <div class="imgValor">
          <h2>{{ colaboradores }}</h2>
          <img
            class="imgEstatistica"
            src="./../../assets/colaborativo.png"
            alt="Colaboradores"
          />
        </div>
        <p>Colaboradores</p>
      </div>
      <div class="itens">
        <div class="imgValor">
          <h2>{{ itens }}</h2>
          <img
            class="imgEstatistica"
            src="./../../assets/itens.png"
            alt="Itens"
          />
        </div>
        <p>Itens</p>
      </div>
      <div class="valorProd">
        <div class="imgValor">
          <h2>{{ valor }}</h2>
          <img
            class="imgEstatistica"
            src="./../../assets/valor.png"
            alt="Valor"
          />
        </div>
        <p>Valor em Produtos</p>
      </div>
      <div class="emprestimos">
        <div class="imgValor">
          <h2>{{ emprestimo }}</h2>
          <img
            class="imgEstatistica"
            src="./../../assets/quadrados.png"
            alt="Emprestimo"
          />
        </div>
        <p>Empréstimos</p>
      </div>
    </div>
    <hr />
    <div class="pesquisa">
      <label>Utilize a barra de pesquisa para buscar</label>
      <input
        class="inputPesquisa"
        type="text"
        :placeholder="'Digite o nome do Item'"
        v-model="itemPesquisado"
      />
      <button class="btnPesquisa" @click="pesquisar">Buscar</button>
    </div>

    <div class="cardP">
      <card-produto v-for="i in cadastroProds" :key="i.id">
        <template v-slot:foto><img :src="i.image" alt="foto produto" @click="detalhar(i)"/></template>
        <template v-slot:titulo>{{ i.tituloItem }}</template>
        <template v-slot:marca>{{ i.marca }}</template>
        <template v-slot:modelo>{{ i.modelo }}</template>
        <template v-slot:span>
          <span v-if="i.status == true" style="background-color: #ff0000">Emprestado</span>
          <span v-else style="background-color: #00a000">Disponível</span>
        </template>
      </card-produto>
    </div>

    <!-- MODAL -->
    
    <m-dialog v-model="show" title="Produto">
        
    <div class="teste">
      <vee-form :validation-schema="schema" v-slot="{ errors }">
        <div > 
          <h3>Dados Principais</h3>
          <div  style="margin: 5px">
            <label>Código de Patrimonio</label>
            <vee-field
              name="codigo"
              class="form-control"
              type="text"
              v-model="cadastroProd.codigo"
            />
            <span class="text-danger" v-show="errors.codigo">{{
              errors.codigo
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>Titulo do Item</label>
            <vee-field
              name="tituloItem"
              type="text"
              class="form-control"
              v-model="cadastroProd.tituloItem"
            />
            <span class="text-danger" v-show="errors.tituloItem">{{
              errors.tituloItem
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>Categoria do Item</label>
            <vee-field
              class="form-select"
              name="categoria"
              as="select"
              v-model="cadastroProd.categoria"
            >
              <option selected disabled>categoria</option>
              <option
                v-for="categoria in categorias"
                :key="categoria"
                :value="categoria"
              >
                {{ categoria }}
              </option>
            </vee-field>
            <span class="text-danger" v-show="errors.categoria">{{
              errors.categoria
            }}</span>
          </div>
        </div>

        <div style="margin-top: 15px">
          <h3>Dados Complementares</h3>
          <div >
            <label>Valor R$</label>
            <vee-field
              name="valor"
              type="number"
              class="form-control"
              v-model.lazy="cadastroProd.valor"
            />
            <span class="text-danger" v-show="errors.valor">{{
              errors.valor
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>URL da Foto</label>
            <vee-field
              name="image"
              type="text"
              class="form-control"
              v-model="cadastroProd.image"
            />
            <span class="text-danger" v-show="errors.image">{{
              errors.image
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>Marca</label>
            <vee-field
              name="marca"
              type="text"
              class="form-control"
              v-model="cadastroProd.marca"
            />
            <span class="text-danger" v-show="errors.marca">{{
              errors.marca
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>Modelo</label>
            <vee-field
              name="modelo"
              type="text"
              class="form-control"
              v-model="cadastroProd.modelo"
            />
            <span class="text-danger" v-show="errors.modelo">{{
              errors.modelo
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>Descrição</label>
            <vee-field
              name="descricao"
              type="text"
              class="form-control"
              v-model="cadastroProd.descricao"
            />
            <span class="text-danger" v-show="errors.descricao">{{
              errors.descricao
            }}</span>
          </div>
        </div>
      </vee-form>
       </div>
      <template v-slot:footer>
        <button class="m-dialog--cancel-btn" @click="show = false">Cancel</button>
        <button class="m-dialog--confirm-btn" @click="editar()">Editar</button>
        <button class="m-dialog--confirm-btn" style="background-color: red" @click="excluir()">Excluir</button>
      </template>
      
    </m-dialog>
    
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
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
=======
import CardProduto from "@/components/CardProduto.vue";
import { Form, Field, defineRule } from "vee-validate";
export default {
  components: {
    "card-produto": CardProduto,
    "vee-form": Form,
    "vee-field": Field,
  },
  data() {
    defineRule("required", (value) => {
      if (!value || value.length === 0) {
        return "Campo obrigatório";
      }
      return true;
    });
    defineRule("valorMaiorQueZero", (value) => {
      if (value <= 0) {
        return "Valor inváliro";
      }
      return true;
    });
    // especificar validações para cada campo
    const schema = {
      codigo: "required",
      tituloItem: "required",
      categoria: "required",
      valor: "required|valorMaiorQueZero",
      image: "required",
      marca: "required",
      modelo: "required",
      descricao: "required",
    };
    return {
      itemPesquisado: null,
      titulo: "INVENTÁRIO",
      show: false,
      cadastroProd: {},
      idProd: null,
      // Para o Modal
      schema,
      categorias: null,
    };
  },
  computed: {
    cadastroProds() {
      return this.$store.state.cadProdutoModule.cadastroProds;
    },
    itens() {
      return this.$store.state.cadProdutoModule.quantidade;
    },
    valor() {
      return this.$store.state.cadProdutoModule.valor;
    },
    colaboradores() {
      return this.$store.state.cadColaboradorModule.quantidade;
    },
    emprestimo() {
      return this.$store.state.cadProdutoModule.quantidadeemp;
    },
  },
  mounted() {
    this.$store.state.tituloModule.titulos = this.titulo;
    this.$store.commit("cadProdutoModule/quantidadeItens");
    this.$store.commit("cadProdutoModule/valorItens");
    this.$store.commit("cadColaboradorModule/quantidadeColab");
    this.$store.commit("cadProdutoModule/quantidadeEmp");
  },
  beforeMount() {
    this.categorias = ["Eletrônico", "Mobiliário", "Geral"];
  },
  methods:{
      detalhar(Prod){
          this.cadastroProd = Prod
          if(Prod){
            this.idProd = Prod.id
            this.show=!this.show
          }
      },
      editar(){
            this.$store.commit('cadProdutoModule/editar', this.cadastroProd)
            this.cadastroProd = {}; // limpando os dados na tela
            alert("Produto editado com sucesso!"); // alert para informar que usuário foi editado
            this.show=false;

      },
      excluir(){
        this.$store.commit('cadProdutoModule/excluir', this.idProd)
        this.cadastroProd = {}; // limpando os dados na tela
        alert("Produto excluido com sucesso!"); // alert para informar que usuário foi editado
        this.show=false;
      }
  }
};
</script>

<style scoped>
.m-dialog{
    width: 1000px;
}
.inventario {
  margin: 2%;
  font-family: Arial, Helvetica, sans-serif;
}
/* Titulo */

.titulo {
  font-size: 150%;
  font-weight: bolder;
}

/* Seção Estátistica */
.estatisticas {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.colab,
.itens,
.valorProd,
.emprestimos {
  border: solid 0.15em black;
  border-radius: 5%;
  width: 15%;
  height: 10%;
  padding: 0.5%;
}
.imgValor {
  display: flex;
  flex: row;
  justify-content: space-between;
}
.imgEstatistica {
  width: 30%;
  height: 30%;
>>>>>>> Stashed changes
}

/* Seção Pesquisa */

<<<<<<< Updated upstream

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


=======
.pesquisa {
  font-size: 100%;
}

.inputPesquisa {
  border-radius: 2%;
  border: none;
  margin: auto 2% auto 2%;
  padding: 0.5%;
}

.btnPesquisa {
  border-radius: 15%;
  border: none;
  padding: 0.65%;
  background-color: rgb(10, 10, 139);
  color: white;
}

/* Seção Itens Card */
.cardP {
  display: flex;
  flex-wrap: wrap;
  padding: 3%;
}
>>>>>>> Stashed changes
</style>