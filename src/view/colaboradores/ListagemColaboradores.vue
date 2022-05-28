<template>
  <div class="listagemColaborador">
    <div class="pesquisa">
      <label style="font-size: 120%"
        >Utilize a barra de pesquisa para buscar</label
      >
      <input
        style="border: none; padding: 5px; font-size: 100%"
        type="text"
        :placeholder="'Digite o nome do colaborador'"
        v-model.lazy="colabPesquisado"
      />
      <button
        style="
          border: none;
          border-radius: 10%;
          background-color: #03038d;
          color: white;
        "
        class="bntpesquisa"
        @click="pesquisar"
      >Buscar</button>
    </div>

    <div class="cardColab">
      <card-colaborador v-for="i in cadastroColabs" :key="i.id">
        <template v-slot:vue-gravatar
          ><vue-gravatar :email="i.email" @click="detalhar(i)"></vue-gravatar
        ></template>
        <template v-slot:nome>{{ i.nome }}</template>
        <template v-slot:email>{{ i.email }}</template>
        <template v-slot:telefone>{{ i.telefone }}</template>
        <template v-slot:cargo>{{ i.cargo }}</template>
      </card-colaborador>
    </div>

    <!-- MODAL -->
    <m-dialog v-model="show" title="Colaborador">

      <vee-form id="formColab" :validation-schema="schema" v-slot="{ errors }">
        <div style="margin: 5px">
          <h3>Dados Pessoais</h3>
          <div>
            <label for="nome">Nome Completo</label>
            <vee-field
              name="nome"
              class="form-control"
              v-model="cadastroColab.nome"
            />
            <span class="text-danger" v-show="errors.nome">{{
              errors.nome
            }}</span>
          </div>

          <div style="margin: 5px">
            <label class="form-label">Genero</label>
            <vee-field
              class="form-select"
              name="genero"
              as="select"
              v-model="cadastroColab.genero"
            >
              <option selected disabled>Genero</option>
              <option v-for="genero in generos" :key="genero" :value="genero">
                {{ genero }}
              </option>
            </vee-field>
            <span class="text-danger" v-show="errors.genero">{{
              errors.genero
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Data Nascimento</label>
            <vee-field
              name="dataNascimento"
              type="date"
              class="form-control"
              v-model="cadastroColab.dataNascimento"
            />
            <span class="text-danger" v-show="errors.dataNascimento">{{
              errors.dataNascimento
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Telefone</label>
            <vee-field
              name="telefone"
              type="number"
              class="form-control"
              v-model="cadastroColab.telefone"
              :placeholder="'Digite sem espaços'"
            />
            <span class="text-danger" v-show="errors.telefone">{{
              errors.telefone
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">E-mail</label>
            <vee-field
              name="email"
              type="email"
              class="form-control"
              v-model="cadastroColab.email"
            />
            <span class="text-danger" v-show="errors.email">{{
              errors.email
            }}</span>
          </div>

          <div style="margin: 5px">
            <label>Cargo</label>
            <vee-field
              class="form-select"
              name="cargo"
              as="select"
              v-model="cadastroColab.cargo"
            >
              <option selected disabled>Cargo</option>
              <option v-for="cargo in cargos" :key="cargo" :value="cargo">
                {{ cargo }}
              </option>
            </vee-field>
            <span class="text-danger" v-show="errors.cargo">{{
              errors.cargo
            }}</span>
          </div>
        </div>

        <div style="margin-top: 10px">
          <h3>Dados Endereço</h3>
          <div style="margin: 5px">
            <label for="cep">CEP</label>
            <vee-field
              name="cep"
              class="form-control"
              v-model.lazy="cadastroColab.cep"
            />
            <span class="text-danger" v-show="errors.cep">{{
              errors.cep
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Cidade</label>
            <vee-field
              name="cidade"
              type="text"
              class="form-control"
              v-model="cadastroColab.cidade"
            />
            <span class="text-danger" v-show="errors.cidade">{{
              errors.cidade
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Estado</label>
            <vee-field
              name="estado"
              type="text"
              class="form-control"
              v-model="cadastroColab.estado"
            />
            <span class="text-danger" v-show="errors.estado">{{
              errors.estado
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Logradouro</label>
            <vee-field
              name="logradouro"
              type="text"
              class="form-control"
              v-model="cadastroColab.logradouro"
            />
            <span class="text-danger" v-show="errors.logradouro">{{
              errors.logradouro
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Numero</label>
            <vee-field
              name="numero"
              type="number"
              class="form-control"
              v-model="cadastroColab.num"
            />
            <span class="text-danger" v-show="errors.num">{{
              errors.num
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Complemento</label>
            <vee-field
              name="complemento"
              type="text"
              class="form-control"
              v-model="cadastroColab.complemento"
            />
            <span class="text-danger" v-show="errors.complemento">{{
              errors.complemento
            }}</span>
          </div>

          <div style="margin: 5px">
            <label for="">Bairro</label>
            <vee-field
              name="bairro"
              type="text"
              class="form-control"
              v-model="cadastroColab.bairro"
            />
            <span class="text-danger" v-show="errors.bairro">{{
              errors.bairro
            }}</span>
          </div>
          <div style="margin: 5px">
            <label for="">Ponto de Referência</label>
            <vee-field
              name="pontoReferencia"
              type="text"
              class="form-control"
              v-model="cadastroColab.pontoReferencia"
            />
            <span class="text-danger" v-show="errors.pontoReferencia">{{
              errors.pontoReferencia
            }}</span>
          </div>
        </div>
      </vee-form>

      <template v-slot:footer>
        <button class="m-dialog--cancel-btn" @click="show = false">Cancel</button>
        <button class="m-dialog--confirm-btn" @click="editar()">Editar</button>
        <button class="m-dialog--confirm-btn" style="background-color: red" @click="excluir()">Excluir</button>
      </template>
    </m-dialog>

    <!-- MODAL Pesquida -->
      <m-dialog class="dialog"
        v-model="pes"
        title="Resultado da Pesquisa"
        >
        <div class="tabela">
        <table class="table" style="width: 390px">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Cargo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in colabsPesquisado" :key="i.id">
          <td>{{ i.nome }}</td>
          <td>{{ i.email }}</td>
          <td>{{i.cargo}}</td>
        </tr>
      </tbody>
    </table>
    </div>

        <template v-slot:footer>
          <button class="m-dialog--cancel-btn" @click="show = false">Cancel</button>
        </template>
      </m-dialog>

  </div>
</template>

<script>
import CardColaborador from "./../../components/CardColaborador.vue";
import { Form, Field, defineRule } from 'vee-validate';
import axios from "axios";

export default {
    components: {
            'vee-form': Form,
            'vee-field': Field,
            "card-colaborador": CardColaborador,
        },
  data() {
      defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });
            defineRule("nomeCompleto", value => {
                let nomeCompleto = value.split(' ')
                if (nomeCompleto.length < 2) { 
                    return "Nome completo"
                }
                return true;
            });
            defineRule("validaData", value => {
                if (new Date(value) > new Date()) {
                    return "Data invalida"
                }
                return true;
            });
            defineRule("validaEmail", value => {
                 let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regexp.test(value)) {
                    return "Email inválido!"
                }
                return true;
                
            });
            defineRule("validaTelefone", value => {
                // sem espaços e caracteres especiais
                let regexp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
                if (!regexp.test(value)) {
                    return "Telefone inválido"
                }
                return true;
                
            });
            defineRule("validaCep", value => {
              let regexp = /^[0-9]{8}$/;
              if(!regexp.test(value)){
                  return "CEP inválido"
              }
              return true;
                
            });
            // especificar validações para cada campo
            const schema = {
                nome: "required|nomeCompleto",
                genero: "required",
                dataNascimento: "required|validaData",
                telefone: "required|validaTelefone",
                email: "required|validaEmail",
                cargo: "required",
                cep: "required|validaCep",
                cidade: "required",
                estado: "required",
                logradouro: "required",
                num: "required",
                complemento: "required",
                bairro: "required",
                pontoReferencia:"required"
            }
    return {
      titulo: "LISTAGEM DE COLABORADORES",
      
      idColab: null,
      //MODAL
      schema,
      generos: null,
        cargos: null,
        endereco: null,
        cidade: null,
        cadastroColab: {},
        show: false,
        colabPesquisado: null,
        pes: false,
    };
  },
  mounted() {
    this.$store.state.tituloModule.titulos = this.titulo;
    this.$store.commit("cadColaboradorModule/quantidadeColab");
    this.$store.commit("cadColaboradorModule/pesquisa");
  },
  beforeMount(){
            // criar os dropdown para genero e cargos
            this.generos=["Feminino", "Masculino", "Não Binário"];
            this.cargos = ["Dev Front-end", "Dev Back-end", "Diretor", "Gerente"];
    },
  computed: {
    cadastroColabs() {
      return this.$store.state.cadColaboradorModule.cadastroColabs;
    },
    colabsPesquisado(){
        return this.$store.state.cadColaboradorModule.colabPesquisado;
    }
  },
  methods: {
      detalhar(Colab){
          this.cadastroColab = Colab
          if(Colab){
            this.idColab = Colab.id
            this.show=!this.show
          }
      },
      editar(){
            this.$store.commit('cadColaboradorModule/editar', this.cadastroColab)
            this.cadastroColab = {}; // limpando os dados na tela
            alert("Colaborador editado com sucesso!"); // alert para informar que usuário foi editado
            this.show=false;
      },
      excluir(){
        this.$store.commit('cadColaboradorModule/excluir', this.idColab)
        this.cadastroColab = {}; // limpando os dados na tela
        alert("Colaborador excluido com sucesso!"); // alert para informar que usuário foi editado
        this.show=false;
      },
      pesquisar(){
            this.pes = !this.pes
            console.log("no list" + this.colabPesquisado)
            this.$store.commit('cadColaboradorModule/pesquisa', this.colabPesquisado)

        },
  },
  watch: {
         'cadastroColab.cep'() {

          axios.get(`https://viacep.com.br/ws/${this.cadastroColab.cep}/json`)
         .then((response) => {
           this.endereco = response.data
           this.cadastroColab.cidade = this.endereco.localidade
           this.cadastroColab.estado = this.endereco.uf
          }).catch((error) => {
            console.log(error)
          })
}
        },
};

</script>

<style scoped>
.pesquisa{
  margin: 2%;
  display: flex;
  gap: 2%;
  
}
.cardColab {
  display: flex;
  flex-wrap: wrap;
  padding: 3%;
}
</style>