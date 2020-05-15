const root = document.querySelector('.root')

export let currentValue = {}

const setCloseFormEvent = (mathedcElements,behindElement) => {
    const behindElem = document.querySelector(behindElement);
    behindElem.addEventListener('click', (e) => {
      if (!e.target.matches(mathedcElements)) {
        behindElem.parentNode.removeChild(behindElem);
      }
    });
};

export const popItem = (actionBtn,targetItem,exitTarget,itemToPop,) => {
    actionBtn.addEventListener('click',() => {
    root.insertAdjacentHTML("afterbegin", itemToPop)
    setCloseFormEvent(`${targetItem}, ${targetItem} *`,exitTarget);
    root.querySelector(targetItem).addEventListener('keypress',(e)=> {
        if (e.key === 'Enter') {
            
            currentValue.query =  document.querySelector('#query').value
            console.log(currentValue.query)
            root.querySelector(targetItem).innerHTML = ""
        }
    })
    

    
})}