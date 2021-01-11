import * as Buildings from './Buildings.js';
import { timeInterval } from './constants.js'

export let Player = {
    ironMine: Buildings.IronMine.stk,
    iron: 0,
    copperMine: Buildings.CopperMine.stk,
    copper: 0,

    updateIron: setInterval(() => {
        Player.iron += Buildings.IronMine.stk * Buildings.IronMine.rate * (timeInterval / 1000);
    }, timeInterval),
    updateCopper: setInterval(() => {
        Player.copper += Buildings.CopperMine.stk * Buildings.CopperMine.rate * (timeInterval / 1000);
    }, timeInterval),

}