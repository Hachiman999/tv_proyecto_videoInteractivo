# Back_end
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
> En este trabajo se creo una api REST basica uniendo deno con mongodb

### Lista de programas necesarios
| Nombres | URL |
| ------ | ------ |
|Chocolatey| [https://chocolatey.org/](https://chocolatey.org/install)|
| DENO | [https://deno.land/](https://deno.land/)|
| GitHub | [https://desktop.github.com/](https://desktop.github.com/) |
|Visual Code|[https://code.visualstudio.com/](https://code.visualstudio.com/) |

### Peticiones HTTP que resive el servidor
 - GET => "/us"   esta devuelve todos los usuarios   
 - POST  => "/cu" esta permite crear un usuario
### Comandos para iniciar el servidor
```sh
$ cd tvback
$ deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.4.0/denon.ts
$ denon start
```
