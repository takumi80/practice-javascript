//クリックされたら動作する

function errorInput(){
   const month = document.getElementById("month").value;
   const day = document.getElementById("day").value;
   if(month<1 || month>12){
      alert("適切な値ではありません");
      return
   }
   console.log("Month:",month,"Day:",day);
}

const monthSelect = document.getElementById("month2");
monthSelect();
function monthSelectlist(){
   for (let i=1;i<=12;i++){
      let option = document.createElement('option');
      option.value = i;
      option.textContent = i + "月";
      monthSelect.appendChild(option);+
   }
}

//document.getElementById("mouth")はタグを確認するだけ
//valueはそのタグの値を示す


/*
javaScriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐ずく
タグの中にある付加情報のことを属性という
*/