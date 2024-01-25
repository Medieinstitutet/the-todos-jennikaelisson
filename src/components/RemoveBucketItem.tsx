interface IRemoveBucketItem {
    RemoveItem: () => void;
}

export const RemoveBucketItem = (props: IRemoveBucketItem) => {
    const handleRemove = () => {
        props.RemoveItem();
    }
    return (
        <>
            <button onClick={handleRemove}>Remove item</button>
        </>
    )
}