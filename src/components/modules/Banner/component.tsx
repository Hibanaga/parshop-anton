import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleBanner: FunctionComponent<Props>  = ({ imageUrl, headline  }) => {
    return (
        <StyledComponent className="module-banner">
            {imageUrl &&  (
                <Image
                    fill
                    objectFit="cover"
                    src={imageUrl}
                    alt={headline}
                />
            )}

            <div className="inner-banner-content">
                <h1 className="headline">{'— '}{headline}</h1>
            </div>
        </StyledComponent>
    );
};

export default ModuleBanner;
