const body = document.body
body.append('Hello world')


const div = document.createElement('div')
body.append(div)

div.innerText = 'mc_solo' //works same as textContet
div.textContent= 'Wondwosen Asegid' //over writes the  above one

const my_heading = document.getElementById('my_heading')
my_heading.innerHTML += '<div>Brought to live by js</div>'