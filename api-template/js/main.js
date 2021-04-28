document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  const inputVal = document.querySelector('input').value.replace(/\s/g, "") 
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+inputVal

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let randomDrink = Math.floor(Math.random() * 5)
        let drinkName = data.drinks[randomDrink].strDrink
        let drinkThumb = data.drinks[randomDrink].strDrinkThumb
        let drinkInst = data.drinks[randomDrink].strInstructions
        
        document.querySelector('h2').innerText = drinkName
        document.querySelector('img').src = drinkThumb
        document.querySelector('h3').innerText = drinkInst})
        // document.querySelector('h4').innerText = drinkIngredients
        // document.querySelector('h5').innerText = drinkIngredients2

      // }),
      // .then data => {
      //   let drinkIngredients = data.drinks[0].strIngredient1
      //   let drinkIngredients2 = data.drinks[0].strIngredient2
      //   let drinkIngredients2 = data.drinks[0].strIngredient3
      //   let drinkIngredients2 = data.drinks[0].strIngredient4
      //   let drinkIngredients2 = data.drinks[0].strIngredient5

      // }
      .catch(err => {
          console.log(`error ${err}`)
      })
}
