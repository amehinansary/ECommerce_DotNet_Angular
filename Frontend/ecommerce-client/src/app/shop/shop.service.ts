import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination, Pagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  baseUrl = environment.apiUrl;
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  pagination = new Pagination() as any; // ! or as any to solve type null isn't assignable to ..
  shopParams = new ShopParams();
  productCache = new Map();

  constructor(private http: HttpClient) { }

  getProducts(useCache: boolean) {
    if (useCache === false)
      this.productCache = new Map();

    if (this.productCache.size > 0 && useCache === true) {
      if (this.productCache.has(Object.values(this.shopParams).join('-'))) {
        this.pagination.data = this.productCache.get(Object.values(this.shopParams).join('-'));
        return of(this.pagination);
      }
    }

    let params = new HttpParams();

    if (this.shopParams.brandId !== 0)
      params = params.append('brandId', this.shopParams.brandId.toString())

    if (this.shopParams.typeId !== 0)
      params = params.append('typeId', this.shopParams.typeId.toString())

    if (this.shopParams.search)
      params = params.append('search', this.shopParams.search)

    params = params.append('sort', this.shopParams.sort);
    params = params.append('pageIndex', this.shopParams.pageNumber.toString());
    params = params.append('pageSize', this.shopParams.pageSize.toString());
    // we observing a response and dis gonna give us the http response instead of
    // the body of the resp which is getting done automatically if we use this.http.get<>();
    // 'cause observe this response we need to project our data into actual response
    // we need to extract the body out of this
    return this.http.get<IPagination>(this.baseUrl + 'products/getproducts', { observe: 'response', params })
      .pipe(// this pipe is a wrapper around any rxjs operator that we want to use
        // allow us to chain multiple rxjs operators together to manipulate or do
        // something with the observable as it comes back in
        map(response => {
          this.productCache.set(Object.values(this.shopParams).join('-'), response.body!.data);
          this.pagination = response.body;
          return this.pagination;
        })
      )
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }

  getShopParams() {
    return this.shopParams;
  }

  getProduct(id: number | null) {
    let product: IProduct | undefined = {
      id: 0,
      name: '',
      description: '',
      pictureUrl: '',
      price: 0,
      productBrand: '',
      productType: ''
    };

    this.productCache.forEach((products: IProduct[]) => {
      console.log(product);
      product = products.find(p => p.id === id);
    })

    if (product) return of(product);

    return this.http.get<IProduct>(this.baseUrl + 'products/getproduct/' + id);
  }

  getBrands() {
    if (this.brands.length > 0) {
      return of(this.brands);
    }
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands').pipe(
      map(response => {
        this.brands = response;
        return response;
      })
    )
  }

  getTypes() {
    if (this.types.length > 0) {
      return of(this.types);
    }
    return this.http.get<IType[]>(this.baseUrl + 'products/types').pipe(
      map(response => {
        this.types = response;
        return response;
      })
    )
  }
}
