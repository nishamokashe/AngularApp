import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  name="li;dlfs;ld"
  objLaptop : any[] = [
    {
      imgUrl:"../../assets\images\Dell.jpg",
      brand: "Dell",
      model: "	Vostro 3420",
      processor: " Intel Core i3-1115G4",
      ram: "8 GB",
      storage: "512GB NVMe SSD",
      graphics: "Integrated",
      display_size: "14 Inches",
      display_resolution: "3840 x 2400",
      weight: "2.8 lbs",
      price: "₹37,490"
    },
    {
      imgUrl:"../../assets\images\HP.jpg",     
      brand: "HP",
      model: "14-dv2015TU",
      processor: "Intel Core i7",
      ram: "16GB SDRAM",
      storage: "512 GB PCIe NVMe M.2 SSD",
      graphics: "Intel UHD Graphics",
      display_size: "	35.6 cm (14)diagonal",
      display_resolution: "1280 X 720; max-1920 X 1080",
      weight: "4.2 lbs",
      price: "₹76,999"
    },
    {
      imgUrl:"../../assets\images\lenovo.jpg",           
      brand: "Lenovo",
      model: "IdeaPad 3 15IAU7",
      processor: "12th Gen Intel i5-1235U",
      ram: "16GB DDR4-3200 (Max)",
      storage: "512GB SSD",
      graphics: "Integrated Intel Iris Xe Graphics",
      display_size: "15.6",
      display_resolution: "1920x1080",
      weight: "1.63 kg Light",
      price: "₹58,990"
    },
    {
      imgUrl:"../../assets/images/apple.jpg",           
      brand: "Apple",
      model: "MacBook Air",
      processor: "Apple M1",
      ram: "8GB Unified Memory",
      storage: "256GB SSD",
      graphics: "Apple M1 GPU",
      display_size: "15.3 inch",
      display_resolution: "2560 x 1600",
      weight: "3.0 lbs",
      price: "₹1,54,900"
    },
    {
      imgUrl:"../../assets/images/asus.jpg",
      brand: "ASUS",
      model: "ASUS Vivobook 16X (2023)",
      processor: " Intel Core i5-1235U",
      ram: "16 GB",
      storage: "512GB NVMe SSD",
      graphics: "NVIDIA GeForce RTX 2050",
      display_size: "16 Inche",
      display_resolution: "1900 x 1200 Pixels",
      weight: "1 kg 800 g",
      price: " ₹86,990"
    },
  ]
  constructor() { 
    
  }

  ngOnInit() {
  }

}