import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // the css-class we want to apply to the host component
  // we want each app-article be on its own row
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 10);
  }

  // because of href in template, else event gets propageted to parent, 
  // which will tell the browser to open an empty link (refresh page)
  voteUp(): boolean {
    // this will break encapsulation (we access directly the internal property!)
    // Law of Demeter (a given object should assume as little as 
    // possible about the structure of properties of other objects!)
    // BAD: this.article.votes += 1;
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }


}
