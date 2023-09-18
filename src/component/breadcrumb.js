import React from 'react';

const Breadcrumb = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <p>{title} </p>
        </React.Fragment>
    );
}

export default Breadcrumb;
