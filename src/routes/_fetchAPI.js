//


let url = 'https://script.google.com/macros/s/AKfycbxSGR3c2JgMWS-ykBKXGtBnTVKLH3H_ER7qdB7H8A/exec'

export function fetchContactForm(in_message) {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: JSON.stringify({
      message: in_message
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      alert(res.result)
    })
    .catch(e => {
      console.log(e);
    });
}
