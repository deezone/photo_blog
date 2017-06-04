import { Component } from "@angular/core";

@Component({
    selector: "app-entry-component-form",
    templateUrl: "entry-component-form.component.html"
})

export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
}
