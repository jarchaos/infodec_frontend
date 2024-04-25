import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent {
  form: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.form = this.fb.group({
      country_id: ['', Validators.required],
      // otros campos según el modelo
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.dataService.postQueryHistory(this.form.value).subscribe(response => {
        console.log('Query History Saved', response);
      }, error => {
        console.error('Error:', error);
      });
    }
  }
}
