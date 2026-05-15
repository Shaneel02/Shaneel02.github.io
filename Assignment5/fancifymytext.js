alert("Hello, world!");

function makeBigger() {
//document.getElementById("elementID").style.propertyName = "value";
document.getElementById("textArea").style.fontSize = "24pt";

}

function fancify_the_text(){

    let textArea = document.getElementById("textArea");
    let fancyRadio = document.getElementById("fancyRadio");
    let boringRadio = document.getElementById("boringRadio");

    if(fancyRadio.checked){
        alert("FancyShmancy!")

        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else if (boringRadio.checked){
        alert("BoringBetty")

        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";

    }


}

function moo(){

    let textArea = document.getElementById("textArea");

    let upperCased = textArea.value.toUpperCase();

    let sentences = upperCased.split(".");

    //puts -Moo at end of every word
    for(let i=0; i<sentences.length; i++){
        
        aSentence = sentences[i].trim();

        if(aSentence.length > 0){
            let words = aSentence.split(" ");

            words[words.length -1] = words[words.length - 1] + "-Moo";

            sentences[i] = words.join(" ");
        }
    }

    upperCased = sentences.join(" ");
    textArea.value = upperCased;

}
