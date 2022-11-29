let links = []
$("a").each(function () {
  links.push($(this).attr("href"));
});

let i = 0
$("a").each(function () {
  let img = $(`<img src="${youtube.generateThumbnailUrl(links[i])}" alt='ThumbnailUrl'></img>`)
  $(this).prepend(img)
  $( this ).find("img").last().hide()
  i++
});

function mostrarImagem(event) {
  $( this ).find( "img" ).last().show(2000)
}
function esconderImagem(){
  $( this ).find( "img" ).last().hide(2000)
}

$("a").mouseenter(mostrarImagem)
$("a").mouseleave(esconderImagem)

