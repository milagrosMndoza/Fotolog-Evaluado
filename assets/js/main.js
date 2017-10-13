/*aquí va tu código*/


const app  = {
    item :  {
        nombre: undefined,
        comentario: undefined,
    },
    init : function () {
        app.item.nombre =   $('#nom');
        app.item.comentario =   $('#com');
        app.setup ();
        app.obtenerDato();
    },
    setup: function () {
        $('#agregarBtn').click (app.agregarComentario) ;
        $('#limpiarBtn').click (app.limpiarComentario) ;
          
    },
    
    agregarComentario: function(){
        /*if( $("#nom").val("") && $("#com").val("")){
            alertify.alert("escriba nombre y su comentario");
        }*/
        localStorage.setItem(app.item.nombre.val(), app.item.comentario.val());
        app.obtenerDato(); 
        app.limpiarInput();
         
    },
    
    obtenerDato: function (event) {
        $('#mily').empty();
            for(var clave in localStorage)
            {
                $('#mily').append(`<div class='comentario'><h3 class='fucsia'>${clave}</h3>\
                <p class='blanco'>${localStorage[clave]}</p></div>`);
            }

    },
    
    limpiarInput: function(){
        $("#nom").val("");
        $("#com").val("");
    },

    limpiarComentario: function (event) {
        $('#mily').empty();
        localStorage.clear();
    }
};
$(document).ready ( app.init );

