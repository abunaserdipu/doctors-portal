import React from 'react';

const FooterDetail = ({footer}) => {
    return (
        <div className="col-md-3">
            <h5 style={{ color: "#1CC7C1" }}>{footer.title}</h5>
            <p className="text-secondary">{footer.name}</p>
        </div>
    );
};

export default FooterDetail;