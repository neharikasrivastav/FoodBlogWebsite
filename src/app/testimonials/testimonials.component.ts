import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   testimonials=[
     {
           'id':1,'name':'Christin','description':'Thanks so much for creating such a great community here. I feel like I have my very own secret blog world where people understand what I’m going through- and it’s pretty cool. I also love that I don’t feel like “just a number” here. The information and forums are invaluable and definitely something I plan on investing in for years to come. Thanks for everything.','url':'assets/images/r1.jpg'
   },
   {
    'id':2,'name':'Carolina','description':'Just wanted to let you guys know that ever since I landed on this blog, I’ve been so encouraged to follow my dreams. You have made it so easy for me to feel confident that I can learn all of this stuff and more.','url':'assets/images/r2.jpg'
},
{
  'id':3,'name':'Steven','description':'I am new to food blogging and had no idea where to start or what to do. Being a regular visitor of this blog,has given me what I need as far as information and also inspiration to start my own blog, which has been my dream. The recipes are absolutely invaluable! Thank you FOODIES CORNER!','url':'assets/images/r5.jpg'
}

  ]
}
