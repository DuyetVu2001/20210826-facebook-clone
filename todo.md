```mermaid
graph TD;
    screens --> home
    screens --> personal

    home --> LeftMenu
    home --> MainContent
    home --> RightMenu

    personal --> Header

    watch --> Header
    watch --> LeftMenu

    components --> Navbar
    components --> LeftMenu
    components --> Posts
```

> 1. Lazy load
> 1. Image upload (firebase)
> 1. Fix type (Component.types.ts)
> 1. Fix icon
> 1. Animation dropdown Menu

> bug:
>
> - when switch user, personal page has cache
> - when zoom and scroll --> not fetch more data
