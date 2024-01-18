function find_buttons() {
  var buttons: Array<any> = [
    document.getElementById('button-0'),
    document.getElementById('button-1'),
    document.getElementById('button-2'),
    document.getElementById('button-3')
  ]
  return buttons
}

async function button_status_colour(buttons) {
  console.log(buttons)
  try {
    const response = await fetch(
      '/sprinckler/status?id=all',
      {
        method: "GET",
        headers: new Headers({ 'content-type': 'application/json' })
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`)
    }
    if (await response.headers.get('content-type') != "application/json") {
      throw new Error(`content-type Error expected "application/json", status = ${response.headers.get('content-type')}`)
    }
    var json = await response.json()
  }
  catch (error) {
    console.warn(error)
    return
  }
  for (let index = 0; index < Object.keys(json).length; index++) {
    var data = json[Object.keys(json)[index]]
    if (data["status"]) {
      buttons[index].style.backgroundColor = 'green';
    } else {
      buttons[index].style.backgroundColor = 'red'
    }

  }
}

async function button_toggle(id: string) {
  try {
    const response = await fetch(
      `/sprinckler/toggle?id=${id}`,
      {
        method: 'POST'
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`)
    }
  } catch (error) {
    console.warn(error)
  }
}

async function button_0(event: object) {
  button_toggle('0')
  await button_status_colour(event.currentTarget.buttons)
  console.log("button_0 click", event)
}

async function button_1(event: object) {
  button_toggle('1')
  await button_status_colour(event.currentTarget.buttons)
  console.log("button_1 click", event)
}

async function button_2(event: object) {
  button_toggle('2')
  await button_status_colour(event.currentTarget.buttons)
  console.log("button_2 click", event)
}

async function button_3(event: object) {
  button_toggle('3')
  await button_status_colour(event.currentTarget.buttons)
  console.log("button_3 click", event)
}

const button_funcs: any = [
  button_0,
  button_1,
  button_2,
  button_3
]

export default function addLisseners() {
  let buttons = find_buttons()
  button_status_colour(buttons)
  try {
    if (buttons.length != button_funcs.length) {
      throw new Error((`Length of ${button_funcs.length < buttons.length ? `button_funcs is less than the amount of buttons` : `amount of parsed buttons is less than amount of button functions`}`))
    }

    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];
      const func = button_funcs[index]
      const event_lissener = element.addEventListener('click', func)
      element.buttons = buttons
    }

  } catch (error) {
    console.error(error)
  }
  // button['0']?.addEventListener("click", button_0)
  // document.getElementById('button-1')?.addEventListener("click", button_1)
}
