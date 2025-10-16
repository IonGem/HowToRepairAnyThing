alert('Тутор как починить все')
let move = prompt('Это двигается?')
if(move === 'да' || move === 'Да') {
    let must = prompt('А должно?')
    if(must === 'да' || must === 'Да') {
        alert('Не трогай')
    } if(must === 'нет' || must === 'Нет') {
        alert('Изолента в помощь')
    }
}

if(move === 'нет' || move === 'Нет') {
    let must = prompt('А должно?')
    if(must === 'да' || must === 'Да') {
        alert('wd-40 в помощь')
    } if(must === 'нет' || must === 'Нет') {
        alert('Не трогай')
    }

}
