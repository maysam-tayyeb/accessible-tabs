# Accessible Tabs Web App

This is a WCAG 2 compliant web project developed using React, where users can interact with multiple tab groups in a single page while they retain their state after page refresh and back/forward navigation.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

!! Please bear in mind that on of the test cases causes to throw an intentional error to check TabsContext behavior !!  

## Analysis
***design decisions***

I used:
- create-react-app to create this project
- the content and plain css from given w3.org website for demonstration
- Context API to keep the challenge done simply solve the problem and not over engineered
- local storage to store current selected tabs

Hence, I developed tab components fully compliant with the WAI ARIA specification.
