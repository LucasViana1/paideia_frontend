var rgBase64 = "";
var cpfBase64 = "";
var historicoBase64 = "";
var cidadaoBase64 = "";
var enderecoBase64 = "";
var bolsaBase64 = "";
var fotoBase64 = "";
var ejaBase64 = "";

function convertBase64(element) {
  var filesSelected = document.getElementById(element).files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      switch (element) {
        case "rgCandidato":
          rgBase64 = srcData;
          document.getElementById("rgCandidatoHidden").value = srcData;
          break;
        case "cpfCandidato":
          cpfBase64 = srcData;
          document.getElementById("cpfCandidatoHidden").value = srcData;
          break;
        case "historico":
          historicoBase64 = srcData;
          document.getElementById("historicoHidden").value = srcData;
          break;
        case "cidadao":
          cidadaoBase64 = srcData;
          document.getElementById("cidadaoHidden").value = srcData;
          break;
        case "endereco":
          enderecoBase64 = srcData;
          document.getElementById("enderecoHidden").value = srcData;
          break;
        case "bolsa":
          bolsaBase64 = srcData;
          document.getElementById("bolsaHidden").value = srcData;
          break;
        case "foto":
          fotoBase64 = srcData;
          document.getElementById("fotoHidden").value = srcData;
          break;
        case "eja":
          ejaBase64 = srcData;
          document.getElementById("ejaHidden").value = srcData;
          break;

        default:
          break;
      }
    };
    fileReader.readAsDataURL(fileToLoad);
  }
}
