// import { combineEpics, ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import { catchError, switchMap, map, of } from 'rxjs/Observable';
// import { ajax } from 'rxjs/ajax';
// import {
//     FETCH_WHISKIES,
//     fetchWhiskiesFailure,
//     fetchWhiskiesSuccess
// } from "../action";
// const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';



// const fetchWiskiesEpic = (action$) =>
//     action$.pipe(
//         ofType(FETCH_WHISKIES),
//         switchMap(() =>
//             ajax
//                 .getJSON(url).pipe(
//                     map(data => data.results),
//                     map(wiskies => wiskies.map(whisky => ({
//                         id: whisky.id,
//                         title: whisky.title,
//                         imageUrl: whisky.img_url
//                     })))
//                     , map(whiskies => whiskies.filter(whisky => !!whisky.imageUrl))
//                     , map(whiskies => fetchWhiskiesSuccess(whiskies))
//                     , catchError(error => Observable.of(fetchWhiskiesFailure(error.message))))
//         )
//     )

// export const rootEpic = combineEpics(fetchWiskiesEpic);