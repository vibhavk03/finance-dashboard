# Finance Dashboard

Live url --> https://finance-dashboard-rho-woad.vercel.app/<br>

![](screenshots/dashboard.JPG)

- This is a finance dashboard which shows multiple interactive graphs (pie chart, bar chart, line chart, scatter plot).<br>
- These graphs show a multitude of information related to revenue, expenses, profit, product list and order history (based on dummy data)<br>
- There is a predictions tab on the top left side of the app which takes you to revenue vs month graph. <br>
- This predictions tab also displays a liner regression line.<br>
- Clicking on the 'SHOW PREDICTED REVENUE FOR NEXT YEAR' displays the predicted regression line of the revenue for next year.<br>

![](screenshots/prediction.JPG)

## Tech Stack

- implemented Typescript for this project<br>
- Express.js is used for building the backend API of this project with Node.js<br>
- for database configuration, this project uses MongoDB<br>
- used react-router-dom to manage routing of requests<br>
- simplified state management using reduxjs/toolkit<br>
- applied Material Design styles using using Material UI<br>
- recharts package is used to create graphs shown on the dashboard<br>
- used regression-js module to get simple linear regression line for prediction of revenue<br>
