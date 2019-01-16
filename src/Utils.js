
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function setButtonClass(valid, validated, marked) {
    if (validated && marked) {
        return valid ? 'success' : 'danger';
    }
    else if (validated && !marked) {
        return valid ? 'info' : 'warning';
    }
    else {
        return marked ? 'primary' : 'warning';
    }
}

export {
    shuffle,
    setButtonClass
};
