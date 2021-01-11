import * as DOM from './modules/HTMLelementsConst.js';
import * as DOMAssets from './modules/HTMLAssets.js';
import { Building } from './modules/Classes.js';
import * as Buildings from './modules/Buildings.js';
import { Player } from './modules/Player.js';

function startGame(){
    DOMAssets.CreateResourceMenu();
    DOMAssets.UpdateResourceMenu();
    DOMAssets.insertButton(Buildings.IronMine, Buildings.IronMine.interact.bind(Buildings.IronMine));
    DOMAssets.insertButton(Buildings.CopperMine, Buildings.CopperMine.interact.bind(Buildings.CopperMine));
}

startGame();