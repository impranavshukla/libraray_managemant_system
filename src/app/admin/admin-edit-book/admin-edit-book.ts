import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-book',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './admin-edit-book.html',
  styleUrls: ['./admin-edit-book.css']
})
export class AdminEditBook implements OnInit{

book:any={};

constructor(
private route:ActivatedRoute,
private service:AdminService,
private router:Router
){}

ngOnInit(){

const { id } = this.route.snapshot.params;


this.service.getBookById(id).subscribe((data:any)=>{
this.book=data;
})

}

updateBook(){

this.service.updateBook(this.book.id,this.book)
.subscribe(()=>{

alert("Book Updated Successfully ✅");

this.router.navigate(['/admin/home']);

})

}

}