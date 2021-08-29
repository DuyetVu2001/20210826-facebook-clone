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
