import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    moduleId: module.id,
    templateUrl: "cartDetail.component.html",
    // template:`<div><h3 class="bg-info p-a-1">Cart Detail Component</h3></div>`
})
export class CartDetailComponent {

    constructor(public cart: Cart) { }
}
