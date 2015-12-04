"use strict";
let pic_list = [];
let prize_idx = 0;
let prize_list = ["哲佑的幸福1",
                  "哲佑的幸福2",
                  "哲佑的幸福3",
                  "哲佑的幸福4",
                  "哲佑的幸福5",
                  "哲佑的幸福6",
                  "哲佑的幸福7",
                  "哲佑的幸福8",
                  "哲佑的幸福9",
                  "哲佑的幸福10",
                  "哲佑的幸福11",
                  "哲佑的幸福to be conti."];
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
        if (pic_list.length != 0) {
            let start = Math.floor(Math.random() * pic_list.length);
            let steps = Math.floor(Math.random() * 20) + 20;
            rollPics(start, steps);
        } else {
            console.error("No Pictures Left!");
            $('#chosenPic').attr("src", "img/question.png");
        }
    });
    $('#nextBtn').click(function() {
        if (prize_idx + 1 == prize_list.length) {
            $('#prizeTitle').text("獎品抽完了QQQQ");
        } else {
            prize_idx++;
            $('#prizeTitle').text(prize_list[prize_idx]);
        }
        $('#chosenPic').attr("src", "img/question.png");
    });
});

function rollPics(last, step) {
    let chosen;
    if (last + 1 == pic_list.length) {
        chosen = 0;
    } else {
        chosen = last + 1;
    }
    console.log(step);
    $('#chosenPic').attr("src", "pic/" + pic_list[chosen]);
    if (step > 20) {
        step--;
        setTimeout(function() {
            rollPics(chosen, step);
        }, 200);
    } else if (step > 0) {
        step--;
        console.log(3200 / Math.pow(2, step / 4));
        setTimeout(function() {
            rollPics(chosen, step);
        }, 3200 / Math.pow(2, (step - 1) / 4));
    } else {
        pic_list.splice(chosen, 1);
    }
}
