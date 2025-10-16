alert('Тутор как починить все')
let move = prompt('Это двигается?')
if(move === 'да') {
    let must = prompt('А должно?')
    if(must === 'да') {
        alert('Не трогай')
    } if(must === 'нет') {
        alert('Изолента в помощь')
    }
}

if(move === 'нет') {
    let must = prompt('А должно?')
    if(must === 'да') {
        alert('wd-40 в помощь')
    } if(must === 'нет') {
        alert('Не трогай')
    }
}