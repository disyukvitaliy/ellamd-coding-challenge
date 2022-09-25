### Intro

This project is full stack engineer challenge for the EllaMD company.

### Development

1. Set SSH key on Github using instructions here: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
2. Clone the project

```sh
git clone git@github.com:disyukvitaliy/ellamd-coding-challenge.git
cd ellamd-coding-challenge
```

3. Make sure you have docker-compose installed or install it https://docs.docker.com/compose/install/

```sh
docker-compose -v
```

4. Build the project

```sh
docker-compose build
```

5. Set up database and fill it with test data

```sh
docker-compose run --rm backend rake db:create db:migrate db:seed
```

6. Run specs

```sh
docker-compose run --rm backend rspec
```

7. Start the project

```sh
docker-compose up
```
