function increment(){
    var n=Number(document.getElementById('Number').innerHTML)
    document.getElementById('Number').innerHTML=n+1
}
function decrement(){
    var n=Number(document.getElementById('Number').innerHTML)
    document.getElementById('Number').innerHTML=n-1 
}
function neutral(){
    
    document.getElementById('Number').innerHTML=0
}