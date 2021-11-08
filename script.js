'use strict'

const themeSwitch = document.querySelector('#dark-mode')
const root = document.querySelector(':root')
const whiteTxt = document.querySelectorAll('.white-txt')
const blueTxt = document.querySelectorAll('.blue-txt')
const gridItems = document.querySelectorAll('.grid-item')
const instagramGrid = document.querySelector('.hero__grid-item-inst')
const bg = document.querySelector('.bg-grey')
themeSwitch.checked = false

themeSwitch.addEventListener('change', (e) => {
   if (e.target.matches('#dark-mode')) {
      root.classList.toggle('html-dark')
      bg.classList.toggle('bg-dark')
      for (let i = 0; i < whiteTxt.length; i++)
         whiteTxt[i].classList.toggle('white')
      for (let i = 0; i < blueTxt.length; i++)
         blueTxt[i].classList.toggle('desat-blue')
      for (let i = 0; i < gridItems.length; i++)
         gridItems[i].classList.toggle('grid-item-dark')
      instagramGrid.classList.toggle('hero__grid-item-inst-dark')
   }
})
