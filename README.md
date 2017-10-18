# Docker Rails Kit

## Usage

### Initialize

```
$ git clone -b <branch> git@github.com:aocha/docker-rails-kit.git <app_name>
$ cd <app_name>
$ script/setup
```

### Start development

```
$ script/start
```

### Spring server

```
$ docker-compose run --rm spring bash
root@123456789:/myapp# rails db:migrate
```
