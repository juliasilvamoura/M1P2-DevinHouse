<template>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
>>>>>>> Stashed changes
<div class="colaboradorCad">
<vee-form id="formColab" @submit="salvar" :validation-schema="schema" v-slot="{ errors }"> 
    <div class="row g-3" style="margin: 1%">
        <h3>Dados Pessoais</h3>
      <div class="col-md-4"> 
        <label for="nome">Nome Completo</label>
        <vee-field name="nome" class="form-control" v-model="cadastroColab.nome"/>
        <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
      </div>

      <div class="col-3">
          <label class="form-label">Genero</label>
           <vee-field class="form-select" name="genero" as="select" v-model="cadastroColab.genero">
                <option selected disabled>Genero</option>
                 <option v-for="genero in generos" :key="genero" :value="genero">{{ genero }}</option>
            </vee-field>
            <span class="text-danger" v-show="errors.genero">{{ errors.genero }}</span>            
      </div>

      <div class="col-3">
        <label for="">Data Nascimento</label>
        <vee-field name="dataNascimento" type="date" class="form-control" v-model="cadastroColab.dataNascimento"/>
        <span class="text-danger" v-show="errors.dataNascimento">{{ errors.dataNascimento }}</span>
      </div>

      <div class="col-3">
        <label for="">Telefone</label>
        <vee-field name="telefone" type="number" class="form-control" v-model="cadastroColab.telefone" :placeholder="'Digite sem espaços'"/>
        <span class="text-danger" v-show="errors.telefone">{{ errors.telefone }}</span>
      </div>


      <div class="col-5">
        <label for="">E-mail</label>
        <vee-field name="email" type="email"  class="form-control" v-model="cadastroColab.email"/>
        <span class="text-danger" v-show="errors.email">{{ errors.email }}</span>
      </div>

      <div class="col-3">
        <label>Cargo</label>
        <vee-field class="form-select" name="cargo" as="select" v-model="cadastroColab.cargo">
                <option selected disabled>Cargo</option>
                 <option v-for="cargo in cargos" :key="cargo" :value="cargo">{{ cargo }}</option>
            </vee-field>
        <span class="text-danger" v-show="errors.cargo">{{ errors.cargo }}</span>
      </div>
<<<<<<< Updated upstream
    
=======
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    </div>

    <div class="row g-3" style="margin: 1%">
        <h3>Dados Endereço</h3>
      <div class="col-md-2"> 
        <label for="cep">CEP</label>
        <vee-field name="cep" class="form-control" v-model.lazy="cadastroColab.cep"/>
<<<<<<< Updated upstream
        <!-- <span class="text-warning" >{{msg}} </span> -->
=======
<<<<<<< Updated upstream
        <!-- <span class="text-warning" >{{msg}} </span> -->
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        <span class="text-danger" v-show="errors.cep">{{ errors.cep }}</span>
      </div>


      <div class="col-3">
        <label for="">Cidade</label>
        <vee-field name="cidade" type="text" class="form-control" v-model="cadastroColab.cidade"/>
        <span class="text-danger" v-show="errors.cidade">{{ errors.cidade }}</span>
      </div>

      <div class="col-2">
        <label for="">Estado</label>
        <vee-field name="estado" type="text" class="form-control" v-model="cadastroColab.estado"/>
        <span class="text-danger" v-show="errors.estado">{{ errors.estado }}</span>
      </div>



      <div class="col-5">
        <label for="">Logradouro</label>
        <vee-field name="logradouro" type="text"  class="form-control" v-model="cadastroColab.logradouro"/>
        <span class="text-danger" v-show="errors.logradouro">{{ errors.logradouro }}</span>
      </div>

      <div class="col-1">
        <label for="">Numero</label>
        <vee-field name="numero" type="number"  class="form-control" v-model="cadastroColab.num"/>
        <span class="text-danger" v-show="errors.num">{{ errors.num }}</span>
      </div>

      <div class="col-4">
        <label for="">Complemento</label>
        <vee-field name="complemento" type="text"  class="form-control" v-model="cadastroColab.complemento"/>
        <span class="text-danger" v-show="errors.complemento">{{ errors.complemento }}</span>
      </div>

      <div class="col-3">
        <label for="">Bairro</label>
        <vee-field name="bairro" type="text"  class="form-control" v-model="cadastroColab.bairro"/>
        <span class="text-danger" v-show="errors.bairro">{{ errors.bairro }}</span>
      </div>
      <div class="col-4">
        <label for="">Ponto de Referência</label>
        <vee-field name="pontoReferencia" type="text"  class="form-control" v-model="cadastroColab.pontoReferencia"/>
        <span class="text-danger" v-show="errors.pontoReferencia">{{ errors.pontoReferencia }}</span>
      </div>
      </div>

      <div class="botoes" style="margin-top: 3%">
      <div class="col-sm-12">
<<<<<<< Updated upstream
        <button type="submit" class="btn btn-primary" style="margin-left: 2%">Salvar</button>
=======
<<<<<<< Updated upstream
        <button type="submit" class="btn btn-primary" style="margin-left: 2%">Salvar</button>
=======
        <button type="submit" class="btn btn-primary" style="margin-left: 2%" @click="salvar">Salvar</button>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        <button type="buton" class="btn btn-warning" style="margin-left: 2%" @click="clear">Limpar</button>
      </div>
      </div>
      
    
    </vee-form>
    </div>
  
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
import axios from "axios";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default {
    components: {
            'vee-form': Form,
            'vee-field': Field
        },
        data(){
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
<<<<<<< Updated upstream

=======
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            }
            return{
                schema,
                generos: null,
                cargos: null,
                endereco: null,
                cidade: null,
<<<<<<< Updated upstream
                cadastroColab: {}
=======
<<<<<<< Updated upstream
                cadastroColab: {}
=======
                cadastroColab: {},
                titulo: "CADASTRO DE COLABORADORES"
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            }
        },
        methods:{
            // metodo salvar o colaborador
            salvar(){
                this.cadastroColab.id = Date.now();
                this.$store.commit('cadColaboradorModule/salvar', this.cadastroColab) // passando o cadastro para ser salvo
                this.cadastroColab = {}; // limpando os dados na tela
                document.getElementById('formColab').reset(); // retorna os valores originais
                alert("Colaborador salvo com sucesso!"); // alert para informar que usuário foi salvo
<<<<<<< Updated upstream

=======
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            },
            // metodo limpar formulário em tela
            clear(){
                this.cadastroColab = {};
            }
        },
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
        // watch: {
        //   'cadastroColab.cep'() {
        //     const url = `https://viacep.com.br/ws/${this.cep}/json`;
        
        //     fetch(url)
        //     .then(resposta => {
        //       // console.log(resposta.json())
        //       resposta.json().then(conteudo => this.endereco = conteudo)
        //       // this.cidade = this.endereco.localidade
        //       // console.log(this.cidade)
        //       // this.cadastroColab.cep = this.cep
              
                
        //     })
        //     .catch(erro =>{
        //         console.log(erro)
        //         this.msg = "Este CEP é inválido"
        //     });
        //   }
        // },
        beforeMount(){
            // criar os dropdown para genero e cargos
            this.generos=["Feminino", "Masculino", "Não Binário"];
            this.cargos = ["Dev Front-end", "Dev Back-end", "Diretor", "Gerente"];
    }
<<<<<<< Updated upstream
=======
=======
        //completa o endereço de cadastro
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
},
        },
        
        beforeMount(){
            // criar os dropdown para genero e cargos
            this.generos=["Feminino", "Masculino", "Não Binário"];
            this.cargos = ["Dev Front-end", "Dev Back-end", "Diretor", "Gerente", "CTO", "CEO","Engenheiro de Dados"];
    },
    mounted(){
      this.$store.state.tituloModule.titulos = this.titulo;
    },
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}
</script>

<style>
.colaboradorCad{
  position: relative
}
</style>