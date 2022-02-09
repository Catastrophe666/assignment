class TempTracker {
    temps = [];

    constructer(...temps){
        this.temps = temps;
    }

    insert(temp){
        this.temps=[temp,...this.temps]
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

const temp = new TempTracker();
temp.insert(34);
temp.insert(34);
temp.insert(56);
temp.insert(12);
temp.insert(6);
console.log(temp.get_max());
console.log(temp.get_min());
console.log(temp.get_mean());
console.log(temp.get_mode());