const ratings = document.querySelectorAll('.buttons button')
const submitBtn = document.getElementById('submit')

let currentRating = 0

ratings.forEach(button => {
  button.addEventListener('click', () => {
    ratings.forEach(button => button.classList.remove('active'))
    button.classList.add('active')
    currentRating = button.id
  })
})

submitBtn.addEventListener('click', () => {
  document.getElementById('rating-screen').style.display = 'none'
  document.getElementById('current-rating').innerHTML = currentRating
  document.getElementById('thank-you-screen').style.display = 'flex'
  console.log('Thank you for rating ' + currentRating)
})
