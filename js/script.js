var bill = function() {
    var bill = document.getElementById("billTotal").value;
    // console.log(bill);
    var tipPercent = document.getElementById("tipInput").value;
    // console.log(tipPercent);
    var split = document.getElementById("splitInput").value;
    console.log(bill, tipPercent, split);
    var tipValue = bill * (tipPercent/100);
    console.log("tip:" + tipValue);
    var newBillEach = (parseInt(bill) + parseInt(tipValue)) / split;
    console.log("cost nou: " + newBillEach);
    var tipEach = tipValue / split;
    console.log("bacsis/persoana: " + tipEach);
    document.getElementById("newBill").innerHTML = "RON " + newBillEach.toFixed(2);
    document.getElementById("tipPerPerson").innerHTML = "RON " + tipEach.toFixed(2);
    
}

document.getElementById("billTotal").onchange = bill;
document.getElementById("tipInput").onchange = bill;
document.getElementById("splitInput").onchange = bill;

