const quiz = [
    {
        question: "チーズアカデミーとは？",
        answers: [
            "チーズを食べる場所",
            "チーズを学ぶ教育機関",
            "チーズ職人養成学校",
            "チーズソムリエになるための学校",

        ],
        correct: "チーズ職人養成学校"


    },{
        question: "天神でオープンした卒業生のコスゲさんによる話題のピザ屋の名前は？",
        answers: [
            "Kodama Pizza",
            "Pizza Deliverly",
            "Oh my Cheese",
            "Kosuge Pizza",

        ],
        correct: "Kosuge Pizza"


    },{
        question: "チーズアカデミーでは実地研修で何を利用できる？",
        answers: [
            "オールナイト",
            "本格的な農園",
            "大きな冷蔵庫",
            "綺麗なオフィス"

        ],
        correct: "本格的な農園"


    },{
        question: "チーズ作りに欠かせないものは？",
        answers: [
            "食・栄養に関する知識",
            "胃腸の強さ",
            "チーズに対する強い気持ち",
            "頭の回転の速さ"

        ],
        correct: "食・栄養に関する知識"


    }

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName("button");

const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
      }else{
        window.alert("不正解！");
      }

      quizIndex++;

      if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
      }else{
        //問題数がもうなければこちらを実行
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
      }


      


};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;

while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });

    handlerIndex++;
}

function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}


