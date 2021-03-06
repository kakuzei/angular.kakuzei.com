import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core';
import { TAG_RESOURCE } from 'src/environments/config';
import { ITag } from '../interfaces';

@Injectable()
export class TagService extends ApiService {
  getTags(): Observable<ITag[]> {
    return this.get<ITag[]>(TAG_RESOURCE);
  }

  getTag(id: string): Observable<ITag> {
    return this.get<ITag>(TAG_RESOURCE, id);
  }
}
