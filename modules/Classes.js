export class Building{
    constructor(name, x, rate){
        this.name = name;
        this.stk = x;
        this.rate = rate;
    }

    interact(){ 
        this.stk++;
        let p = document.getElementById(`${this.name}`);
        p.textContent = `${this.name}: ${this.stk}`;
    }
}