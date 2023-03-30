import { Injectable, Inject, InjectionToken } from '@angular/core';


export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});




@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getAll(): string[] {
      let items: string[] = []
      let keys: string[] = Object.keys(this.storage)
      let i = keys.length
      
      while (i--) {
        if(this.storage.getItem(keys[i]))  {
          items.push(this.storage.getItem(keys[i]) as string) 
        }
        
      }

      return items
  }


  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
