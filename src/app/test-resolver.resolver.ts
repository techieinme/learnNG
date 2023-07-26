import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { UserService } from './service/user.service';
import { User } from './service/User';
import { Observable, catchError, of } from 'rxjs';

export const testResolverResolver: ResolveFn<any> = (route, state,userListService:UserService = inject(UserService)):Observable<{}> => {
  return userListService.getData().pipe(
    catchError((err) => {
      return of('No data' + err);
    })
  )
}