import { Component  } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
    author = new FormControl<string>('')
    title = new FormControl<string>('')
    content = new FormControl<string>('')


}
