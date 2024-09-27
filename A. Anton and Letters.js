"use strict";
function antonLetters(str) {
  let m = new Set();

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != "," && str[i] != "{" && str[i] != "}") {
      m.add(str[i]);
    }
  }

   
  console.log(m.size);
}
antonLetters("{a}");
