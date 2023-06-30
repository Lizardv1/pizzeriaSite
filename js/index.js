const menuBtn = document.querySelector('.menu-btn');
const separator = document.querySelector('.separator');

menuBtn.addEventListener('click', () => {
  separator.scrollIntoView({behavior: "smooth"});
});

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.style.position = 'fixed';
    header.style.top = '0';
  } else {
    header.style.position = 'static';
  }
});

let popup = document.getElementById('mypopup'),
    popupToggle = document.getElementById('myBtn'),
    popupClose = document.getElementById('myBtnClose');

    popupToggle.onclick = function(){
      popup.style.display="block";
      popupToggle.style.display = "none";
      popupClose.style.display = "block";
    }

    popupClose.onclick = function(){
      popup.style.display="none";
      popupToggle.style.display = "block";
      popupClose.style.display = "none";
    }

const list = document.querySelector('.filterList'),
      items = document.querySelectorAll('.card')

      function filter(){
        const goodsBlock = document.querySelector('.goodsBlock');
          list.addEventListener('click', event =>{
              const targetId = event.target.dataset.id
              console.log(targetId)

              switch(targetId) {
                case 'all':
                  getItems('card');
                  goodsBlock.style.justifyContent = 'space-between';
                  break
                case 'meat':
                  getItems(targetId)
                  goodsBlock.style.justifyContent = 'baseline';
                  break
                case 'vegan':
                  getItems(targetId);
                  goodsBlock.style.justifyContent = 'space-around';
                  break
              }
          })
      }
      filter()

      function getItems(className) {
        items.forEach(item => {
          if (item.classList.contains(className)) {
              item.style.display = 'block'
          } else{
            item.style.display = 'none'
          }
        })
      }