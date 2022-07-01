const Item = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-auto">
                    <button type="button"
                            className="btn btn-primary btn-sm"
                            onClick={props.onRemove(props.task.id)}>-
                    </button>
                </div>
                <div className="col">{props.task.content}</div>
            </div>
            <hr/>
        </>
    );
}

export default Item;