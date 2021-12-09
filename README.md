# Projet 12 - SportSee

User profile page which tracks the number of sessions performed as well as the number of calories burned.

## `Technologies`

- SCSS
- React
- React-Router-Dom
- Fetch
- Prop-types

## `Prerequisites`

- NodeJs
- VisualStudio Code
- Docker Desktop : [https://www.docker.com/get-started]

## `Installation Back-End`

- API installation :

Get the clone in this link https://github.com/GregDigital/P9-front-end-dashboard.git
Clone it on your computer.
The yarn command will allow you to install the dependencies.
The yarn dev command will allow you to run the micro API.

- Starting the project

The docker image build --no-cache -t micro-api . command will allow you to build your image.
The docker container run --name micro-api -p 4000:4000 -dt micro-api yarn command will allow you to create your Docker container and run your image on port 4000.
The docker container stop micro-api command will allow you to stop your micro-api.
The docker container rm micro-api command will allow you to delete your micro-api container.

- Vscode and container remotes

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the Remote Development extension. Once you have this extension installed, just click on the Reopen in Container button.

Once in the container, run the yarn dev command.

## `Installation Front-End`

Get the clone in this link https://github.com/GregDigital/P9-front-end-dashboard.git

Clone it on your computer.

- 1 Install Yarn packages :
  `yarn`
- 2 Run the project SportSee :
  `yarn start`
