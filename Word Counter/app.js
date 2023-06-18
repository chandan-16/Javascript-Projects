const textarea = document.getElementById('textbox');

textarea.addEventListener('input', function(){
    let text = this.value;
    let char = text.length;
    document.getElementById('char').innerHTML = char;

    text = text.trim();
    let word = text.split(' ');

    let cleanList = word.filter((filt)=>{
        return (filt != " ");
    });
    document.getElementById('word').innerHTML = cleanList.length;
});


























