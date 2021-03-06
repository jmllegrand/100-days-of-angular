
### Day 1

Concepts used :

- setup configuration files

- Decorator
-- @NgModule to create a root component
-- @Component to create component


### Day 2

### Day 2 - Basic Component
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
Prerequisite: import the FormsModule package
```
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
``

### Day 2 - Master Details

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

### Day 2 - Parent Children components
- Communicate from parent to children components
-- Using property as Input
```
export class WineDetailComponent {
    @Input() wine: Wine;
}
```
We annotate the wine property with the @Input decorator imported


-- Using target property during declaration
```
        <wine-detail [wine]="selectedWine"></wine-detail>
```
the wine property is the target of a property binding — it's in square brackets to the left of the (=).

#### practice
Any component added must be declared in the root module

```
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, WineDetailComponent],
    bootstrap: [AppComponent]
})
```
The declarations array contains the list of all components, pipes, and directives that we created and that belong in our application's module.

### Day 2 - Services
#### Naming convention
Directive selectors (like my-app), component filenames follow the dash-case convention (kebab-case).

#### Good practice
- To create a service, use Injectable Services

This is really used when a service has dependencies
```
@Injectable()
export class WineService {
    getWines = () => {
        return WINES;
    }
}
```
- Create const that are exported to use Mock data
```
export const WINES: Wine[] = [
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

- Use a service by injection
-- We add a constructor that defined the property
```
    constructor(private wineService: WineService) { }
```


-- We add the services as part of the providers
```
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, WineDetailComponent],
    providers: [WineService],
    bootstrap: [AppComponent]
})
```
The providers array tells Angular to create a fresh instance of the WineService when it creates a new AppComponent.
The AppComponent can use that service to get heroes and so can every child component of its component tree.

-- To use the service in a component, prefer the component lifecycle hooks
Instead of this ...
```
    wines : Wine[] =  this.wineService.getWines();
```

do this
```
    ngOnInit(): void {
        this.wines = this.wineService.getWines();
    }
```
- Adopt an asynchronous approach using Promises
Using synchronous
```
    getWines(): Wine[] {
        return WINES;
    }
```

Using asynchronous with Promises
```
    getWines(): Wine[] {
        return WINES;
    }
```

### Day 2 - Routing
#### About static routes
- Configure routes
Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser address bar.
Routes are an array of route definitions.

```
const routes: Routes = [
    {
        path: "wines",
        component: WinesComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "",
        redirectTo:"/dashboard",
        pathMatch: "full"
    }

];
```

- Define the RouterOutlet
RouterOutlet is one of the directives provided by the RouterModule. The router displays each component immediately below the <router-outlet> as the user
navigate through the application.
```
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/wines">Wines</a>
            <router-outlet></router-outlet>
        </nav>
```
The anchor tag router-outlet added to the template which, when clicked, triggers navigation to the appropriate component.

#### About parameterized routes
- Configure parameterized route
```
    {
        path: "detail/:id",
        component: WineDetailComponent
    }
```
The colon (:) in the path indicates that :id is a placeholder to be filled with a specific hero id when navigating to the HeroDetailComponent

- Impact on the component
There is ZERO impact on the template. The big changes are driven by how we get the wine.
-- Before, we would receive the wine in a parent component property binding
-- Now, the component will take the id parameter from the params observable in the ActivatedRoute and derived the corresponding object
```
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            console.log('JM - params', params);
            console.log('JM - this.route', this.route.toString());
            let id= +params['id'];
            this.wineService.getWine(id)
                .then((wine) => this.wine = wine)
        })
    }
```

- Enable back navigator using location
```
    goBack(): void  {
        this.location.back();
    }
```

- Link parameter array
we're binding to an expression containing a link parameters array.
The array has two elements, the path of the destination route and a route parameter set
to the value of the current wine's id
```
            <a *ngFor="let wine of wines" [routerLink]="['/detail', wine.id]" class="col-1-4">
                <div class="module wine">
                    <h4>{{wine.name}}</h4>
                </div>
            </a>
```

Note that The two array items align with the path and :id token in the parameterized hero detail route definition


- Create a routing module (with routes defined in a const)
```

const routes: Routes = [
    {
        path: "wines",
        component: WinesComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "",
        redirectTo:"/dashboard",
        pathMatch: "full"
    },
    {
        path: "detail/:id",
        component: WineDetailComponent
    }

];
export class AppRoutingModule {}

```

The mmodule is declared in the application module
```
@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, WineDetailComponent, WinesComponent, DashboardComponent],
    providers: [WineService],
    bootstrap: [AppComponent],
})

```







