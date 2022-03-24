import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientDataInterface } from '../interfaces/cient_data.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  api_response: any = [];
  users_data: any = [];
  userform: FormGroup;
  id_form_editable: boolean = false;
  selected_item_index: number = 0;
  constructor(private api_service: ApiService, private f_builder: FormBuilder) {
    this.userform = this.f_builder.group({
      name: '',
      phone: '',
      website: '',
    });
  }

  ngOnInit(): void {
    this.api_service.getDataList().subscribe((response) => {
      this.api_response = response;
      this.api_response.map((element: any) => {
        const data = {
          name: element.name,
          phone: element.phone,
          website: element.website,
        };
        this.users_data.push(data);
      });
    });
  }

  addUserData() {
    if (
      this.userform.value.name !== '' &&
      this.userform.value.phone !== '' &&
      this.userform.value.website !== ''
    ) {
      this.users_data.push(this.userform.value);
      this.userform.reset();
    }
  }

  onEditRowData(item_object: any, item_index: number) {
    this.id_form_editable = true;
    this.selected_item_index = item_index;
    this.userform.patchValue({
      name: item_object.name,
      phone: item_object.phone,
      website: item_object.website,
    });
  }

  onUpdateRowData() {
    this.users_data.splice(this.selected_item_index, 1);
    this.users_data.splice(this.selected_item_index, 0, this.userform.value);
  }

  deleteElement(item_index: number) {
    this.users_data.splice(item_index, 1);
  }

  resetForm() {
    this.id_form_editable = false;
    this.userform.reset();
  }
}
