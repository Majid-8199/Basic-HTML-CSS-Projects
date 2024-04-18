
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {

    const bill = Number(billInput.value);
    const tip = Number(tipInput.value)/100;
    const totalTip = tip * bill;
    const total = bill + totalTip;
    const perPersonTotal = total / numberOfPeople;

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;

}

const increasePeople = () => {

    numberOfPeople += 1;
    numberOfPeopleDiv.innerText=numberOfPeople;
    calculateBill();
}

const decreasePeople = () => {

    if(numberOfPeople <= 1){
        return ` you can't decrease the number of people to 0 or negative!`
    }
    else{
        numberOfPeople -= 1;
        numberOfPeopleDiv.innerHTML = numberOfPeople;
        calculateBill();
    }
}