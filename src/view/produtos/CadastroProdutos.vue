<template>
<div class="produtoCad">
  <vee-form id="formProduto" @submit="salvar" :validation-schema="schema" v-slot="{ errors }"> 
    <div class="row g-3" style="margin: 1%">
        <h3>Dados Principais</h3>
      <div class="col-md-2"> 
        <label >Código de Patrimonio</label>
        <vee-field name="codigo" class="form-control" type="text" v-model="cadastroProd.codigo"/>
        <span class="text-danger" v-show="errors.codigo">{{ errors.codigo }}</span>
      </div>

      <div class="col-4">
        <label >Titulo do Item</label>
        <vee-field name="tituloItem" type="text" class="form-control" v-model="cadastroProd.tituloItem"/>
        <span class="text-danger" v-show="errors.tituloItem">{{ errors.tituloItem }}</span>
      </div>


      <div class="col-3">
        <label>Categoria do Item</label>
        <vee-field class="form-select" name="categoria" as="select" v-model="cadastroProd.categoria">
                <option selected disabled>categoria</option>
                 <option v-for="categoria in categorias" :key="categoria" :value="categoria">{{ categoria }}</option>
            </vee-field>
        <span class="text-danger" v-show="errors.categoria">{{ errors.categoria }}</span>
      </div>
    

    </div>

    <div class="row g-3" style="margin: 1%">
        <h3>Dados Complementares</h3>
      <div class="col-md-2"> 
        <label>Valor R$</label>
        <vee-field name="valor" type="number" class="form-control" v-model.lazy="cadastroProd.valor"/>
        <span class="text-danger" v-show="errors.valor">{{ errors.valor }}</span>
      </div>


      <div class="col-3">
        <label >URL da Foto</label>
        <vee-field name="image" type="text" class="form-control"  v-model="cadastroProd.image"/>
        <span class="text-danger" v-show="errors.image">{{ errors.image }}</span>
      </div>

      <div class="col-2">
        <label>Marca</label>
        <vee-field name="marca" type="text" class="form-control" v-model="cadastroProd.marca"/>
        <span class="text-danger" v-show="errors.marca">{{ errors.marca }}</span>
      </div>

      <div class="col-5">
        <label >Modelo</label>
        <vee-field name="modelo" type="text"  class="form-control" v-model="cadastroProd.modelo"/>
        <span class="text-danger" v-show="errors.modelo">{{ errors.modelo }}</span>
      </div>

      <div class="col-5">
        <label>Descrição</label>
        <vee-field name="descricao" type="text"  class="form-control" v-model="cadastroProd.descricao"/>
        <span class="text-danger" v-show="errors.descricao">{{ errors.descricao }}</span>
      </div>
      </div>

      <div class="botoes" style="margin-top: 3%">
      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary" style="margin-left: 2%">Salvar</button>
        <button type="buton" class="btn btn-warning" style="margin-left: 2%" @click="clear">Limpar</button>
      </div>
      </div>
      
    
    </vee-form>
    </div>
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
            defineRule("valorMaiorQueZero", value => {
                if (value <= 0) { 
                    return "Valor inváliro"
                }
                return true;
            });
            // especificar validações para cada campo
            const schema = {
                codigo: "required",
                tituloItem: "required",
                categoria: "required",
                valor: "required|valorMaiorQueZero",
                image:"required",
                marca:"required",
                modelo: "required",
                descricao: "required"
            }
            return{
                schema,
                categorias: null,
                cadastroProd: {},
                titulo: "CADASTRO DE ITENS"
            }
        },
        methods:{
            // metodo salvar o produto
            salvar(){
                this.cadastroProd.status = false;
                this.cadastroProd.nomeColab = null;
                this.cadastroProd.idColab = null; 
                this.cadastroProd.id = Date.now(); // id será a data atual
                this.$store.commit('cadProdutoModule/salvar', this.cadastroProd)
                this.cadastroProd = {}; // limpando os dados na tela
                document.getElementById('formProduto').reset(); // retorna os valores originais
                alert("Produto salvo com sucesso!"); // alert para informar que usuário foi salvo

            },
            // metodo limpar formulário em tela
            clear(){
                this.cadastroProd = {};
            }
        },
        beforeMount(){
            // criar os dropdown para categoria
            this.categorias=["Eletrônico", "Mobiliário", "Geral","Decoração"];
    },
    mounted(){
      this.$store.state.tituloModule.titulos = this.titulo;
    }
}
</script>

<style>

</style>
