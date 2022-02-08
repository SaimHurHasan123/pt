parsedata=[];
function start(){
    oobj=fetch();
    disp(oobj);

}
function fetch() {
    let proid= document.getElementById("productid").value;
    let proname= document.getElementById("productname").value;
    let proprice=document.getElementById("productprice").value;
    obj={"id":proid,"name":proname,"price":proprice};
    console.log(obj);
    parsedata.push();
    return obj;

    }
function disp(entry){
    let table=document.getElementById("olisttable");
    tr=document.createElement("tr");
    ndata= `<td class=parse_right">${entry["id"]}</td> 
    <td>${entry["name"]}</td>
    <td> ${entry["price"]}</td>`
    tr.innerHTML=ndata;
    table.appendChild(tr);
}