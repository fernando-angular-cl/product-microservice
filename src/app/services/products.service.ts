import { inject, Injectable, signal, computed } from '@angular/core';
import { Products } from '../interfaces/req-responseProduct';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State{
  products: Products[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

private http = inject( HttpClient );

  #state = signal<State>({
    products: [],
    loading: false
  });


  public products = computed( () => this.#state().products );
  public loading = computed( () => this.#state().loading );



  constructor() {
    this.#state.set({ products: [], loading: true }); // Inicia la carga

    this.http
    .get<Products[]>('http://192.168.100.14:8090/api/products')
    .pipe(delay(500))
    .subscribe({
      next: (res) => {
        this.#state.set({
          products: res,
          loading: false,
        });
      },
      error: (err) => {
        console.error('Error al cargar los productos:', err);
        this.#state.set({
          products: [],
          loading: false,
        });
      },
    });


   }
}
