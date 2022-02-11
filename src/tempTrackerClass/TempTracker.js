export class TempTracker {
    temps = [];

    constructer(...temps){
        this.temps = temps;
    }

    insert(temp){
        this.temps.push(temp)
    }

    get_temps(){
        return [...this.temps]
    }

    get_max(){
        return Math.max(...this.temps)
    }

    get_min(){
        return Math.min(...this.temps)
    }

    get_mean(){
        return this.temps.reduce((a, b) => a + b) / this.temps.length
    }

    get_mode(){
        const obj= {}
        this.temps.forEach(n=>{
            if(!obj[n]){
                obj[n]=1;
            } else {
                obj[n] += 1;
            }
        })

        let highestValue = 0;
        let highestValueKey  = '';
        for(let key in obj){
            const value= obj[key];
            if(value>highestValue){
                highestValue = value;
                highestValueKey = key;
            }
        }

        return Number(highestValueKey)
    }
}
