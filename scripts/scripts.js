

$(document).ready(function(){
        $.ajax({
        type : 'GET',
        data : {},
        url : 'http://api.petfinder.com/pet.getRandom?location=28215&key=8fba868eec4c83b60c698a04b7979a06&animal=dog&output=full&format=json&callback=?' ,
        location: '[$t]28215',
        dataType: 'json',
        success : function(data) {
            // stores result
            var result = '';

            var petfinder = data.petfinder;
            var infoHTML = '<h3>';
            var descriptionHTML = '<p>'
            var image = '<img';
            image += '<img src=' +petfinder.pet.media['$t']+ '/>'
            infoHTML += '<h3>' +petfinder.pet.name['$t']+ '</h3>';
            infoHTML += petfinder.pet.description['$t'];

            descriptionHTML += '</p>';

            // return infoHTML;
            $('#petfinderInfo').html(infoHTML);

            // $('#petfinderInfo').html(petfinder.pet.description['$t']);
            //
            console.log(petfinder);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
});
