"use strict";
let pic_list = []
$(function() {
    $('#fileSelector').change(function(evt) {
        let files = evt.target.files;
        for (let i = 0; i < files.length; i++) {
            //console.log(files[i].name);
            pic_list.push(files[i].name);
        }
        $('#fileBtn').hide();
    });
    $('#drawBtn').click(function() {
        console.log(pic_list);
    });
});

