const Details = (props) => {
    const { carShow } = props;
    return (
        <div>
            <div className="modal fade" id="detailsModal" tabIndex={-1} aria-labelledby="detailsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase fw-bold text-primary" id="detailsModalLabel">{carShow.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <img src={carShow.src} className="w-100" alt="" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary rounded-0">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;