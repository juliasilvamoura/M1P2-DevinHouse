import { createStore } from 'vuex';

const userModule = {
    namespaced: true,
    state(){
        return{
            users: [],
            autenticado: false,
            emailGravatar: null,
            nomeusuario: null,
        }
    },
    mutations:{
        // Salvar novo usuário
        save(state, user){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            let listaUserJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                state.users = []; //esvazio a lista
                state.users =  JSON.parse(listaUserJSON); // faço receber os itens da lista
            }
            state.users.push(user); // depois adiciono o item na lista
            listaUserJSON = JSON.stringify(state.users); // Transformar em JSON/String
            localStorage.setItem('listaUsers',listaUserJSON); // salvar no localStorage a lista toda novamente
        },
        // deslogar
        logout(state){
            localStorage.removeItem('autenticado')
            state.autenticado = false
          },
        
          // Autentificar usuário
          autenticar(state, login){
            // add email na imagem gravatar
            state.emailGravatar = login.email;
            let listaUserJSON = localStorage.getItem('listaUsers') // recupera o localStorage
            if(listaUserJSON){ // se tiver algo na lista
                state.users = []; //esvazio a lista
                state.users =  JSON.parse(listaUserJSON); // faço receber os itens da lista
            }
            state.users.forEach(element => {
                if(login.email === element.email && login.senha === element.senha){
                    state.nomeusuario = element.nome;
                    localStorage.setItem('autenticado', true);
                    state.autenticado = true;
                }
                let nomeJSON = JSON.stringify(state.nomeusuario); // Transformar em JSON/String
                localStorage.setItem('nomeusuario',nomeJSON); // salvar no localStorage a lista toda novamente
            });
        },
        nomeUsuario(state){
            let nomeJSON = localStorage.getItem('nomeusuario')
            state.nomeusuario = "";
            state.nomeusuario =JSON.parse(nomeJSON)
        }     
    }

}

const cadColaboradorModule = {
    namespaced: true,
    state(){
        return{
            cadastroColabs: [],
            quantidade: null,
            colabPesquisado: [],
        }
    },
    mutations:{
        salvar(state, cadastroColab){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recupera o localStorage
            if(listaColabJSON){ // se tiver algo na lista
                state.cadastroColabs = []; //esvazio a lista
                state.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            }
            state.cadastroColabs.push(cadastroColab); // depois adiciono o item na lista
            listaColabJSON = JSON.stringify(state.cadastroColabs); // Transformar em JSON/String
            localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamente
        },
        excluir(state,id){
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recuperar o localStorage
            state.cadastroColabs = []; //esvazio a lista
            state.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            let index = state.cadastroColabs.filter(function (element) { // filtro todos menos aquele produto
                return element.id !== id;
            })
            state.cadastroColabs = index;
            listaColabJSON = JSON.stringify(state.cadastroColabs); // Transformar em JSON/String
            localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamente
        },
        editar(state,novo){
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recuperar o localStorage
            state.cadastroColabs = []; //esvazio a lista
            state.cadastroColabs =  JSON.parse(listaColabJSON);
            // encontrar e substituir 
            state.cadastroColabs.forEach((element, index) => {
                if(element.id === novo.id)
                    state.cadastroColabs[index] = novo
                })
            listaColabJSON = JSON.stringify(state.cadastroColabs); // Transformar em JSON/String
            localStorage.setItem('cadastroColabs',listaColabJSON); // salvar no localStorage a lista toda novamen

        },
        quantidadeColab(state){
            let listaColabJSON = localStorage.getItem('cadastroColabs') // recuperar o localStorage
            state.cadastroColabs = []; //esvazio a lista
            state.cadastroColabs =  JSON.parse(listaColabJSON); // faço receber os itens da lista
            state.quantidade = state.cadastroColabs.length
        },
        pesquisa(state, colab){
            let index = state.cadastroColabs.filter(function (element) { // filtro todos menos aquele produto
                return String(element.nome).toLowerCase().includes(String(colab).toLowerCase())  
            })
            state.colabPesquisado = index;
        }
    }
}


const cadProdutoModule = {
    namespaced: true,
    state(){
        return{
            cadastroProds: [],
            quantidade: null,
            quantidadeemp: null,
            valor: 0,
            itemPesquisado: [],
        }
    },
    mutations:{
        salvar(state, cadastroProd){
            // pensando que a tela foi recarregada, recupera os itens no localStorage
            let listaProdJSON = localStorage.getItem('cadastroProds') // recupera o localStorage
            if(listaProdJSON){ // se tiver algo na lista
                state.cadastroProds = []; //esvazio a lista
                state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            }
            state.cadastroProds.push(cadastroProd);
            listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage
        },
        excluir(state,id){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            let index = state.cadastroProds.filter(function (element) { // filtro todos menos aquele produto
                return element.id !== id;
            })
            state.cadastroProds = index;
            listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage a lista toda novamente
        },
        editar(state,novo){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON);
            // encontrar e substituir 
            state.cadastroProds.forEach((element, index) => {
                if(element.id === novo.id)
                state.cadastroProds[index] = novo
                })
            listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
            localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage a lista toda novamente 
            
        },
        quantidadeItens(state){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            state.quantidade = state.cadastroProds.length
        },
        valorItens(state){
            state.valor = 0;
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            state.cadastroProds.forEach(element => {
            state.valor += Number(element.valor) 
            })
            
        },
        emprestimo(state, emprestimo){
            let listaProdJSON = localStorage.getItem('cadastroProds') // recupera o localStorage
            if(listaProdJSON){ // se tiver algo na lista
                state.cadastroProds = []; //esvazio a lista
                state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            }
            state.cadastroProds.forEach(element => {
                if(element.id === emprestimo.idItem){
                element.status = !element.status
                element.idColab = emprestimo.idColab
                element.nomeColab = emprestimo.nomeColab 
                }   
                })
                listaProdJSON = JSON.stringify(state.cadastroProds); // Transformar em JSON/String
                localStorage.setItem('cadastroProds',listaProdJSON); // salvar no localStorage

        },
        quantidadeEmp(state){
            state.quantidadeemp=0;
            let listaProdJSON = localStorage.getItem('cadastroProds') // recuperar o localStorage
            state.cadastroProds = []; //esvazio a lista
            state.cadastroProds =  JSON.parse(listaProdJSON); // faço receber os itens da lista
            state.cadastroProds.forEach(element => {
                if(element.status === true)
                state.quantidadeemp += 1; 
                })    
        },
        pesquisa(state, item){
            let index = state.cadastroProds.filter(function (element) { // filtro todos menos aquele produto
                return element.codigo == Number(item);
            })
            state.itemPesquisado = index;
        }
        
}
}

const tituloModule ={
    namespaced: true,
    state(){
        return{
            titulos: null
        }
    },
    mutations: {
        titulo(state, tituloPag){
            state.titulos = tituloPag;
        }
    }
}
const store = createStore({
    modules:{
        cadColaboradorModule,
        cadProdutoModule,
        userModule,
        tituloModule
        
    }
});

export default store;
