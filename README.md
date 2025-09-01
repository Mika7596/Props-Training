# React Props Training

This repo consists on exercises to practice passing data via props in React.

## Iteration 1 | Component: IdCard
Create and render an IdCard component with 6 props:

- lastName: A string

- firstName: A string

- gender: A string, 'male' or 'female'

- height: A number

- birth: A date

- picture: A string

## Iteration 2 | Component: Greetings
Create a Greetings component with 2 props:

- lang: A string that can have values: "de", "en", "es" or "fr"
- children: A text
The component should display a greeting text in the chosen language.

## Iteration 3 | Component: Random
Create a Random component with 2 props:

- min: A number
- max: A number
The component should display a random integer in the range between the min and the max number.

## Iteration 4 | Component: BoxColor
Create a BoxColor component that displays a rectangle with a background color based on props. For this, it's necessary to add inline styles.

The component should take 3 props:

- r: A number between 0 and 255 representing the amount of red
- g: A number between 0 and 255 representing the amount of green
- b: A number between 0 and 255 representing the amount of blue

## Iteration 5 | Component: CreditCard
Create a CreditCard component that displays a rectangle with the information coming from the props.

The component should take 8 props:

- type: A string that can be "Visa" or "Master Card"
- number: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
- expirationMonth: A number that represents the month, between 1 and 12
- expirationYear: A number that represents the year
- bank: A string that represents the name of the bank
- owner: A string that represents the name of the owner
- bgColor: A string for the background color of the card
- color: A string for the text color of the card

## Iteration 6 | Component: Rating
Create a Rating component that displays 5 stars. Depending on the value received, some stars should be empty (☆), and some should be filled (★).

The component should take 1 prop:

- children: A number between 0 and 5. The value can be a floating-point number. If the number received is 3.9, the component should display 4 stars.

## Iteration 7 | Component: DriverCard
Create a DriverCard component that displays a rectangle with content based on the received props.

The component should take 4 props:

- name: A string
- rating: A number between 0 and 5. The value can be a floating point number.
- img: A string
- car: An object with properties model and licensePlate.
