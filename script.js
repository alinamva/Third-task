let author = document.querySelector(".name")
let text = document.querySelector(".message")
let history_div = document.querySelector(".history")
let otpravit = document.querySelector(".btn-send")
let show = document.querySelector('.btn-show')

function gettime() {
    let now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes()
    return `${hours}:${minutes}`
}
class Message {
constructor(author, time, message) {
this.author = author;
this.time =time;
this.message = message;
}
toHtml() {
return `<p>${this.time} ${this.author}: ${this.message}</p>`
}
}
class Messenger {
constructor() {
this.history = []
}
show_history() {
this.history.forEach((item) => {
history_div.innerHTML += item.toHtml()
})
}
send(author, text) {
this.history.push(new Message(author,gettime(),text))
}
}
let messenger = new Messenger()
otpravit.addEventListener('click', ()=>{
    messenger.send(author.value, text.value)
text.value = ""
}) 
    show.addEventListener('click', ()=>{
      history_div.innerHTML = ""
messenger.show_history()  
    })