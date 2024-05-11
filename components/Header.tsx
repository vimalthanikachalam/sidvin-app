import React from 'react';

interface IHeaderProps {}

const HeaderInnerView = (props: IHeaderProps) => {
  return (
    <div className='header__main__wrapper'>
        <div className="header__innerWrapper">
            <div className="header__logoWrapper">
                <img src="/logo.png" alt="logo" />
            </div>
        </div>
    </div>
  )
}

export const Header = React.memo(HeaderInnerView);