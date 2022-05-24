import { createStore } from 'vuex';

const autenticacaoModule = {
    namespaced: true,
    state(){
        return{
            autenticado: false,
            usuarios: []
        }
    },
    mutations: {
        autenticar(state, login){
            const listaUsuariosJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                this.usuarios = []; //esvazio a lista
                this.usuarios =  JSON.parse(listaUsuariosJSON); // faço receber os itens da lista
            }
            usuarios.forEach(user => {
                if(login.email === user.email && login.senha === user.senha){
                    localStorage.setItem('autenticado', true);
                    state.autenticado = true;
                }
            });
            
        },
        logout(state){
            localStorage.removeItem('autenticado')
            state.autenticado = false
          }
    }
}

const userModule = {
    namespaced: true,
    state(){
        return{
            users: []
        }
    },
    mutations:{
        save(state, user){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            const listaUserJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                this.users = []; //esvazio a lista
                this.users =  JSON.parse(listaUserJSON); // faço receber os itens da lista
            }
            state.users.push(user); // depois adiciono o item na lista
            localStorage.removeItem('listaUsers'); // removo a lista do local storage 
            listaUserJSON = JSON.stringify(this.users); // Transformar em JSON/String
            localStorage.setItem('listaUsers',listaUserJSON); // salvar no localStorage a lista toda novamente
            console.log(listaUserJSON)
        }
    }

}

const cadColaboradorModule = {
    namespaced: true,
    state(){
        return{
            cadastroColabs: []
        }
    },
    mutations:{
        salvar(state, cadastroColab){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            // const listaColabJSON = localStorage.getItem('cadastroColabs') // recupera o localStorage
            // if(listaColabJSON){ // se tiver algo na lista
            //     this.cadastroColabs = []; //esvazio a lista
            //     this.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            // }
            state.cadastroColabs.push(cadastroColab); // depois adiciono o item na lista
            console.log(cadastroColab)
            // localStorage.removeItem('cadastroColabs'); // removo a lista do local storage 
            // listaColabJSON = JSON.stringify(this.cadastroColabs); // Transformar em JSON/String
            // localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamente
        },

    }
}


const cadProdutoModule = {
    namespaced: true,
    state(){
        return{
            cadastroProds: []
        }
    },
    mutations:{
        salvar(state, cadastroProd){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            console.log(cadastroProd)
            // let listaProdJSON = localStorage.getItem('cadastroProds') // recupera o localStorage
            // if(listaProdJSON){ // se tiver algo na lista
            //     this.cadastroProds = []; //esvazio a lista
            //     this.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            // }
            state.cadastroProds.push(cadastroProd);
            // localStorage.removeItem('cadastroProds'); // limpar lista e add tudo novamente
            let listaProdJSON = JSON.stringify(this.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage
            console.log(listaProdJSON)
        },
}
}



const store = createStore({
    modules:{
        cadColaboradorModule,
        cadProdutoModule,
        autenticacaoModule,
        userModule
    }
});

export default store;