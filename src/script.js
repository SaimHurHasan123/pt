parsedata=[];

function start(){
    console.log("PORED");
    fetch();
    disp(parsedata);

}
function fetch() {
    let proid= document.getElementById("productid").value;
    let proname= document.getElementById("productname").value;
    let proprice=document.getElementById("productprice").value;

    obj={"id":proid,"name":proname,"price":proprice};
    console.log(obj);
    parsedata.push(obj);
    console.log("update");
    console.log(parsedata);
      }
    /*
function disp(entry){
    let table=document.getElementById("olisttable");
    tr=document.createElement("tr");
    ndata= `<td class=parse_right">${entry["id"]}</td> 
    <td>${entry["name"]}</td>
    <td> ${entry["price"]}</td>`
    tr.innerHTML=ndata;
    table.appendChild(tr);
}*/

function disp(parsedata) {
let html=" ";
document.getElementById("olisttable").innerHTML= '<tr><th class="parse_right">Product ID</th><th> Product Name </th><th>Product Price</th></tr>';

for(var i=0;i<parsedata.length;i++) {+
    console.log(i);
    let add='<tr><td>'+ parsedata[i].id+'</td><td>'+parsedata[i].name+'</td><td>'+parsedata[i].price+'</td>  </tr>';

document.getElementById("olisttable").innerHTML+=add;
}
}
