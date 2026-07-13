import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ standalone: false,
  selector: 'app-company-form',
  templateUrl: './company-form.html',
  styleUrls: ['./company-form.css']
})
export class CompanyFormComponent {
  id?: string;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || undefined;
    });
  }
}

