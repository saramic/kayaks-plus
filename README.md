# kayaks-plus

[kayaksplus.store](https://kayaksplus.store)

[![Netlify Status
](https://api.netlify.com/api/v1/badges/c3b284fd-2198-4f4c-85a0-42b112574d16/deploy-status)
](https://app.netlify.com/sites/kayaksplus/deploys)

[![CI
](https://github.com/saramic/kayaks-plus/actions/workflows/ci.yml/badge.svg)
](https://github.com/saramic/kayaks-plus/actions/workflows/ci.yml)

## TL;DR

```sh
make
just
just dev
```

## TODO

### Bugs

- [ ] navbar needs to close after page change in mobile view
- [ ] sort out window.localStorage in tests, is there a react cache better way
      or some kind of context?
- [ ] show no table if there are no cart itmes
- [ ] cart should be full width

### Work

- [ ] MVP of an email powered store
- [ ] align with historic store
  - vampire kayaks
    - https://web.archive.org/web/20131012003901/http://www.kayaksplus.com/vampire.htm
  - vampire 2010 and 2010S
    - https://web.archive.org/web/20120324120246/http://www.kayaksplus.com/Vampire2010and2010S.htm
  - store
    - https://web.archive.org/web/20120324103412/http://www.kayaksplus.com/store.htm
  - about us
    - https://web.archive.org/web/20120321040119/http://www.flexegate.com.au/cgi-bin/kpstore/aboutus.html?id=bKtoEoTa
  - customer service
    - https://web.archive.org/web/20120321045548/http://www.flexegate.com.au/cgi-bin/kpstore/customerservice.html?id=bKtoEoTa
  - logo
  - vampire logo
- [ ] align with other falcon paddle distributors
  - https://jcpolo.co.nz/collections/paddles/products/falcon-polo-paddle
  - https://falconpaddles.eu/falcon-one/
- [ ] review size of generated assets
- [ ] nextjs and web crawling
- [ ] analytics
- [ ] email form
- [ ] basic cart
  - [x] cart total
  - [x] cart add item
  - [ ] cart remove
  - [ ] cart item de-duplication
  - [ ] deal with corrupt cart
  - [ ] cart change quantity
  - [ ] display items in cart
  - [ ] display product is in cart
- [ ] tests
  - [x] cypress E2E
  - [ ] cypress running on github - follow
        https://docs.cypress.io/guides/continuous-integration/github-actions
  - [x] vitest or similar unit testing
  - [x] run vitest on github actions
- [x] linting
