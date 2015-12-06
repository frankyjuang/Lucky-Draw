"use strict";
let pic_list = [];
let prize_idx = 0;
let prize_list = [
	"[ABCDE 耳罩式耳機]",
	"[FGHIJ 行動電源]"
];

$(function() {
	$('#prizeTitle').text(prize_list[0]); 
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
            let steps = Math.floor(Math.random() * 20) + 30;
            $('#prizeTitle').text(prize_list[prize_idx]);
            rollPics(start, steps);
        } else {
            console.error("No Pictures Left!");
            $('#chosenPic').attr('src', "img/question.png");
        }
    });
    $('#nextBtn').click(function() {
		$('#picPanel').css('background-color', "rgba(255, 255, 255, 0.5)");
        if (prize_idx + 1 == prize_list.length) {
            $('#prizeTitle').text("獎品抽完了QQQQ");
        } else {
            prize_idx++;
            $('#prizeTitle').text(prize_list[prize_idx]);
        }
        $('#chosenPic').attr('src', "img/question.png");
    });
});

function rollPics(last, step) {
    let chosen;
	$('#picPanel').css('background-color', "rgba(0, 0, 0, 0.5)");
    if (last + 1 == pic_list.length) {
        chosen = 0;
    } else {
        chosen = last + 1;
    }
    console.log(step);
    $('#chosenPic').attr('src', "pic/" + pic_list[chosen]);
    if (step > 25) {
        step--;
        setTimeout(function() {
            rollPics(chosen, step);
        }, 100);
    } else if (step > 0) {
        step--;
        setTimeout(function() {
            rollPics(chosen, step);
        }, 800 / Math.pow(2, (step - 1) / 4));
    } else {
		setTimeout(function() {
			$('#picPanel').css('background-color', "rgba(200, 200, 0, 0.5)");
			$('#prizeTitle').text($('#prizeTitle').text() + "   恭喜你們!!!");
        }, 1000);
        pic_list.splice(chosen, 1);
    }
}
