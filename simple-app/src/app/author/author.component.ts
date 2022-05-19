import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../models/Author';
import { AuthorService } from '../author.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  author : Author = {
    name: '',
    id: 0,
    bio: '',
  };

  constructor(private route: ActivatedRoute, private authorService : AuthorService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name') || '';
    this.authorService.getAuthor(name).subscribe(value => {
      this.author = value[0];
    });
  }

}
