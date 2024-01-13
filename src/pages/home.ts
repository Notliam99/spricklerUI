function button_0(event: object) {
  console.log("button_0 click", event)
}

function button_1(event: object) {
  console.log("button_1 click", event)
}

function button_2(event: object) {
  console.log("button_2 click", event)
}

function button_3(event: object) {
  console.log("button_3 click", event)
}


export default function addLisseners() {
  document.getElementById('button-0')?.addEventListener("click", button_0)
  document.getElementById('button-1')?.addEventListener("click", button_1)
  document.getElementById('button-2')?.addEventListener("click", button_2)
  document.getElementById('button-3')?.addEventListener("click", button_3)
}
