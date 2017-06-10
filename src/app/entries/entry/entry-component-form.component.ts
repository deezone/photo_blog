import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-entry-component-form",
    templateUrl: "entry-component-form.component.html"
})

export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string}>();
    onSubmit() {
        let comment = { name: this.name, comment: this.comment };
        this.onCommentAdded.emit(comment);
    }
}
