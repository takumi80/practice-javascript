//クリックされたら動作する

function errorInput(){
   console.log(document.getElementById("mouth").value)
   console.log(document.getElementById("day").value)

   const mouth = document.getElementById("mouth").value;
   const day = document.getElementById("day").value

   console.log("mouth",mouth,"day",day)
}
//document.getElementById("mouth")はタグを確認するだけ
//valueはそのタグの値を示す


/*
javaScriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐ずく
タグの中にある付加情報のことを属性という
/*