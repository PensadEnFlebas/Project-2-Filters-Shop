export function getShoppingBasket() {
  const main = document.querySelector('main')

  const shoppingBasketContainer = document.createElement('div')
  shoppingBasketContainer.classList.add('shoppingBasketContainer')

  const shoppingBasketImg = document.createElement('img')
  shoppingBasketImg.classList.add('shoppingBasketImg')
  shoppingBasketImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1738576629/pngtree-orange-glossy-circular-shopping-cart-icon-against-a-picture-image_13280897_cifh1r.png'
  )
  shoppingBasketImg.setAttribute('alt', `Shopping Bag icon`)
  shoppingBasketImg.setAttribute('loading', 'lazy')

  const shopNumContainer = document.createElement('div')
  shopNumContainer.classList.add('shopNumContainer')

  const pShopNum = document.createElement('p')
  pShopNum.classList.add('pShopNum')
  pShopNum.textContent = 0

  shopNumContainer.appendChild(pShopNum)
  shoppingBasketContainer.append(shoppingBasketImg, shopNumContainer)
  main.appendChild(shoppingBasketContainer)

  //? AQUÍ PONDRÍAMOS LA LÓGICA AL PULSAR SOBRE EL ICONO DE LA CESTA DE COMPRA: QUE NOS TRASLADARA A DICHA SECCIÓN (NO CREADA EN ESTE PROYECTO) PARA CONFIRMAR O MODIFICAR NUESTRA COMPRA, ETC.
  //? LO HE CAMBIADO PARA QUE SIMPLEMENTE SE RESETEE EL .pShopNum
  shoppingBasketContainer.addEventListener('click', () => {
    pShopNum.textContent = 0
  })
}
