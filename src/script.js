// JS GLOBAL
var rgBase64 = "";
var cpfBase64 = "";
var historicoBase64 = "";
var cidadaoBase64 = "";
var enderecoBase64 = "";
var bolsaBase64 = "";

// import {environment} from './environments/environment';


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
          document.getElementById('rgCandidatoHidden').value = srcData;
          break;
        case "cpfCandidato":
          cpfBase64 = srcData;
          document.getElementById('cpfCandidatoHidden').value = srcData;
          break;
        case "historico":
          historicoBase64 = srcData;
          document.getElementById('historicoHidden').value = srcData;
          break;
        case "cidadao":
          cidadaoBase64 = srcData;
          document.getElementById('cidadaoHidden').value = srcData;
          break;
        case "endereco":
          enderecoBase64 = srcData;
          document.getElementById('enderecoHidden').value = srcData;
          break;
        case "bolsa":
          bolsaBase64 = srcData;
          document.getElementById('bolsaHidden').value = srcData;
          break;

        default:
          console.log("Falha ao converter arquivo!");
          break;
      }
    };
    fileReader.readAsDataURL(fileToLoad);
  }
}

// descontinuado
function enviarArquivos(){
  console.log('idUSer:')
  console.log(window.localStorage.getItem('id'))
  console.log('rgBase64:')
  console.log(rgBase64)
  fetch('http://localhost:3000' + '/insereDadosArquivos', {
    method: "POST",
    body: JSON.stringify({
      idUser: window.localStorage.getItem('id'),
      rgCandidato: rgBase64,
      cpfCandidato: '',
      historico: '',
      bolsa: '',
      eja: '',
      medico: '',
      endereco: '',
      foto: '',
      cidadao: '',
      ensinoMedio: '',
      rgResponsavel: '',
      cpfResponsavel: '',
    })
  }).then(res =>{
    console.log('res')
    console.log(res)
  }).catch(err =>{
    console.log('err')
    console.log(err)
  });
}
