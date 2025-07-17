let btnSalvar = document.getElementById("btnSalvar");
btnSalvar.addEventListener("click", salvarTarefa);

const inputTitulo = document.getElementById("inputTitulo");
const inputDescricao = document.getElementById("inputDescricao");
const btnLimpar = document.getElementById("btnLimpar");
const tarefasSalvas = document.getElementById("tarefasSalvas");

function validacaoTitulo(titulo) {
  if (titulo.length == 0) {
    return false;
  } else {
    return true;
  }
}

function salvarTarefa() {
  const valueTitulo = inputTitulo.value;
  const valueDescricao = inputDescricao.value;
  if (!validacaoTitulo(valueTitulo)) {
    alert("Preencha o titulo");
  } else {
    criarTarefa(valueTitulo);
    inputTitulo.value = "";
    inputDescricao.value = "";
  }
}

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
  //Guardando Valores
}

function limparTarefa() {
  let int = 0;
}

function removerTarefa() {
  let int = 0;
}
