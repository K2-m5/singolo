
window.onload = function() {
    console.log('Hello')

    addMenuClickHandler();

    //Tags
    addTagsClickHandler();
}

function addMenuClickHandler() {
    const menu = document.getElementById('nav_list');
    menu.addEventListener('click', menuClickHandle);
}

function menuClickHandle(event) {
    menu.querySelectorAll('li').forEach(el => el.classList.remove('first'));
    const element = event.target;
    element.classList.add('first');
    console.log (element);
    const dataSelector = element.getAttribute("data-selector");
    const elToScroll = document.querySelector(dataSelector);
    scrollToElement(elToScroll);
}

function scrollToElement(pageElement) {
    let positionY = 0;
    while (pageElement !== null) {
        positionY += pageElement.offsetTop;
        pageElement = pageElement.offsetParent;
        window.scrollTo(0, positionY - 50);
    }
}

const addTagsClickHandler = () => {
    document.querySelector('.portfolio_tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio_tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllPortfolioWork();
            } else {
                showFilterPortfolioWorkBySelectedTag(clickedTag.innerText);
            }
        }
    });
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.portfolio_tags .portfolio_tag');
    tags.forEach(portfolio_tag => {
        portfolio_tag.classList.remove('active');
    });
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('active');
}

const showAllPortfolioWork = () => {
    let portfolioWork = document.querySelectorAll('.portfolio_work .portfolio_work_img');
    portfolioWork.forEach(portfolio_work_img => {
        portfolio_work_img.classList.remove('portfolio_hidden');
    });
}

const showFilterPortfolioWorkBySelectedTag = (clickedTagText) => {
    console.log(selectClickedTag);
    let portfolioWork = document.querySelectorAll('.portfolio_work .portfolio_work_img');
    portfolioWork.forEach(portfolio_work_img => {
        if (portfolio_work_img.dataset.selector != clickedTagText) {
            portfolio_work_img.classList.add('portfolio_hidden');
        } else {
            portfolio_work_img.classList.remove('portfolio_hidden');
        }
    });
}