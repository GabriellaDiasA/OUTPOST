import * as DOM from './HTMLElementsConst.js';
import { Building } from './Classes.js';
import * as Buildings from './Buildings.js';
import { Player } from './Player.js';
import { timeInterval } from './constants.js'

function itemButton(object){
    let buttonContainer = document.createElement('div');
    let button = document.createElement('div');
    let p = document.createElement('p');

    buttonContainer.setAttribute("class", "itemSpace");
    button.setAttribute("class", "item");
    p.setAttribute("id", `${object.name}`);
    p.textContent = `${object.name}: ${object.stk}`;

    button.append(p);
    buttonContainer.append(button);

    return buttonContainer;
}

export function insertButton(object, method){
    let newButton = itemButton(object);
    newButton.childNodes[0].addEventListener('click', method);
    DOM.gameButtonsDiv.append(newButton);
}

function printIron(){
    let p = document.createElement('p');
    p.setAttribute("id", "Iron Ore");
    DOM.leftDiv.append(p);
}

function printCopper(){
    let p = document.createElement('p');
    p.setAttribute("id", "Copper Ore");
    DOM.leftDiv.append(p);
}

export function CreateResourceMenu(){
    printIron();
    printCopper();
}

function updateResources(){
    let p = document.getElementById("Iron Ore");
    p.innerText = `Iron ore: ${Player.iron.toFixed(2)}`;
    p = document.getElementById("Copper Ore");
    p.innerText = `Copper ore: ${Player.copper.toFixed(2)}`
}

export function UpdateResourceMenu(){
    setInterval(updateResources, timeInterval);
}