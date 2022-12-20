import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {RecipesBindingModel} from "../../models/recipes-binding-model";
import {RecipeDrugsBindingModel} from "../../models/recipe-drugs-binding-model";
import {SavingService} from "../../services/saving.service";
import {NgEventBus} from "ng-event-bus";

@Component({
  selector: 'app-e-recipes-save-card-table',
  templateUrl: './e-recipes-save-card-table.component.html',
  styleUrls: ['./e-recipes-save-card-table.component.css']
})
export class ERecipesSaveCardTableComponent implements OnInit, AfterViewInit {

  constructor(private eventBus: NgEventBus, public savingService: SavingService) {
  }

  displayedColumns: string [] = ['position', 'mcbCode', 'drugProductName',];

  dataSource!: MatTableDataSource<RecipeDrugsBindingModel>;

  ngOnInit(): void {
    this.eventBus.on('sendPrescriptions').subscribe((meta) => {
      this.dataSource = new MatTableDataSource(meta.data);
    })
  }

  ngAfterViewInit() {
  }

}
