
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

- Instanciate classes
```
    wine: Wine = new Wine(1, "Chateau Latour 2015");
```

- Use template strings feature in ES2015

- Use Two-Way Binding (only when necessary)
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
``

### Day 2 - section 3

- Create an typed array
```
const WINES : Wine[] = [
    new Wine(0, "Chateau Ausone"),
    new Wine(1, "Chateau Figeac"),
    new Wine(2, "Chateau Canon"),
    new Wine(3, "Chateau Fleur Cardinale"),
    new Wine(4, "Chateau Grand Corbin-Despagne"),
    new Wine(5, "Chateau Petrus"),
    new Wine(6, "Chateau Eglise Clinet"),
    new Wine(7, "Chateau L'Evangile"),
];
```

- Display list items in the template using *ngFor
```
        <ul class="wines">
            <li *ngFor="let wine of wines">
                <span class="badge">{{wine.id}}</span>
                {{wine.name}}
            </li>
        </ul>
```

- Style the component using the styles property on the @Component decorator
```
 styles: [ `
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .wines {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
       `
 ]
```

Note : When we assign styles to a component they are scoped to that specific component.
Our styles will only apply to our AppComponent and won't "leak" to the outer HTML.

- Use the click event (to select an item in a list)
```
            <li *ngFor="let wine of wines" (click)="onSelect(wine)">
                <span class="badge">{{wine.id}}</span>
                {{wine.name}}
            </li>
```

- Implement an event handler
```
    onSelect = (wine: Wine) => {
        this.selectedWine = wine;
    }
```

- Display conditionnally a block using *ngIf
```
 <div *ngIf="selectedWine">
 </div>


- Style a block conditionnally using property binding
```
            <li *ngFor="let wine of wines"  [class.selected]="wine === selectedWine" (click)="onSelect(wine)">
                <span class="badge">{{wine.id}}</span>
                {{wine.name}}
            </li>
```
This says that “apply the selected class if the heroes match, remove it if they don’t”.



