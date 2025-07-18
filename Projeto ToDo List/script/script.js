const btnSalvar = document.getElementById("btnSalvar");
btnSalvar.addEventListener("click", salvarTarefa);
const btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparTarefa);
const inputDescricao = document.getElementById("inputDescricao");
inputDescricao.addEventListener("input", autoRedimensionamentoDescricao);
const inputTitulo = document.getElementById("inputTitulo");
const tarefasSalvas = document.getElementById("tarefasSalvas");
// Função de Validação de valor de Título
function validacaoTitulo(titulo) {
  if (titulo.length == 0) {
    return false;
  } else {
    return true;
  }
}
// Função de Redimensionamenteo da Área da "Descrição"
function autoRedimensionamentoDescricao() {
  inputDescricao.style.height = "auto";
  inputDescricao.style.height = inputDescricao.scrollHeight + "px";
}
//Função Salvar Tarefa
function salvarTarefa() {
  const valueTitulo = inputTitulo.value;
  if (!validacaoTitulo(valueTitulo)) {
    alert("Preencha o titulo");
  } else {
    criarTarefa(valueTitulo);
    inputTitulo.value = "";
    inputDescricao.value = "";
  }
}
// Cria a tarefa ao salvar
function criarTarefa(titulo) {
  let divTarefa = document.createElement("div");
  divTarefa.setAttribute("id", "divTarefa");
  let pTitulo = document.createElement("p");
  pTitulo.setAttribute("id", "pTitulo");
  pTitulo.textContent = `${titulo}`;
  let divIcons = document.createElement("div");
  divIcons.setAttribute("id", "divIcons");
  let realizedCheck = document.createElement("input");
  realizedCheck.setAttribute("type", "checkbox");
  realizedCheck.setAttribute("id", "realizedCheckbox");
  let removeIcon = document.createElement("button");
  removeIcon.setAttribute("id", "removeIcon");
  let materialSymbolDelete = document.createElement("span");
  materialSymbolDelete.setAttribute("class", "material-symbols-outlined");
  materialSymbolDelete.setAttribute("id", "deleteIcon");
  materialSymbolDelete.textContent = "delete";

  //Organizando pai e filhos
  tarefasSalvas.appendChild(divTarefa);
  divTarefa.appendChild(pTitulo);
  divTarefa.appendChild(divIcons);
  divIcons.appendChild(realizedCheck);
  divIcons.appendChild(removeIcon);
  removeIcon.append(materialSymbolDelete);

  //Dando funcionalidade ao botão delete da Div
  removeIcon.addEventListener("click", () => removerTarefa(divTarefa));
}
// Função de limpar os campos ao clicar no botão "Limpar"
function limparTarefa() {
  inputTitulo.value = "";
  inputDescricao.value = "";
}

function removerTarefa(tarefa) {
  tarefa.remove();
}
