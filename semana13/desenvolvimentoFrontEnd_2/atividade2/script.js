var url = "https://api.jsonbin.io/v3/b/6374e8f52b3499323b018364";

fetch(url)
  .then(
    function (response) {
      response.json().then(
        data => {
          manipulaResposta(data)
        }
        );
    }
  )

function manipulaResposta(dados) {
  var videosObj = dados;
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
