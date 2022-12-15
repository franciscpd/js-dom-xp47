const formCadastroCliente = document.getElementById("cadastroCliente");
const nomeCompleto = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const verSenha = document.querySelector("#verSenha");
const dataNascimento = document.querySelector("#dataNascimento");

const campos = [nomeCompleto, email, senha, verSenha, dataNascimento];

campos.forEach((campo, indice) => {
  campo.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && indice < campos.length - 1) {
      event.preventDefault();
      campos[indice + 1].focus();
    }
  });

  campo.addEventListener("change", () => {
    campo.classList.remove("required");
  });
});

verSenha.addEventListener("click", (event) => {
  if (event.target.checked) {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});

formCadastroCliente.addEventListener("submit", (form) => {
  form.preventDefault();

  if (nomeCompleto.value === "") {
    alert("O nome deve ser preenchido.");
    return;
  }

  const [nome, sobrenome] = nomeCompleto.value.split(" ");

  if (nome == null || sobrenome == null) {
    alert("Deve ser informado o nome completo!");
    nomeCompleto.focus();
    nomeCompleto.classList.add("required");
    return;
  }

  const { elements } = form.target;

  const result = [];

  for (const element of elements) {
    if (element.name) {
      result.push(`${element.name}: ${element.value}`);
    }
  }

  alert("Cliente cadastrado com sucesso! \n\n" + result.join("\n"));

  form.target.reset();
});
