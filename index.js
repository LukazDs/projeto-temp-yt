function makeTags() {
    const tags = document.querySelector(".tags")
    const tagsNames = getTags()

    for(let i = 0; i < 2 * tagsNames.length; i++) {
        tags.innerHTML += `<div class="tag">${tagsNames[i]}</div>` 
    }
}

function scroolTags(param) {
    const tags = document.querySelector(".tags")

    if(param === 'right') {
        tags.scrollBy({left: 100, top: 0,  behavior: "smooth"});
    } else {
        tags.scrollBy({left: -100, top: 0,  behavior: "smooth"});
    }
    
}


function getTags() {
    const tagsNames = [
            "Tudo", 
            "Com menos de 10 min.", 
            "Música",
            "Games", 
            "Minecraft", 
            "Animes", 
            "K-POP", 
            "Memes"
            ]
    return tagsNames
}

function getTools() {
    const tagsNames = [
        {
            iconName: "home",
            tagTitle: "Início"
        },
        {
            iconName: "images-outline",
            tagTitle: "Shorts"
        },
        {
            iconName: "images-outline",
            tagTitle: "Shorts"
        },
    ]

    return tagsNames
}
 
makeTags()