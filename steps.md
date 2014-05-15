1. Create folder
2. Create the initialization file `npm init`
3. Install express and jade `npm install --save express@3.4.4 jade`
4. Initialize the git repo `git init`
5. Create the .gitignore file and add .idea and node_module to it so they're not tracked
6. Add the rest of the files with `git add -A`
7. Create the first commit `git commit -m 'initial commit'`
8. Install bower globally `npm install bower -g`
9. Create the server and public server
10. Create the the .bowerrc file in the root of the project folder
11. Create a line indicating where the dependencies will be saved like so:
    `{
        "directory": "public/vendor"
    }
12. Then we install the dependencies like so:
    `bower install jquery --save`
    `bower install toaster --save`
    `bower install angular angular-resource angular-route --save`

13. Create a views directory and the index.html inside it
15. Then we install nodemon to have a nicer way to start and debug the server
    `npm install nodemon -g`
16. Now run the server with nodemon by typing
    `nodemon server.js`
17. Install stylus
    `npm install stylus --save`
18. Let's create a layout file so we create the 'includes' direcotry inside the 'server' directory
19. Then we create the layout.jade file inside of the 'server/includes' directory
20. Create the scripts jade file 'scripts.jade' to put all of the script tags
21. Now let's create our main angular file as app.js in 'public/app/app.js'
22. Create a partials directory inside of the server/views directory
23. Install mongoose `npm install mongoose --save`
