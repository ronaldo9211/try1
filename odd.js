document.getElementById("btn").onclick=(()=>{
    let num=parseInt(document.getElementById("input").value)
    let odd=1
    let sum=0
    while (num!=0){
        if (odd%2!=0){
            sum+=odd
            num--;
        }
        odd++;
    }
    document.getElementById("output").innerHTML=`${sum}`
})