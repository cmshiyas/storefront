
$.getJSON('json/products.json', function(data){
    var output='' ;
    $.each(data, function(key, val){
        output += '<div class="col-md-4">';
        output += '<a href="/product-details.html?product='+val.title+'"> <img src = "images/' + val.image + '" alt = "'+ val.title + '"  /></a>';
        output += '<p>'+ val.brand + '</p>';
        output += '<p>'+ val.title + '</p>';
        output += '<p>$'+ val.price + '</p>';
        output += '</div>';
    });
    $('#update').html(output);
    console.log(output);

}); // get json



var docUrl = window.location.href;
var product = window.location.href.substring(51).replace(/%20/g, ' ');
var mySearch = new RegExp(product, "i");

$.getJSON('json/products.json', function(data){
    var output = '';
    $.each(data, function(key, val){
        if ( val.title.search(mySearch) != -1 ){
            output += '<div class="col-md-4">';
            output += '<a href="/product-details.html?product='+val.title+'"> <img src = "images/' + val.image + '" alt = "'+ val.title + '"  /></a>';
            output += '<p>'+ val.brand + '</p>';
            output += '<p>'+ val.title + '</p>';
            output += '<p>$'+ val.price + '</p>';
            output += '</div>';
        }
    });

    $('#prodlist').html(output);

}); // get json




