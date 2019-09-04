
"use strict";

(() => {
    window.SearchController = {
        init: () => {
            let searchButton = $("#search-button");
            let searchTerm = $("#search-term");
            let url = 'http://pokeapi.co/api/v2/pokemon/';
            let imageResultContainer = $(".image-result-container");
            let result = {};

            searchButton.click(() => {
                searchButton.attr("disabled", "disabled");
                $.getJSON(url + searchTerm.val().toLowerCase(), (data) => {
                    result.name = data.name;
                    result.id = data.id;
                    result.image = data.sprites.front_default;
                    result.type = data.types[0].type.name;
                    result.weight = data.weight / 10 + " kg";
                    result.height = data.height / 10 + " m";
                }).done(() => {
                    imageResultContainer.empty().append('<p> Name: ' + result.name + '<br>ID: ' +
                        result.id + '<br>Type: ' + result.type + '<br>Height: ' +
                        result.height + '<br>Weight: ' + result.weight + '</p>');
                    imageResultContainer.append($('<img>').attr({ src: result.image }));
                }
              );
                searchButton.attr("disabled", false);
            });
            searchTerm.bind("input", () => searchButton.prop("disabled", !searchTerm.val()));
        }
    };

    window.TypeSearchController = {
        init: () => {
            let url = 'http://pokeapi.co/api/v2/type/';
            let typeSearchTerm = $("#type-search-term");
            let typeSearchButton = $("#type-search-button");
            let pokeArray = [];
            let ResultContainer = $(".type-result-container");

            typeSearchButton.click(() => {
                typeSearchButton.attr("disabled", "disabled");
                $.getJSON(url + typeSearchTerm.val().toLowerCase(), function(data){
                    for (let i = 0; i < data.pokemon.length; i++){
                        let name = data.pokemon[i].pokemon.name;
                        if (name !== "undefined"){
                            pokeArray.push(name);
                        }
                    }
                }).done(() => {
                    ResultContainer.empty().append('<p>' + 'Pokemon with type ' + typeSearchTerm.val() + ' are: <br></p>');
                    ResultContainer.append('<div class="col left-col"></div> <div class="col right-col"></div>');
                    $(".left-col").append('<ul id="type-list"></ul>');
                    $(".right-col").append('<ul id="type-list-2"></ul>');
                    for (let i = 0; i < pokeArray.length; i += 1){
                        $("#type-list").append('<li>' + pokeArray[i] + '</li>');
                        if (i === pokeArray.length / 2){break;}
                    }
                    for (let j = pokeArray.length / 2 + 1; j < pokeArray.length; j += 1){
                        $("#type-list-2").append('<li>' + pokeArray[j] + '</li>');
                    }
                    typeSearchButton.attr("disabled", false);
                });
            });
            typeSearchTerm.bind("input", () => typeSearchButton.prop("disabled", !typeSearchTerm.val()));
        }
    };

    window.ListController = {
        init: () => {
            let url = 'http://pokeapi.co/api/v2/pokemon/';
            let submitButton = $("#submit-button");
            let pokemonArray = [];
            let ResultContainer = $(".listed-Pokemon-container");

            submitButton.click(() => {
                submitButton.attr("disabled", "disabled");
                $.getJSON(url, function(data){
                    data.results.forEach((pokemon, i) => {
                        ResultContainer.append('<div class="p' + i + '" ></div>');
                        $.getJSON(pokemon.url, function(data){

                            pokemonArray.splice(data.id - 1, 0, {
                                name: data.name,
                                id: data.id,
                                type: data.types[0].type.name,
                                weight: data.weight / 10 + " kg",
                                height: data.height / 10 + " m",
                                img: data.sprites.front_default,
                                index: "p" + i,
                            });
                        }).done(() => {
                            for (let i = 0; i < pokemonArray.length; i++){
                                let placeholder = $("." + pokemonArray[i].index);
                                placeholder.empty();
                                placeholder.append('<p> Name: ' + pokemonArray[i].name + '<br>ID: ' +
                                  pokemonArray[i].id + '<br>Type: ' + pokemonArray[i].type + '<br>Height: ' +
                                  pokemonArray[i].height + '<br>Weight: ' + pokemonArray[i].weight + '</p>');
                                placeholder.append($('<img>').attr({ src: pokemonArray[i].img }));
                            }
                        });
                    });
                });
            });
        }
    };

    window.SliderSearchController = {
        init: () => {
            $('.slide-this').slide();
        }
    };
})();
