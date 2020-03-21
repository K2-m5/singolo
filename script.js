
window.onload = function() {
    console.log('Hello')

    addMenuClickHandler();

    //slider
    addIphoneClickHandler();

    addArrowClickHandler();

    //Tags
    addTagsClickHandler();

    getMessage();
}

function addMenuClickHandler() {
    const menu = document.getElementById('nav_list');
    menu.addEventListener('click', menuClickHandle);
}

function menuClickHandle(event) {
    const menu = document.getElementById('nav_list');
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

function addIphoneClickHandler () {
    const iphone = document.querySelector('.slider_item');
    iphone.addEventListener('click', iphoneClickHandle);
}

function iphoneClickHandle(event) {
    const clickedSliderTarget = event.target;
        if (clickedSliderTarget.classList.contains('iphone') ) {
            clickedSliderTarget.classList.toggle('off');
        }
    console.log(clickedSliderTarget.classList);
}

function  addArrowClickHandler() {
    const arrowList = document.querySelectorAll('.arrow');
    arrowList.forEach((arrow) => {
        arrow.addEventListener('click', arrowClickHandler); 
    } )
}

function arrowClickHandler(event) {
    const clickedArrowTarget = event.target;
    document.querySelector('.slider_item_2').classList.toggle('none');
    document.querySelector('.slider_item').classList.toggle('none');
    document.querySelector('.slider_wrap').classList.toggle('blue');
    console.log(clickedArrowTarget.classList);
}

function getMessage() {
    let errorMessageBlock = document.getElementById('error-message-block');
    let messageBlock = document.getElementById('message-block');
    let messageName = document.getElementById('message-name');
    let messageEmeil = document.getElementById('message-email');
    let messageSubject = document.getElementById('message-subject');
    let messageDescription = document.getElementById('message-description');
  
    document.getElementById('submit-button').addEventListener('click', () => {
      let nameValue = document.getElementById('name-input').value;
      let emailValue = document.getElementById('email-input').value.toString();
      let subjectValue = document.getElementById('subject-input').value;
      let descriptionValue = document.getElementById('description-input').value.toString();
  
      if (nameValue == '' || emailValue == '' || !(/.+@.+\..+/i.test(document.getElementById('email-input').value))) {
        errorMessageBlock.classList.remove('hide-window');
        document.getElementById('error-close-button').addEventListener('click', () => {
          errorMessageBlock.classList.add('hide-window');
        });
        return false;
      };
  
      messageBlock.classList.remove('hide-window');
  
      messageName.append(`Ваше имя: ${nameValue}`);
      messageEmeil.append(`Ваша электронная почта: ${emailValue}`);
  
      if (subjectValue == '') {
        messageSubject.append('Без темы');
      } else {
        messageSubject.append(`Тема: ${subjectValue}`);
      };
  
      if (descriptionValue == '') {
        messageDescription.append('Без описания');
      } else {
        messageDescription.append(`Описание: ${descriptionValue}`);
      };
    });
  
    document.getElementById('close-button').addEventListener('click', () => {
      document.getElementById('form').reset();
      messageBlock.classList.add('hide-window');
      messageName.innerHTML = '';
      messageEmeil.innerHTML = '';
      messageSubject.innerHTML = '';
      messageDescription.innerHTML = '';
    });
  };