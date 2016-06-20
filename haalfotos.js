/**
 * Created by Willem on 13-6-2016.
 */
$(document).ready(function() {
    var Search;
    $('#button').click(function () {
        Search = $('#zoeken').val();
        haalFoto();
    });
    $('#zoeken').keydown(function(e){
        if(e.keyCode == 13){
            Search = $(this).val();
            haalFoto();
        }
    });
    
    function haalFoto(){
       var flickrURL = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + Search +"&jsoncallback=?";
       
       $.ajax (
       {
           dataType: 'json',
           method: 'GET',
           url: flickrURL,
           success: verwerkFotos
       }
       )
    }
    
    function verwerkFotos(data){
        console.log(data);
        $('#fotos').html("");
        for(var i=0; i<data.items.length; i++){
            var foto = data.items[i];
            var htmlCode = "<div class='houder'><div class='afbeelding'><a href='" + foto.link + "'target='_blank'><img src='" + foto.media.m + "'></a></div><h4>" + foto.title + "'alt='" + foto.title + "'</h4></div>";
            $('#fotos').append(htmlCode);
        }
    }
    
    
})