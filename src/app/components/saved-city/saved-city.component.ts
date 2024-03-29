import { Component,OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SavedCityService } from 'src/app/service/saved-city.service';

@Component({
  selector: 'app-saved-city',
  templateUrl: './saved-city.component.html',
  styleUrls: ['./saved-city.component.css']
})
export class SavedCityComponent implements OnInit {

  data: any
  constructor(private savedcity: SavedCityService, private toast: ToastrService) { }

  City(){
    this.savedcity.getCity().subscribe((res:any)=>{
      this.data = res
    })
  }

  ngOnInit(): void{
    this.City()
  }

}
