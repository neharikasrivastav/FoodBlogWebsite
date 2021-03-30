import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  media=[
    {
          'id':1,'name':'All time favourite food blog to checkout trending recipes','description':'Thanks so much for creating such a great community here. I feel like I have my very own secret blog world where people understand what I’m going through- and it’s pretty cool. I also love that I don’t feel like “just a number” here. The information and forums are invaluable and definitely something I plan on investing in for years to come. Thanks for everything.','url':'assets/images/ht.jpg'},
  {
   'id':2,'name':'People are referring to FOODIES CORNER recipes during Lockdown.','description':'Just wanted to let you guys know that ever since I landed on this blog, I’ve been so encouraged to follow my dreams. You have made it so easy for me to feel confident that I can learn all of this stuff and more.','url':'assets/images/toi.jpg'
},
{
  'id':3,'name':'All healthy recipes ranging from appetizers to home-made goodies.Awarded best blog for year 2021','description':'Just wanted to let you guys know that ever since I landed on this blog, I’ve been so encouraged to follow my dreams. You have made it so easy for me to feel confident that I can learn all of this stuff and more.','url':'assets/images/hindu.png'
},


 ]
}
