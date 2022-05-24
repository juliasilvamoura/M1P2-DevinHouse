<template>
<div class="template">
    <div style="position: relative" v-if="autenticado">
        <Navbar/>
        <Sidebar/>
        <router-view style="position: relative; left: 10%"></router-view>
    </div>

    <div class="login-template" v-else>
        <label> Ações de login são necessárias -</label>
         <router-link to="/login"> Login</router-link>
    </div>
 
    

</div>

  
</template>

<script>
import Navbar from './../dashboard/navbar/Navbar.vue'
import Sidebar from './../dashboard/sidebar/Sidebar.vue'
export default {
    components:{
        Navbar,
        Sidebar
    },
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{
        autenticado(){
            // return this.$store.state.autenticacaoModule.autenticado;
            return true
        }
    },
    monted(){
        this.$store.satte.autenticacaoModule.autenticado = localStorage.getItem('autenticado') ? true : false
    }

}
</script>

<style scoped>

.login-template{
    text-align: center;
    font-size: 100%;
}

.template{

}



</style>