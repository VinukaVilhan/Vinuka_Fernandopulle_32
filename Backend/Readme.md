Instructions to set up the Backend of the application

1. Install express.js using npm i install express
2. Install nodemon using npm i install nodemon (Nodemon detects the changes happening in the file directory and auto-restarts the app)
3. npm init -y should be inserted in the command to create the package.json file. 
4. The json file should be added with ("type":"module") inorder to use the import syntax.
5. The "scripts" have been changed inorder to "start" and "dev". (npm run dev is used to run the backend server). 
6. config.json file should be created to include the HTTP route details. (The Port number and the mongoDB conncetion link is included in here.)
7. index.js file would be created inorder to handle the operations done in the backend (connecting, middleware, etc.)
8. Connecting to mongoDB and using mongoose with mongoDB inorder to communicate between the appp and the database. 
(Inorder to use mongoose npm i mongoose should be run beforehand) 
9. Folder named models is created in order to store the Schema definitions. bookModel.jsx is for the books and the userModel.jsx is for the users.
10. Routes folder is created in order to handle the express routes. in the recipeRoute.js file (POST,GET,PUT,DELETE) methods relevant to recipes will be handled here.
11. CORS policy is set to authorize resource sharing between third parties.



