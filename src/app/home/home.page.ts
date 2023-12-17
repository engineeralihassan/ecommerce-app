import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  query: any = {"business_id":76, "platform":"app", "super_category_id":"1413"}; 
  isLoading!: boolean;
  data:any;
  items:any[]=[];
  products:any[]=[1,2,3,4,5,6,7,8,9,10,10111,111111,2334556];
  activeChipIndex = 0;
  constructor(private apiService: DataService, private loadingController: LoadingController) {}

  ngOnInit() {
    this.search();
  }
  setActiveChip(index: number) {
    this.activeChipIndex = index;
  }
  async search(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });

    try {
      await loading.present();
      this.apiService.searchData(this.query).subscribe((results) => {
        console.log("The data is", results);
        this.data=results;
        results.categories.map((ele:any)=>{
          if(ele.items.length){
            this.items=[...this.items,...ele.items]
          }
             
        })
        console.log("The Items are::",this.items);
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      })
      .add(() => {
        loading.dismiss();
        this.isLoading = false;
      });
    } catch (error) {
      console.error('Error displaying loading:', error);
    }
  }


}
