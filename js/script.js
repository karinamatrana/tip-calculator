document.getElementById("container").onchange = function() {
    var bill = document.getElementById("billTotal").value;
    // console.log(bill);
    var tipPercent = document.getElementById("tipInput").value;
    // console.log(tipPercent);
    var split = document.getElementById("splitInput").value;
    // console.log(bill, tipPercent, split);
    var tipValue = bill * (tipPercent/100);
    
    var newBillEach = (parseInt(bill) + parseInt(tipValue)) / split;

    var tipEach = tipValue / split;

    document.getElementById("newBill").innerHTML = "RON " + newBillEach.toFixed(2);
    document.getElementById("tipPerPerson").innerHTML = "RON " + tipEach.toFixed(2);
    
}