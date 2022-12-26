const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const btn = document.getElementById("btn");
const hexValue = document.getElementById("hex-value");

window.addEventListener("load", () => {
  changeHex();
  // hexValue.textContent = hexaDecimal;
});

function changeHex() {
  let hexaDecimal = "#";

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  for (let i = 0; i < 6; i++) {
    hexaDecimal += hex[getRandomNumber()];
  }
  hexValue.textContent = hexaDecimal;
  document.body.style.backgroundColor = hexaDecimal;
}

// navigator.permissions.query({ name: "notifications" }).then((result) => {
//   if (result.state == "granted" || result.state == "prompt") {
//     alert("Write access granted");
//   }
// });
const toastMsg = document.getElementById("toast-msg");

function showToast() {
  toastMsg.classList.add("show-toast");
}
function removeToast() {
  toastMsg.classList.remove("show-toast");
}

const copyContent = () => {
  const hexaDecimal = document.getElementById("hex-value").innerHTML;
  navigator.clipboard.writeText(hexaDecimal).then(
    () => {
      showToast();
      setTimeout(removeToast, 1000);
      console.log("Text copied succesfully!");
    },
    () => {
      console.log("Copying failed!");
    }
  );
};
