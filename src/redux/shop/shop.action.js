import { ShopActionTypes } from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const FetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const FetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const FetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const AsynFetchCollectionsStart = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection("collections");

        dispatch(FetchCollectionsStart());

        collectionRef
            .get()
            .then(async snapshot => {
                const collectionMaps = convertCollectionsSnapshotToMap(snapshot);
                dispatch(FetchCollectionsSuccess(collectionMaps));
        }).catch((error) => dispatch(FetchCollectionsFailure(error.message)));
    }
};
