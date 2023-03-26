import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quickitemform',
  templateUrl: './quickitemform.component.html',
  styleUrls: ['./quickitemform.component.scss']
})
export class QuickitemformComponent {
  @Input() handleClose!: () => void;
  
  quickItemForm = new FormGroup({
    "itemTitle": new FormControl("", Validators.required),
    "type": new FormControl("", Validators.required),
    "businessUnit": new FormControl("", Validators.required),
    "dueDate": new FormControl("", Validators.required),
    "priority": new FormControl("", Validators.required),
    "objective": new FormControl("", Validators.required),
    "jobTitle": new FormControl("", Validators.required),
    "spanish": new FormControl(false, Validators.required),
    "chinese": new FormControl(false, Validators.required),
    "arabic": new FormControl(false, Validators.required),
  });
  
  onSubmit() {
    console.log("Quick Item Form submitted");
    console.log(this.quickItemForm);
  }
}
