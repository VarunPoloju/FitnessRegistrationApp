import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/register.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public userId: number;
  userDetail: User;

  constructor(private ar: ActivatedRoute, private api: ApiService) {

  }

  ngOnInit(): void {
    this.ar.params.subscribe(val => {
      this.userId = val['id'];
      this.fetchUserDetails(this.userId)
    })
  }

  fetchUserDetails(userId: number) {
    this.api.getRegisteredUserId(userId).subscribe(res => {
      this.userDetail = res;
      // console.log(this.userDetail)
    })
  }
}
