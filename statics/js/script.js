// Preject 1: You Age in Days
function ageInDays(){
    var birthYear = prompt('What year were you born?')
    var ageInDay = (2020 - birthYear) * 365

    var h1 = document.createElement('h1')
    var textAsewer = document.createTextNode('You are ' + ageInDay + ' days old')
    h1.setAttribute('id', 'ageInDay') // <h1 id="ageInDay">You are 6570 days old</h1>
    h1.appendChild(textAsewer) // Putting You are 6570 days old in the h1
    document.getElementById('flex-box-result').appendChild(h1) // Get the flex-box-result <div> and then append(adiciona) a child
}

function reset(){
    document.getElementById('flex-box-result').remove() // 'ageInDay'
}

