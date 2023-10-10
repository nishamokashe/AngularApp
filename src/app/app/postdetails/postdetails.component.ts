import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private postservice: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    //let id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.postservice.getpostById(2).subscribe(res => {
        console.log('post deatils', res);
      })
    })
   
  }
}
