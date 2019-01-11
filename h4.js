// // .1
// String.prototype.reverse = function(){
//     return( this.split('').reverse().join('') );
// }

// console.log( 'Karol Rogowski'.reverse() );

// // .2
// Number.prototype.reverse = function(){
//     return (-1) * this;
// }

// console.log((4).reverse());

// .3

function getJsonDataFromFile(fileName){
    const fs = require('fs');
    const data = fs.readFileSync(fileName, 'utf8')
    return JSON.parse(data);
}

const jsonFile = 'Data.json';
const jsonData = getJsonDataFromFile(jsonFile); 

function DetailsOfPayent(f,g,h){
    this.Type = f;
    this.company= g;
    this.date= h;
}

function MainEntry(a,s,d,f,g,h){
    this.index= a;
    this._id= s;
    this.cost= d;
    this.detailsOfPayent = new DetailsOfPayent(f,g,h)
}

const mainEntry = jsonData.map((p) => new MainEntry(p.index ,p._id, p.cost, p.detailsOfPayent.Type, p.detailsOfPayent.company, p.detailsOfPayent.date));


getPDate = (date) => {
    const days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

    let d = new Date( date.split('-').reverse().join('-') );
    let obj = {};
    obj.day = days[ d.getDay() ];
    obj.month = months[ d.getMonth() ];
    obj.year = d.getFullYear();
    return obj;
}

getSumOfYear = () => {
    let sum = 0;
    let obj = {}; 
    mainEntry.filter(p => getPDate(p.detailsOfPayent.date).year === 2014)
        .forEach(p => {
            sum = sum - (-(p.cost));
        });
    obj.sumOfYear = sum.toFixed(2);
    return obj;
}

getCompanyEarning = () => {

    let arr =[];
    let compArray = mainEntry.map(p => p.detailsOfPayent.company)
            .filter((value, index, self) => self.indexOf(value) === index);

    for (let company of compArray) {
        let sum = 0;
        let obj = {};
        mainEntry.filter(p => getPDate(p.detailsOfPayent.date).year === 2014)
            .filter(p => p.detailsOfPayent.company === company)
            .forEach(p => {
                sum = sum - (-(p.cost));            
            });
        obj.company = company;
        obj.earning = sum.toFixed(2);
        arr.push(obj);
    }

    return arr;    
};

getTransTypeSpending = () => {
    let arr =[];
    let transTypeArray = mainEntry.map(p => p.detailsOfPayent.Type)
            .filter((value, index, self) => self.indexOf(value) === index);

    for (let trans of transTypeArray) {
        let sum = 0;
        let obj = {};
        mainEntry.filter(p => getPDate(p.detailsOfPayent.date).year === 2014)
            .filter(p => p.detailsOfPayent.Type === trans)
            .forEach(p => {
            sum = sum - (-(p.cost));            
            });
        obj.type = trans;
        obj.earning = sum.toFixed(2);
        arr.push(obj);
    }
    return arr;
};

getMonthEarning = () => {
    let arr =[];
    let monthArray = mainEntry.map(p => getPDate(p.detailsOfPayent.date).month)
        .filter((value, index, self) => self.indexOf(value) === index);

    for (let month of monthArray) {
            let sum = 0;
            let obj = {};
            mainEntry.filter(p => getPDate(p.detailsOfPayent.date).year === 2014)
                .filter(p => getPDate(p.detailsOfPayent.date).month === month)
                .forEach(p => {
                    sum = sum - (-(p.cost));            
                });
            obj.month = month;
            obj.earning = sum.toFixed(2);
            arr.push(obj);
    }
    return arr;
};

getDayEarning = () => {
    let arr =[];
    let dayArray = mainEntry.map(p => getPDate(p.detailsOfPayent.date).day)
        .filter((value, index, self) => self.indexOf(value) === index);
    for (let day of dayArray) {
                let sum = 0;
                let obj = {};
                mainEntry.filter(p => getPDate(p.detailsOfPayent.date).year === 2014)
                    .filter(p => getPDate(p.detailsOfPayent.date).day === day)
                    .forEach(p => {
                        sum = sum - (-(p.cost));            
                    });
                obj.day = day;
                obj.earning = sum.toFixed(2);
                arr.push(obj);
    }
    return arr;
};

let summary = {};
summary.yearSummary = getSumOfYear();
summary.companyEarning = getCompanyEarning();
summary.transTypeSpending = getTransTypeSpending();
summary.monthEarning = getMonthEarning();
summary.dayEarning = getDayEarning();
console.log(JSON.stringify(summary));


