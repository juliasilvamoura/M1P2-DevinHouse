<template>
<vee-form @submit="salvar" :validation-schema="schema" v-slot="{ errors }"> <!-- Ao submeter não quero um carregamento, só executa o metodo com o prevent -->
  <!-- vee-form não precisa de prevent -->
    <div class="row g-3">
        <h1>Dados Pessoais</h1>
      <div class="col-md-4"> 
        <label for="nome">Nome Completo</label>
        <vee-field name="nome" class="form-control" v-model="reserva.nome"/>
        <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
      </div>

      <div class="col-3">
          <label for="tipo" class="form-label">Genero</label>
           <vee-field class="form-select" name="tipo" as="select" v-model="movimentacao.genero">
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

      <div class="col-2">
        <label for="">Telefone</label>
        <vee-field name="telefone" type="number" class="form-control" v-model="cadastroColab.telefone" :placeholder="'Digite sem espaços'"/>
        <span class="text-danger" v-show="errors.telefone">{{ errors.telefone }}</span>
      </div>


      <div class="col-4">
        <label for="">E-mail</label>
        <vee-field name="email" type="email"  class="form-control" v-model="cadastroColab.email"/>
        <span class="text-danger" v-show="errors.email">{{ errors.email }}</span>
      </div>

      <div class="col-4">
        <label for="">Cargo</label>
        <vee-field name="cargo" type="text"  class="form-control" v-model="cadastroColab.cargo"/>
        <span class="text-danger" v-show="errors.cargo">{{ errors.cargo }}</span>
      </div>
    </div>

    <div class="row g-3">
        <h1>Dados Endereço</h1>
      <div class="col-md-4"> 
        <label for="cep">CEP</label>
        <vee-field name="cep" class="form-control" v-model="cadastroColab.cep"/>
        <span class="text-danger" v-show="errors.cep">{{ errors.cep }}</span>
      </div>


      <div class="col-3">
        <label for="">Cidade</label>
        <vee-field name="cidade" type="date" class="form-control" v-model="cadastroColab.cidade"/>
        <span class="text-danger" v-show="errors.cidade">{{ errors.cidade }}</span>
      </div>

      <div class="col-2">
        <label for="">Estado</label>
        <vee-field name="estado" type="number" class="form-control" v-model="cadastroColab.estado"/>
        <span class="text-danger" v-show="errors.estado">{{ errors.estado }}</span>
      </div>



      <div class="col-4">
        <label for="">Logradouro</label>
        <vee-field name="logradouro" type="text"  class="form-control" v-model="cadastroColab.logradouro"/>
        <span class="text-danger" v-show="errors.logradouro">{{ errors.logradouro }}</span>
      </div>

      <div class="col-4">
        <label for="">Numero</label>
        <vee-field name="numero" type="number"  class="form-control" v-model="cadastroColab.num"/>
        <span class="text-danger" v-show="errors.num">{{ errors.num }}</span>
      </div>

      <div class="col-4">
        <label for="">Complemento</label>
        <vee-field name="complemento" type="text"  class="form-control" v-model="cadastroColab.complemento"/>
        <span class="text-danger" v-show="errors.complemento">{{ errors.complemento }}</span>
      </div>

      <div class="col-4">
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
      

      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary" style="margin-right: 15px">Salvar</button>
        <button type="buton" class="btn btn-warning" @click="clear">Limpar</button>
      </div>
      
    
    </vee-form>
  
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate';

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
                // não pode ter espaços
                let regexp = /^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$/;
                if (!regexp.test(value)) {
                    return "Telefone inválido"
                }
                return true;
                
            });
            defineRule("validaCep", value => {
                
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
            return{
                schema,
                generos: null,
                cargos: null,
                cadastroColab: {}
            }
        },
        methods:{
            // metodo salvar o colaborador
            salvar(){
                this.cadastro = {}; // limpando os dados na tela
                document.getElementById('formCadastro').reset();
                alert("Colaborador salvo com sucesso!"); // alert para informar que usuário foi salvo

            },
            // metodo limpar formulário em tela
            clear(){
                this.cadastroColab = {};
            }
        },
        beforeMount(){
            // criar os dropdown para genero e cargos
            this.generos=["Feminino", "Masculino", "Não Binário"];
            this.cargos = ["Dev Front-end", "Dev Back-end", "Diretor", "Gerente"];
    }
}
</script>

<style>

</style>