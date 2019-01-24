const questions = {
    // '3e47daf1-d5cd-4ed7-adbb-40841b67ba65': {
    //     name: 'Melyik a kakukktojás?',
    //     type: 0,
    //     answers: [
    //         {
    //             name: 'ónodi országgyűlés',
    //             valid: true
    //         },
    //         {
    //             name: 'sárospataki országgyűlés',
    //             valid: false
    //         },
    //         {
    //             name: 'pozsonyi országgyűlés',
    //             valid: false
    //         },
    //         {
    //             name: 'szécsényi országgyűlés',
    //             valid: false
    //         }
    //     ],
    //     topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    // },
    // 'ce959be0-0838-483c-ad35-37d8f34b097a': {
    //     name: 'Ki NEM felvilágosult abszolutista uralkodó?',
    //     type: 0,
    //     answers: [
    //         {
    //             name: 'Mária Terézia',
    //             valid: true
    //         },
    //         {
    //             name: 'II. Frigyes',
    //             valid: false
    //         },
    //         {
    //             name: 'II. József',
    //             valid: false
    //         },
    //         {
    //             name: 'XIV. Lajos',
    //             valid: true
    //         }
    //     ],
    //     topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    // },
    // '86b33565-5b83-4e77-9f39-63968183bf85': {
    //     name: 'Döntsd el az alábbi állításokról, hogy igaz vagy hamis!',
    //     type: 1,
    //     answers: [
    //         {
    //             name: 'A második ipari forradalom idején a munkásmozgalmak megerősödése miatt fokozatosan bevezetésre került a nyolc órás munkanap, amely lehetővé tette a szabadidős tevékenységek széleskörű megjelenését.',
    //             valid: true
    //         },
    //         {
    //             name: 'A második ipari forradalom fő energiaforrásai az elektromos áram és a kőolaj voltak.',
    //             valid: false
    //         },
    //         {
    //             name: 'Otto von Bismarck volt az egységes Németország első kancellára.',
    //             valid: false
    //         },
    //         {
    //             name: 'Az amerikai polgárháborúnak fő célja a rabszolgák felszabadítása volt.',
    //             valid: true
    //         },
    //         {
    //             name: 'A parlament épületét Schulek Frigyes tervezte.',
    //             valid: false
    //         },
    //         {
    //             name: 'A berlini kongresszuson a kor nagyhatalmai felosztották egymás közt a még meg nem hódított területeket.',
    //             valid: false
    //         },
    //         {
    //             name: 'A tavaszi hadjárat legfontosabb célja Buda bevétele volt.',
    //             valid: false
    //         },
    //         {
    //             name: 'Magyarországon erős és jelentős volt a dualizmus kori antiszemitizmus.',
    //             valid: false
    //         },
    //         {
    //             name: 'Tisza Kálmán volt a dualizmus leghosszabb ideig regnáló miniszterelnöke.',
    //             valid: true
    //         },
    //         {
    //             name: 'Ferenc József volt az utolsó osztrák-magyar uralkodó.',
    //             valid: true
    //         }
    //     ],
    //     topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    // },
    // 'ce959be0-0838-483c-ad35-37d8f34b0971': {
    //     name: 'Egészítsedkifelebüdöskölyke!!!!',
    //     type: 2,
    //     answers: [
    //         {
    //             name: 'Mit ittál | ?',
    //             valid: [
    //                 'Gyulus',
    //                 'Gyuluska'
    //             ]
    //         },
    //         {
    //             name: 'Hol a | főnök?',
    //             valid: [
    //                 'fa',
    //                 'bokor'
    //             ]
    //         },
    //     ],
    //     topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    // },

    //1.-----------------------------------------------------//
    '1e959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'Az alábbi személy NEM köthető közvetlenül egyik valláshoz sem.',
        type: 0,
        time: 45,
        shuffle: true,
        answers: [
            {
                name: 'Jézus',
                valid: false
            },
            {
                name: 'Buddha',
                valid: false
            },
            {
                name: 'Salamon',
                valid: false
            },
            {
                name: 'Nagy Sándor',
                valid: true
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '2e959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'Az ő nevéhez fűződik az athéni demokrácia fénykora.',
        type: 0,
        time: 45,
        shuffle: true,
        answers: [
            {
                name: 'Periklész',
                valid: true
            },
            {
                name: 'Szolón',
                valid: false
            },
            {
                name: 'Drakón',
                valid: false
            },
            {
                name: 'Arisztotelész',
                valid: false
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '3e959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'A görög mitológiában a háború istene.',
        type: 0,
        time: 45,
        shuffle: true,
        answers: [
            {
                name: 'Mars',
                valid: false
            },
            {
                name: 'Zeusz',
                valid: false
            },
            {
                name: 'Árész',
                valid: true
            },
            {
                name: 'Poszeidón',
                valid: false
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '4e959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'A görög mitológiában a szerelem istennője.',
        type: 0,
        time: 45,
        shuffle: true,
        answers: [
            {
                name: 'Artemisz',
                valid: false
            },
            {
                name: 'Héra',
                valid: false
            },
            {
                name: 'Vénusz',
                valid: false
            },
            {
                name: 'Aphrodité',
                valid: true
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '5e959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'Az első triumvirátus tagja, később Róma dictartora.',
        type: 0,
        time: 45,
        shuffle: true,
        answers: [
            {
                name: 'Caesar',
                valid: true
            },
            {
                name: 'Antonius',
                valid: false
            },
            {
                name: 'Pompeius',
                valid: false
            },
            {
                name: 'Crassus',
                valid: false
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '6e959be0-0838-483c-ad35-37d8f34b097a': {
        name: 'Az első császár az ókori Rómában.',
        type: 0,
        time: 45,
        shuffle: true,
        answers: [
            {
                name: 'Caesar',
                valid: false
            },
            {
                name: 'Augustus',
                valid: true
            },
            {
                name: 'Antonius',
                valid: false
            },
            {
                name: 'Nero',
                valid: false
            }
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '7e959be0-0838-483c-ad35-37d8f34b0971': {
        name: 'Egészítsd ki a szöveget ismereteid alapján! (Egy helyre csak egy szót írhatsz be.)',
        type: 2,
        time: 210,
        shuffle: false,
        answers: [
            {
                name: 'Az athéni demokrácia fénykora a(z) | században volt.',
                valid: [
                    '5.',
                    'V.',
                    'ötödik'
                ]
            },
            {
                name: 'A legfontosabb szerve a | volt, ...',
                valid: [
                    'népgyűlés'
                ]
            },
            {
                name: '... aminek minden 20 évnél idősebb athéni születési | tagja volt.',
                valid: [
                    'férfi'
                ]
            },
            {
                name: 'Kiemelten fontos tisztség volt a(z) |, akinek személye választás útján dőlt el.',
                valid: [
                    'sztratégosz',
                    'hadvezér'
                ]
            },
            {
                name: 'A bíróság és a(z) | tagjait sorsolással döntötték el.',
                valid: [
                    'bulé',
                    'ötszázak tanácsa',
                    '500-ak tanácsa',
                    '500ak tanácsa'
                ]
            },
            {
                name: 'A zsarnokságra törőket a(z) | segítségével száműzhették Athénból.',
                valid: [
                    'cserépszavazás',
                    'osztrakiszmosz'
                ]
            },
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
    '8e959be0-0838-483c-ad35-37d8f34b0971': {
        name: 'Írd be az adott vallás kezdőbetűjét az állítás utáni négyzetbe! Zsidó = ZS; Keresztény = K; Iszlám = I.',
        type: 2,
        time: 210,
        shuffle: true,
        answers: [
            {
                name: 'Mohamed alapította. |',
                valid: [
                    'I'
                ]
            },
            {
                name: 'Szent könyve a Biblia. |',
                valid: [
                    'K'
                ]
            },
            {
                name: 'A Római Birodalomban államvallás lett. |',
                valid: [
                    'K'
                ]
            },
            {
                name: 'Salamon Jeruzsálemben építtetett templomot a vallás hívei számára. |',
                valid: [
                    'ZS'
                ]
            },
            {
                name: 'A legkésőbb alapított világvallás. |',
                valid: [
                    'I'
                ]
            },
            {
                name: 'Hierarchikus egyházszervezet épült ki a vallás terjeszkedésével. |',
                valid: [
                    'K'
                ]
            },
            {
                name: 'Ehhez a valláshoz kötődik Mózes és a Tízparancsolat is. |',
                valid: [
                    'ZS'
                ]
            },
            {
                name: 'A vallásalapító utódait kalifának hívják. |',
                valid: [
                    'I'
                ]
            },
            {
                name: 'Szent könyve a Korán. |',
                valid: [
                    'I'
                ]
            },
            {
                name: 'Vezetője a pápa. |',
                valid: [
                    'K'
                ]
            },
        ],
        topicId: 'ef0883b8-14f7-47c1-8471-536c032d6716'
    },
};

const getQuestionIdsByTopicId = topicId =>
    Object.keys(questions).filter(key => questions[key].topicId === topicId);
const getQuestionById = id => questions[id];

export {
    getQuestionIdsByTopicId,
    getQuestionById
};