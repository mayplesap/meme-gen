document.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("memeContent").appendChild( //get div & .appendChild
        add(document.getElementById("pic").value, //image
            document.getElementById("top").value, //top text
            document.getElementById("bot").value) //bottom text
    );
    document.getElementById("newMeme").reset();
})

function add(picture, topTxt, botTxt)
{
    let memeDiv = document.createElement("div"); //make new div
        memeDiv.className = "completeMeme";

    let img = document.createElement("img");
        img.className = "memePic";
        img.src = picture;

    let topText = document.createElement("div");
        topText.className = "topText";
        topText.innerHTML = topTxt;

    let botText = document.createElement("div");
        botText.className = "botText";
        botText.innerHTML = botTxt;

    let removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.innerHTML = "X";
        removeButton.addEventListener("click", function(event){
            event.target.parentNode.remove();
        })


    memeDiv.append(img);
    memeDiv.append(topText);
    memeDiv.append(botText);
    memeDiv.append(removeButton);

    return memeDiv;
}


/*
    let removeButton = document.createElement("button");
    removeButton.innterText = "X";

    memeDiv.append(img);
    memeDiv.append(topText);

*/
