#301 to www
This is a the Git repo of a wee 301-to-www Docker image meant to work in combination with Jason Wilder's [nginx-proxy](https://registry.hub.docker.com/u/jwilder/nginx-proxy/) Docker container to help setting up 301 redirects from your non-www to www-based domain URLs.

This is generally done to [normalize URLs](http://en.wikipedia.org/wiki/URL_normalization) for the SEO purposes.

##Usage

Run nginx-proxy

```
$ docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock jwilder/nginx-proxy
```

Then start proxied containers with `VIRTUAL_HOST` environment variable having www-based URL

```
$ docker run -e VIRTUAL_HOST=www.example.org  ...
...
$ docker run -e VIRTUAL_HOST=www.acme.com  ...
```

Run 301-to-www container specifying non-www-based host names that requre a 301 redirect

```
$ docker run -d -e VIRTUAL_HOST=example.org,acme.com alexeym/301-to-www
```

