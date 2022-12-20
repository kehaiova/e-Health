import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {VReferencesRecipesBindingModel} from "../../models/v-references-recipes-binding-model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-references-card-e-recipes-table',
  templateUrl: './references-card-e-recipes-table.component.html',
  styleUrls: ['./references-card-e-recipes-table.component.css']
})
export class ReferencesCardERecipesTableComponent implements OnChanges{

  @Input() dataSource: null | VReferencesRecipesBindingModel[] = [];

  constructor() {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string [] = ['position', 'personNames', 'patientIdentificator', 'prescriptionBookletNo', 'medicalProductCode', 'mcbCode', 'protocolNo', 'outpationListNo', 'date']

  recipesDetails: MatTableDataSource<VReferencesRecipesBindingModel> = {} as MatTableDataSource<VReferencesRecipesBindingModel>;
  ngOnChanges() {
    this.recipesDetails = new MatTableDataSource<VReferencesRecipesBindingModel>();
    this.recipesDetails.data = this.dataSource ?? [];
    this.recipesDetails.paginator = this.paginator;
  }

}
