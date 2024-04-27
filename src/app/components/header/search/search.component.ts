import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedOption: string = "Explore";
  searchOptions: string[] = ["Explore", "Find Hosts", "Find Travelers"];


  ngOnInit(): void {
    this.resetDefaultOption();
  }


  doSelectOption(option: string): void {
    this.selectedOption = option;
  }

  resetDefaultOption(): void {
    this.selectedOption = "Explore";
  }

  dropdownList(): void {
    let list = document.getElementById('search-options')
    list!.classList.toggle('open')
  }
}
