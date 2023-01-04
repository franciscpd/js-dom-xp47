const formCNPJ = document.getElementById("formCNPJ");
const inputCNPJ = document.getElementById("cnpj");
const btnBuscar = document.getElementById("buscar");

const razaoSocial = document.getElementById("razaoSocial");
const nomeFantasia = document.getElementById("nomeFantasia");
const municipio = document.getElementById("municipio");
const uf = document.getElementById("uf");

const buscaCNPJ = async (cnpj) => {
  return await fetch(`${BASE_URL}/cnpj/v1/${cnpj}`).then((response) => {
    return response.json();
  });
};

const feedbackBuscando = (buscando = true) => {
  inputCNPJ.disabled = buscando;
  btnBuscar.disabled = buscando;
  btnBuscar.innerText = buscando ? "Buscando" : "Buscar";
};

formCNPJ.addEventListener("submit", async (form) => {
  form.preventDefault();

  feedbackBuscando();

  const resposta = await buscaCNPJ(inputCNPJ.value);

  if (resposta?.message) {
    alert(resposta?.message);
  } else {
    nomeFantasia.value = resposta?.nome_fantasia;
    razaoSocial.value = resposta?.razao_social;
    municipio.value = resposta?.municipio;
    uf.value = resposta?.uf;
  }

  feedbackBuscando(false);
});
