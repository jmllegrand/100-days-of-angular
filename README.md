
### Day 1

Concepts used :

- setup configuration files

- Decorator
-- @NgModule to create a root component
-- @Component to create component



```
   this is a command or a js code
```

### Day 2

### Day 2 - section 2
#### Component
- Define properties at Component level

```
export class AppComponent {
    title: string = "List of wines";
    wine: string = "Chateau Latour 2015"
}
```

- Use the properties in the template using interpolation (one way databinding)

```
    template: `
        <h1>{{title}}</h1>
        <h2>details for {{wine}}</h2>
    `
```

- Convert properties into class
```
export class Wine {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
```

- instanciate classes
```
    wine: Wine = new Wine(1, "Chateau Latour 2015");
```

- use template strings feature in ES2015

- use Two-Way Binding (only when necessary)
```
 <input [(ngModel)]="wine.name" placeholder="name">
```
Prerequisites

import the FormsModule package
```
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
```
