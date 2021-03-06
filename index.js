/**
 *  alexander baumann
 * https://github.com/baumannalexj/chat-with-handles
 */

const LIST_CONTAINER_ID = "listContainer";
const MESSAGES_CONTAINER_ID = "messagesContainer";
const FILTERED_NAMES_CONTAINER_ID = "filteredNamesContainer";

const userMessages = [];


const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
};


function clearChildElementsById(elementId) {
    var rootDiv = document.getElementById(elementId);
    if (rootDiv) {
        while (rootDiv.hasChildNodes()) {
            rootDiv.removeChild(rootDiv.lastChild);
        }
    }
}

function initDocument() {
    initFilteredNames();

    clearChildElementsById(LIST_CONTAINER_ID);
    initUsersNames();


    clearChildElementsById(MESSAGES_CONTAINER_ID);
    initMessages();
}

function initUsersNames() {
    var rootDiv = document.getElementById(LIST_CONTAINER_ID);
    if (!rootDiv) {
        var rootDiv = document.createElement('div');
        rootDiv.id = LIST_CONTAINER_ID;
        document.body.appendChild(rootDiv);
    }

    var userNamesContainer = document.createElement('div');

    userNames.forEach(function (userName, index) {
        var childDiv = document.createElement('div');
        var text = document.createTextNode(
            index.toString()
                .concat('.) ')
                .concat(`${userName.firstName} ${userName.lastName}`));

        childDiv.appendChild(text);
        userNamesContainer.appendChild(childDiv);
    });
    rootDiv.appendChild(userNamesContainer);
}

function initMessages() {
    var messagesContainer = document.createElement('div');

    messagesContainer.id = MESSAGES_CONTAINER_ID;
    messagesContainer.style['float'] = 'left';

    document.body.appendChild(messagesContainer);
}

function clearMessages() {
    clearChildElementsById(MESSAGES_CONTAINER_ID);
}

function addPlainMessage() {
    const userText = getTrimmedUserText();

    if (!_.isEmpty(userText)) {
        var messagesContainer = document.getElementById(MESSAGES_CONTAINER_ID);
        var messageDiv = document.createElement('p');
        const text = document.createTextNode(userText);

        messageDiv.appendChild(text);
        messagesContainer.appendChild(messageDiv);
    }

    clearUserInput();
}

const instructionsFlag = false;
if (instructionsFlag) {
    console.log(`README`);
    console.log(`
        SETUP ->
        1. INSTALL LODASH USING NPM AND SAVE THE DEPENDENCY TO YOUR PACKAGE.JSON FILE

        2. IMPORT LODASH INTO THE INDEX.JS FILE.

        3. COMPLETE ALL TODOS
    `);
}


const userNames = [
    {
        firstName: 'Chandler',
        lastName: 'Gegg',
        handle: '@CGegg'
    },
    {
        firstName: 'Phil',
        lastName: 'Mickelson',
        handle: '@PMickelson'
    },
    {
        firstName: 'Grace',
        lastName: 'Hopper',
        handle: '@GHopper'
    },
    {
        firstName: 'Horace',
        lastName: 'Grant',
        handle: '@HGrant'
    },
    {
        firstName: 'Alex',
        lastName: 'Baumann',
        handle: '@abaumann'
    },
    {
        firstName: 'Norman',
        lastName: 'Birge',
        handle: '@nbirge'
    },
    {
        firstName: 'Phil',
        lastName: 'Duxbury',
        handle: '@pduxbury'
    },
    {
        firstName: 'Amir',
        lastName: 'Ouyed',
        handle: '@aouyed'
    },
    {
        firstName: 'Daniel',
        lastName: 'Stump',
        handle: '@dstump'
    },
    {
        firstName: 'Nokolas',
        lastName: 'Tesla',
        handle: '@ntesla'
    },
    {
        firstName: 'Johannes',
        lastName: 'Keppler',
        handle: '@jkeppler'
    },
    {
        firstName: 'Galileo',
        lastName: 'Galilei',
        handle: '@ggalilei'
    },
    {
        firstName: 'Isaac',
        lastName: 'Newton',
        handle: '@inewton'
    },
    {
        firstName: 'Satyendra',
        lastName: 'Bose',
        handle: '@sbose'
    },
    {
        firstName: 'Leonard',
        lastName: 'Euler',
        handle: '@leuler'
    }
];


function initConstantTimeNameFilter() {
    /* EXTRA CREDIT */
}

function constantTimeNameFilter(userText) {
    /* EXTRA CREDIT :: CONVERT filterNames FUNCTION TO DO CONSTANT TIME LOOK UP.
    THIS WILL REQUIRE initConstantTimeNameFilter ON PAGE LOAD AS WELL */
}

function filterNames(userText) {
    const firstThreeChars = userText.toLowerCase().slice(1, 4);
    var firstThreeCharsRegex = new RegExp(firstThreeChars, 'g');
    console.log(`First three characters: ${firstThreeChars} `);
    const filteredNames = [];

    userNames.forEach((userName) => {
        const fullname = `${userName.firstName.toLowerCase()} ${userName.lastName.toLowerCase()}`;
        var isMatch =
            !!userName.firstName.toLowerCase().match(firstThreeCharsRegex)
            || !!userName.lastName.toLowerCase().match(firstThreeCharsRegex);

        console.log(`Fullname: ${fullname}`);
        console.log(isMatch);

        if (isMatch) {
            filteredNames.push(userName);
        }
    });

    return filteredNames;
}

function initFilteredNames() {
    clearChildElementsById(LIST_CONTAINER_ID);

    var rootDiv = document.getElementById(FILTERED_NAMES_CONTAINER_ID);
    clearChildElementsById(FILTERED_NAMES_CONTAINER_ID);

    if (!rootDiv) {
        rootDiv = document.createElement('div');
        rootDiv.id = FILTERED_NAMES_CONTAINER_ID;
        document.body.appendChild(rootDiv);
    }

    return rootDiv;
}

function generateFilteredNames(filteredNames) {
    var rootDiv = initFilteredNames();

    var namesContainer = document.createElement('div');

    filteredNames.forEach((name) => {

        var nameElement = document.createElement('button');
        nameElement.style['background-color'] = 'dodgerblue';
        nameElement.style['cursor'] = 'pointer';
        nameElement.setAttribute('class', 'filtered-name');
        nameElement.setAttribute('data', 'handle');


        var text = document.createTextNode(`${name.firstName} ${name.lastName}`);

        nameElement.appendChild(text);
        namesContainer.appendChild(nameElement);

        nameElement.addEventListener(
            "click",
            () => addHandleMessage(name.handle));

    });

    rootDiv.appendChild(namesContainer);
}

function addHandleMessage(handle) {
    var messagesContainer = document.getElementById(MESSAGES_CONTAINER_ID);
    var messageDiv = document.createElement('p');
    var handleSpan = document.createElement('span');

    handleSpan.style['color'] = 'dodgerblue';
    handleText = document.createTextNode(handle);

    handleSpan.appendChild(handleText);

    //assuming that when a user types a message with a handle, they place a space " " after: @grace hi how are you?
    console.log(document.getElementById("inputText").innerText);
    var originalMessage = document.getElementById("inputText").value.trim();
    var indexAfterHandle = originalMessage.indexOf(" ");


    var templateText = originalMessage.slice(indexAfterHandle);
    var messageText = document.createTextNode(`${templateText} `);

    messageDiv.appendChild(handleSpan);
    messageDiv.appendChild(messageText);
    messagesContainer.appendChild(messageDiv);

    clearChildElementsById(FILTERED_NAMES_CONTAINER_ID);
    clearChildElementsById(LIST_CONTAINER_ID);
    initUsersNames();
    clearUserInput();
}

function clearUserInput() {
    document.getElementById('inputText').value = '';
}

function clearFilteredNames() {
    const filteredNames = document.getElementsByClassName('filtered-name');

    Array.from(filteredNames)
        .forEach((filteredName) => {
            filteredName.remove();
        });

}

function getTrimmedUserText() {
    return document
        .getElementById('inputText')
        .value
        .trim();
}

function searchNames() {
    const userText = getTrimmedUserText();
    console.log('Search names ...');
    console.log(userText);

    const firstChar = userText[0] || '';
    if (firstChar === '@') {
        console.log('filter names ...');
        const filteredNames = filterNames(userText);
        generateFilteredNames(filteredNames);
    } else {
        clearChildElementsById(FILTERED_NAMES_CONTAINER_ID);
        clearChildElementsById(LIST_CONTAINER_ID);
        initUsersNames();
        console.log('MISSING @ IN USER TEXT');
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    document
        .getElementById('inputText')
        .addEventListener(
            'input',
            debounce(
                searchNames,
                500
            )
        );
    initDocument();
});
