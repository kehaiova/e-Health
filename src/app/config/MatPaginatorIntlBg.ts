import {Injectable} from "@angular/core";
import {MatPaginatorIntl} from "@angular/material/paginator";

@Injectable({
  providedIn: "root"
})
export class MatPaginatorIntlBg extends MatPaginatorIntl {

  override itemsPerPageLabel = "Елементи на страница: ";

  override nextPageLabel = "Следваща страница";

  override previousPageLabel = "Предишна страница";

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 от ' + length;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return startIndex + 1 + ' - ' + endIndex + ' от ' + length;
  };

}
