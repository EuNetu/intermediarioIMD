var url = "https://api.jsonbin.io/v3/b/6374e8f52b3499323b018364";

var requisicao = new XMLHttpRequest();
requisicao.onload = manipulaResposta;
requisicao.open("GET", url, true);
requisicao.send();
function manipulaResposta() {
  console.log(JSON.parse(requisicao.responseText))
  var videosObj = JSON.parse(requisicao.responseText);
  var mainDiv = document.querySelector("#principal");
  var adicionarVideoNaLista = function (video) {
    var link = document.createElement("a");
    link.classList.add("list-group-item", "list-group-item-action");
    link.innerHTML = video.title;
    link.setAttribute(
      "href",
      "https://www.youtube.com/watch?v=" + video.youtubeId
    );
    mainDiv.appendChild(link);
  };

  videosObj['record']["mais vistos"].forEach((video) => {
    adicionarVideoNaLista(video);
  });
}
