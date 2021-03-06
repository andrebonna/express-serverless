import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Head extends Component {
    render() {
        const { title, metas, cssBundle } = this.props;
        
        const metaTags = [
            <link key='cssBundle' rel='stylesheet' type='text/css' href={cssBundle} />,
            <meta key='charset' charSet='UTF-8' />,
            <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1' />
        ];
        for (const key in metas) {
            metaTags.push(<meta key={key} name={key} content={metas[key]} />);
        }

        return (
            <head>
                {[<title key='title'>{title}</title>].concat(metaTags)}
            </head>
        );
    }
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
    cssBundle: PropTypes.string.isRequired, 
    metas: PropTypes.object
};

Head.defaultProps = {
    metas: {}
};