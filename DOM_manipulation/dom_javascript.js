function show_filter()
{
    //Gets filterContent from html.
    const filterContent = document.getElementById("filterContent");

    // Gets newContent from html.
    const newContent = document.getElementByID("newContent");

    if (filterContent.style.display === "none")
    {
        filterContent.style.display = "block";
    } else {
        filterContent.style.display = "none";
    }

    newContent.style.display = "none";
}

function showNewAdd()
{
    const newContent = document.getElementByID("newContent");

    const filterContent = document.getElementById("filterContent");

    if (newContent.style.display === "none")
    {
        newContent.style.display = "flex";
    } else {
        newContent.style.display = "none";
    }
}



function filterArticles()
{
    const opinionCheckbox = document.getElementById("opinionCheckbox").checked;
    const recipeCheckbox = document.getElementById("recipeCheckbox").checked;
    const updateCheckbox = document.getElementById("updateCheckbox").checked;

    const opinionArticles = document.querySelectorAll("article.opinion");

    for (let i = 0; i < opinionArticles.length; i++)
    {
        if (opinionCheckbox === true)
        {
            opinionArticles[i].style.display = "block";
        } else {
            opinionArticles[i].style.display = "none";
        }
    }

    const recipeArticles = document.querySelectorAll("article.recipe");

    // Loops through the recipe articles.
    for (let i = 0; i < recipeArticles.length; i++)
    {
        if (recipeCheckbox === true) 
        {
            recipeArticles[i].style.display = "block";
        } else {
            recipeArticles[i].style.display = "none";
        }
    }

    const updateArticles = document.querySelectorAll("article.update");

    for (let i = 0; i < updateArticles.length; i++)
    {
        if (updateCheckbox === true)
        {
            updateArticles[i].style.display = "block";
        } else {
            updateArticles[i].style.display = "none";
        }
    }
}

function newArticle()
{

    const inputHeader = document.getElementById("inputHeader").value;

    const inputArticle = document.getElementById("inputArticle").value;

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");


    let articleType = "";
    let articleLabel = "";

    if(opinionRadio.checked === true)
    {
        articleType = "opinion";
        articleLabel = "opinion";
    } else if (lifeRadio.checked === true) {
        articleType = "update";
        articleLabel = "update";
    } else if (recipeRadio.checked === true) {
        articleType = "recipe";
        articleLabel = "recipe";
    }

    const article = document.createElement("article");
    article.className = articleType;

    const paragraph = document.createElement("p");
    paragraph.textContent = inputArticle;

    const heading = document.createElement("h2");
    heading.textContent = inputHeader;

    const marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = articleLabel;

    const linkParagraph = document.createElement("p");

    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";

    linkParagraph.appendChild(link);
    article.appendChild(marker);
    article.appendChild(heading);
    article.appendChild(paragraph);
    article.appendChild(linkParagraph);

    const articleList = document.getElementById("articleList");
    articleList.appendChild(article);

    document.getElementById("newContent").reset();
}


