import {configureStore } from '@reduxjs/toolkit';

import {searchApi} from '../Services/SearchApi';

export default configureStore({
    reducer:{
        [searchApi.reducerPath]:searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        searchApi.middleware,
    )
})