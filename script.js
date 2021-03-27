$(document).ready(function(){
    $('#find').click(function(event){
        event.preventDefault()
        let num = [$('#month').val(), $('#day').val(), $('#year').val()]
        console.log(num)
        for(var i = 0; i < num.length; i++){
            
console.log(`Trying to get this ${num[i]}`)
            $('#starters').html (
                $.get(`https://pokeapi.co/api/v2/pokemon/${num[i]}`, function(res) {
                    let html_str = ""
                    for(let i = 0; i < res.types.length; i++){
                        html_str += "<li>" + res.types[i].type.name + "</li>";
                    }
                    $('#starters').append(`
                        <div class='col-12 col-sm-6 col-md-4'>
                            <div class='card my-1 p-2'>
                                <img class='card-img-top' src="${res.sprites.front_default}"/>
                                <div class='card-body text-center'>
                                    <h2>${res.name}</h2>
                                    <h4>Types</h4>
                                    <ul>
                                        ${html_str}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `)
                    
                }, "json") 
            )
        }
    })

    $.get(document).on('click', '#Clear', function(){
        $('.row').slideUp()
    })
})
