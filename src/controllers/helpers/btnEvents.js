import { getWeather } from '../../db/apiCalls'
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

export const popItemToRetrieveData = (actionBtn,targetItem,exitTarget,itemToPop,) => {
    actionBtn.addEventListener('click',() => {
    root.insertAdjacentHTML("afterbegin", itemToPop)
    setCloseFormEvent(`${targetItem}, ${targetItem} *`,exitTarget);
    root.querySelector(targetItem).addEventListener('keypress',(e)=> {
        if (e.key === 'Enter') {
           
          // Retrieve Data
          currentValue.query =  document.querySelector('#query').value
          

          const weatherAppContainer = document.querySelector('.weather-app-container')
          
          getWeather(currentValue.query,'metric',weatherAppContainer)
          
          root.removeChild(root.querySelector(exitTarget))
        }
    })
    

    
})}