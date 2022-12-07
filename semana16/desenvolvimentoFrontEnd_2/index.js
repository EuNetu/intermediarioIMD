function apagarElemento() {
    var i = $(this);
    var span = i.parent();
    $(span.parent()).remove()
}

function adicionarElemento(event) {
    var code = event.which;
    if (code == 13) {
        let li = $("<li/>");
        var textNode = document.createTextNode($("#addToDo").val());

        var span = $("<span />");

        var i = $("<i/>", {
            class: 'fa fa-trash',
        });
        
        $(span).append(i);
        $(li).append(span);
        $(li).append(textNode);
        $("ul").append(li);
    }
};



$("ul").on("click", ".fa-trash", apagarElemento);

$("#addToDo").keypress(adicionarElemento);
