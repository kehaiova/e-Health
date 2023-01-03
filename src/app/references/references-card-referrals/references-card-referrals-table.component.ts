import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {VReferencesReferralsBindingModel} from "../../models/v-references-referrals-binding-model";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-references-card-referrals-table',
  templateUrl: './references-card-referrals-table.component.html',
  styleUrls: ['./references-card-referrals-table.component.css']
})
export class ReferencesCardReferralsTableComponent implements OnChanges {


  @Input() dataSource: null | VReferencesReferralsBindingModel[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
  }


  displayedColumns: string [] = ['position', 'patientIdentificator', 'patientNames', 'doctorNames', 'diagnosis', 'sentFor', 'date']

  referralDetails: MatTableDataSource<VReferencesReferralsBindingModel> = {} as MatTableDataSource<VReferencesReferralsBindingModel>;

  ngOnChanges() {
    this.referralDetails = new MatTableDataSource<VReferencesReferralsBindingModel>();
    this.referralDetails.data = this.dataSource ?? [];
    this.referralDetails.paginator = this.paginator
  }

}
