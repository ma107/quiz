// 音声読み上げライブラリの設定
const player = new talkify.Html5Player();
player.forceLanguage('ja');
player.setRate(0.8);

const uttr = new SpeechSynthesisUtterance();
uttr.lang = "ja-JP"


// クイズバンク
let quizBank = [
    "好きな仮面ライダーは何だ？",
    "好きなウルトラマンは何だ？",
    "好きな動物は何だ？",
    "好きな色は何だ？",
    "好きなものは何だ？",
    "ママが好きなジャニーズは何だ？",
    "ママはディズニーが好きである。まるかばつか？",
    "",
]
var quizNum = 0;

// イベントの設定
startBtn.addEventListener("click", function(){
    $("#startSound").get(0).play();

    $('#quizTxt').text(quizBank[quizNum]);
    //    player.playText(quizBank[quizNum]);
    uttr.text = quizBank[quizNum];
    speechSynthesis.speak(uttr);

});

correctBtn.addEventListener("click", function(){
    $("#correctSound").get(0).play();
    player.playText('正解でーす');
    quizNum += 1;
    quizBank = _.shuffle(quizBank);
});

wrongBtn.addEventListener("click", function(){
    $("#wrongSound").get(0).play();
    player.playText('ざんねーん');
    player.playText('もう一度やってみよう');

});
