import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {

  tablets:any[] = [
    {
      imgUrl:"../../assets\images\appleTablet.jpg",
      brand: "Apple",
      model: "iPad Pro",
      display_size: "11 Inches",
      storage: "128GB",
      processor: "Apple M2 chip",
      battery: "10090 mAh",
      price: " ₹79,900"
    },
    {
      imgUrl:"../../assets/images/sam_tablet.jpg",
      brand: "Samsung",
      model: "Galaxy Tab S7",
      display_size: "11 inches",
      storage: "128GB",
      processor: "Snapdragon 865+",
      battery: "8000 mAh",
      price: "$649"
    },
    {
      imgUrl:"../../assets/images/micro_tablet.jpg",
      brand: "Microsoft",
      model: "Surface Pro 7",
      display_size: "12.3 inches",
      storage: "256GB",
      processor: "Intel Core i5",
      battery: "45.8 Wh",
      price: "$899"
    },
    {
      imgUrl:"../../assets/images/amazon_tablet.jpg",
      brand: "Amazon",
      model: "Fire HD 10",
      display_size: "10.1 inches",
      storage: "64GB",
      processor: "Octa-core",
      battery: "6300 mAh",
      price: "$149"
    },
    {
      imgUrl:"../../assets/images/huawei_tablet.jpg",
      brand: "Huawei",
      model: "MatePad Pro",
      display_size: "10.8 inches",
      storage: "128GB",
      processor: "Kirin 990",
      battery: "7250 mAh",
      price: "$599"
    },
    {
      imgUrl:"../../assets/images/apply_tablet.jpg",
      brand: "Apple",
      model: "iPad Pro",
      display_size: "12.9 inches",
      storage: "256GB",
      processor: "Apple M1",
      battery: "10090 mAh",
      price: "$1099"
    },
    {
      imgUrl:"../../assets/images/sam_tablet.jpg",
      brand: "Samsung",
      model: "Galaxy Tab S7",
      display_size: "11 inches",
      storage: "128GB",
      processor: "Snapdragon 865+",
      battery: "8000 mAh",
      price: "$649"
    },
    {
      imgUrl:"../../assets/images/micro_tablet.jpg",
      brand: "Microsoft",
      model: "Surface Pro 7",
      display_size: "12.3 inches",
      storage: "256GB",
      processor: "Intel Core i5",
      battery: "45.8 Wh",
      price: "$899"
    },
    {
      imgUrl:"../../assets/images/amazon_tablet.jpg",
      brand: "Amazon",
      model: "Fire HD 10",
      display_size: "10.1 inches",
      storage: "64GB",
      processor: "Octa-core",
      battery: "6300 mAh",
      price: "$149"
    },
    {
      imgUrl:"../../assets/images/huawei_tablet.jpg",
      brand: "Huawei",
      model: "MatePad Pro",
      display_size: "10.8 inches",
      storage: "128GB",
      processor: "Kirin 990",
      battery: "7250 mAh",
      price: "$599"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}