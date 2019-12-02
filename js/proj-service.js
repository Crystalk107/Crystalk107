'use strict'

var gProjs = [];


function createProj(id, name, title, desc, url, labels, publishedAt){
    return {
        id, 
        name,
        title,
        desc,
        url,
        labels,
        publishedAt 
    }
}

function createProjs(){
    gProjs.push(createProj("minesweeper", "Minesweeper","Flag those mines", "Classic Minesweeper game with added features.\nYou have 3 lives!\nYou can use hints!", "https://crystalk107.github.io/minesweeper/", "minesweeper", "2019-11-23" ));
    gProjs.push(createProj("akinator", "Akinator","Guess who?", "Feed the bot with different characters and create a guessing bot", "https://crystalk107.github.io/Akinator/", ["akinator","guess who"], "2019-12-02" ));
}

function getProjsToRender(){
    return gProjs;
}

function getProjId(el){
    var projId = el.getAttribute('data-id');
    return projId;
}

function getProjById(projId){
    for (var i=0; i < gProjs.length; i++){
        if (gProjs[i].id === projId) return gProjs[i];
    } return null;
}