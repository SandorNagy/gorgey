const questions = {
    '3e47daf1-d5cd-4ed7-adbb-40841b67ba65': {
        name: 'Melyik a kakukktojás?',
        type: 0,
        answers: [
            {
                name: 'ónodi országgyűlés',
                valid: true
            },
            {
                name: 'sárospataki országgyűlés',
                valid: false
            },
            {
                name: 'pozsonyi országgyűlés',
                valid: false
            },
            {
                name: 'szécsényi országgyűlés',
                valid: false
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    'ce959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'Ki NEM felvilágosult abszolutista uralkodó?',
        type: 0,
        answers: [
            {
                name: 'Mária Terézia',
                valid: true
            },
            {
                name: 'II. Frigyes',
                valid: false
            },
            {
                name: 'II. József',
                valid: false
            },
            {
                name: 'XIV. Lajos',
                valid: true
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '86b33565-5b83-4e77-9f39-63968183bf85': {
        name: 'Döntsd el az alábbi állításokról, hogy igaz vagy hamis!',
        type: 1,
        answers: [
            {
                name: 'A második ipari forradalom idején a munkásmozgalmak megerősödése miatt fokozatosan bevezetésre került a nyolc órás munkanap, amely lehetővé tette a szabadidős tevékenységek széleskörű megjelenését.',
                valid: true
            },
            {
                name: 'A második ipari forradalom fő energiaforrásai az elektromos áram és a kőolaj voltak.',
                valid: false
            },
            {
                name: 'Otto von Bismarck volt az egységes Németország első kancellára.',
                valid: false
            },
            {
                name: 'Az amerikai polgárháborúnak fő célja a rabszolgák felszabadítása volt.',
                valid: true
            },
            {
                name: 'A parlament épületét Schulek Frigyes tervezte.',
                valid: false
            },
            {
                name: 'A berlini kongresszuson a kor nagyhatalmai felosztották egymás közt a még meg nem hódított területeket.',
                valid: false
            },
            {
                name: 'A tavaszi hadjárat legfontosabb célja Buda bevétele volt.',
                valid: false
            },
            {
                name: 'Magyarországon erős és jelentős volt a dualizmus kori antiszemitizmus.',
                valid: false
            },
            {
                name: 'Tisza Kálmán volt a dualizmus leghosszabb ideig regnáló miniszterelnöke.',
                valid: true
            },
            {
                name: 'Ferenc József volt az utolsó osztrák-magyar uralkodó.',
                valid: true
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    }
};

const getQuestionIdsByTopicId = topicId =>
    Object.keys(questions).filter(key => questions[key].topicId === topicId);
const getQuestionById = id => questions[id];

export {
    getQuestionIdsByTopicId,
    getQuestionById
};