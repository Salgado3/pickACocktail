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

        let drinkIngredients = data.drinks[randomDrink].strIngredient1 +" "+ data.drinks[randomDrink].strMeasure1
        let drinkIngredients2 = data.drinks[randomDrink].strIngredient2 +" "+ data.drinks[randomDrink].strMeasure2
        let drinkIngredients3 = data.drinks[randomDrink].strIngredient3 +" "+ data.drinks[randomDrink].strMeasure3
        let drinkIngredients4 = data.drinks[randomDrink].strIngredient4 +" "+ data.drinks[randomDrink].strMeasure4
        let drinkIngredients5 = data.drinks[randomDrink].strIngredient5 +" "+ data.drinks[randomDrink].strMeasure5
        
        document.querySelector('h2').innerText = drinkName
        document.querySelector('img').src = drinkThumb
        // document.querySelector('h3').innerText = drinkInst
        document.querySelector('h4').innerText = drinkIngredients
        document.querySelector('h5').innerText = drinkIngredients2

      })
    
      .catch(err => {
          console.log(`error ${err}`)
      })
}
