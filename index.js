function scroolTags(param) {
    const tags = document.querySelector(".tags")

    if(param === 'right') {
        tags.scrollBy({left: 150, top: 0,  behavior: "smooth"});
    } else {
        tags.scrollBy({left: -150, top: 0,  behavior: "smooth"});
    }
    const rng = new RandomNameGenerator();
    console.log(rng.generate());    
}

function makeTools() {
    const toolProps = getTools()

    const { tagPrimary } = toolProps
    const { tagSecond } = toolProps
    const { tagThird } = toolProps

    createTool(".initial", tagPrimary)
    createTool(".second", tagSecond)
    createTool(".third", tagThird)
}

function createTool(orderTag, toolList) {
    const classTag = document.querySelector(`${orderTag}`)

    for(let i = 0; i < toolList.length; i++) {
        classTag.innerHTML += `
        <div class="tool">
            <ion-icon name=${toolList[i].iconName}></ion-icon>
            <p class="tool_description">${toolList[i].tagTitle}</p>
        </div>` 
    }

}

function makeTags() {
    const tags = document.querySelector(".tags")
    const tagsNames = getTags()

    for(let i = 0; i < tagsNames.length; i++) {
        tags.innerHTML += `<div class="tag">${tagsNames[i]}</div>` 
    }
}

function getTools() {
    const tagsNames = 
        { tagPrimary: [
            {
                iconName: "home",
                tagTitle: "Início"
            },
            {
                iconName: "images-outline",
                tagTitle: "Shorts"
            },
            {
                iconName: "tv-outline",
                tagTitle: "Inscrições"
            }
        ],
         tagSecond: [
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "reader-outline",
                tagTitle: "Histórico"
            },
            {
                iconName: "videocam-outline",
                tagTitle: "Seus vídeos"
            },
            {
                iconName: "time-outline",
                tagTitle: "Assistir mais tarde"
            },
            {
                iconName: "heart-outline",
                tagTitle: "Vídeos marcados c..."
            }
        ],
        tagThird: [
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "images-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
            {
                iconName: "grid-outline",
                tagTitle: "Biblioteca"
            },
        ]
    }

    return tagsNames
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
            "Memes",
            "Monogamia",
            "Rochas",
            "Bolacha Atavk",
            "Game Forever",
            "Baka mitai",
            "money",
            "Surfacevin",
            "Surfacevin",
           
            ]
    return tagsNames
}

makeTags()
makeTools()
