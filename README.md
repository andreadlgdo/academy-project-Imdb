# imdb-andrea

## Wiki
[Historias de usuario](https://github.com/andreadlgdo/academy-project-Imdb/wiki)

## Project setup

1. Clone this project 
2. Download and open docker
3. In this project and open terminal: docker-compose up --build
4. Open: http://localhost:8081/

By default, it is set to output a certain image and not the API images, due to the number of requests available to make to this API. If you want to get the images from the API, you just have to comment line 200 and uncomment line 201 of the following file:

* https://github.com/andreadlgdo/academy-project-Imdb/blob/master/src/store/index.ts

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
