import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {

    token: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmM2YWIwM2YxYmIxNTc3ZjU0NzgyZjkwNzk4ZjNlMCIsInN1YiI6IjY0YzhiZjJjODlmNzQ5MDEwN2MwYmQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nvly8B-YGbk5qE9HSYBFtQGaNZYmkzNbsSnya1qyQE8';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({ headers: req.headers.append('Authorization', this.token) })
        return next.handle(modifiedReq);
    }

}