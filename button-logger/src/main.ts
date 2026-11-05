import './style.css'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyREI8c_OztiftiV2T0YkEvD2yBjc_ircMQirJC6K4xxerI49MBefnLoQbJ90WFFXSdqQ/exec'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div>
    <h1>Log Students</h1>
    <p>Click below why the student came in</p>
  </div>
  <div class="buttons">
    <button type="button">Advising</button>
    <button type="button">Career</button>
    <button type="button">Food Pantry</button>
    <button type="button">Katie</button>
    <button type="button">Study Space</button>
  </div>
  <p id="log"></p>
</section>
`

document.querySelectorAll<HTMLButtonElement>('.buttons button').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const log = document.querySelector('#log')!
    log.textContent = 'Saving...'
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams({ reason: btn.textContent ?? '' }),
    })
    log.textContent = `Logged: ${btn.textContent}`
  })
})