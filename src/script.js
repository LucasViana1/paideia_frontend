// JS GLOBAL
var rgBase64 = "";
var cpfBase64 = "";
var historicoBase64 = "";
var cidadaoBase64 = "";
var enderecoBase64 = "";
var bolsaBase64 = "";

function convertBase64(element) {
  var filesSelected = document.getElementById(element).files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      switch (element) {
        case "rgCandidato":
          rgBase64 = srcData;
          break;
        case "cpfCandidato":
          cpfBase64 = srcData;
          break;
        case "historico":
          historicoBase64 = srcData;
          break;
        case "cidadao":
          cidadaoBase64 = srcData;
          break;
        case "endereco":
          enderecoBase64 = srcData;
          break;
        case "bolsa":
          bolsaBase64 = srcData;
          break;

        default:
          console.log("Falha ao converter arquivo!");
          break;
      }
    };
    fileReader.readAsDataURL(fileToLoad);
  }
}

function a() {
  console.log("rg: ");
  console.log(rgBase64);
  console.log("cpf: ");
  console.log(cpfBase64);
  console.log("historico: ");
  console.log(historicoBase64);
  console.log("cidadao: ");
  console.log(cidadaoBase64);
  console.log("endereco: ");
  console.log(enderecoBase64);
  console.log("bolsa: ");
  console.log(bolsaBase64);
}
